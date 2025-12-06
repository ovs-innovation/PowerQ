import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { IoChevronForwardSharp } from "react-icons/io5";

//internal import
import CategoryServices from "@services/CategoryServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";

const FeatureCategory = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  const {
    data,
    error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await CategoryServices.getShowingCategory(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  // console.log("category", data);

  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
    setIsLoading(!isLoading);
  };

  // Color variations for icon backgrounds
  const iconBgColors = [
    "bg-blue-50",
    "bg-red-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-purple-50",
    "bg-pink-50",
  ];
  const iconColors = [
    "text-blue-600",
    "text-red-600",
    "text-green-600",
    "text-yellow-600",
    "text-purple-600",
    "text-pink-600",
  ];

  // Check if data exists and has categories
  const categories = data && Array.isArray(data) && data[0]?.children ? data[0].children : [];

  return (
    <>
      {loading ? (
        <CMSkeleton count={10} height={20} error={error} loading={loading} />
      ) : error || !categories || categories.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Categories are currently unavailable.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => {
            const bgColorIndex = i % iconBgColors.length;
            const iconBgColor = iconBgColors[bgColorIndex];
            const iconColor = iconColors[bgColorIndex];
            
            return (
              <div
                key={category._id || i + 1}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#EF4036]/30 group"
              >
                <div className={`w-36 h-36 lg:w-40 lg:h-40 mb-4 flex items-center justify-center ${iconBgColor} rounded-full p-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  {category.icon ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={category?.icon}
                        alt={showingTranslateValue(category?.name)}
                        width={150}
                        height={150}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className={`w-20 h-20 ${iconColor} flex items-center justify-center`}>
                      <IoChevronForwardSharp className="w-16 h-16" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 min-h-[56px] flex items-center justify-center group-hover:text-[#EF4036] transition-colors duration-300">
                  {showingTranslateValue(category?.name)}
                </h3>
                <button
                  onClick={() =>
                    handleCategoryClick(
                      category._id,
                      showingTranslateValue(category?.name)
                    )
                  }
                  className="w-full bg-[#EF4036] text-white py-2.5 px-4 rounded-lg hover:bg-[#C53030] transition-all duration-300 font-medium transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FeatureCategory;
