import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import {
  FiChevronRight,
  FiZap,
  FiArrowDown,
  FiArrowUp,
  FiThermometer,
  FiTarget,
} from "react-icons/fi";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { FaInstagram } from "react-icons/fa";

import Tags from "@components/common/Tags";
import Layout from "@layout/Layout";
import Loading from "@components/preloader/Loading";
import ProductCard from "@components/product/ProductCard";
import VariantList from "@components/variants/VariantList";
import { SidebarContext } from "@context/SidebarContext";
import AttributeServices from "@services/AttributeServices";
import ProductServices from "@services/ProductServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Discount from "@components/common/Discount";
import ImageCarousel from "@components/carousel/ImageCarousel";
import MainModal from "@components/modal/MainModal";
import InputArea from "@components/form/InputArea";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import LeadServices from "@services/LeadServices";
import { sanitizeProduct, sanitizeData } from "@utils/dataSanitizer";
import { coolGray } from "tailwindcss/colors";

const ProductScreen = ({ product, attributes, relatedProducts }) => {
  const router = useRouter();

  const { lang, showingTranslateValue } = useUtilsFunction();

  const { isLoading, setIsLoading } = useContext(SidebarContext);

  // react hook
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");
  const [discount, setDiscount] = useState(0);
  const [selectVariant, setSelectVariant] = useState({});
  const [isReadMore, setIsReadMore] = useState(true);
  const [selectVa, setSelectVa] = useState({});
  const [variantTitle, setVariantTitle] = useState([]);
  const [variants, setVariants] = useState([]);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitEnquiry = async (data) => {
    try {
      const leadData = {
        ...data,
        product: {
          _id: product._id,
          title: product.title,
          sku: selectVariant?.sku || product.sku,
          images: product.image,
          prices: product.prices,
          category: product.category,
          description: product.description,
          variant: selectVariant,
        },
      };
      await LeadServices.addLead(leadData);
      setEnquiryModalOpen(false);
      setWelcomeModalOpen(false);
      toast.success("Thank you for your enquiry! We will contact you soon.");
      reset();
    } catch (error) {
      console.log("error", error);
      toast.error(
        error?.response?.data?.message || "Failed to submit enquiry."
      );
    }
  };

  useEffect(() => {
    // Initialize selected variant based on URL slug
    if (product?.variants?.length > 0) {
      // Check if current URL slug matches any variant slug
      const currentSlug = router.query.slug;
      let initialVariant = product.variants[0];

      // Find variant that matches the current URL slug
      const foundVariant = product.variants.find((v) => v.slug === currentSlug);
      if (foundVariant) {
        initialVariant = foundVariant;
      }

      setSelectVariant(initialVariant);
      setSelectVa(initialVariant);
      setVariants(product.variants);

      // Set initial image to variant's first image
      if (initialVariant?.image && initialVariant.image.length > 0) {
        setImg(initialVariant.image[0]);
      } else {
        setImg(product?.image?.[0]);
      }
    } else {
      // No variants, use main product image
      setImg(product?.image?.[0]);
    }
  }, [product, router.query.slug]);

  useEffect(() => {
    if (product?.variants && product.variants.length > 0) {
      const res = Object.keys(Object.assign({}, ...product.variants));

      const varTitle = attributes?.filter((att) => res.includes(att?._id));
      setVariantTitle(varTitle?.sort());
    } else {
      setVariantTitle([]);
    }
  }, [variants, attributes, product?.variants]);

  useEffect(() => {
    setIsLoading(false);
  }, [product]);

  // Show welcome popup modal when user visits the page
  useEffect(() => {
    if (product && !isLoading) {
      // Delay showing the modal by 1 second for better UX
      const timer = setTimeout(() => {
        setWelcomeModalOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [product, isLoading]);

  const handleChangeImage = (img) => {
    setImg(img);
  };

  // Handle variant selection - update slug and product data
  const handleVariantSelect = (variant) => {
    setSelectVariant(variant);
    setSelectVa(variant);

    if (variant?.image && variant.image.length > 0) {
      setImg(variant.image[0]);
    } else {
      setImg(product?.image?.[0] || "");
    }

    if (variant?.slug) {
      router.push(`/product/${variant.slug}`, undefined, { shallow: true });
    }
  };

  // Get current images based on selected variant
  const getCurrentImages = () => {
    if (selectVariant?.image && selectVariant.image.length > 0) {
      return selectVariant.image;
    }
    return product?.image || [];
  };

  const { t } = useTranslation();

  // category name slug
  const category_name = product?.category?.name
    ? showingTranslateValue(product.category.name)
        .toLowerCase()
        .replace(/[^A-Z0-9]+/gi, "-")
    : "";

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : !product ? (
        <Layout
          title="Product Not Found"
          description="The requested product could not be found"
        >
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Product Not Found
              </h1>
              <p className="text-gray-600 mb-8">
                The product you're looking for doesn't exist or has been
                removed.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-[#EF4036] text-white font-semibold rounded-lg hover:bg-[#C53030] transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout
          title={
            showingTranslateValue(selectVariant?.title) ||
            showingTranslateValue(product?.title)
          }
          description={
            showingTranslateValue(selectVariant?.description) ||
            showingTranslateValue(product?.description)
          }
        >
          {/* Welcome Popup Modal - Shows on page visit */}
          <MainModal
            modalOpen={welcomeModalOpen}
            setModalOpen={setWelcomeModalOpen}
          >
            <div className="inline-block w-full max-w-5xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Images */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#EF4036] to-[#C53030] p-8 items-center justify-center">
                  <div className="relative w-full h-full">
                    {getCurrentImages()[0] && (
                      <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden">
                        <Image
                          src={getCurrentImages()[0]}
                          alt={showingTranslateValue(product?.title)}
                          width={600}
                          height={600}
                          className="rounded-lg object-cover w-full h-full"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                          <h2 className="text-2xl font-bold mb-2">
                            {showingTranslateValue(selectVariant?.title) ||
                              showingTranslateValue(product?.title)}
                          </h2>
                          <p className="text-sm opacity-90">
                            Get in touch with us to learn more about this product
                          </p>
                        </div>
                      </div>
                    )}
                    {!getCurrentImages()[0] && (
                      <div className="flex flex-col items-center justify-center h-full text-white">
                        <div className="text-6xl mb-4">⚡</div>
                        <h2 className="text-2xl font-bold mb-2">
                          Welcome to PowerQ
                        </h2>
                        <p className="text-center opacity-90">
                          Discover premium quality products
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold leading-6 text-gray-900 mb-2">
                      Enquire about this product
                    </h3>
                    <p className="text-sm text-gray-500">
                      Fill out the form below and we'll get back to you soon
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmitEnquiry)}>
                    <InputArea
                      label="Name"
                      name="name"
                      type="text"
                      register={register}
                      required={true}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        {errors.name.message}
                      </span>
                    )}
                    <InputArea
                      label="Email"
                      name="email"
                      type="email"
                      register={register}
                      required={true}
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                    <InputArea
                      label="Phone"
                      name="phone"
                      type="text"
                      register={register}
                      required={true}
                      placeholder="Your Phone Number"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs">
                        {errors.phone.message}
                      </span>
                    )}
                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2 mt-2">
                      Message
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required!" })}
                      placeholder="Your message"
                      className="w-full border text-sm rounded-md p-2 min-h-[80px] border-gray-200 focus:outline-none focus:border-[#EF4036]"
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs">
                        {errors.message.message}
                      </span>
                    )}
                    <input
                      type="hidden"
                      value={product?.title}
                      {...register("productTitle")}
                    />
                    <button
                      type="submit"
                      className="mt-4 w-full bg-[#EF4036] text-white py-3 rounded-md hover:bg-[#C53030] transition font-semibold"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </MainModal>

          {/* Enquiry Modal - Manual trigger */}
          <MainModal
            modalOpen={enquiryModalOpen}
            setModalOpen={setEnquiryModalOpen}
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Enquire about this product
              </h3>
              <form onSubmit={handleSubmit(onSubmitEnquiry)}>
                <InputArea
                  label="Name"
                  name="name"
                  type="text"
                  register={register}
                  required={true}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
                <InputArea
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  required={true}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
                <InputArea
                  label="Phone"
                  name="phone"
                  type="text"
                  register={register}
                  required={true}
                  placeholder="Your Phone Number"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
                <label className="block text-gray-500 font-medium text-sm leading-none mb-2 mt-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required!" })}
                  placeholder="Your message"
                  className="w-full border text-sm rounded-md p-2 min-h-[80px] border-gray-200 focus:outline-none focus:border-[#EF4036]"
                />
                {errors.message && (
                  <span className="text-red-500 text-xs">
                    {errors.message.message}
                  </span>
                )}
                <input
                  type="hidden"
                  value={product?.title}
                  {...register("productTitle")}
                />
                <button
                  type="submit"
                  className="mt-4 w-full bg-[#EF4036] text-white py-2 rounded-md hover:bg-[#C53030] transition"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </MainModal>
          <div className="px-0 py-10 lg:py-10">
            <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
              <div className="flex items-center pb-4">
                <ol className="flex items-center w-full overflow-hidden font-serif">
                  <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-[#EF4036] font-semibold">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="text-sm mt-[1px]">
                    {" "}
                    <FiChevronRight />{" "}
                  </li>
                  <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-[#EF4036] font-semibold ">
                    <Link
                      href={`/search?category=${category_name}&_id=${product?.category?._id}`}
                    >
                      <button
                        type="button"
                        onClick={() => setIsLoading(!isLoading)}
                      >
                        {category_name}
                      </button>
                    </Link>
                  </li>
                  <li className="text-sm mt-[1px]">
                    {" "}
                    <FiChevronRight />{" "}
                  </li>
                  <li className="text-sm px-1 transition duration-200 ease-in ">
                    {showingTranslateValue(selectVariant?.title) ||
                      showingTranslateValue(product?.title)}
                  </li>
                </ol>
              </div>
              <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
                <div className="flex flex-col xl:flex-row gap-12">
                  <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-[45%] xl:w-[45%]">
                    <Discount slug product={product} discount={discount} />

                    {getCurrentImages()[0] ? (
                      <Image
                        src={img || getCurrentImages()[0]}
                        alt="product"
                        width={650}
                        height={650}
                        priority
                      />
                    ) : (
                      <Image
                        src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                        width={650}
                        height={650}
                        alt="product Image"
                      />
                    )}

                    {getCurrentImages().length > 1 && (
                      <div className="flex flex-row flex-wrap mt-4 border-t">
                        <ImageCarousel
                          images={getCurrentImages()}
                          handleChangeImage={handleChangeImage}
                        />
                      </div>
                    )}
                  </div>

                  <div className="w-full">
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <div className="xl:pr-6 md:pr-6 md:w-full w-full">
                        <div className="mb-6">
                          <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800">
                            {showingTranslateValue(selectVariant?.title) ||
                              showingTranslateValue(product?.title)}
                          </h1>

                          {/* <p className="uppercase font-serif font-medium text-gray-500 text-sm">
                            SKU :{" "}
                            <span className="font-bold text-gray-600">
                              {selectVariant?.sku || product.sku}
                            </span>
                          </p> */}

                          {selectVariant?.barcode && (
                            <p className="uppercase font-serif font-medium text-gray-500 text-sm">
                              Barcode :{" "}
                              <span className="font-bold text-gray-600">
                                {selectVariant.barcode}
                              </span>
                            </p>
                          )}
                        </div>

                        <div className="mb-4">
                          {variantTitle?.map((a, i) => (
                            <span key={i + 1}>
                              <h4 className="text-sm py-1">
                                {showingTranslateValue(a?.name)}:
                              </h4>
                              <div className="flex flex-row mb-3">
                                <VariantList
                                  att={a._id}
                                  lang={lang}
                                  option={a.option}
                                  setValue={setValue}
                                  varTitle={variantTitle}
                                  setSelectVa={setSelectVa}
                                  variants={product?.variants}
                                  handleVariantSelect={handleVariantSelect}
                                  selectVariant={selectVariant}
                                  setSelectVariant={setSelectVariant}
                                />
                              </div>
                            </span>
                          ))}
                        </div>

                        <div>
                          <div className="text-sm leading-6 text-gray-500 md:leading-7">
                            {isReadMore
                              ? showingTranslateValue(
                                  selectVariant?.description ||
                                    product?.description
                                )?.slice(0, 230)
                              : showingTranslateValue(
                                  selectVariant?.description ||
                                    product?.description
                                )}
                            <br />
                            {Object?.keys(
                              selectVariant?.description || product?.description
                            )?.includes(lang)
                              ? (selectVariant?.description ||
                                  product?.description)[lang]?.length > 230 && (
                                  <span
                                    onClick={() => setIsReadMore(!isReadMore)}
                                    className="read-or-hide"
                                  >
                                    {isReadMore
                                      ? t("common:moreInfo")
                                      : t("common:showLess")}
                                  </span>
                                )
                              : (
                                  selectVariant?.description ||
                                  product?.description
                                )?.en?.length > 230 && (
                                  <span
                                    onClick={() => setIsReadMore(!isReadMore)}
                                    className="read-or-hide"
                                  >
                                    {isReadMore
                                      ? t("common:moreInfo")
                                      : t("common:showLess")}
                                  </span>
                                )}
                          </div>

                          <div className="flex items-center mt-4">
                            <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                              <button
                                onClick={() => setEnquiryModalOpen(true)}
                                className="bg-[#EF4036] hover:bg-[#C53030] text-white text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-2/3 h-12"
                              >
                                Enquire Now
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-col mt-4">
                            <span className="font-serif font-semibold py-1 text-sm d-block">
                              <span className="text-gray-800">
                                {t("common:category")}:
                              </span>{" "}
                              <Link
                                href={`/search?category=${category_name}&_id=${product?.category?._id}`}
                              >
                                <button
                                  type="button"
                                  className="text-gray-600 font-serif font-medium underline ml-2 hover:text-[#EF4036]"
                                  onClick={() => setIsLoading(!isLoading)}
                                >
                                  {category_name}
                                </button>
                              </Link>
                            </span>
                            <Tags product={product} />
                          </div>

                          <div className="mt-2">
                            <p className="text-xs sm:text-sm text-gray-700 font-medium">
                              Call Us To Order By Mobile Number :{" "}
                              <span className="text-[#EF4036] font-semibold">
                                +91 9971271177
                              </span>{" "}
                            </p>
                          </div>

                          {/* Product Highlights */}
                          <div className="mt-6">
                            {/* Divider Line */}
                            <div className="border-t border-gray-200 mb-4"></div>

                            <h3 className="text-base font-semibold mb-3 font-serif text-gray-800">
                              Product Highlights
                            </h3>
                            <div className=" p-4 rounded-lg">
                              <ul className="space-y-2">
                                {showingTranslateValue(
                                  selectVariant?.highlights ||
                                    product?.highlights
                                )
                                  ?.split("\n")
                                  ?.filter((point) => point.trim())
                                  ?.map((point, index) => {
                                    const trimmedPoint = point
                                      .trim()
                                      .toLowerCase();
                                    let icon = null;

                                    // Determine icon based on content
                                    if (
                                      trimmedPoint.includes("capacity") ||
                                      trimmedPoint.includes("power") ||
                                      trimmedPoint.includes("watt")
                                    ) {
                                      icon = <FiZap className="w-4 h-4" />;
                                    } else if (
                                      trimmedPoint.includes("input") ||
                                      trimmedPoint.includes("voltage") ||
                                      trimmedPoint.includes("ac")
                                    ) {
                                      icon = (
                                        <FiArrowDown className="w-4 h-4" />
                                      );
                                    } else if (
                                      trimmedPoint.includes("output") ||
                                      trimmedPoint.includes("dc")
                                    ) {
                                      icon = <FiArrowUp className="w-4 h-4" />;
                                    } else if (
                                      trimmedPoint.includes("working range") ||
                                      trimmedPoint.includes("temperature") ||
                                      trimmedPoint.includes("humidity")
                                    ) {
                                      icon = (
                                        <FiThermometer className="w-4 h-4" />
                                      );
                                    } else if (
                                      trimmedPoint.includes("application") ||
                                      trimmedPoint.includes("use") ||
                                      trimmedPoint.includes("suitable")
                                    ) {
                                      icon = <FiTarget className="w-4 h-4" />;
                                    } else {
                                      // Default checkmark icon for other points
                                      icon = (
                                        <svg
                                          className="w-4 h-4"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      );
                                    }

                                    return (
                                      <li
                                        key={index}
                                        className="flex items-start"
                                      >
                                        <span className="text-[#EF4036] mr-2 mt-1 flex-shrink-0">
                                          {icon}
                                        </span>
                                        <span className="text-sm text-gray-600">
                                          {point.trim()}
                                        </span>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>

                          {/* Divider Line */}
                          <div className="border-t border-gray-200 mb-4 mt-6"></div>

                          {/* social share */}
                          <div className="mt-2">
                            <h3 className="text-base font-semibold mb-1 font-serif">
                              {t("common:shareYourSocial")}
                            </h3>
                            <p className="font-sans text-sm text-gray-500">
                              {t("common:shareYourSocialText")}
                            </p>
                            <ul className="flex mt-4">
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-red-500  mr-2 transition ease-in-out duration-500">
                                <FacebookShareButton
                                  url={`https://powerq-store-nine.vercel.app/product/${
                                    selectVariant?.slug || router.query.slug
                                  }`}
                                  quote=""
                                >
                                  <FacebookIcon size={32} round />
                                </FacebookShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-red-500  mr-2 transition ease-in-out duration-500">
                                <TwitterShareButton
                                  url={`https://powerq-store-nine.vercel.app/product/${
                                    selectVariant?.slug || router.query.slug
                                  }`}
                                  quote=""
                                >
                                  <TwitterIcon size={32} round />
                                </TwitterShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-red-500  mr-2 transition ease-in-out duration-500">
                                <a
                                  href={`https://www.instagram.com/?url=https://powerq-store-nine.vercel.app/product/${
                                    selectVariant?.slug || router.query.slug
                                  }`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center w-full h-full"
                                  aria-label="Share on Instagram"
                                >
                                  <FaInstagram
                                    size={32}
                                    style={{ color: "#E4405F" }}
                                  />
                                </a>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-red-500  mr-2 transition ease-in-out duration-500">
                                <WhatsappShareButton
                                  url={`https://powerq-store-nine.vercel.app/product/${
                                    selectVariant?.slug || router.query.slug
                                  }`}
                                  quote=""
                                >
                                  <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-red-500  mr-2 transition ease-in-out duration-500">
                                <LinkedinShareButton
                                  url={`https://powerq-store-nine.vercel.app/product/${
                                    selectVariant?.slug || router.query.slug
                                  }`}
                                  quote=""
                                >
                                  <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* related products */}
              {relatedProducts?.length >= 1 && (
                <div className="pt-10 lg:pt-20 lg:pb-10">
                  <h3 className="leading-7 text-lg lg:text-xl mb-3 font-semibold font-serif hover:text-gray-600">
                    {t("common:relatedProducts")}
                  </h3>
                  <div className="flex">
                    <div className="w-full">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                        {relatedProducts?.slice(0, 13).map((product, i) => (
                          <ProductCard
                            key={product._id}
                            product={product}
                            attributes={attributes}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  try {
    const [data, attributes] = await Promise.all([
      ProductServices.getShowingStoreProducts({
        category: "",
        slug: slug,
        variantSlug: slug,
      }),

      AttributeServices.getShowingAttributes({}),
    ]);

    let product = null;
    let relatedProducts = [];

    // Handle both array and object responses from backend
    let products = [];
    if (Array.isArray(data)) {
      // Backend returned array directly
      products = data;
    } else if (data?.products) {
      // Backend returned object with products property
      products = data.products;
    } else if (data?.popularProducts) {
      // Backend returned home page format
      products = data.popularProducts;
    } else if (data?.product) {
      // Backend returned specific product with variant
      product = data.product;
      products = [product];
    }

    if (slug && products.length > 0 && !product) {
      // First try to find product by main slug
      product = products.find((p) => p.slug === slug);

      // If not found, check if it's a variant slug
      if (!product) {
        for (const p of products) {
          if (p.variants && p.variants.length > 0) {
            const variant = p.variants.find((v) => v.slug === slug);
            if (variant) {
              // Found variant, return the parent product
              product = p;
              break;
            }
          }
        }
      }

      // If product found, sanitize it
      if (product) {
        product = sanitizeProduct(product);

        // Get related products (excluding current product)
        relatedProducts = sanitizeData(
          products.filter((p) => p._id !== product._id)
        );
      }
    } else if (product) {
      // Product already found from variant request
      product = sanitizeProduct(product);
    }

    // Sanitize attributes
    const sanitizedAttributes = sanitizeData(attributes) || [];

    return {
      props: {
        product,
        attributes: sanitizedAttributes,
        relatedProducts,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    // Return fallback data on error
    return {
      props: {
        product: null,
        attributes: [],
        relatedProducts: [],
      },
    };
  }
};

export default ProductScreen;
