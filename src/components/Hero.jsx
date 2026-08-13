import { useRef } from "react";
import me from "../assets/me.jpeg";

export default function Hero() {
  const profileRef = useRef(null);

  function handlePointerMove(event) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const frame = profileRef.current;
    if (!frame) return;

    const bounds = frame.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    frame.style.setProperty("--profile-rotate-x", `${vertical * -7}deg`);
    frame.style.setProperty("--profile-rotate-y", `${horizontal * 7}deg`);
    frame.style.setProperty("--profile-scale", "1.012");
  }

  function resetProfileTilt() {
    const frame = profileRef.current;
    if (!frame) return;

    frame.style.setProperty("--profile-rotate-x", "0deg");
    frame.style.setProperty("--profile-rotate-y", "0deg");
    frame.style.setProperty("--profile-scale", "1");
  }

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
            Nebraska–Lincoln. I build backend and full-stack software.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View projects <span aria-hidden="true">↘</span></a>
            <a className="btn btn-secondary" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="https://github.com/OL1V3S" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-profile" data-reveal>
          <div ref={profileRef} className="profile-frame" onPointerMove={handlePointerMove} onPointerLeave={resetProfileTilt}>
            <img src={me} alt="Oliver Triana, software engineering student" />
            <p className="profile-interaction-hint" aria-hidden="true">Move your cursor over the photo</p>
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
