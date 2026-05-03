import { useRef } from "react";
import me from "../assets/me.jpeg";

export default function Hero() {
  const imageRef = useRef(null);

  function handleMouseMove(e) {
    const card = imageRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  function handleMouseLeave() {
    const card = imageRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">frontend / full-stack developer</p>

          <h1 className="hero-heading">
            Oliver <span className="accent-text">Triana</span>
          </h1>

          <p className="hero-subheading">
            Computer Science student building clean, practical web applications.
          </p>

        {/*
          <div className="hero-meta">
            <span className="meta-chip">React + Vite</span>
            <span className="meta-chip">ASP.NET Core</span>
            <span className="meta-chip">JavaScript</span>
          </div>
        */}

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-profile-wrap">
          <div
            ref={imageRef}
            className="hero-profile-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={me} alt="Oliver Triana" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}