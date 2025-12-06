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
  const cursorRef = useRef(null);
  const magneticOffsetRef = useRef({ x: 0, y: 0 });

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
      }, 300);

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
        magneticOffsetRef.current = { x: 0, y: 0 };
      }}
      className='navigation'
    >
      <Tab setPosition={setPosition} cursorRef={cursorRef} magneticOffsetRef={magneticOffsetRef}><Link onClick={handleScrollToBottom} href="/">Work</Link></Tab>
      <Tab setPosition={setPosition} cursorRef={cursorRef} magneticOffsetRef={magneticOffsetRef}><Link href="/about">About</Link></Tab>
      <Tab setPosition={setPosition} cursorRef={cursorRef} magneticOffsetRef={magneticOffsetRef}><Link href="/contact">Contact</Link></Tab>
      <Tab setPosition={setPosition} cursorRef={cursorRef} magneticOffsetRef={magneticOffsetRef} isThemeSwitch><ThemeSwitch/></Tab>
      <Cursor position={position} cursorRef={cursorRef} magneticOffsetRef={magneticOffsetRef} />
    </ul>
  );
};

const Tab = ({ children, setPosition, isThemeSwitch = false, cursorRef, magneticOffsetRef }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const rafIdRef = useRef(null);
  
  // Separate position tracking for content
  const contentTargetPosRef = useRef({ x: 0, y: 0 });
  const contentCurrentPosRef = useRef({ x: 0, y: 0 });
  
  // Separate position tracking for cursor
  const cursorTargetPosRef = useRef({ x: 0, y: 0 });
  const cursorCurrentPosRef = useRef({ x: 0, y: 0 });

  const animate = () => {
    const ease = 0.2;
    
    // Animate content
    contentCurrentPosRef.current.x += (contentTargetPosRef.current.x - contentCurrentPosRef.current.x) * ease;
    contentCurrentPosRef.current.y += (contentTargetPosRef.current.y - contentCurrentPosRef.current.y) * ease;

    // Animate cursor
    cursorCurrentPosRef.current.x += (cursorTargetPosRef.current.x - cursorCurrentPosRef.current.x) * ease;
    cursorCurrentPosRef.current.y += (cursorTargetPosRef.current.y - cursorCurrentPosRef.current.y) * ease;

    // Apply transform to content
    if (contentRef.current) {
      contentRef.current.style.transform = `translate(${contentCurrentPosRef.current.x}px, ${contentCurrentPosRef.current.y}px)`;
    }

    // Update shared magnetic offset
    magneticOffsetRef.current = { 
      x: cursorCurrentPosRef.current.x, 
      y: cursorCurrentPosRef.current.y 
    };

    // Update cursor directly
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorCurrentPosRef.current.x}px, ${cursorCurrentPosRef.current.y}px)`;
    }

    // Continue animation if still moving
    const contentDx = Math.abs(contentTargetPosRef.current.x - contentCurrentPosRef.current.x);
    const contentDy = Math.abs(contentTargetPosRef.current.y - contentCurrentPosRef.current.y);
    const cursorDx = Math.abs(cursorTargetPosRef.current.x - cursorCurrentPosRef.current.x);
    const cursorDy = Math.abs(cursorTargetPosRef.current.y - cursorCurrentPosRef.current.y);
    
    if (contentDx > 0.01 || contentDy > 0.01 || cursorDx > 0.01 || cursorDy > 0.01) {
      rafIdRef.current = requestAnimationFrame(animate);
    } else {
      rafIdRef.current = null;
    }
  };

  const parallaxIt = (e) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    
    const containerWidth = rect.width;
    const containerHeight = rect.height;
    
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const dx = relX - centerX;
    const dy = relY - centerY;
    
    const maxDimension = Math.max(containerWidth, containerHeight);
    
    const normalizedX = dx / maxDimension;
    const normalizedY = dy / maxDimension;
    
    // Content - subtle movement
    const contentX = normalizedX * 1;
    const contentY = normalizedY * 1;
    
    // Cursor - more intense movement
    const cursorX = normalizedX * 8;
    const cursorY = normalizedY * 8;

    contentTargetPosRef.current = { x: contentX, y: contentY };
    cursorTargetPosRef.current = { x: cursorX, y: cursorY };

    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseMove = (e) => {
    parallaxIt(e);
  };

  const handleMouseOut = () => {
    contentTargetPosRef.current = { x: 0, y: 0 };
    cursorTargetPosRef.current = { x: 0, y: 0 };
    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <li
      ref={containerRef}
      onMouseEnter={() => {
        if (!containerRef.current) return;

        const element = containerRef.current.querySelector('a') || containerRef.current.querySelector('button');
        if (!element) return;

        const { width, left } = element.getBoundingClientRect();
        const parentLeft = containerRef.current.offsetParent.getBoundingClientRect().left;

        if (isThemeSwitch) {
          const extraLeft = 4;
          const extraRight = 0;
          setPosition({
            width: width + extraLeft + extraRight,
            opacity: 1,
            left: left - parentLeft - extraLeft,
          });
        } else {
          const extra = 4;
          setPosition({
            width: width + extra,
            opacity: 1,
            left: left - parentLeft - extra / 2,
          });
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      className={`navigationItem relative z-10 cursor-pointer ${
        isThemeSwitch ? 'themeToggle' : ''
      }`}
    >
      <div
        ref={contentRef}
        style={{ display: 'inline-block', willChange: 'transform' }}
      >
        {children}
      </div>
    </li>
  );
};

const Cursor = ({ position, cursorRef, magneticOffsetRef }) => {
  return (
    <motion.li 
      ref={cursorRef}
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        left: {
          type: "spring",
          stiffness: 180,
          damping: 20,
          mass: 0.7,
        },
        width: {
          type: "spring",
          stiffness: 180,
          damping: 20,
          mass: 0.7,
        },
        opacity: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      style={{ willChange: 'transform', transformOrigin: 'center' }}
      className='navigationHover absolute z-0 h-11 rounded-full' 
    />
  );
};

export default Nav; 