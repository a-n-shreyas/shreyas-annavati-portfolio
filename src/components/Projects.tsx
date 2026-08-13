import './Projects.css';

const PROJECTS = [
  {
    name: 'Synthetic People AI Platform',
    role: 'AI-powered market research product',
    stat: { value: '30+', label: 'components shipped' },
    description:
      'The company\u2019s market research platform, built solo on the frontend from an empty repository. Conversational research flows powered by GPT-4.5 and Claude, backed by RAG and a FastAPI service layer.',
    stack: ['React', 'TypeScript', 'FastAPI', 'RAG', 'Prompt Engineering'],
  },
  {
    name: 'Real-Time ICS Anomaly Detector',
    role: 'Lightweight transformer for industrial control systems',
    stat: { value: '<1ms', label: 'inference latency' },
    description:
      'A compact transformer model for detecting anomalies in industrial control systems, with a scaled-down preprocessing pipeline built for constrained, real-time environments.',
    stack: ['Python', 'PyTorch', 'Signal Processing'],
  },
  {
    name: 'StudySync',
    role: 'Real-time collaborative learning platform',
    stat: { value: '100+', label: 'concurrent users' },
    description:
      'A collaborative study platform with live WebSocket sessions. Rebuilt the rendering and API layer to cut redundant network requests by 30%.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Things that shipped</h2>
          </div>
          <span className="section-index mono">03 / PROJECTS</span>
        </div>

        <div className="projects">
          {PROJECTS.map((p, i) => (
            <article key={p.name} className="project">
              <div className="project__index mono">{String(i + 1).padStart(2, '0')}</div>
              <div className="project__body">
                <h3>{p.name}</h3>
                <p className="project__role mono">{p.role}</p>
                <p className="project__desc">{p.description}</p>
                <div className="project__stack">
                  {p.stack.map((s) => (
                    <span key={s} className="mono">{s}</span>
                  ))}
                </div>
              </div>
              <div className="project__stat">
                <span className="project__stat-value">{p.stat.value}</span>
                <span className="project__stat-label mono">{p.stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
