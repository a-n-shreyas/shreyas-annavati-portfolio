import './Education.css';

const SCHOOLS = [
  {
    range: '2024 — 2025',
    school: 'University of Birmingham',
    degree: 'MSc Advanced Computer Science',
    note: 'Postgraduate study in the UK, deepening the systems and ML foundations behind the AI work that followed.',
  },
  {
    range: '2018 — 2022',
    school: 'Dayananda Sagar Academy of Technology and Management',
    degree: 'B.E. Computer Science and Engineering',
    note: 'Undergraduate foundation in computer science, engineering practice and software fundamentals.',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Education</span>
            <h2>Where the foundations came from</h2>
          </div>
          <span className="section-index mono">03 / EDUCATION</span>
        </div>

        <div className="education">
          {SCHOOLS.map((s) => (
            <article key={s.school} className="education__card">
              <span className="education__range mono">{s.range}</span>
              <h3>{s.school}</h3>
              <p className="education__degree mono">{s.degree}</p>
              <p className="education__note">{s.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
