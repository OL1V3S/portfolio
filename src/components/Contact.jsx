export default function Contact() {
    return (
      <section id="contact" className="section">
        <div className="container section-stack">
          <div className="section-heading">
            <h2 className="section-title">Contact</h2>
            <p className="section-intro">
              Feel free to reach out or check out my work.
            </p>
          </div>
  
          <div className="contact-panel panel">
            <div className="panel-topbar">
              <span className="panel-dot"></span>
              <span className="panel-dot"></span>
              <span className="panel-dot"></span>
              <span className="panel-label">links</span>
            </div>
  
            <div className="panel-body">
              <ul className="contact-list">
                <li>
                  <span className="contact-label">email</span>
                  <a href="mailto:olivertriana7319@gmail.com">olivertriana7319@gmail.com</a>
                </li>
                <li>
                  <span className="contact-label">github</span>
                  <a href="https://github.com/OL1V3S" target="_blank">
                    github.com/OL1V3S
                  </a>
                </li>
                <li>
                  <span className="contact-label">linkedin</span>
                  <a href="https://www.linkedin.com/in/oliver-triana/" target="_blank">
                  linkedin.com/in/oliver-triana/
                  </a>
                </li>
                <li>
                    <span className="contact-label">resume</span>
                    <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">
                    View resume
                    </a>                
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
