import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@layout/Layout";
import BlogServices from "@services/BlogServices";
import CommentServices from "@services/CommentServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import { FiUser, FiFolder, FiMessageCircle, FiSearch, FiHome } from "react-icons/fi";

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
    saveInfo: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  // Load saved info from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem("comment_name");
      const savedEmail = localStorage.getItem("comment_email");
      const savedWebsite = localStorage.getItem("comment_website");
      const savedInfo = localStorage.getItem("comment_save_info") === "true";

      if (savedInfo && (savedName || savedEmail)) {
        setCommentForm((prev) => ({
          ...prev,
          name: savedName || "",
          email: savedEmail || "",
          website: savedWebsite || "",
          saveInfo: true,
        }));
      }
    }
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const data = await BlogServices.getBlogBySlug(slug);
        setBlog(data);
        
        // Fetch recent blogs for sidebar
        const recent = await BlogServices.getShowingBlogs();
        // Get first 5 blogs, excluding current blog
        const filtered = recent.filter(b => b.slug !== slug).slice(0, 5);
        setRecentBlogs(filtered);

        // Fetch comments for this blog
        if (data._id) {
          try {
            setCommentLoading(true);
            const commentsData = await CommentServices.getCommentsByBlogId(data._id);
            setComments(commentsData || []);
          } catch (err) {
            console.error("Error fetching comments:", err);
          } finally {
            setCommentLoading(false);
          }
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj;
    if (typeof textObj === "object" && textObj !== null) {
      return textObj.en || textObj[Object.keys(textObj)[0]] || "";
    }
    return "";
  };

  const getTitle = (titleObj) => {
    if (typeof titleObj === "string") return titleObj;
    if (typeof titleObj === "object" && titleObj !== null) {
      return titleObj.en || titleObj[Object.keys(titleObj)[0]] || "";
    }
    return "";
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    
    if (!blog?._id) return;

    // Clear previous messages
    setSubmitMessage({ type: "", text: "" });

    // Validate required fields
    if (!commentForm.name.trim() || !commentForm.email.trim() || !commentForm.comment.trim()) {
      setSubmitMessage({ type: "error", text: "Please fill in all required fields (Name, Email, and Comment)." });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(commentForm.email)) {
      setSubmitMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    try {
      setSubmitting(true);
      setSubmitMessage({ type: "", text: "" });
      
      await CommentServices.addComment({
        blogId: blog._id,
        name: commentForm.name.trim(),
        email: commentForm.email.trim(),
        website: commentForm.website.trim() || "",
        comment: commentForm.comment.trim(),
      });

      // Save to localStorage if saveInfo is checked
      if (commentForm.saveInfo && typeof window !== "undefined") {
        localStorage.setItem("comment_name", commentForm.name.trim());
        localStorage.setItem("comment_email", commentForm.email.trim());
        localStorage.setItem("comment_website", commentForm.website.trim() || "");
        localStorage.setItem("comment_save_info", "true");
      } else if (typeof window !== "undefined") {
        localStorage.removeItem("comment_name");
        localStorage.removeItem("comment_email");
        localStorage.removeItem("comment_website");
        localStorage.removeItem("comment_save_info");
      }

      // Reset form
      setCommentForm({
        name: commentForm.saveInfo ? commentForm.name : "",
        email: commentForm.saveInfo ? commentForm.email : "",
        website: commentForm.saveInfo ? commentForm.website : "",
        comment: "",
        saveInfo: commentForm.saveInfo,
      });

      // Refresh comments dynamically
      const commentsData = await CommentServices.getCommentsByBlogId(blog._id);
      setComments(commentsData || []);
      
      setSubmitMessage({ type: "success", text: "Comment submitted successfully! Your comment is now visible." });
      
      // Scroll to comments section
      setTimeout(() => {
        const commentsSection = document.getElementById("comments-section");
        if (commentsSection) {
          commentsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    } catch (err) {
      console.error("Error submitting comment:", err);
      setSubmitMessage({ 
        type: "error", 
        text: err.response?.data?.message || "Failed to submit comment. Please try again." 
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCommentChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCommentForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (loading) {
    return (
      <Layout title="Loading..." description="Loading blog post">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 py-12">
          <CMSkeleton count={10} height={20} loading={true} />
        </div>
      </Layout>
    );
  }

  if (error || !blog) {
    return (
      <Layout title="Blog Not Found" description="Blog post not found">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">{error || "The blog post you're looking for doesn't exist."}</p>
          <Link href="/blog">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              Back to Blog
            </button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={getText(blog.title)} description={getText(blog.description)}>
      <style jsx global>{`
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .blog-content h2:before {
          content: "⚡";
          font-size: 1.25rem;
          color: #6b7280;
        }
        .blog-content h2:nth-of-type(2n):before {
          color: #f97316;
        }
        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          margin-bottom: 1rem;
          line-height: 1.75;
        }
        .blog-content a {
          color: #2563eb;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #1d4ed8;
        }
        .blog-content ul,
        .blog-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }
        .blog-content strong {
          font-weight: 700;
          color: #111827;
        }
      `}</style>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 transition-colors">
              <FiHome className="inline mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            {blog.category && (
              <>
                <Link href={`/blog?category=${blog.category}`} className="hover:text-red-600 transition-colors capitalize">
                  {blog.category}
                </Link>
                <span className="mx-2">/</span>
              </>
            )}
            <span className="text-gray-900 line-clamp-1">{getTitle(blog.title)}</span>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="bg-white py-8 lg:py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              {blog.image && (
                <div className="relative w-full h-[250px] lg:h-[300px] mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={blog.image}
                    alt={getText(blog.title)}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
                {blog.author && (
                  <div className="flex items-center gap-2">
                    <FiUser className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                )}
                {(blog.category || blog.tags?.length > 0) && (
                  <div className="flex items-center gap-2">
                    <FiFolder className="w-4 h-4" />
                    <span className="flex flex-wrap gap-2">
                      {blog.category && (
                        <Link href={`/blog?category=${blog.category}`} className="hover:text-red-600 transition-colors capitalize">
                          {blog.category}
                        </Link>
                      )}
                      {blog.tags && blog.tags.length > 0 && blog.tags.slice(0, 2).map((tag, index) => (
                        <React.Fragment key={index}>
                          {blog.category && index === 0 && <span>, </span>}
                          {index > 0 && <span>, </span>}
                          <Link href={`/blog?tag=${tag}`} className="hover:text-red-600 transition-colors capitalize">
                            {tag}
                          </Link>
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2 ml-auto">
                  <FiMessageCircle className="w-4 h-4" />
                  <span>{comments.length}</span>
                </div>
              </div>

              {/* Blog Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {getTitle(blog.title)}
              </h1>

              {/* Blog Content */}
              {blog.description && (
                <div className="mb-8">
                  <p className="text-lg text-gray-700 leading-8">
                    {getText(blog.description).split('.').map((sentence, index) => {
                      if (index === 0 && sentence.trim()) {
                        return <strong key={index}>{sentence.trim()}. </strong>;
                      }
                      return sentence.trim() ? `${sentence.trim()}. ` : '';
                    })}
                  </p>
                </div>
              )}

              {blog.content && (
                <div className="prose prose-lg max-w-none mb-8">
                  <div
                    className="text-gray-700 leading-8 blog-content"
                    dangerouslySetInnerHTML={{
                      __html: typeof blog.content === "string" 
                        ? blog.content 
                        : getText(blog.content),
                    }}
                  />
                </div>
              )}

              {/* Comments Section */}
              <div id="comments-section" className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Leave a Reply
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Your email address will not be published. Required fields are marked *
                </p>

                {/* Success/Error Messages */}
                {submitMessage.text && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitMessage.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <p className="text-sm font-medium">{submitMessage.text}</p>
                  </div>
                )}

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Enter Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={commentForm.name}
                        onChange={handleCommentChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Enter Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={commentForm.email}
                        onChange={handleCommentChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={commentForm.website}
                      onChange={handleCommentChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={commentForm.saveInfo}
                      onChange={handleCommentChange}
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                    />
                    <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-700">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Comment <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={commentForm.comment}
                      onChange={handleCommentChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-vertical"
                      placeholder="Your Comment"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Posting...
                      </span>
                    ) : (
                      "Post Comment"
                    )}
                  </button>
                </form>

                {/* Existing Comments */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Comments ({comments.length})
                  </h3>
                  {commentLoading ? (
                    <div className="text-center py-8">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                      <p className="mt-2 text-gray-500">Loading comments...</p>
                    </div>
                  ) : comments.length > 0 ? (
                    <div className="space-y-6">
                      {comments.map((comment) => (
                        <div
                          key={comment._id}
                          className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                              {comment.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                                {comment.website && (
                                  <a
                                    href={comment.website.startsWith("http") ? comment.website : `https://${comment.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700 text-sm break-all"
                                  >
                                    {comment.website}
                                  </a>
                                )}
                                <span className="text-gray-500 text-sm">
                                  {formatDate(comment.createdAt)}
                                </span>
                              </div>
                              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{comment.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Search */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
                  <form onSubmit={handleSearch} className="flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                    >
                      <FiSearch className="w-5 h-5" />
                    </button>
                  </form>
                </div>

                {/* Recent Posts */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <ul className="space-y-3">
                    {recentBlogs.length > 0 ? (
                      recentBlogs.map((recentBlog) => (
                        <li key={recentBlog._id}>
                          <Link
                            href={`/blog/${recentBlog.slug}`}
                            className="text-gray-700 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                          >
                            {getTitle(recentBlog.title)}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 text-sm">No recent posts</li>
                    )}
                  </ul>
                </div>

                {/* Recent Comments */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Comments</h3>
                  {comments.length > 0 ? (
                    <ul className="space-y-3">
                      {comments.slice(0, 5).map((comment) => (
                        <li key={comment._id} className="text-sm">
                          <p className="text-gray-700 line-clamp-2">
                            <span className="font-semibold text-gray-900">{comment.name}:</span>{" "}
                            {comment.comment}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm">No comments to show.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;

