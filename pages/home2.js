import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import SayHi from '../components/SayHi';
import Projects2 from '../components/Projects2';
import TypingAnimation from '../components/TypingAnimation';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typingCompleted) {
        setScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [typingCompleted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingCompleted(true);
    }, 3300); // Set to 3.3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main>
        <div className={`container mx-auto px-4 lg:space-x-8 ${scrolled ? 'scrolled' : ''}`}>
          <div className='mt-[25%]'>
            <div className={`intro-description ${scrolled ? 'scrolled' : ''}`}>
              <TypingAnimation />
              <p className='mt-10 max-w-lg fade-in delay-1h'>
                  I’m a digital product designer, working at the intersection ↔ of design and engineering, passionate about crafting thoughtful human interactions with technology.
              </p>
            </div>
            <Projects2 scrolled={scrolled} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;