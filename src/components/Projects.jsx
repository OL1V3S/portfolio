import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container section-stack">
        <div className="section-heading">
          <h2 className="section-title">Projects</h2>
          <p className="section-intro">
            A few projects I’ve built while learning frontend and full-stack development.
          </p>
        </div>

        <div className="projects-grid">
          {error && <p className="projects-error">Could not load projects.</p>}

          {projects.map((project, index) => (
            <article className="project-card panel" key={project.title}>
              <div className="panel-topbar">
                <span className="panel-dot"></span>
                <span className="panel-dot"></span>
                <span className="panel-dot"></span>
                <span className="panel-label">
                  project / {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="panel-body project-card-body">
                <p className="project-type">{project.type}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span className="tech-badge" key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && project.github !== "#" && (
                    <a className="project-link" href={project.github} target="_blank">
                      Repository
                    </a>
                  )}

                  {project.live && project.live !== "#" && (
                    <a className="project-link" href={project.live} target="_blank">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}