import { useEffect, useState } from 'react';
import './ThemeToggle.css';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'light' || attr === 'dark') return attr;
  return 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === 'dark' ? (
        // sun — shown in dark mode, click to go light
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            d="M10 1.8v2M10 16.2v2M18.2 10h-2M3.8 10h-2M15.6 4.4l-1.4 1.4M5.8 14.2l-1.4 1.4M15.6 15.6l-1.4-1.4M5.8 5.8 4.4 4.4"
          />
        </svg>
      ) : (
        // moon — shown in light mode, click to go dark
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            d="M16.5 12.3A7 7 0 0 1 7.7 3.5a7 7 0 1 0 8.8 8.8Z"
          />
        </svg>
      )}
    </button>
  );
}