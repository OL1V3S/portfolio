import SectionHeading from "./SectionHeading";

const stack = [
  { label: "Languages", items: "Java, C#, Python, C, JavaScript, SQL" },
  { label: "Backend", items: "ASP.NET Core, Entity Framework Core, REST APIs, Java / JSP" },
  { label: "Frontend", items: "React, Vite" },
  { label: "Data", items: "PostgreSQL, SQL Server, MySQL" },
  { label: "Engineering", items: "Git, Docker, GitHub Actions, xUnit, ArcGIS" },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="01" title="About" id="about-title" />
        <div className="about-grid" data-reveal>
          <div className="about-copy">
            <p className="about-lead">I’m pursuing a B.S. in Computer Science at UNL, graduating in May 2027 with a 3.94 GPA.</p>
            <p>My work spans backend services, database-backed applications, and the React interfaces around them. I’m currently applying that range in Applications Development at Metropolitan Utilities District and in the Raikes School Design Studio.</p>
            <p>I’m most interested in backend, full-stack, and general software engineering roles where careful implementation and maintainable systems matter.</p>
          </div>
          <div className="stack-panel" aria-label="Technical stack">
            <p className="panel-label">core stack</p>
            <dl className="stack-list">
              {stack.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
