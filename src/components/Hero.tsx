import Waveform from './Waveform';
import './Hero.css';

const READOUT = [
  { value: '2.5+', label: 'years shipping production software' },
  { value: '97%', label: 'anomaly-detection accuracy, <1ms inference' },
  { value: '30+', label: 'components architected solo, in production' },
  { value: '100k+', label: 'monthly users served at Accenture' },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <span className="eyebrow">SIGNAL LIVE — BENGALURU, IN</span>

        <h1 className="hero__title">
          Shreyas Annavati builds the <em>interface layer</em> between people and language models.
        </h1>

        <p className="hero__sub">
          Software developer focused on frontend architecture and applied AI —
          shipping RAG pipelines, LLM-integrated products, and the React
          systems that make them usable.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View the work
          </a>
          <a href="#contact" className="btn btn--ghost mono">
            shreyasmurthy74@gmail.com
          </a>
        </div>
      </div>

      <div className="hero__scope">
        <Waveform variant="hero" />
      </div>

      <div className="container">
        <dl className="hero__readout">
          {READOUT.map((r) => (
            <div key={r.label} className="hero__readout-item">
              <dt className="hero__readout-value">{r.value}</dt>
              <dd className="hero__readout-label mono">{r.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
