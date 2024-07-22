import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Projects2({ scrolled }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  const projects = [
    { name: 'Interaction Prototypes', year: '2024', type: 'Coming soon', img: '/images/photos/IMG_0645.jpg', linkUrl: '/projects/clienteling-filters' },
    { name: 'Clienteling Filters', year: '2024', type: 'Product design', img: '/images/photos/IMG_3847.jpg', linkUrl: '/projects/clienteling-filters' },
    { name: 'Digital Store System', year: '2024', type: 'Design system', img: '/images/photos/IMG_1564.jpg', linkUrl: '/projects/clienteling-filters' },
    { name: 'Amor Components', year: '2022', type: 'Design system', img: '/images/photos/IMG_7263.jpg', linkUrl: '/projects/clienteling-filters' },
    { name: 'Member Rewards', year: '2023', type: 'Product design', img: '/images/photos/IMG_0705.jpg', linkUrl: '/projects/clienteling-filters' }
  ];

  return (
    <div className={`home-projects mt-24 mb-[-100px] flex flex-col lg:flex-row ${scrolled ? 'scrolled' : ''}`}>
      <div className={`flex-1 ${scrolled ? '' : 'pointer-events-none'}`}>
        <div className='flex flex-col items-start'>
          {projects.map((project, index) => (
            <Link href={project.linkUrl}>
                <div
                key={index}
                className={`mb-2 project cursor-pointer fade-in delay-${index + 3}h inline-block`}
                onMouseEnter={() => setHoveredProject(project.img)}
                onMouseLeave={() => setHoveredProject(null)}
                >
                <p>{project.name}</p>
                <p className='text-neutral-400'>{project.year} · {project.type}</p>
                </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='flex-1 relative'>
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${
                hoveredProject === project.img ? 'opacity-100 filter-blur-none' : 'opacity-0 filter-blur'
              }`}
            >
              <img className='rounded-lg' src={project.img} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects2;