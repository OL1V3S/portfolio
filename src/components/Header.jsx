import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about", section: "about" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Contact", href: "#contact", section: "contact" },
];

function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  return (
    <button className="icon-button theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`}>
      {theme === "dark" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.7 15.1A9 9 0 1 1 8.9 3.3 7 7 0 0 0 20.7 15.1Z"/></svg>
      )}
    </button>
  );
}

export default function Header({ activeSection }) {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* Keep the in-session theme if storage is unavailable. */ }
    setTheme(next);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a className="logo" href="#top" onClick={() => setMenuOpen(false)} aria-label="Oliver Triana, back to top">
          <span className="logo-mark" aria-hidden="true">OT</span>
          <span>Oliver Triana</span>
        </a>

        <div className="nav-right">
          <nav id="primary-navigation" className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.section} href={item.href} className={activeSection === item.section ? "active" : ""} aria-current={activeSection === item.section ? "location" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="nav-resume" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
          </nav>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button className="icon-button nav-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
