import ProjectCard from "./ProjectCard";
import "./ProjectList.module.css";
const projectJSON = require("../../assets/project.json");

function ProjectList() {
  return (
    <section id="ourWork" className="projects">
      <div>
        <h1 className="header">Just few of our completed projects.</h1>
      </div>
      <div className="projectList">
        {projectJSON.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
