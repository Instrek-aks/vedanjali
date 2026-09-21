import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem('vc-theme');
    } catch (e) {}
    if (saved === 'dark') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('vc-theme', nextTheme);
    } catch (e) {}
  };

  return (
    <div className="tgl-wrap">
      <button
        id="tgl"
        className="tgl-btn"
        type="button"
        role="switch"
        aria-checked={theme === 'dark'}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="tgl-knob">
          <svg className="ic-sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
          </svg>
          <svg className="ic-moon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </span>
      </button>
      <span className="tgl-lbl" id="tglLbl">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </div>
  );
}
