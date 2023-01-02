import ImageSlder from "./ImageSlider";
import "./Main.module.css";
import Typical from "react-typical";
import { Link } from "react-scroll";
let styles = {
  textAlign: "center",
  fontFamily: "Tangerine",
  fontSize: "100px",
};
function Main() {
  return (
    <div className="main">
      <div className="imageSlider" style={styles}>
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

              width: "360px",
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
      </div>
    </div>
  );
}
export default Main;
