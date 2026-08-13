function ExternalLink({ href, children, primary = false }) {
  return (
    <a className={primary ? "project-link project-link-primary" : "project-link"} href={href} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function ProjectCard({ project, index }) {
  return (
    <article className={`project-card${project.featured ? " project-featured" : ""}`} data-reveal>
      <div className="project-header">
        <div>
          <p className="project-number">{String(index + 1).padStart(2, "0")} / {project.featured ? "featured build" : "selected build"}</p>
          <p className="project-type">{project.type}</p>
        </div>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="project-body">
        <div className="project-summary">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech" aria-label={`${project.title} technologies`}>
            {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>
      <div className="project-links">
        {project.live && <ExternalLink href={project.live} primary>Live {project.featured ? "app" : "site"}</ExternalLink>}
        <ExternalLink href={project.github}>GitHub repository</ExternalLink>
      </div>
    </article>
  );
}
