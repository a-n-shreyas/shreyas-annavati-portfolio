import { ExternalLink, Github } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          codeLabel="// projects.ts"
          title="Featured Projects"
          description="Selected work spanning applied machine learning, collaborative platforms, and production AI application frontends."
        />

        <div className="mt-14 space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div
                className={
                  'card overflow-hidden shadow-card ' +
                  (p.flagship ? 'border-primary/40' : '')
                }
              >
                <div className="grid gap-6 p-7 lg:grid-cols-[1fr_260px] lg:gap-10 lg:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm text-text-faint">{p.index}</span>
                      {p.flagship && (
                        <span className="chip border-primary/40 text-primary">Flagship</span>
                      )}
                      <span className="chip">{p.status === 'Completed' ? '✓ Completed' : p.status}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-text sm:text-2xl">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-text-dim">{p.description}</p>

                    <div className="mt-4 rounded-lg border border-border bg-surface-2 px-4 py-3">
                      <p className="font-mono text-xs uppercase tracking-wide text-text-faint">Problem</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-dim">{p.problem}</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>

                    {(p.github || p.liveDemo) && (
                      <div className="mt-6 flex flex-wrap gap-4">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-text link-underline"
                          >
                            <Github size={16} /> GitHub
                          </a>
                        )}
                        {p.liveDemo && (
                          <a
                            href={p.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary link-underline"
                          >
                            Live Demo <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {p.metric && (
                    <div className="flex items-center justify-center rounded-xl border border-border bg-surface-2 p-6 lg:p-8">
                      <div className="text-center">
                        <p className="font-mono text-4xl font-bold text-primary sm:text-5xl">
                          {p.metric.value}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-wide text-text-faint">
                          {p.metric.label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
