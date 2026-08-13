import SectionHeading from "./SectionHeading";

const links = [
  { label: "Email", text: "olivertriana7319@gmail.com", href: "mailto:olivertriana7319@gmail.com" },
  { label: "GitHub", text: "github.com/OL1V3S", href: "https://github.com/OL1V3S", external: true },
  { label: "LinkedIn", text: "linkedin.com/in/oliver-triana", href: "https://www.linkedin.com/in/oliver-triana/", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-alt contact-section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading index="04" title="Let’s build something useful." id="contact-title" />
        <div className="contact-grid" data-reveal>
          <div className="contact-copy">
            <p>I’m seeking full-time software engineering and software development opportunities beginning around May 2027.</p>
            <a className="btn btn-primary" href="mailto:olivertriana7319@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
          <ul className="contact-links">
            {links.map((link) => (
              <li key={link.label}>
                <span>{link.label}</span>
                <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>{link.text} {link.external && <span aria-hidden="true">↗</span>}</a>
              </li>
            ))}
            <li>
              <span>Resume</span>
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">View PDF <span aria-hidden="true">↗</span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
