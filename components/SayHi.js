import React from 'react';
import Link from 'next/link';

function GlitchText({ children, className = '' }) {
  return (
    <span 
      className={`glitch ${className}`}
      data-text={children}
      style={{ 
        fontFamily: "'PP Mondwest', ui-sans-serif, system-ui, sans-serif"
      }}
    >
      {children}
      
      <style jsx>{`
        .glitch {
          position: relative;
          display: inline-block;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 0.02em;
          animation: glitch-trigger 5s infinite, shake-during-glitch 5s infinite;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          pointer-events: none;
          user-select: none;
          mix-blend-mode: screen;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-size: 24px 100%;
          opacity: var(--glitch-opacity, 0);
          animation: text-shake 90ms steps(2, end) infinite;
        }
        
        @keyframes text-shake {
          0% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(1px, 1px, 0); }
          50% { transform: translate3d(-1px, -1px, 0); }
          75% { transform: translate3d(1px, -1px, 0); }
          100% { transform: translate3d(-1px, 1px, 0); }
        }
        
        .glitch::before {
          background-image:
            repeating-linear-gradient(
              90deg,
              #34f7f7 0 12px, transparent 12px 16px,
              #88ff44 16px 28px, transparent 28px 32px,
              #d9a6ff 32px 44px, transparent 44px 48px
            );
        }
        
        .glitch::after {
          background-image:
            repeating-linear-gradient(
              90deg,
              #ff80d5 0 12px, transparent 12px 16px,
              #ffd24a 16px 28px, transparent 28px 32px,
              #6dfc8c 32px 44px, transparent 44px 48px
            );
        }
        
        .glitch::before,
        .glitch::after {
          opacity: var(--glitch-opacity, 0);
          animation:
            glitch-top 500ms steps(6, end) infinite,
            rgb-jitter 90ms steps(2, end) infinite;
        }
        
        .glitch::after {
          animation:
            glitch-bottom 600ms steps(6, end) infinite reverse,
            rgb-jitter 90ms steps(2, end) infinite reverse;
        }
        
        .glitch::before {
          animation-delay: 0s;
          animation-duration: 600ms, 90ms;
        }
        
        .glitch::after {
          animation-delay: 0s;
          animation-duration: 600ms, 90ms;
        }
        
        .glitch {
          animation: glitch-trigger 5s infinite;
        }
        
        @keyframes glitch-trigger {
          0%, 75% { 
            --glitch-opacity: 0; 
          }
          78%, 88% { 
            --glitch-opacity: 1; 
          }
          90%, 100% { 
            --glitch-opacity: 0; 
          }
        }
        
        @keyframes shake-during-glitch {
          0%, 75% { 
            transform: translate3d(0, 0, 0);
          }
          78% { 
            transform: translate3d(1px, 1px, 0);
          }
          79% { 
            transform: translate3d(-1px, -1px, 0);
          }
          80% { 
            transform: translate3d(1px, -1px, 0);
          }
          81% { 
            transform: translate3d(-1px, 1px, 0);
          }
          82% { 
            transform: translate3d(1px, 1px, 0);
          }
          83% { 
            transform: translate3d(-1px, -1px, 0);
          }
          84% { 
            transform: translate3d(1px, -1px, 0);
          }
          85% { 
            transform: translate3d(-1px, 1px, 0);
          }
          86% { 
            transform: translate3d(1px, 1px, 0);
          }
          87% { 
            transform: translate3d(-1px, -1px, 0);
          }
          88% { 
            transform: translate3d(1px, -1px, 0);
          }
          90%, 100% { 
            transform: translate3d(0, 0, 0);
          }
        }
        
        .glitch::before,
        .glitch::after {
          opacity: var(--glitch-opacity, 0);
        }
        
        @keyframes glitch-top {
          0%  { clip-path: inset(0   0 78% 0); transform: translate3d(1px, -1px, 0); }
          10% { clip-path: inset(10% 0 62% 0); transform: translate3d(-3.5%, -3.8%, 0px); }
          20% { clip-path: inset(18% 0 52% 0); transform: translate3d(1px, 1px, 0); }
          30% { clip-path: inset(28% 0 44% 0); transform: translate3d(-1px, -1px, 0); }
          40% { clip-path: inset(36% 0 34% 0); transform: translate3d(2.6%, 1.5%, 0px); }
          50% { clip-path: inset(44% 0 28% 0); transform: translate3d(-1px, 1px, 0); }
          60% { clip-path: inset(56% 0 22% 0); transform: translate3d(1px, -1px, 0); }
          70% { clip-path: inset(64% 0 14% 0); transform: translate3d(-2.4%, 1.1%, 0px); }
          80% { clip-path: inset(74% 0 6%  0); transform: translate3d(1px, 1px, 0); }
          100%{ clip-path: inset(0   0 78% 0); transform: translate3d(0, 0, 0); }
        }
        
        @keyframes glitch-bottom {
          0%  { clip-path: inset(78% 0 0   0); transform: translate3d(-1px, 1px, 0); }
          10% { clip-path: inset(62% 0 10% 0); transform: translate3d(1px, 0, 0); }
          20% { clip-path: inset(52% 0 18% 0); transform: translate3d(-1px, -1px, 0); }
          30% { clip-path: inset(44% 0 28% 0); transform: translate3d(1px, 1px, 0); }
          40% { clip-path: inset(34% 0 36% 0); transform: translate3d(-3.1%, 2.3%, 0px); }
          50% { clip-path: inset(28% 0 44% 0); transform: translate3d(1px, -1px, 0); }
          60% { clip-path: inset(22% 0 56% 0); transform: translate3d(-1px, 1px, 0); }
          70% { clip-path: inset(14% 0 64% 0); transform: translate3d(1px, 0, 0); }
          80% { clip-path: inset( 6% 0 74% 0); transform: translate3d(-1px, -1px, 0); }
          100%{ clip-path: inset(78% 0 0   0); transform: translate3d(0, 0, 0); }
        }
        
        @keyframes rgb-jitter {
          0% { 
            text-shadow:
              1px  0   0 #34f7f7,
             -1px  0   0 #ff80d5,
              0   -1px 0 #88ff44; 
          }
          100% { 
            text-shadow:
             -1px  0   0 #34f7f7,
              1px  0   0 #ff80d5,
              0    1px 0 #88ff44; 
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .glitch::before, .glitch::after { 
            animation: none !important; 
            opacity: 0 !important; 
          }
          .glitch { 
            text-shadow: none !important; 
          }
        }
      `}</style>
    </span>
  );
}

function SayHi() {
  return (
    <div className='text-center mb-44 mt-24 lg:mb-48 lg:mt-44 max-w-sm mx-auto'>
      <GlitchText className='text-7xl lg:text-8xl mb-6 lg:mb-8 block'>Say Hi</GlitchText>
      <p className='place-content-center content-center'>If you would like to collaborate or learn more about my work, <Link className='link pb-[2px]' href="/contact">get in touch</Link></p>
    </div>
  );
}

export default SayHi;