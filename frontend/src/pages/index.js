import { SidebarContext } from "@context/SidebarContext";
import { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

//internal import
import Layout from "@layout/Layout";
import Banner from "@components/banner/Banner";
import useGetSetting from "@hooks/useGetSetting";
import CardTwo from "@components/cta-card/CardTwo";
import OfferCard from "@components/offer/OfferCard";
import Loading from "@components/preloader/Loading";
import ProductServices from "@services/ProductServices";
import ProductCard from "@components/product/ProductCard";
import MainCarousel from "@components/carousel/MainCarousel";
import FeatureCategory from "@components/category/FeatureCategory";
import AttributeServices from "@services/AttributeServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import { sanitizeData } from "@utils/dataSanitizer";
import TopProductsCollage from "@components/sections/TopProductsCollage";
import {
  FaHardHat,
  FaCloud,
  FaShieldAlt,
  FaHeadset,
  FaUsers,
  FaCheckCircle,
  FaPlug,
  FaFireExtinguisher,
  FaSign,
  FaBolt,
  FaStar,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import MainModal from "@components/modal/MainModal";
import InputArea from "@components/form/InputArea";
import LeadServices from "@services/LeadServices";

const Home = ({
  popularProducts,
  discountProducts,
  newArrivalsProducts,
  attributes,
}) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error, storeCustomizationSetting } = useGetSetting();
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialScrollRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    register: registerQuote,
    handleSubmit: handleSubmitQuote,
    reset: resetQuote,
    setValue: setQuoteValue,
    formState: { errors: errorsQuote },
  } = useForm();

  // console.log("storeCustomizationSetting", storeCustomizationSetting);

  console.log("New Arrivals", newArrivalsProducts);

  useEffect(() => {
    if (router.asPath === "/") {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [router]);

  // Show welcome popup modal when user visits the home page
  useEffect(() => {
    if (!isLoading) {
      // Delay showing the modal by 1.5 seconds for better UX
      const timer = setTimeout(() => {
        setWelcomeModalOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const onSubmitEnquiry = async (data) => {
    try {
      const leadData = {
        ...data,
        product: {
          title: "General Enquiry",
          type: "home_page_enquiry",
        },
      };
      await LeadServices.addLead(leadData);
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

  const onSubmitQuote = async (data) => {
    try {
      const leadData = {
        ...data,
        service: selectedService || data.service,
        product: {
          title: "Quote Request",
          type: "quote_request",
        },
      };
      await LeadServices.addLead(leadData);
      setQuoteModalOpen(false);
      setSelectedService("");
      toast.success("Thank you for your quote request! We will contact you soon.");
      resetQuote();
    } catch (error) {
      console.log("error", error);
      toast.error(
        error?.response?.data?.message || "Failed to submit quote request."
      );
    }
  };

  const handleGetQuoteClick = (serviceName = "") => {
    setSelectedService(serviceName);
    if (serviceName) {
      setQuoteValue("service", serviceName);
    }
    setQuoteModalOpen(true);
  };

  // Testimonials carousel functions
  const testimonials = [
    {
      id: 1,
      name: "Dayana Hernandez",
      date: "2022-01-27",
      avatar: "D",
      avatarBg: "bg-red-800",
      text: "We use PowerQ Test and Tag Services. They are very professional, reliable, always on time, and send the reports usually the next day. Very Happy with their Service",
      hasImage: false,
    },
    {
      id: 2,
      name: "Lucinda Gulliver",
      date: "2021-02-26",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      avatarBg: "bg-purple-200",
      text: "Professional, quick and very easy to deal with. Lovely communication",
      hasImage: true,
    },
    {
      id: 3,
      name: 'Max "The Big Fundamental" Powers',
      date: "2020-05-01",
      avatar: "M",
      avatarBg: "bg-amber-800",
      text: "Very prompt and Professional service. Urgently needed a job done first thing the following day. The Boys at PowerQ moved some jobs around to help me out. Will...",
      hasReadMore: true,
    },
    {
      id: 4,
      name: "Bon C",
      date: "2020-01-31",
      avatar: "B",
      avatarBg: "bg-blue-800",
      text: "Arrived on time even on a short notice. Excellent workmanship, timing and clear communication. Very professional, polite and respectful. They kept their work area clean. Pleased with price. Couldn't recommend them more highly.",
    },
    {
      id: 5,
      name: "Jason Tan",
      date: "2020-01-25",
      avatar: "J",
      avatarBg: "bg-green-800",
      text: "Great service, very flexible times and efficient. Thanks! Good price too.",
    },
    {
      id: 6,
      name: "Punardeep Singh",
      date: "2020-01-20",
      avatar: "P",
      avatarBg: "bg-indigo-800",
      text: "Good chaps with 'take your time' and 'do it properly' approach. Recommendable experience.",
    },
  ];

  const totalTestimonials = testimonials.length;
  const cardsPerView = 3;

  const scrollToTestimonial = (index) => {
    if (testimonialScrollRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      const scrollPosition = index * cardWidth;
      testimonialScrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    setCurrentTestimonialIndex(index);
  };

  const nextTestimonial = () => {
    const maxIndex = Math.max(totalTestimonials - cardsPerView, 0);
    const nextIndex =
      currentTestimonialIndex >= maxIndex ? 0 : currentTestimonialIndex + 1;
    scrollToTestimonial(nextIndex);
  };

  const prevTestimonial = () => {
    const maxIndex = Math.max(totalTestimonials - cardsPerView, 0);
    const prevIndex =
      currentTestimonialIndex === 0 ? maxIndex : currentTestimonialIndex - 1;
    scrollToTestimonial(prevIndex);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => {
        const maxIndex = Math.max(totalTestimonials - cardsPerView, 0);
        const nextIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;

        if (testimonialScrollRef.current) {
          const cardWidth = 320 + 24;
          const scrollPosition = nextIndex * cardWidth;
          testimonialScrollRef.current.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, 5000); // Auto-scroll every 5 seconds

    autoScrollIntervalRef.current = interval;

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [totalTestimonials]);

  // Get featured product image for the modal
  const getFeaturedImage = () => {
    if (popularProducts?.length > 0 && popularProducts[0]?.image?.[0]) {
      return popularProducts[0].image[0];
    }
    if (newArrivalsProducts?.length > 0 && newArrivalsProducts[0]?.image?.[0]) {
      return newArrivalsProducts[0].image[0];
    }
    if (discountProducts?.length > 0 && discountProducts[0]?.image?.[0]) {
      return discountProducts[0].image[0];
    }
    return null;
  };

  const featuredImage = getFeaturedImage();

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          {/* Welcome Popup Modal - Shows on page visit */}
          <MainModal
            modalOpen={welcomeModalOpen}
            setModalOpen={setWelcomeModalOpen}
          >
            <div className="inline-block w-full max-w-5xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Images */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] p-8 items-center justify-center">
                  <div className="relative w-full h-full">
                    {featuredImage && (
                      <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden">
                        <Image
                          src={featuredImage}
                          alt="PowerQ Products"
                          width={600}
                          height={600}
                          className="rounded-lg object-cover w-full h-full"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                          <h2 className="text-2xl font-bold mb-2">
                            Welcome to PowerQ
                          </h2>
                          <p className="text-sm opacity-90">
                            Discover premium quality power solutions and get in touch with our experts
                          </p>
                        </div>
                      </div>
                    )}
                    {!featuredImage && (
                      <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-white">
                        <div className="text-6xl mb-4">⚡</div>
                        <h2 className="text-2xl font-bold mb-2">
                          Welcome to PowerQ
                        </h2>
                        <p className="text-center opacity-90 px-4">
                          Your trusted partner for premium power solutions, stabilizers, and transformers
                        </p>
                        <div className="mt-6 flex gap-4 text-sm">
                          <div className="text-center">
                            <div className="text-2xl mb-1">🔌</div>
                            <p>Power Solutions</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl mb-1">⚙️</div>
                            <p>Stabilizers</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl mb-1">🔋</div>
                            <p>Transformers</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:w-1/2 p-8 lg:p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold leading-6 text-gray-900 mb-2">
                      Get in Touch with Us
                    </h3>
                    <p className="text-sm text-gray-500">
                      Fill out the form below and we'll get back to you soon with the best solutions for your needs
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
                      placeholder="Tell us about your requirements or ask any questions"
                      className="w-full border text-sm rounded-md p-2 min-h-[80px] border-gray-200 focus:outline-none focus:border-[#FF6B6B]"
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs">
                        {errors.message.message}
                      </span>
                    )}
                    <input
                      type="hidden"
                      value="General Enquiry"
                      {...register("productTitle")}
                    />
                    <button
                      type="submit"
                      className="mt-4 w-full bg-[#FF6B6B] text-white py-3 rounded-md hover:bg-[#FF8E8E] transition font-semibold"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </MainModal>

          {/* Quote Request Modal */}
          <MainModal
            modalOpen={quoteModalOpen}
            setModalOpen={setQuoteModalOpen}
          >
            <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
              <div className="p-6 lg:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
                  <button
                    onClick={() => setQuoteModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={handleSubmitQuote(onSubmitQuote)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <InputArea
                        label="Name"
                        name="name"
                        type="text"
                        register={registerQuote}
                        required={true}
                        placeholder="Name"
                      />
                      {errorsQuote.name && (
                        <span className="text-red-500 text-xs">
                          {errorsQuote.name.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <InputArea
                        label="Email"
                        name="email"
                        type="email"
                        register={registerQuote}
                        required={true}
                        placeholder="Email"
                      />
                      {errorsQuote.email && (
                        <span className="text-red-500 text-xs">
                          {errorsQuote.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <InputArea
                        label="Contact Number"
                        name="phone"
                        type="text"
                        register={registerQuote}
                        required={true}
                        placeholder="Contact Number"
                      />
                      {errorsQuote.phone && (
                        <span className="text-red-500 text-xs">
                          {errorsQuote.phone.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                        Select Service
                      </label>
                      <select
                        {...registerQuote("service", { required: "Service is required!" })}
                        className="w-full border text-sm rounded-md p-2 border-gray-200 focus:outline-none focus:border-[#FF6B6B]"
                        defaultValue={selectedService}
                        onChange={(e) => {
                          setSelectedService(e.target.value);
                          setQuoteValue("service", e.target.value);
                        }}
                      >
                        <option value="">Select Service</option>
                        <option value="Test and Tag">Test and Tag</option>
                        <option value="Fire Extinguishers">Fire Extinguishers</option>
                        <option value="RCD/Safety Switches">RCD/Safety Switches</option>
                        <option value="Three Phase Testing">Three Phase Testing</option>
                        <option value="Microwave Testing">Microwave Testing</option>
                        <option value="Exit Emergency Light Testing">Exit Emergency Light Testing</option>
                      </select>
                      {errorsQuote.service && (
                        <span className="text-red-500 text-xs">
                          {errorsQuote.service.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <InputArea
                      label="Your Location"
                      name="location"
                      type="text"
                      register={registerQuote}
                      required={true}
                      placeholder="Your Location"
                    />
                    {errorsQuote.location && (
                      <span className="text-red-500 text-xs">
                        {errorsQuote.location.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                      When do you want service to be done
                    </label>
                    <select
                      {...registerQuote("serviceDate", { required: "Service date is required!" })}
                      className="w-full border text-sm rounded-md p-2 border-gray-200 focus:outline-none focus:border-[#FF6B6B]"
                    >
                      <option value="">Select Date</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                      <option value="In a Month">In a Month</option>
                    </select>
                    {errorsQuote.serviceDate && (
                      <span className="text-red-500 text-xs">
                        {errorsQuote.serviceDate.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                      Your Message (Optional)
                    </label>
                    <textarea
                      {...registerQuote("message")}
                      placeholder="Your Message(Optional)"
                      className="w-full border text-sm rounded-md p-2 min-h-[100px] border-gray-200 focus:outline-none focus:border-[#FF6B6B] resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </MainModal>

          <div className="min-h-screen">
            <div className="bg-white">
              <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
                <div className="w-full">
                  <div className="w-full">
                    <MainCarousel />
                  </div>
                  {/* <div className="w-full hidden lg:flex">
                    <OfferCard />
                  </div> */}
                </div>
                {/* {storeCustomizationSetting?.home?.promotion_banner_status && (
                  <div className="bg-[#FDE8E6] px-10 py-6 rounded-lg mt-6">
                    <Banner />
                  </div>
                )} */}
              </div>
            </div>

            {/* service benefits section */}
            <div className="bg-white py-12">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                {/* Align all five benefits in a single row */}
                <div className="grid grid-cols-5 gap-6">
                  {/* Electrical Safety Services*/}
                  <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 border-2 border-gray-200 shadow-lg rounded-lg p-4">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                      <FaHardHat className="w-12 h-12 text-[#FF6B6B] drop-shadow-lg" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide group-hover:text-[#FF6B6B] transition-colors duration-300">
                      Electrical Safety Services
                    </h3>
                  </div>

                  {/* Regulatory Compliance*/}
                  <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 border-2 border-gray-200 shadow-lg rounded-lg p-4">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                      <FaCloud className="w-12 h-12 text-[#FF6B6B] drop-shadow-lg" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide group-hover:text-[#FF6B6B] transition-colors duration-300">
                      Regulatory Compliance
                    </h3>
                  </div>

                  {/* Risk Mitigation*/}
                  <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 border-2 border-gray-200 shadow-lg rounded-lg p-4">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                      <FaShieldAlt className="w-12 h-12 text-[#FF6B6B] drop-shadow-lg" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide group-hover:text-[#FF6B6B] transition-colors duration-300">
                      Risk Mitigation
                    </h3>
                  </div>

                  {/* Customer Assurance*/}
                  <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 border-2 border-gray-200 shadow-lg rounded-lg p-4 ">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                      <FaHeadset className="w-12 h-12 text-[#FF6B6B] drop-shadow-lg" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide group-hover:text-[#FF6B6B] transition-colors duration-300">
                      Customer Assurance
                    </h3>
                  </div>
                  {/*Expert Team */}
                  <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 border-2 border-gray-200 shadow-lg rounded-lg p-4">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                      <FaUsers className="w-12 h-12 text-[#FF6B6B] drop-shadow-lg" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide group-hover:text-[#FF6B6B] transition-colors duration-300">
                      Expert Team
                    </h3>
                  </div>
                </div>
              </div>
            </div>

           {/* feature category's */}
           {storeCustomizationSetting?.home?.featured_status && (
              <div className="bg-gray-100 lg:py-16 py-10">
                <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                  <div className="mb-10 flex justify-center">
                    <div className="text-center w-full lg:w-2/5">
                      <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                        <CMSkeleton
                          count={1}
                          height={30}
                          loading={loading}
                          data={storeCustomizationSetting?.home?.feature_title}
                        />
                      </h2>
                      <p className="text-base font-sans text-gray-600 leading-6">
                        <CMSkeleton
                          count={4}
                          height={10}
                          error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home?.feature_description
                          }
                        />
                      </p>
                    </div>
                  </div>

                  <FeatureCategory />
                </div>
              </div>
            )}


            {/* Pricing Plans Section */}
            <div 
              className="relative py-20 overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Blurred Background Overlay */}
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
              
              <div className="relative z-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-3 drop-shadow-lg">
                    Pricing Plans
                  </h2>
                  <p className="text-xl lg:text-2xl font-semibold text-white">
                    We offer best price and packages for test & tag in Melbourne
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {/* Small Business */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-black/80 p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Small Business</h3>
                      <p className="text-[#FF6B6B] font-semibold mb-1">1-500 tags</p>
                      <p className="text-[#FF6B6B] text-sm">Minimum fee $120 (GST excl.)</p>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-4xl font-bold text-gray-900 mb-6">$4.00<span className="text-xl text-gray-600">/ tag</span></p>
                      <ul className="mb-6 space-y-3 text-sm text-gray-600">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Trade Power Tools</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Small Factories, Warehouses and Retail Stores</span>
                        </li>
                      </ul>
                      <button 
                        onClick={() => handleGetQuoteClick("Small Business")}
                        className="w-full bg-[#FF6B6B] text-white py-3 px-4 rounded-lg hover:bg-[#FF8E8E] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>

                  {/* Medium Business */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-black/80 p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Medium Business</h3>
                      <p className="text-[#FF6B6B] font-semibold mb-1">500-1000 tags</p>
                      <p className="text-[#FF6B6B] text-sm">Minimum fee $120 (GST excl.)</p>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-4xl font-bold text-gray-900 mb-6">$3.50<span className="text-xl text-gray-600">/ tag</span></p>
                      <ul className="mb-6 space-y-3 text-sm text-gray-600">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Trade Power Tools</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Small Factories, Warehouses and Retail Stores</span>
                        </li>
                      </ul>
                      <button 
                        onClick={() => handleGetQuoteClick("Medium Business")}
                        className="w-full bg-[#FF6B6B] text-white py-3 px-4 rounded-lg hover:bg-[#FF8E8E] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>

                  {/* Large Business */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-black/80 p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Large Business</h3>
                      <p className="text-[#FF6B6B] font-semibold mb-1">1000-2000 tags</p>
                      <p className="text-[#FF6B6B] text-sm">Minimum fee $120 (GST excl.)</p>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-4xl font-bold text-gray-900 mb-6">$2.80<span className="text-xl text-gray-600">/ tag</span></p>
                      <ul className="mb-6 space-y-3 text-sm text-gray-600">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Trade Power Tools</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Small Factories, Warehouses and Retail Stores</span>
                        </li>
                      </ul>
                      <button 
                        onClick={() => handleGetQuoteClick("Large Business")}
                        className="w-full bg-[#FF6B6B] text-white py-3 px-4 rounded-lg hover:bg-[#FF8E8E] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>

                  {/* Large Offices / Schools */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-black/80 p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Large Offices / Schools</h3>
                      <p className="text-[#FF6B6B] font-semibold mb-1">Over 2000 tags</p>
                      <p className="text-[#FF6B6B] text-sm">Minimum fee $120 (GST excl.)</p>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-4xl font-bold text-gray-900 mb-6">$2.40<span className="text-xl text-gray-600">/ tag</span></p>
                      <ul className="mb-6 space-y-3 text-sm text-gray-600">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Trade Power Tools</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Small Factories, Warehouses and Retail Stores</span>
                        </li>
                      </ul>
                      <button 
                        onClick={() => handleGetQuoteClick("Large Offices / Schools")}
                        className="w-full bg-[#FF6B6B] text-white py-3 px-4 rounded-lg hover:bg-[#FF8E8E] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fire Extinguisher Inspection Services Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="flex justify-center items-center mb-10">
                  {/* <div className="w-1 h-12 bg-[#FF6B6B] mr-4 rounded-full"></div> */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Fire Extinguisher Inspection Services Melbourne
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl hover:border-[#FF6B6B]/30 transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FaCheckCircle className="text-[#FF6B6B] mr-3 mt-1 flex-shrink-0 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Fire extinguisher Inspection Site fee $60 excl gst</span>
                      </div>
                      <div className="flex items-start">
                        <FaCheckCircle className="text-[#FF6B6B] mr-3 mt-1 flex-shrink-0 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Fire extinguisher inspection - $6.50 excl gst</span>
                      </div>
                      <div className="flex items-start">
                        <FaCheckCircle className="text-[#FF6B6B] mr-3 mt-1 flex-shrink-0 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Fire hose reel inspection - $12 excl gst</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-[#FF6B6B]/30 transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="flex items-start">
                      <FaCheckCircle className="text-[#FF6B6B] mr-3 mt-1 flex-shrink-0 text-lg group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Fire extinguisher installation - $15 (Minimum site fee applies)</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-[#FF6B6B]/30 transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="flex items-start">
                      <FaCheckCircle className="text-[#FF6B6B] mr-3 mt-1 flex-shrink-0 text-lg group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Smoke alarm inspection - $90 (upto 3 smoke inspection)</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-[#FF6B6B]/30 transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="flex items-start mb-4">
                      <FaCheckCircle className="text-[#FF6B6B] mr-3 mt-1 flex-shrink-0 text-lg group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Emergency exit light inspection - $110 (inspect upto 3 exit lights)</span>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 font-semibold">All prices excl gst</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* We Specialize Section */}
            <div className="bg-gray-50 py-20 lg:py-24">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="rounded-2xl overflow-hidden bg-white">
                  {/* Full Width Heading */}
                  <div className="px-6 lg:px-10 pt-8 lg:pt-12 pb-6">
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 mb-3 leading-tight text-center">
                    We specialize in all types of Testing & Tagging in Melbourne
                  </h2>
                  </div>
                  
                  {/* Image and Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image on Left */}
                    <div className="relative h-80 lg:h-full min-h-[400px] order-2 lg:order-1 overflow-hidden border-4 border-red-500 rounded-xl">
                      <img
                        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
                        alt="Testing & Tagging Services"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Content on Right */}
                    <div className="px-6 lg:px-10 pb-8 lg:pb-12 order-1 lg:order-2">
                      <p className="text-gray-700 mt-6 text-base lg:text-base leading-relaxed mb-4">
                    At Testing & Tagging Melbourne, we are committed to providing excellent services when it comes to{" "}
                        <span className="text-blue-600 font-semibold">electrical testing and tagging</span>. We understand the risks associated with faulty or damaged equipment, which is why we specialise in making sure all electrical appliances are up to safety standards. Our experienced team will offer advice as to what regulations your machines must meet, as well as conducting regular tests and inspections to ensure that everything is functioning correctly and safely. By taking care of all your test and tagging needs, you can have peace of mind knowing that your equipment won't put people at risk of an electrical hazard. We are dedicated to providing you and your premises with comprehensive testing services and solutions for a safer work environment!
                  </p>
                  <button
                    onClick={() => handleGetQuoteClick("")}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase"
                  >
                    REQUEST A QUOTE
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Expertise Section */}
            <div className="bg-white py-20">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-12 text-center">
                  Our Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                  {/* Commercial */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] lg:h-[400px] group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:z-10">
                    <div className="absolute inset-0">
                      <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                        alt="Commercial - Person in blue shirt and gray overalls with orange gloves holding electrical conduit"
                        width={400}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-500"></div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    {/* Content - Centered */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10 text-center transform transition-all duration-500 group-hover:scale-110">
                      <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
                      </div>
                      <p className="text-white text-base lg:text-lg font-medium mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500">Commercial Services</p>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[#FF6B6B] transition-colors duration-500">Commercial</h3>
                    </div>
                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FF6B6B]/50 transition-all duration-500"></div>
                  </div>

                  {/* Industrial */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] lg:h-[400px] group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:z-10">
                    <div className="absolute inset-0">
                      <Image
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
                        alt="Industrial - Large industrial complex with pipes, tanks, and smokestacks"
                        width={600}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-500"></div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    {/* Content - Centered */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10 text-center transform transition-all duration-500 group-hover:scale-110">
                      <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
                      </div>
                      <p className="text-white text-base lg:text-lg font-medium mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500">Industrial Solutions</p>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[#FF6B6B] transition-colors duration-500">Industrial</h3>
                    </div>
                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FF6B6B]/50 transition-all duration-500"></div>
                  </div>

                  {/* Residential */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] lg:h-[400px] group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:z-10">
                    <div className="absolute inset-0">
                      <Image
                        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80"
                        alt="Residential - Person in plaid shirt doing electrical work with wire strippers"
                        width={600}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-500"></div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    {/* Content - Centered */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10 text-center transform transition-all duration-500 group-hover:scale-110">
                      <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
                      </div>
                      <p className="text-white text-base lg:text-lg font-medium mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500">Residential Services</p>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[#FF6B6B] transition-colors duration-500">Residential</h3>
                    </div>
                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FF6B6B]/50 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* PowerQ Test and Tag Services Section */}
            <div className="bg-white py-16 lg:py-20">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 mb-12 text-center">
                  PowerQ Test and Tag Services
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {/* Service Card 1 */}
                  <Link href="/service/electrical-testing-tagging">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <img
                          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/electrician-working_53876-16064.jpg.bv.webp"
                          alt="Electrical Cord Test and Tag"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay - appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="mb-3">
                            <div className="w-12 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                          </div>
                          <p className="text-white text-xs lg:text-sm mb-3 leading-relaxed px-2">
                          Ensure safety and compliance with professional electrical cord test and tag services across Melbourne.
                          </p>
                         
                        </div>
                      </div>
                      <div className="p-4 lg:p-6 text-center">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          Electrical Cord Test and Tag in Melbourne
                        </h3>
                      </div>
                    </div>
                  </Link>

                  {/* Service Card 2 */}
                  <Link href="/service/fire-extinguishers">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <img
                          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Fire-Safety-Training-for-Oil-Gas-960x640-1.jpg.bv.webp"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay - appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="mb-3">
                            <div className="w-12 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                          </div>
                          <p className="text-white text-xs lg:text-sm mb-3 leading-relaxed px-2">
                          PowerQ provides precise microwave leakage testing to ensure appliance safety and compliance.
                          </p>
                         
                        </div>
                      </div>
                      <div className="p-4 lg:p-6 text-center">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          Fire Extinguisher Testing Melbourne
                        </h3>
                      </div>
                    </div>
                  </Link>

                  {/* Service Card 3 */}
                  <Link href="/service/rcd-safety-switches">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <img
                          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15086-768x512.jpg.bv.webp"
                          alt="RCD Safety Switches"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay - appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="mb-3">
                            <div className="w-12 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                          </div>
                          <p className="text-white text-xs lg:text-sm mb-3 leading-relaxed px-2">
                          PowerQ tests and services RCDs to ensure optimal protection from electrical hazards.
                          </p>
                          
                        </div>
                      </div>
                      <div className="p-4 lg:p-6 text-center">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          RCD/ Safety Switches
                        </h3>
                      </div>
                    </div>
                  </Link>

                  {/* Service Card 4 */}
                  <Link href="/service/three-phase-testing">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <img
                          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/04/3-Phase-to-240V-power-board-scaled.jpg.bv.webp"
                          alt="Three Phase Testing"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay - appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="mb-3">
                            <div className="w-12 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                          </div>
                          <p className="text-white text-xs lg:text-sm mb-3 leading-relaxed px-2">
                          PowerQ delivers accurate three phase testing to ensure equipment safety and performance.
                          </p>
                          
                        </div>
                      </div>
                      <div className="p-4 lg:p-6 text-center">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          Three Phase Testing
                        </h3>
                      </div>
                    </div>
                  </Link>

                  {/* Service Card 5 */}
                  <Link href="/service/microwave-testing">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <img
                          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/Microwave-Testing.jpg.bv.webp?bv_host=www.powerq.com.au"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay - appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="mb-3">
                            <div className="w-12 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                          </div>
                          <p className="text-white text-xs lg:text-sm mb-3 leading-relaxed px-2">
                          PowerQ provides precise microwave leakage testing to ensure appliance safety and compliance.
                          </p>
                        
                        </div>
                      </div>
                      <div className="p-4 lg:p-6 text-center">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          Microwave Testing
                        </h3>
                      </div>
                    </div>
                  </Link>

                  {/* Service Card 6 */}
                  <Link href="/service/emergency-exit-light-testing">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <img
                          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/green-emergency-exit-sign-ceiling_53876-123089.jpg.bv.webp"
                          alt="Emergency Exit Light Testing"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay - appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="mb-3">
                            <div className="w-12 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                          </div>
                          <p className="text-white text-xs lg:text-sm mb-3 leading-relaxed px-2">
                          PowerQ ensures your emergency exit lights are fully functional and compliant with safety standards.
                          </p>
                       
                        </div>
                      </div>
                      <div className="p-4 lg:p-6 text-center">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          Emergency Exit Light Testing
                        </h3>
                      </div>
                    </div>
                  </Link>

                  {/* Service Card 7 */}
                  <Link href="/service/smoke-alarm-service">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <img
                          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/fire-gda479faea_640.jpg.bv.webp?bv_host=www.powerq.com.au"
                          alt="Smoke Alarm Service"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay - appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="mb-3">
                            <div className="w-12 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                          </div>
                          <p className="text-white text-xs lg:text-sm mb-3 leading-relaxed px-2">
                          PowerQ offers professional smoke alarm testing and servicing for reliable fire detection.
                          </p>
                         
                        </div>
                      </div>
                      <div className="p-4 lg:p-6 text-center">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          Smoke Alarm Service
                        </h3>
                      </div>
                    </div>
                  </Link>

                  {/* Service Card 8 */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="relative h-48 lg:h-56 overflow-hidden">
                      <img
                        src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/electrician-working_53876-16064-600x443.jpg.bv.webp"
                        alt="Portable Appliance Testing"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay - appears on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Hover Content */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="mb-3">
                          <div className="w-12 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                        </div>
                        <p className="text-white text-xs lg:text-sm mb-3 leading-relaxed px-2">
                        Portable Appliance Testing ensures your electrical appliances are safe, compliant, and ready for everyday use.
                        </p>
                      
                      </div>
                    </div>
                    <div className="p-4 lg:p-6 text-center">
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                        Portable Appliance Testing
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose PowerQ Section */}
            <div className="bg-white py-16">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10 text-center">
                  Why Choose PowerQ For Testing & Tagging In Melbourne
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Image */}
                  <div className="relative">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                        alt="Electrician testing electrical panel with multimeter"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Banner */}
                      <div className="absolute top-4 left-4 bg-[#FF6B6B] px-4 py-2 rounded">
                        <span className="text-white font-bold text-sm">Power Cord Testing</span>
                      </div>
                      {/* Logo and Contact Info Overlay */}
                      <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-3 rounded-lg shadow-md">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          Power<span className="text-[#FF6B6B]">Q</span>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">Test & Tag Service</div>
                        <div className="text-sm font-semibold text-gray-900">04 3372 3389</div>
                        <div className="text-xs text-gray-600">www.powerq.com.au</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Text and Button */}
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      At PowerQ, we understand how hazardous an electrocution event can be, which is why we make sure you are prepared with regular testing/tagging.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We believe that electrical safety is paramount and a priority for any workplace. Testing and tagging are essential to ensure all equipment at your workplace is safe to use. If you employ people who use electrical appliances frequently, having regular testing/tagging of appliances is critical to protect against any potential injury or death from electrocution. We have the expertise and experience needed to thoroughly test and tag your equipment so that it complies with{" "}
                      <span className="text-blue-600 font-semibold">OHS standards</span>. With PowerQ you can rest assured that your equipment is safe and giving you peace of mind with our competitive rates we make sure you get best value for money.
                    </p>
                    <button
                      onClick={() => handleGetQuoteClick("")}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase transition-colors duration-300"
                    >
                      REQUEST A QUOTE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* We Offer Our Services All Over Melbourne Banner */}
            <div className="relative bg-gradient-to-t from-red-600 via-red-500 to-red-600 py-20 lg:py-24 overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              </div>
              
              {/* White strip at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
              {/* White strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
              
              <div className="relative z-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="flex flex-col items-center justify-center text-center">
                  {/* Blue Box with enhanced styling */}
                 
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-white text-center leading-tight drop-shadow-lg mb-5">
                      We Offer Our Services All Over Melbourne
                    </h2>
                  
                  
                  
                  
                  {/* Green Button with enhanced styling */}
                  <button
                    onClick={() => handleGetQuoteClick("")}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-10 rounded-xl text-lg uppercase transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-2 border-white/20"
                  >
                    REQUEST A QUOTE
                  </button>
                </div>
              </div>
            </div>

            {/* What Our Client Say Section */}
            <div className="bg-gray-100 py-16">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-10">
                  What Our Client Say
                </h2>
                <div className="relative">
                  {/* Left Arrow */}
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
                    aria-label="Previous testimonials"
                  >
                    <FaChevronLeft className="text-gray-600 text-xl" />
                  </button>

                  {/* Scrollable Container */}
                  <div 
                    ref={testimonialScrollRef}
                    className="overflow-x-hidden scrollbar-hide pb-4 mx-auto"
                    style={{ 
                      scrollbarWidth: 'none', 
                      msOverflowStyle: 'none',
                      width: '100%',
                      maxWidth: 'calc(320px * 3 + 24px * 2)'
                    }}
                  >
                    <div
                      className="flex gap-6 transition-all duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentTestimonialIndex * (320 + 24)}px)` }}
                    >
                      {testimonials.map((testimonial) => (
                        <div 
                          key={testimonial.id} 
                          className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-lg p-6 min-w-[320px] max-w-[320px] flex-shrink-0 text-center flex flex-col items-center space-y-3 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                          <div className="absolute inset-x-0 top-0 h-1  opacity-70" />
                          <div className="flex items-center justify-center mb-2">
                            <div className={`relative w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center mr-3 ${testimonial.hasImage ? 'overflow-hidden' : ''}`}>
                              {testimonial.hasImage ? (
                            <Image
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                              ) : (
                                <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                              )}
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-gray-200">
                              <span className="text-xs font-bold text-blue-600">G</span>
                            </div>
                          </div>
                            <div className="text-center">
                              <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                              <p className="text-sm text-gray-500">{testimonial.date}</p>
                          </div>
                        </div>
                          <div className="flex items-center justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
                          ))}
                          <FaCheckCircle className="text-blue-600 ml-2 text-sm" />
                        </div>
                          <p className="text-gray-700 text-sm leading-relaxed px-2">
                            {testimonial.text}
                        </p>
                          {testimonial.hasReadMore && (
                            <button className="text-blue-600 text-sm mt-1 hover:underline">Read more</button>
                          )}
                      </div>
                      ))}
                        </div>
                      </div>

                  {/* Right Arrow */}
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
                    aria-label="Next testimonials"
                  >
                    <FaChevronRight className="text-gray-600 text-xl" />
                    </button>
                </div>
              </div>
            </div>

          </div>
        </Layout>
      )}
    </>
  );
};

export default Home;
