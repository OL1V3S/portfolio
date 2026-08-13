import SectionHeading from "./SectionHeading";

const roles = [
  {
    company: "Metropolitan Utilities District",
    role: "Information Technology Intern — Applications Development",
    date: "Feb. 2026 – Present",
    summary: "Building and improving internal, database-backed applications used across utility workflows.",
    bullets: [
      "Deliver functionality across Java, JSP, JavaScript, SQL, REST API, DAO, frontend, and database layers.",
      "Improve GIS and SAP workflows through validation, duplicate-submission prevention, debugging, clearer feedback, and ArcGIS auto-zoom.",
      "Coordinate production changes across repositories and databases while improving maintainability with reusable date validation and properties-based configuration.",
    ],
  },
  {
    company: "Raikes School Design Studio",
    role: "Design Studio Associate",
    date: "Aug. 2026 – Present",
    summary: "Selected for a year-long, industry-sponsored software development program working with an external client to design and deliver a production-oriented software solution.",
  },
];

function ExperienceItem({ item }) {
  return (
    <article className="experience-item" data-reveal>
      <div className="experience-meta"><p>{item.date}</p><span aria-hidden="true"></span></div>
      <div className="experience-content">
        <p className="experience-company">{item.company}</p>
        <h3>{item.role}</h3>
        <p>{item.summary}</p>
        {item.bullets && <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section section-alt" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading index="02" title="Experience" id="experience-title" intro="Professional work building software with real users, systems, and delivery constraints." />
        <div className="experience-list">{roles.map((item) => <ExperienceItem item={item} key={item.company} />)}</div>
      </div>
    </section>
  );
}
