import React from 'react';
import Link from 'next/link';

function GlitchText({ children, className = '' }) {
  return (
    <div className="glitch-wrap">
      <span 
        className={`glitch-link glitch--burst ${className}`}
        data-text={children}
        data-glitched="1"
        style={{ 
          fontFamily: "'PP Mondwest', ui-sans-serif, system-ui, sans-serif"
        }}
      >
        {children}
      </span>
      
      {/* SVG filter for strong distortion */}
      <svg width="0" height="0" style={{position: 'absolute'}}>
        <filter id="glitchStrong">
          {/* noisy height map */}
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" seed="7" result="noise">
            <animate attributeName="baseFrequency"
                     dur="900ms" values="0.01 0.02; 0.05 0.08; 0.01 0.02"
                     repeatCount="indefinite" />
            <animate attributeName="seed"
                     dur="900ms" values="1;3;1;9;7" repeatCount="indefinite" />
          </feTurbulence>
          {/* stretch pixels based on noise */}
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G">
            <animate attributeName="scale"
                     dur="900ms" values="0; 8; 0; 16; 0"
                     keyTimes="0; .25; .5; .75; 1"
                     calcMode="discrete" repeatCount="indefinite" />
          </feDisplacementMap>
        </filter>
      </svg>
      
      <style jsx>{`
        .glitch-wrap { 
          display: grid; 
          place-items: center; 
        }
        
        .glitch-wrap > * { 
          grid-area: 1/1/-1/-1; 
        }

        .glitch-link {
          position: relative;
          display: inline-block;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 0.02em;
          transform: translateZ(0);
          animation: glitch-trigger 5s infinite;
        }
        
        
        .glitch-link {
          filter: var(--glitch-filter, none);
        }
        
        .glitch-link::before,
        .glitch-link::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          pointer-events: none;
          user-select: none;
          opacity: var(--glitch-opacity, 0);
          mix-blend-mode: screen;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-size: 24px 100%;
          animation: text-shake 90ms steps(2, end) infinite;
        }
        
        @keyframes text-shake {
          0% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(1px, 1px, 0); }
          50% { transform: translate3d(-1px, -1px, 0); }
          75% { transform: translate3d(1px, -1px, 0); }
          100% { transform: translate3d(-1px, 1px, 0); }
        }
        
        .glitch-link::before {
          background-image:
            repeating-linear-gradient(
              90deg,
              #34f7f7 0 12px, transparent 12px 16px,
              #88ff44 16px 28px, transparent 28px 32px,
              #d9a6ff 32px 44px, transparent 44px 48px
            );
        }
        
        .glitch-link::after {
          background-image:
            repeating-linear-gradient(
              90deg,
              #ff80d5 0 12px, transparent 12px 16px,
              #ffd24a 16px 28px, transparent 28px 32px,
              #6dfc8c 32px 44px, transparent 44px 48px
            );
        }
         
         :global(.light) .glitch-link::before {
           background-image:
             repeating-linear-gradient(
               90deg,
               #0066cc 0 12px, transparent 12px 16px,
               #00aa00 16px 28px, transparent 28px 32px,
               #6633ff 32px 44px, transparent 44px 48px
             ) !important;
         }
         
         :global(.light) .glitch-link::after {
           background-image:
             repeating-linear-gradient(
               90deg,
               #ff3333 0 12px, transparent 12px 16px,
               #ff6600 16px 28px, transparent 28px 32px,
               #00cc44 32px 44px, transparent 44px 48px
             ) !important;
         }
        
        .glitch-link::before,
        .glitch-link::after {
          opacity: var(--glitch-opacity, 0);
          animation:
            glitch-top 500ms steps(6, end) infinite,
            rgb-jitter 90ms steps(2, end) infinite;
        }
        
        .glitch-link::after {
          animation:
            glitch-bottom 600ms steps(6, end) infinite reverse,
            rgb-jitter 90ms steps(2, end) infinite reverse;
        }
        
        .glitch-link {
          animation: glitch-trigger 5s infinite;
        }
        
        @keyframes glitch-trigger {
          0%, 75% { 
            --glitch-opacity: 0; 
            --glitch-filter: none;
          }
          78%, 88% { 
            --glitch-opacity: 1; 
            --glitch-filter: url(#glitchStrong);
          }
          90%, 100% { 
            --glitch-opacity: 0; 
            --glitch-filter: none;
          }
        }
        
        .glitch-link::before,
        .glitch-link::after {
          opacity: var(--glitch-opacity, 0);
        }
        
        @keyframes glitch-top {
          0%  { clip-path: inset(0   0 78% 0); transform: translate3d(0.5px, -0.5px, 0); }
          10% { clip-path: inset(10% 0 62% 0); transform: translate3d(-1.75%, -1.9%, 0px); }
          20% { clip-path: inset(18% 0 52% 0); transform: translate3d(0.5px, 0.5px, 0); }
          30% { clip-path: inset(28% 0 44% 0); transform: translate3d(-0.5px, -0.5px, 0); }
          40% { clip-path: inset(36% 0 34% 0); transform: translate3d(1.3%, 0.75%, 0px); }
          50% { clip-path: inset(44% 0 28% 0); transform: translate3d(-0.5px, 0.5px, 0); }
          60% { clip-path: inset(56% 0 22% 0); transform: translate3d(0.5px, -0.5px, 0); }
          70% { clip-path: inset(64% 0 14% 0); transform: translate3d(-1.2%, 0.55%, 0px); }
          80% { clip-path: inset(74% 0 6%  0); transform: translate3d(0.5px, 0.5px, 0); }
          100%{ clip-path: inset(0   0 78% 0); transform: translate3d(0, 0, 0); }
        }
        
        @keyframes glitch-bottom {
          0%  { clip-path: inset(78% 0 0   0); transform: translate3d(-0.5px, 0.5px, 0); }
          10% { clip-path: inset(62% 0 10% 0); transform: translate3d(0.5px, 0, 0); }
          20% { clip-path: inset(52% 0 18% 0); transform: translate3d(-0.5px, -0.5px, 0); }
          30% { clip-path: inset(44% 0 28% 0); transform: translate3d(0.5px, 0.5px, 0); }
          40% { clip-path: inset(34% 0 36% 0); transform: translate3d(-1.55%, 1.15%, 0px); }
          50% { clip-path: inset(28% 0 44% 0); transform: translate3d(0.5px, -0.5px, 0); }
          60% { clip-path: inset(22% 0 56% 0); transform: translate3d(-0.5px, 0.5px, 0); }
          70% { clip-path: inset(14% 0 64% 0); transform: translate3d(0.5px, 0, 0); }
          80% { clip-path: inset( 6% 0 74% 0); transform: translate3d(-0.5px, -0.5px, 0); }
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
        
         :global(.light) .glitch-link::before,
         :global(.light) .glitch-link::after {
           animation:
             glitch-top 500ms steps(6, end) infinite,
             rgb-jitter-light 90ms steps(2, end) infinite;
         }
         
         :global(.light) .glitch-link::after {
           animation:
             glitch-bottom 600ms steps(6, end) infinite reverse,
             rgb-jitter-light 90ms steps(2, end) infinite reverse;
         }
        
        @keyframes rgb-jitter-light {
          0% { 
            text-shadow:
              1px  0   0rgb(0, 21, 42),
             -1px  0   0 #ff3333,
              0   -1px 0 #00aa00; 
          }
          100% { 
            text-shadow:
             -1px  0   0rgb(0, 21, 42),
              1px  0   0 #ff3333,
              0    1px 0 #00aa00; 
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .glitch-link::before, .glitch-link::after { 
            animation: none !important; 
            opacity: 0 !important; 
          }
          .glitch-link { 
            text-shadow: none !important; 
          }
          .glitch--burst { 
            filter: none !important; 
          }
        }
      `}</style>
    </div>
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