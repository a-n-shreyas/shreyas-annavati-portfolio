import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* soft ambient glow, kept subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="container-px relative mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="chip"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          {profile.openToWork ? 'Open to work' : 'Currently building'}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-6xl"
        >
          Hi, I&rsquo;m {profile.name.split(' ')[0]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-mono text-base text-primary sm:text-lg"
        >
          {profile.roles.join(' \u00b7 ')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-text-dim"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
          <a
            href={profile.links.resume}
            className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-text-dim link-underline hover:text-text"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-10 flex items-center gap-5 text-text-dim"
        >
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-primary">
            <Github size={19} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-primary">
            <Linkedin size={19} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-primary">
            <Mail size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
