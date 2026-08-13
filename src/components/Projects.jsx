import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading index="03" title="Projects" id="projects-title" intro="Full-stack systems, production delivery, and software built with users and maintainability in mind." />
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div>
      </div>
    </section>
  );
}
