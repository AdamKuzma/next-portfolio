import React from 'react';
import Link from 'next/link';

function ProjectCard({ title, description, mediaType, mediaSrc, linkUrl, className }) {
  return (

    <div className='mt-14 lg:mt-32'>
      <Link href={linkUrl}>
        <div className={`card-container ${className}`}>
          {mediaType === 'image' ? (
              <img className='' src={mediaSrc} alt={title} />
            ) : (
              <video className='' muted autoPlay loop>
                <source src={mediaSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          )}
        </div>
      </Link>
      <Link href={linkUrl}><p className='mt-4 lg:mt-6 link inline-block'>{title}</p></Link>
      <p className='text-neutral-400'>{description}</p>
    </div>

    );
}

export default ProjectCard;