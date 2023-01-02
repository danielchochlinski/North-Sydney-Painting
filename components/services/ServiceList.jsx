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
import styles from "./ServiceList.module.css";
const ServiceList = () => {
  return (
    <div className={styles.serviceList}>
      <h1 id="services" className="header">
        Our Services
      </h1>

      <Swiper
        style={{
          position: "relative",
          top: "-100px",
          width: "100%",
          height: "90%",
        }} // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          650: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1320: {
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
