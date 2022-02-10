import { useState } from "react";
import "./ProjectCard.module.css";
function ProjectCard(props) {
  const [showText, setShowText] = useState(false);
  console.log(props.image);

  function onMouseShow(e) {
    setShowText(true);
  }
  function onMouseHide() {
    setShowText(false);
  }
  return (
    <div
      className="projectCard"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={onMouseShow}
      onMouseLeave={onMouseHide}
    >
      <h3 className="header">{props.title}</h3>
      <div className="displayInfo">
        {showText && <p>{props.description}</p>}
        {showText && (
          <div className="tags">
            <ul>
              {props.tags.map((tag) => (
                <li key={tag}>{tag.tag}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
