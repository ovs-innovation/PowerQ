import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@layout/Layout";
import ProductServices from "@services/ProductServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { showingTranslateValue } = useUtilsFunction();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await ProductServices.getShowingProducts();
        setProducts(data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getTitle = (titleObj) => {
    if (typeof titleObj === "string") return titleObj;
    if (typeof titleObj === "object" && titleObj !== null) {
      return showingTranslateValue(titleObj) || titleObj.en || titleObj[Object.keys(titleObj)[0]] || "";
    }
    return "";
  };

  const getDescription = (descObj) => {
    if (typeof descObj === "string") return descObj;
    if (typeof descObj === "object" && descObj !== null) {
      return showingTranslateValue(descObj) || descObj.en || descObj[Object.keys(descObj)[0]] || "";
    }
    return "";
  };

  return (
    <Layout title="Products" description="PowerQ Test & Tag Melbourne Products">
      {/* Hero Section */}
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Fire-Safety-Training-for-Oil-Gas-960x640-1.jpg.bv.webp"
          alt="Products"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-24 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Products
          </h1>
          <div className="w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-12 lg:py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white">
                  <CMSkeleton count={1} height={200} loading={true} />
                  <div className="mt-6">
                    <CMSkeleton count={1} height={24} loading={true} />
                    <CMSkeleton count={1} height={16} loading={true} />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">Error loading products: {error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {products.map((product) => {
                const productSlug = product.variants && product.variants.length > 0 
                  ? product.variants[0].slug 
                  : product.slug;
                const productImage = product.image && product.image.length > 0 
                  ? product.image[0] 
                  : null;
                
                return (
                  <div
                    key={product._id}
                    className="bg-white group shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
                  >
                    <Link href={`/product/${productSlug}`}>
                      <div className="relative w-full h-[200px] lg:h-[250px] overflow-hidden">
                        {productImage ? (
                          <Image
                            src={productImage}
                            alt={getTitle(product.title)}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-6">
                      <Link href={`/product/${productSlug}`}>
                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                          {getTitle(product.title)}
                        </h3>
                      </Link>
                      {product.description && (
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                          {getDescription(product.description)}
                        </p>
                      )}
                      {product.highlights && (
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-2 font-medium">Highlights:</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {Array.isArray(product.highlights) 
                              ? product.highlights.slice(0, 3).map((highlight, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-red-600 mr-2">•</span>
                                    <span>{typeof highlight === 'string' ? highlight : getDescription(highlight)}</span>
                                  </li>
                                ))
                              : typeof product.highlights === 'object' 
                                ? Object.values(product.highlights).slice(0, 3).map((highlight, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <span className="text-red-600 mr-2">•</span>
                                      <span>{typeof highlight === 'string' ? highlight : getDescription(highlight)}</span>
                                    </li>
                                  ))
                                : null
                            }
                          </ul>
                        </div>
                      )}
                      <Link
                        href={`/product/${productSlug}`}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300"
                      >
                        View Details <span className="ml-1">»</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;

