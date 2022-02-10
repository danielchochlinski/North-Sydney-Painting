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


export default () => {
  return (
    <Fragment>
      <h1 id="services" className="header">Our Services</h1>

      <Swiper
        style={{ position: "relative", top: "-100px", width: "90%", height: "90%" }} // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {ourServiceJSON.map((service) => (
          <SwiperSlide>
            <ServiceItem
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </Fragment>
  );
};
