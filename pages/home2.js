import React, { useState, useEffect } from 'react';
import Projects2 from '../components/Projects2';
import TypingAnimation from '../components/TypingAnimation';
import useTypingAnimation from '../hooks/useTypingAnimation';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [typingCompleted, setTypingCompleted] = useState(false);

  // Toggle debug mode for the typing animation

  const debugMode = false; // Change this to true/false for debugging
  const shouldPlayAnimation = useTypingAnimation(debugMode ? true : null);

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
    const timeoutDuration = shouldPlayAnimation ? 3300 : 400; // Scroll effect disable timeout
    const timer = setTimeout(() => {
      setTypingCompleted(true);
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [shouldPlayAnimation]);


  // Page Content

  return (
    <>
      <main>
        <div className={`container mx-auto px-4 lg:space-x-8 ${scrolled ? 'scrolled' : ''}`}>
          <div className=''>
            <div className={`intro-description ${scrolled ? 'scrolled' : ''}`}>
            {shouldPlayAnimation ? (

                // Typing Text

                <>
                  <TypingAnimation onComplete={() => setTypingCompleted(true)} />
                  <p className='mt-10 max-w-lg fade-in delay-1h'>
                    I’m a digital product designer, working at the intersection ↔ of design and engineering, passionate about crafting thoughtful human interactions with technology.
                  </p>
                </>

              ) : (

                // Static Text

                <>
                  <div className="fade-in delay-1 intro-header">
                    <p>Adam Kuzma,</p>
                    <p className='typing-cursor inline-block'>Product Designer.</p>
                  </div>
                  <p className='mt-10 max-w-lg fade-in delay-2'>
                    I’m a digital product designer, working at the intersection ↔ of design and engineering, passionate about crafting thoughtful human interactions with technology.
                  </p>
                </>
              )}
            </div>
            <Projects2 scrolled={scrolled} useStaticVariant={!shouldPlayAnimation} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;