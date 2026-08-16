import Reveal from '../components/Reveal';
import { profile } from '../data/profile';

export default function Stats() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="container-px mx-auto max-w-container">
        <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="px-4 py-10 text-center sm:px-6">
              <div className="font-mono text-3xl font-bold text-text sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-text-dim sm:text-sm">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
