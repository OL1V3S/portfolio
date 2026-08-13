export default function SectionHeading({ index, title, intro, id }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-index" aria-hidden="true">{index}</p>
      <div>
        <h2 className="section-title" id={id}>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}
