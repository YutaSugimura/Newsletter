import { useEffect, useState } from 'react';
import { MoonIcon } from '../icons/moon';
import { SunIcon } from '../icons/sun';

export const ThemeButton: React.VFC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }, []);

  const toggle = () => {
    const currentValue = localStorage.getItem('theme');
    if (currentValue === null) return;

    if (currentValue === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <button onClick={toggle} className="hover:opacity-60">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
