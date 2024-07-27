import React, { useState, useEffect } from 'react';
import { Moon, Sun } from '../public/icons';

function ThemeSwitch() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load saved theme from localStorage, or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    const root = document.documentElement;
    if (savedTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    // Save the current theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

    return (
        <button onClick={handleThemeSwitch}>
            <div id="theme-switcher" className="toggle-container" bis_skin_checked="1">
            <div id="icon-container" className="theme-btn light w-8 h-8 flex justify-center align-middle content-center items-center" title="Toggle theme" bis_skin_checked="1">
                {/*<svg id="icon-moon" className="mode-icon moon" width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_938_12552)"> <path d="M6.58045 7.39001C5.7471 6.55015 5.14616 5.50826 4.83649 4.36636C4.52682 3.22446 4.51904 2.02171 4.81391 0.875895C4.0586 1.1889 3.37002 1.64328 2.78516 2.2146C1.59557 3.40419 0.927263 5.01762 0.927263 6.69995C0.927263 8.38228 1.59557 9.99571 2.78516 11.1853C3.97475 12.3749 5.58817 13.0432 7.27051 13.0432C8.95284 13.0432 10.5663 12.3749 11.7559 11.1853C12.3368 10.5961 12.7984 9.9002 13.1153 9.13584C11.9682 9.43715 10.7624 9.43462 9.61661 9.1285C8.4708 8.82239 7.42443 8.22324 6.58045 7.39001V7.39001Z" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                </svg>*/}
                <Moon id="icon-moon" className="mode-icon moon"/>
                <Sun id="icon-sun" className="mode-icon sun"/>
                {/*<svg id="icon-sun" className="mode-icon sun" width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_938_12541)"> <path d="M7 10.25C8.79493 10.25 10.25 8.79493 10.25 7C10.25 5.20507 8.79493 3.75 7 3.75C5.20507 3.75 3.75 5.20507 3.75 7C3.75 8.79493 5.20507 10.25 7 10.25Z" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7 0.5V1.5" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7 12.5V13.5" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13.5 7H12.5" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M1.5 7H0.5" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.5996 2.3999L10.8896 3.1099" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3.11039 10.8899L2.40039 11.5999" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.5996 11.5999L10.8896 10.8899" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3.11039 3.1099L2.40039 2.3999" stroke="var(--text-primary)" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                </svg>*/}
            </div>
            </div>
        </button>
    );
  }

  export default ThemeSwitch;