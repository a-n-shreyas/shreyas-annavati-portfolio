import './Experience.css';

const ROLES = [
  {
    range: 'Feb 2026 — Aug 2026',
    company: 'Synthetic People AI',
    title: 'Software Developer',
    tags: ['React', 'FastAPI', 'RAG', 'GPT-4.5', 'Claude'],
    points: [
      'Architected and built the company\u2019s AI-powered market research platform from scratch as sole frontend engineer — 30+ production pages, 30+ reusable components.',
      'Owned frontend architecture end to end: UI design, state management and scalability decisions, working alongside a three-person engineering team.',
      'Integrated GPT-4.5 and Claude into production workflows for conversational research and automated report generation.',
      'Connected React clients to FastAPI-powered AI services, and contributed to RAG and prompt-engineering work that measurably improved response quality.',
    ],
  },
  {
    range: 'Dec 2022 — Sep 2024',
    company: 'Accenture',
    title: 'Associate Software Developer',
    tags: ['React', 'TypeScript', 'Node.js', 'Banking'],
    points: [
      'Built enterprise banking applications in React, TypeScript and Node.js, supporting 100k+ monthly users.',
      'Built reusable components and optimized performance across customer-facing financial workflows.',
      'Resolved production issues through root-cause analysis, improving stability across several banking modules.',
      'Reviewed code and maintained engineering standards within an Agile, cross-functional team.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Experience</span>
            <h2>Where the work happened</h2>
          </div>
          <span className="section-index mono">02 / TIMELINE</span>
        </div>

        <div className="timeline">
          {ROLES.map((role) => (
            <article key={role.company} className="timeline__row">
              <div className="timeline__marker" aria-hidden="true">
                <span className="timeline__dot" />
                <span className="timeline__line" />
              </div>

              <div className="timeline__range mono">{role.range}</div>

              <div className="timeline__content">
                <h3>{role.company}</h3>
                <p className="timeline__title mono">{role.title}</p>
                <ul>
                  {role.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="timeline__tags">
                  {role.tags.map((t) => (
                    <span key={t} className="mono">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
