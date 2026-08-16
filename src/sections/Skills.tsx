import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          codeLabel="// skills.json"
          title="Technical Skills"
          description="Grouped by domain — frontend and full-stack engineering as the foundation, AI/ML as the growing edge."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.key} delay={i * 0.05}>
              <div className="card h-full p-6 transition hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-text">{group.label}</h3>
                  <span className="font-mono text-xs text-text-faint">{group.items.length}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
