import React from 'react';
import Link from 'next/link';

function ProjectHeader({ title, company, year, scope }) {
  return (

    <div className='mt-24'>
        <div className="back-arrow-wrapper">
          <Link 
            className="back-arrow text-2xl fade-in delay-0" 
            href="/"
          >←</Link>
        </div>
        
        <style jsx>{`
          .back-arrow-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            margin-bottom: 1.5rem;
            margin-left: -0.5rem;
            transition: transform 0.2s ease;
            transform-origin: 50% 50%;
          }
          .back-arrow-wrapper:hover {
            transform: rotate(45deg);
          }
        `}</style>
        <h1 className='text-4xl lg:text-7xl fade-in delay-1 antialiased'>{title}</h1>
        <div className='lg:hidden mb-12 mt-2 fade-in delay-2'>
          <div>{year} · {scope} · {company}</div>
        </div>
        <div className='hidden lg:flex flex-wrap project-tags mb-16 mt-4 fade-in delay-2'>
            <div>{company}</div>
            <div>{year}</div>
            <div>{scope}</div>
        </div>
      </div>
    );
}

export default ProjectHeader;