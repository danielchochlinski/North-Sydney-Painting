import "./ServiceItem.module.css"
function ServiceItem (props) {
    return (
      <div className="item">
        <div
          style={{
            background: `url(${props.image})`,
            backgroundSize: "cover",
            width: "400px;",
            height: "400px",
            marginTop: "100px",
          }}
        ></div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    );
}

export default ServiceItem