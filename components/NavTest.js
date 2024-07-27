import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeSwitch from './ThemeSwitch';
import { useRouter } from 'next/router';

const Nav = () => {
  return (
    <div className='navigationWrapper'>
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const router = useRouter();

  const handleScrollToBottom = async (event) => {
    event.preventDefault();

    if (router.pathname === '/') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      await router.push('/?scrollToBottom=true');
    }
  };

  useEffect(() => {
    if (router.query.scrollToBottom) {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 300); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [router.query]);

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className='navigation'
    >
      <Tab setPosition={setPosition}><Link onClick={handleScrollToBottom} href="/">Work</Link></Tab>
      <Tab setPosition={setPosition}><Link href="/about">About</Link></Tab>
      <Tab setPosition={setPosition}><Link href="/contact">Contact</Link></Tab>
      <Tab setPosition={setPosition} isThemeSwitch><ThemeSwitch/></Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, isThemeSwitch = false }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={`navigationItem relative z-10 cursor-pointer ${
        isThemeSwitch ? 'themeToggle' : ''
      }`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return <motion.li animate={position} className='navigationHover absolute z-0 h-11 rounded-full' />;
};

export default Nav;