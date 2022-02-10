import "./Main.module.css";
function ImgComp({ src, alt }) {
  let imgStyle = {
    width: "100%",
    height: "auto",
  };
  return <img src={src} alt="caruselImages" style={imgStyle} />;
}

export default ImgComp;
