async function loadProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/projects.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const projects = await response.json();
    grid.innerHTML = "";

    projects.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card panel";

      const techHTML = (project.tech || [])
        .map((item) => `<span class="tech-badge">${item}</span>`)
        .join("");

      const githubLink = project.github && project.github !== "#"
        ? `<a class="project-link" href="${project.github}" target="_blank" rel="noreferrer">Repository</a>`
        : "";

      const liveLink = project.live && project.live !== "#"
        ? `<a class="project-link" href="${project.live}" target="_blank" rel="noreferrer">Live</a>`
        : "";

      const type = project.type || "Featured Project";

      card.innerHTML = `
        <div class="panel-topbar">
          <span class="panel-dot"></span>
          <span class="panel-dot"></span>
          <span class="panel-dot"></span>
          <span class="panel-label">project / ${String(index + 1).padStart(2, "0")}</span>
        </div>

        <div class="panel-body project-card-body">
          <p class="project-type">${type}</p>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>

          <div class="project-tech">${techHTML}</div>

          <div class="project-links">
            ${githubLink}
            ${liveLink}
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load projects:", error);
    grid.innerHTML = `<p class="projects-error">Could not load projects right now.</p>`;
  }
}