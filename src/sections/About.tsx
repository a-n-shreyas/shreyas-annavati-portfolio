import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

const TRAITS = ['Clean Components', 'Full-Stack Delivery', 'AI Integration', 'Agile Teams'];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          codeLabel="// about.ts"
          title="About Me"
          description="Frontend-first engineer building full-stack products, now applying that foundation to AI-powered applications."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-text-dim">
              I&rsquo;m a software engineer with 2.5+ years of experience shipping
              production React and TypeScript applications — first on an
              enterprise banking platform at Accenture, and now on an
              AI-powered product as the primary frontend engineer at an
              early-stage startup.
            </p>
            <p className="mt-5 leading-relaxed text-text-dim">
              I completed an MSc in Advanced Computer Science at the
              University of Birmingham, where my dissertation focused on
              building a lightweight Transformer model for real-time anomaly
              detection in Industrial Control Systems. That work sits behind
              how I now approach AI engineering: not as a buzzword, but as an
              extension of solid software engineering — data pipelines, model
              constraints, and the interfaces that make a model usable.
            </p>
            <p className="mt-5 leading-relaxed text-text-dim">
              Day to day, that means I&rsquo;m comfortable owning a frontend
              architecture end to end, wiring it to REST APIs and backend
              services, and increasingly, building the UI layer for products
              powered by LLMs.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {TRAITS.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card overflow-hidden shadow-card">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-text-faint">profile.ts</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-text-dim">
                <code>
                  <span className="text-primary">const</span> engineer = {'{'}
                  {'\n'}  name: <span className="text-accent">&quot;{profile.name}&quot;</span>,
                  {'\n'}  role: <span className="text-accent">&quot;{profile.roles[0]}&quot;</span>,
                  {'\n'}  focus: [
                  {profile.roles.map((r, i) => (
                    <span key={r}>
                      <span className="text-accent">&quot;{r}&quot;</span>
                      {i < profile.roles.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  ],
                  {'\n'}  stack: [<span className="text-accent">&quot;React&quot;</span>, <span className="text-accent">&quot;TypeScript&quot;</span>, <span className="text-accent">&quot;Python&quot;</span>],
                  {'\n'}  experience: <span className="text-accent">&quot;2.5+ years&quot;</span>,
                  {'\n'}  location: <span className="text-accent">&quot;{profile.location}&quot;</span>,
                  {'\n'}  openToWork: <span className="text-primary">{String(profile.openToWork)}</span>,
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
