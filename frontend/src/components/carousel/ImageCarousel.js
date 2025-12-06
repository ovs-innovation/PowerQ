import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5"; // requires a loader
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageCarousel = ({ images, handleChangeImage }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={1}
        navigation={true}
        allowTouchMove={false}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        modules={[Autoplay, Navigation, Pagination, Controller]}
        className="mySwiper image-carousel"
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i + 1} className="group">
            <button onClick={() => handleChangeImage(img)}>
              <Image
                className="border inline-flex items-center justify-center px-3 py-1 mt-2"
                src={img}
                alt="product"
                width={135}
                height={100} 
              />
            </button>
          </SwiperSlide>
        ))}
        {/* <button
          ref={prevRef}
          className="prev"
          style={{
            color: "#EF4036",
            backgroundColor: "rgba(95, 156, 47, 0.1)",
            border: "1px solid #EF4036",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <IoChevronBackOutline />
        </button>
        <button
          ref={nextRef}
          className="next"
          style={{
            color: "#EF4036",
            backgroundColor: "rgba(95, 156, 47, 0.1)",
            border: "1px solid #EF4036",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <IoChevronForward />
        </button> */}
      </Swiper>
    </>
  );
};

export default dynamic(() => Promise.resolve(ImageCarousel), { ssr: false });
