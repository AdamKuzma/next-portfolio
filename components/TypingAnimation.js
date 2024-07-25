import React, { useEffect, useRef } from 'react';

const TypingAnimation = ({ onComplete }) => {
  const text1 = "Adam Kuzma,";
  const text2 = "Product Designer.";
  const index1 = useRef(0);
  const index2 = useRef(0);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const typingSpeed = 70; // Adjust typing speed here (in milliseconds)

    const typeLine1 = () => {
      if (index1.current < text1.length) {
        if (line1Ref.current) {
          line1Ref.current.textContent += text1.charAt(index1.current);
        }
        index1.current++;
        setTimeout(typeLine1, typingSpeed);
      } else {
        if (line1Ref.current) {
          line1Ref.current.classList.remove('typing-cursor'); // Remove cursor after typing
        }
        setTimeout(() => {
          if (line2Ref.current) {
            line2Ref.current.classList.add('typing-cursor'); // Add cursor to next line
          }
          typeLine2();
        }, 400); // Wait before starting next line
      }
    };

    const typeLine2 = () => {
      if (index2.current < text2.length) {
        if (line2Ref.current) {
          line2Ref.current.textContent += text2.charAt(index2.current);
        }
        index2.current++;
        setTimeout(typeLine2, typingSpeed);
      } else {
        // Animation complete
        if (onComplete) {
          onComplete();
        }
      }
    };

    const startTyping = setTimeout(() => {
      if (line1Ref.current) {
        line1Ref.current.classList.add('typing-cursor'); // Add cursor to first line
      }
      typeLine1();
    }, 1000); // Adjust delay before typing starts (1000ms = 1s)

    return () => {
      clearTimeout(startTyping);
    };
  }, [onComplete]);

  return (
    <div id="typing-container" className='intro-header'>
      <div className="line-wrapper">
        <div id="line1" ref={line1Ref}></div>
      </div>
      <div className="line-wrapper">
        <div id="line2" ref={line2Ref}></div>
      </div>
    </div>
  );
};

export default TypingAnimation;