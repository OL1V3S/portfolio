const iconPath = (fileName) => `${import.meta.env.BASE_URL}icons/${fileName}`;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container section-stack">
        <div className="section-heading">
          <h2 className="section-title">About</h2>
          <p className="section-intro">
            I’m a Computer Science student at the University of Nebraska–Lincoln
            interested in building useful, responsive, and well-structured software.
          </p>
        </div>

        <div className="about-grid">
          <div className="panel">
            <div className="panel-topbar">
              <span className="panel-dot"></span>
              <span className="panel-dot"></span>
              <span className="panel-dot"></span>
              <span className="panel-label">background</span>
            </div>

            <div className="panel-body">
              <p className="section-text">
                I enjoy working on projects that combine clean design with practical
                functionality.
              </p>
            </div>
          </div>

          <div className="panel">
            <div className="panel-topbar">
              <span className="panel-dot"></span>
              <span className="panel-dot"></span>
              <span className="panel-dot"></span>
              <span className="panel-label">stack</span>
            </div>

            <div className="panel-body">
              <ul className="stack-list">
                <li>
                  <img src={iconPath("react.svg")} alt="React" />
                  <span>React / Vite / JavaScript</span>
                </li>

                <li>
                  <img src={iconPath("dotnet.svg")} alt=".NET" />
                  <span>C# / ASP.NET Core</span>
                </li>

                <li>
                  <img src={iconPath("postgresql.svg")} alt="PostgreSQL" />
                  <span>PostgreSQL / SQL / Entity Framework</span>
                </li>

                <li>
                  <img src={iconPath("java.svg")} alt="Java" />
                  <span>Java</span>
                </li>

                <li>
                  <img src={iconPath("python.svg")} alt="Python" />
                  <span>Python</span>
                </li>

                <li>
                  <img src={iconPath("git.svg")} alt="Git" />
                  <span>Git</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}