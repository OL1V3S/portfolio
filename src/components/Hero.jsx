import me from "../assets/me.jpeg";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span aria-hidden="true">//</span> software engineering · may 2027</p>
          <h1 id="hero-title" className="hero-heading">
            Software engineer building <span>reliable full-stack systems.</span>
          </h1>
          <p className="hero-subheading">
            I’m Oliver Triana, a Computer Science student at the University of
            Nebraska–Lincoln. I build backend and full-stack software at Metropolitan
            Utilities District and through Raikes School Design Studio.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View projects <span aria-hidden="true">↘</span></a>
            <a className="btn btn-secondary" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="https://github.com/OL1V3S" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-profile" data-reveal>
          <div className="profile-frame">
            <img src={me} alt="Oliver Triana, software engineering student" />
            <div className="profile-index" aria-hidden="true">OT / 27</div>
          </div>
          <div className="availability-note">
            <span className="status-dot" aria-hidden="true"></span>
            <span>Seeking full-time software engineering roles beginning May 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
}
