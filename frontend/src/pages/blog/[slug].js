import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@layout/Layout";
import BlogServices from "@services/BlogServices";
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
                  <span>0</span>
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
                  <p className="text-gray-500 text-sm">No comments to show.</p>
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

