import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Projects({ scrolled, useStaticVariant }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const cursorRef = useRef(null);
  const magneticOffsetRef = useRef({ x: 0, y: 0 });

  const projects = [
    { name: 'Music Performance App', year: '2025', type: 'Product design', video: '/videos/flipfolder/ff-featured.mp4', linkUrl: '/projects/music-performance-app' },
    { name: 'iOS Interaction Prototypes', year: '2024', type: 'Interaction design, prototyping', video: '/videos/GyroLightA.mp4', linkUrl: '/projects/ios-interactions' },
    { name: 'Clienteling Filters', year: '2024', type: 'Product design', img: '/images/CLFeaturedB.png', linkUrl: '/projects/clienteling-filters' },
    { name: 'Digital Store System', year: '2024', type: 'Design system', video: '/videos/DSFeatured1.mp4', linkUrl: '/projects/digital-store-system' },
    { name: 'Amor Components', year: '2022', type: 'Design system', video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FResponsive-Amor-2.mp4?alt=media&token=143ebad0-425c-4592-ae14-efcff99bd381', linkUrl: '/projects/amor-components' },
    { name: 'Member Rewards', year: '2023', type: 'Product design', img: '/images/MRFeaturedB.png', linkUrl: '/projects/member-rewards' }
  ];

  return (
    <div className={`home-projects mt-24 flex flex-col md:flex-row lg:flex-row ${scrolled ? 'scrolled' : ''}`}>

      {/* Project List */}

      <div className={`basis-5/12 ${scrolled ? '' : 'pointer-events-none'}`}>
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
            setHoveredProject(null);
            magneticOffsetRef.current = { x: 0, y: 0 };
          }}
          className='relative flex flex-col items-start'
        >
          {projects.map((project, index) => {
             const delayClass = useStaticVariant
             ? `delay-${index + 3}`
             : `delay-${index + 3}h`;
             return (
            <Tab 
              key={index} 
              project={project} 
              setPosition={setPosition} 
              setHoveredProject={setHoveredProject}
              cursorRef={cursorRef}
              magneticOffsetRef={magneticOffsetRef}
            >
              <Link href={project.linkUrl}>
                <div className={`project cursor-pointer fade-in ${delayClass} inline-block`}>
                  <p className='relative project-name'>{project.name}</p>
                  <p className='relative project-details'>{project.year} · {project.type}</p>
                </div>
              </Link>
            </Tab>
            );
          })}
          <Cursor position={position} cursorRef={cursorRef} magneticOffsetRef={magneticOffsetRef} />
        </ul>
      </div>

      {/* Project Image */}

      <div className='basis-7/12 hidden md:block relative lg:left-[80px]'>
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${hoveredProject === (project.img || project.video) ? 'unblurred' : 'blurred'}`}
              style={{ opacity: hoveredProject === (project.img || project.video) ? 1 : 0 }}
            >
              {project.img ? (
                <img className='rounded-lg max-h-[50vh]' src={project.img} alt={project.name} />
              ) : (
                <video className='rounded-lg max-h-[50vh]' src={project.video} autoPlay loop muted playsInline />
              )}
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

const Tab = ({ children, project, setPosition, setHoveredProject, cursorRef, magneticOffsetRef }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const rafIdRef = useRef(null);
  
  // Separate position tracking for content (menu element)
  const contentTargetPosRef = useRef({ x: 0, y: 0 });
  const contentCurrentPosRef = useRef({ x: 0, y: 0 });
  
  // Separate position tracking for cursor
  const cursorTargetPosRef = useRef({ x: 0, y: 0 });
  const cursorCurrentPosRef = useRef({ x: 0, y: 0 });

  const animate = () => {
    // Smooth interpolation (ease-out effect)
    const ease = 0.2;
    
    // Animate content (menu element) - intensity 3
    contentCurrentPosRef.current.x += (contentTargetPosRef.current.x - contentCurrentPosRef.current.x) * ease;
    contentCurrentPosRef.current.y += (contentTargetPosRef.current.y - contentCurrentPosRef.current.y) * ease;

    // Animate cursor - intensity 5
    cursorCurrentPosRef.current.x += (cursorTargetPosRef.current.x - cursorCurrentPosRef.current.x) * ease;
    cursorCurrentPosRef.current.y += (cursorTargetPosRef.current.y - cursorCurrentPosRef.current.y) * ease;

    // Apply transform directly to content (no React re-render!)
    if (contentRef.current) {
      contentRef.current.style.transform = `translate(${contentCurrentPosRef.current.x}px, ${contentCurrentPosRef.current.y}px)`;
    }

    // Update shared magnetic offset for cursor
    magneticOffsetRef.current = { 
      x: cursorCurrentPosRef.current.x, 
      y: cursorCurrentPosRef.current.y 
    };

    // Update cursor directly
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorCurrentPosRef.current.x}px, ${cursorCurrentPosRef.current.y}px)`;
    }

    // Continue animation if still moving (check both content and cursor)
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
    
    // Content (menu element) - intensity 3
    const contentX = normalizedX * 2;
    const contentY = normalizedY * 2;
    
    // Cursor - intensity 5
    const cursorX = normalizedX * 10;
    const cursorY = normalizedY * 20;

    // Update targets separately
    contentTargetPosRef.current = { x: contentX, y: contentY };
    cursorTargetPosRef.current = { x: cursorX, y: cursorY };

    // Start animation loop if not already running
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

        const { width, height, top, left } = containerRef.current.getBoundingClientRect();
        const parentTop = containerRef.current.offsetParent.getBoundingClientRect().top;
        const parentLeft = containerRef.current.offsetParent.getBoundingClientRect().left;

        setPosition({
          width,
          height,
          top: top - parentTop,
          left: left - parentLeft,
          opacity: 1,
        });
        setHoveredProject(project.img || project.video);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      className='pb-4 project relative cursor-pointer inline-block z-20'
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
  // Reduce cursor height by 4px (2px top + 2px bottom) and adjust top by 2px
  const adjustedHeight = Math.max(0, position.height - 8);
  const adjustedTop = position.top + 4;

  return (
    <motion.div
      ref={cursorRef}
      animate={{
        left: position.left,
        top: adjustedTop,
        width: position.width,
        height: adjustedHeight,
        opacity: position.opacity,
      }}
      transition={{
        left: {
          type: "spring",
          stiffness: 180,
          damping: 20,
          mass: 0.7,
        },
        top: {
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
        height: {
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
      className='project-cursor absolute rounded-2xl z-0'
    />
  );
};

export default Projects;