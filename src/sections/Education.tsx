import { GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          codeLabel="// education.json"
          title="Education"
          description="Academic foundation, including the dissertation research behind my AI engineering direction."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.institution} delay={i * 0.08}>
              <div
                className={
                  'card h-full p-7 shadow-card ' + (e.emphasis ? 'border-primary/40 lg:p-8' : '')
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <GraduationCap size={20} />
                  </div>
                  {e.emphasis && <span className="chip border-primary/40 text-primary">Postgraduate</span>}
                </div>

                <h3 className={'mt-5 font-bold text-text ' + (e.emphasis ? 'text-2xl' : 'text-xl')}>
                  {e.degree}
                </h3>
                <p className="mt-1 text-text-dim">
                  {e.institution} <span className="text-text-faint">&middot; {e.location}</span>
                </p>
                <p className="mt-1 font-mono text-xs text-text-faint">{e.range}</p>

                {e.detail && (
                  <div className="mt-5 rounded-lg border border-border bg-surface-2 px-4 py-3">
                    <p className="font-mono text-xs uppercase tracking-wide text-text-faint">
                      {e.detail.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-dim">{e.detail.value}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
