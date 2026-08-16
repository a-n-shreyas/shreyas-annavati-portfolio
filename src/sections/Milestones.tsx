import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { milestones } from '../data/milestones';

export default function Milestones() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading codeLabel="// milestones.log" title="Career Milestones" />

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-1/2" />
          <ol className="space-y-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year + m.label} delay={i * 0.05}>
                <li className="relative flex gap-6 sm:justify-center">
                  <div
                    className={
                      'flex w-full items-start gap-5 sm:w-1/2 ' +
                      (i % 2 === 0 ? 'sm:pr-10 sm:mr-auto sm:flex-row-reverse sm:text-right' : 'sm:pl-10 sm:ml-auto')
                    }
                  >
                    <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-surface font-mono text-xs font-semibold text-primary">
                      {m.year.slice(2)}
                    </span>
                    <div className="pt-1.5">
                      <p className="font-mono text-sm text-primary">{m.year}</p>
                      <p className="mt-1 text-sm text-text-dim">{m.label}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
