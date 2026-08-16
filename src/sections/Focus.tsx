import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { focusAreas } from '../data/focus';

export default function Focus() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          codeLabel="// focus.log"
          title="How I Work"
          description="No client testimonials to share yet — here's a more honest picture of where my engineering focus actually is."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {focusAreas.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.06}>
              <div className="card h-full p-7">
                <span className="code-label">{f.label}</span>
                <h3 className="mt-3 text-lg font-bold text-text">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
