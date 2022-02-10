import Image from "next/image"
function TestimonialItem(props) {
  return (
    <div className="testimonialItem">
      <div style={{marginTop: "-30px", width: "100px", height: "50px", background: `url("/stars2.png")`, backgroundSize: "cover"}}></div>
      <p>"{props.review}"</p>
      <h3>- {props.name}</h3>
      <h5>{props.title}</h5>
    </div>
  );
}

export default TestimonialItem;
