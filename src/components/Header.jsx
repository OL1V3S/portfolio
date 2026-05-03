import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.body.dataset.theme = saved;
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.body.dataset.theme = next;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a className="logo" href="#top" onClick={closeMenu}>
          <span className="logo-text">Oliver</span>
        </a>

        <div className="nav-right">
          <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
            <a href="#top" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <button className="theme-toggle" onClick={toggleTheme} type="button">
            {theme === "dark" ? "☀︎" : "☾"}
          </button>

          <button
            className={`nav-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
            aria-label="Toggle navigation menu"
            >
            ☰
        </button>
        </div>
      </div>
    </header>
  );
}