import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Nav.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
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
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__mark" onClick={() => setOpen(false)}>
          <span className="nav__mark-dot" />
          SA<span className="mono nav__mark-tag">.dev</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="mono">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <ThemeToggle />
          <a href="#contact" className="nav__cta mono">
            Get in touch
          </a>
        </div>

        <button
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav__mobile mono" aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="nav__mobile-footer">
            <a href="#contact" onClick={() => setOpen(false)} className="nav__mobile-cta">
              Get in touch
            </a>
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}