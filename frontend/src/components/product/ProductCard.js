import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

//internal import

import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import ImageWithFallback from "@components/common/ImageWithFallBack";
import { handleLogEvent } from "src/lib/analytics";

const ProductCard = ({ product, attributes }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { globalSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const router = useRouter();

  const currency = globalSetting?.default_currency || "₹";

  return (
    <>
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={currency}
          attributes={attributes}
        />
      )}

      <div className="group box-border overflow-hidden flex rounded-lg shadow-md hover:shadow-lg pe-0 flex-col items-center bg-white relative transition-all duration-300 transform hover:-translate-y-1">
        <div
          onClick={() => {
            //set variant slug if product has variants
            if (product.variants && product.variants.length > 0) {
              router.push(`/product/${product.variants[0].slug}`);
            } else {
              router.push(`/product/${product.slug}`);
            }
            handleLogEvent(
              "product",
              `navigated to ${showingTranslateValue(
                product?.title
              )} product page`
            );
          }}
          className="relative flex justify-center cursor-pointer pt-3 w-full h-32 sm:h-48 md:h-52 lg:h-56"
        >
          <div className="relative w-full h-full p-1">
            {product.image[0] ? (
              <ImageWithFallback src={product.image[0]} alt="product" />
            ) : (
              <Image
                src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                fill
                style={{
                  objectFit: "contain",
                }}
                sizes="100%"
                alt="product"
                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
              />
            )}
          </div>
        </div>
        <div className="w-full px-4 lg:px-5 pb-5 overflow-hidden">
          <div className="relative mb-2">
            <span className="text-gray-400 font-medium text-sm d-block mb-2">
              {product.unit}
            </span>
            <h2 className="text-heading mb-0 block text-base font-medium text-gray-700 leading-tight text-center">
              <span className="break-words">
                {/* set variant title if product has variants */}
                {(product.variants &&
                  product.variants.length > 0 &&
                  showingTranslateValue(product.variants[0].title)) ||
                  showingTranslateValue(product.title)}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false });
