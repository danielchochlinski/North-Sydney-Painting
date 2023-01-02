import { Fragment } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "./TestimonialItem.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const testimonialJSON = require("../../assets/testimonial.json");

const TestimonialList = () => {
  return (
    <div className="testimonialsList">
      <div className="testimonialList" id="testimonials">
        <h2>Testimonials</h2>
        <p>
          5 Stars google review from all our satisfied clients. Be the next one!
        </p>
      </div>
      <Swiper
        style={{
          marginTop: "120px",
          padding: "30px",
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 0 },
          650: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1130: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => swiper}
        onSlideChange={() => "slide change"}
      >
        {testimonialJSON.map((review) => (
          <SwiperSlide key={review.id}>
            <TestimonialItem
              name={review.name}
              title={review.title}
              review={review.review}
              service={review.service}
              key={review.id}
            />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
      <div className="more">
        <ul>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?hl=en-IE&gl=ie&q=North+Sydney+Painting+and+Decorating,+73+Lower+Bent+St,+Neutral+Bay+NSW+2089,+Australia&ludocid=13538309938954931654&lsig=AB86z5VTDwNE5LtD58kdx7j_YbNO#lrd=0x6b12afe2e1b787dd:0xbbe1bd29128c8dc6,3"
          >
            <li>WRITE A REVIEW</li>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?hl=en-IE&gl=ie&q=North+Sydney+Painting+and+Decorating,+73+Lower+Bent+St,+Neutral+Bay+NSW+2089,+Australia&ludocid=13538309938954931654&lsig=AB86z5VTDwNE5LtD58kdx7j_YbNO#lrd=0x6b12afe2e1b787dd:0xbbe1bd29128c8dc6,1"
          >
            <li>READ MORE</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default TestimonialList;
