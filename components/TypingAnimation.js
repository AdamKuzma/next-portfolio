import React, { useEffect, useRef } from 'react';

const TypingAnimation = () => {
  const text1 = "Adam Kuzma,";
  const text2 = "Product Designer.";
  let index1 = 0;
  let index2 = 0;

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const cursor = cursorRef.current;

    function typeLine1() {
      if (index1 < text1.length) {
        line1.textContent += text1.charAt(index1);
        index1++;
        setTimeout(typeLine1, 80); // Adjust typing speed
      } else {
        setTimeout(() => {
          typeLine2();
        }, 400); // Wait before starting next line
      }
    }

    function typeLine2() {
      if (index2 < text2.length) {
        line2.textContent += text2.charAt(index2);
        index2++;
        setTimeout(typeLine2, 80); // Adjust typing speed
      }
    }

    // Start typing effect on the first line
    setTimeout(() => {
      typeLine1();
    }, 1000); // Adjust delay before typing starts (1000ms = 1s)

    // Blinking cursor
    const blinkCursor = setInterval(() => {
      cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);

    return () => {
      clearInterval(blinkCursor);
    };
  }, []);

  return (
    <div id="typing-container">
      <h1 id="line1" ref={line1Ref}></h1>
      <br />
      <h1 id="line2" ref={line2Ref}></h1>
      <span ref={cursorRef} className="typing-cursor">|</span>
    </div>
  );
};

export default TypingAnimation;