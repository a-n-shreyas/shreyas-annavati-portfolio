import Waveform from './Waveform';
import './Skills.css';

const GROUPS = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript (ES6+)'],
  },
  {
    label: 'Generative AI',
    items: [
      'LLMs',
      'OpenAI GPT-4.5',
      'Anthropic Claude',
      'Google Gemini',
      'Prompt Engineering',
      'RAG',
      'AI Workflow Design',
    ],
  },
  {
    label: 'Frontend',
    items: ['React.js', 'Redux', 'HTML5', 'CSS3', 'Component Architecture'],
  },
  {
    label: 'Backend & Data',
    items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'Docker', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <Waveform variant="divider" flagAnomaly={false} />
      <div className="container skills">
        <div className="section-head">
          <div>
            <span className="eyebrow">Stack</span>
            <h2>What I build with</h2>
          </div>
          <span className="section-index mono">04 / SKILLS</span>
        </div>

        <div className="skills__grid">
          {GROUPS.map((g) => (
            <div key={g.label} className="skills__group">
              <h3 className="mono">{g.label}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
