import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Typical from "react-typical";
import ImgComp from "./ImgComp";
import image1 from "../../public/1.jpg";
import { Link } from "react-scroll";

let styles = {
  textAlign: "center",
  fontFamily: "Tangerine",
  marginTop: "300px",
  fontSize: "100px",
};

function ImageSlider(props) {
  let slideArray = [
    <div key="1234" className="front" style={styles}>
      <h1>
        <Typical
          look={Infinity}
          wrapper="b"
          steps={[`North Sydney Painting & Decorating`, 100]}
        />
      </h1>
      <a id="contactUs" className="hero_link">
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          offset={-100}
          activeClass="active"
          spy={true}
        />
        <button
          style={{
            zIndex: "99",
            top: "700px",
            left: "35%",
            width: "400px",
            height: "40px",
            borderRadius: "20px",
            color: "white",
            background: "linear-gradient(to right, #fc5c7d, #6a82fb)",
            border: "none",
            fontSize: "20px",
          }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-100}
            activeClass="active"
            spy={true}
          >
            GET QUOTE
          </Link>
        </button>
      </a>
    </div>,
  ];

  const [x, setX] = useState(0);

  function goLeftHandler() {
    x === 0 ? setX(-100 * (slideArray.length - 1)) : setX(x + 100);
  }

  function goRightHandler() {
    console.log(x);
    x === -100 * (slideArray.length - 1) ? setX(0) : setX(x - 100);
  }
  return (
    <div className="slider">
      {slideArray.map((pic, index) => (
        <div
          key={index}
          className="slide"
          style={{ transform: `translateX(${x}%)` }}
        >
          {pic}
        </div>
      ))}

      {/* <button className="button left" onClick={goLeftHandler}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="button right" onClick={goRightHandler}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button> */}
    </div>
  );
}

export default ImageSlider;
