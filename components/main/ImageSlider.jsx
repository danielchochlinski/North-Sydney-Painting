import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import ImgComp from "./ImgComp"

function ImageSlider(props) {
  let slideArray = [<ImgComp src={"/1.jpg"} />];

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

        <button className="button left" onClick={goLeftHandler}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="button right" onClick={goRightHandler}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
       
      </div>
  );
}

export default ImageSlider;
