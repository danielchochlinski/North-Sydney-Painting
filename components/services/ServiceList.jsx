import { Fragment } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceItem from "./ServiceItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ourServiceJSON = require("../../assets/ourService.json");

const ServiceList = () => {
  return (
    <div className="serviceList">
      <h1 id="services" className="header">
        Our Services
      </h1>

      <Swiper
        style={{
          position: "relative",
          marginLeft: "20px",
          top: "-100px",
          width: "90%",
          height: "90%",
        }} // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          650: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => swiper}
        onSlideChange={() => "slide change"}
      >
        {ourServiceJSON.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceItem
              title={service.title}
              description={service.description}
              image={service.image}
              key={service.title}
            />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default ServiceList;
