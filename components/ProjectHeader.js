import React from 'react';
import Link from 'next/link';

function ProjectHeader({ title, company, year, scope }) {
  return (

    <div className='mt-32'>
        <Link className="back inline-block text-2xl mb-6 fade-in delay-0" href="/">←</Link>
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