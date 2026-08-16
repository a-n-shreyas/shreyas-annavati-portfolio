import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          codeLabel="// experience.yml"
          title="Work Experience"
          description="Professional journey, achievement-focused, with the technology stack behind each role."
        />

        <div className="mt-14 space-y-10">
          {experience.map((role, i) => (
            <Reveal key={role.company + role.range} delay={i * 0.08}>
              <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
                <div className="flex lg:flex-col lg:items-start">
                  <div>
                    <span className="chip mb-3">{role.type}</span>
                    <p className="font-mono text-sm text-text-faint">Role {String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-1 font-mono text-sm text-text-dim">{role.range}</p>
                  </div>
                </div>

                <div className="card p-7 shadow-card">
                  <h3 className="text-xl font-bold text-text">{role.title}</h3>
                  <p className="mt-1 text-primary">
                    {role.company}
                    {role.companyNote && <span className="text-text-dim"> &middot; {role.companyNote}</span>}
                  </p>
                  {role.project && (
                    <p className="mt-1 font-mono text-xs text-text-faint">{role.project}</p>
                  )}

                  <ul className="mt-5 space-y-3">
                    {role.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed text-text-dim">
                        <span className="mt-1 text-primary">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {role.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
