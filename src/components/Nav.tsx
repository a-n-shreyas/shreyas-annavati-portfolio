import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { cn } from '../lib/cn';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-border py-3' : 'py-5'
      )}
    >
      <div className="container-px mx-auto flex max-w-container items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold text-text" onClick={() => setOpen(false)}>
          shreyas annavati<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-[13px] text-text-dim md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="link-underline transition hover:text-text">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-bg transition hover:opacity-90"
          >
            Hire Me →
          </a>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center text-text md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <nav className="container-px mx-auto flex max-w-container flex-col gap-5 py-6 font-mono text-sm text-text-dim">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-text">
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-bg"
              >
                Hire Me →
              </a>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
