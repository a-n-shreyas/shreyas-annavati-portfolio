// import { type , useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

export default function Contact() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`);
  //   const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  //   window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  // }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          codeLabel="// contact.ts"
          title="Let's Build Something Useful"
          description={`Currently exploring Software Engineer, Full-Stack and AI Engineer opportunities${
            profile.openToWork ? ' — reach out if that\u2019s what you\u2019re hiring for.' : '.'
          }`}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="card flex items-center gap-4 p-5 transition hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm text-text-faint">Email</p>
                  <p className="font-mono text-sm text-text">{profile.email}</p>
                </div>
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center gap-4 p-5 transition hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Linkedin size={18} />
                </span>
                <div>
                  <p className="text-sm text-text-faint">LinkedIn</p>
                  <p className="font-mono text-sm text-text">Shreyas Annavati</p>
                </div>
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center gap-4 p-5 transition hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Github size={18} />
                </span>
                <div>
                  <p className="text-sm text-text-faint">GitHub</p>
                  <p className="font-mono text-sm text-text">a-n-shreyas</p>
                </div>
              </a>
            </div>
          </Reveal>

          {/* <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="card space-y-5 p-7 shadow-card">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-mono uppercase tracking-wide text-text-faint">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-mono uppercase tracking-wide text-text-faint">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-wide text-text-faint">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
              >
                Send Message →
              </button>
              <p className="text-xs text-text-faint">
                Opens your email client with this pre-filled — there&rsquo;s no backend wired up yet.
              </p>
            </form>
          </Reveal> */}
        </div>
      </div>

      <div className="container-px mx-auto mt-20 max-w-container border-t border-border pt-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-text-faint sm:flex-row">
          <span className="font-mono">shreyas.</span>
          <span>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind.</span>
        </div>
      </div>
    </section>
  );
}
