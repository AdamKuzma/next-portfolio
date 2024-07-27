import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeSwitch from './ThemeSwitch';
import Tooltip from './Tooltip';
import { motion } from 'framer-motion';
import { Home, Work, Photos, About, Connect } from '../public/icons';


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
      <Tab setPosition={setPosition} tooltipText="Home"><Link href="/"> <Home /> </Link></Tab>
      <Tab setPosition={setPosition} tooltipText="Work"><Link onClick={handleScrollToBottom} href="/"> <Work /> </Link></Tab>
      <Tab setPosition={setPosition} tooltipText="Photos"><Link href="/photos"> <Photos /> </Link></Tab>
      <Tab setPosition={setPosition} tooltipText="About"><Link href="/about"> <About /> </Link></Tab>
      <Tab setPosition={setPosition} tooltipText="Contact"><Link href="/contact"> <Connect /> </Link></Tab>
      <Tab setPosition={setPosition} tooltipText="Theme" isThemeSwitch> <ThemeSwitch/> </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, tooltipText, isThemeSwitch = false }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
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

        setTooltipVisible(true);
      }}

      onMouseLeave={() => {
        setTooltipVisible(false);
      }}
      className={`navigationItem relative z-10 cursor-pointer ${
        isThemeSwitch ? 'themeToggle' : ''
      }`}
    >
      {children}
      <Tooltip visible={tooltipVisible} text={tooltipText} />
    </li>
  );
};

const Cursor = ({ position }) => {
  return <motion.li animate={position} className='navigationHover absolute z-0 h-11 rounded-full' />;
};

export default Nav;