import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Projects2({ scrolled, useStaticVariant }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  const projects = [
    { name: 'iOS Interaction Prototypes', year: '2024', type: 'Interaction design, prototyping', video: '/videos/GyroLightA.mp4', linkUrl: '/projects/ios-interactions' },
    { name: 'Clienteling Filters', year: '2024', type: 'Product design', img: '/images/CLFeaturedB.png', linkUrl: '/projects/clienteling-filters' },
    { name: 'Digital Store System', year: '2024', type: 'Design system', video: '/videos/DSFeatured1.mp4', linkUrl: '/projects/digital-store-system' },
    { name: 'Amor Components', year: '2022', type: 'Design system', video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FResponsive-Amor-2.mp4?alt=media&token=143ebad0-425c-4592-ae14-efcff99bd381', linkUrl: '/projects/amor-components' },
    { name: 'Member Rewards', year: '2023', type: 'Product design', img: '/images/MRFeaturedB.png', linkUrl: '/projects/member-rewards' }
  ];

  return (
    <div className={`home-projects mt-24 flex flex-col md:flex-row lg:flex-row ${scrolled ? 'scrolled' : ''}`}>

      {/* Project List */}

      <div className={`flex-1 ${scrolled ? '' : 'pointer-events-none'}`}>
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
            setHoveredProject(null); // Ensure hoveredProject is reset
          }}
          className='relative flex flex-col items-start'
        >
          {projects.map((project, index) => {
             const delayClass = useStaticVariant
             ? `delay-${index + 3}`
             : `delay-${index + 3}h`;
             return (
            <Tab key={index} project={project} setPosition={setPosition} setHoveredProject={setHoveredProject}>
              <Link href={project.linkUrl}>
                <div className={`project cursor-pointer fade-in ${delayClass} inline-block`}>
                  <p className='relative project-name'>{project.name}</p>
                  <p className='relative project-details'>{project.year} · {project.type}</p>
                </div>
              </Link>
            </Tab>
            );
          })}
          <Cursor position={position} />
        </ul>
      </div>

      {/* Project Image */}

      <div className='flex-1 hidden md:block relative'>
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

const Tab = ({ children, project, setPosition, setHoveredProject }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width, height, top, left } = ref.current.getBoundingClientRect();
        const parentTop = ref.current.offsetParent.getBoundingClientRect().top;
        const parentLeft = ref.current.offsetParent.getBoundingClientRect().left;

        setPosition({
          width,
          height,
          top: top - parentTop,
          left: left - parentLeft,
          opacity: 1,
        });
        setHoveredProject(project.img || project.video); // Set hoveredProject to the current project media
      }}
      className='mb-2 project relative cursor-pointer inline-block z-20'
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return <motion.div animate={position} className='project-cursor absolute rounded-lg z-0' />;
};

export default Projects2;