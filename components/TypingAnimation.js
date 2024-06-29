import React, { useEffect, useRef } from 'react';

const TypingAnimation = () => {
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
        line1Ref.current.textContent += text1.charAt(index1.current);
        index1.current++;
        setTimeout(typeLine1, typingSpeed);
      } else {
        line1Ref.current.classList.remove('typing-cursor'); // Remove cursor after typing
        setTimeout(() => {
          line2Ref.current.classList.add('typing-cursor'); // Add cursor to next line
          typeLine2();
        }, 400); // Wait before starting next line
      }
    };

    const typeLine2 = () => {
      if (index2.current < text2.length) {
        line2Ref.current.textContent += text2.charAt(index2.current);
        index2.current++;
        setTimeout(typeLine2, typingSpeed);
      } else {

      }
    };

    const startTyping = setTimeout(() => {
      line1Ref.current.classList.add('typing-cursor'); // Add cursor to first line
      typeLine1();
    }, 1000); // Adjust delay before typing starts (1000ms = 1s)

    return () => {
      clearTimeout(startTyping);
    };
  }, []);

  return (
    <div id="typing-container" className='mt-44 lg:mt-64 intro-header'>
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
