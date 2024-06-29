import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='mb-12 fade-in delay-2'>
        <ProjectCard
            className='rounded-xl bg-[#F2F2F4] py-8 px-12 lg:py-16 lg:px-48'
            title="Clienteling Filters"
            description="2024 · Product Design"
            mediaType="image"
            mediaSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FCL%20Featured.png?alt=media&token=1d900e60-2d6e-40d3-aaf9-df149b6da697"
            linkUrl="/projects/clienteling-filters"
        />

        <ProjectCard
            className='py-8 px-10 lg:py-16 lg:px-40 mt-14 lg:mt-24 bg-[#F2F2F4] rounded-xl'
            title="Digital Store System"
            description="2024 · Design System"
            mediaType="video"
            mediaSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FDigital-Store-System1.mp4?alt=media&token=0266baa1-a943-42d2-afda-55b0f4e80b1b"
            linkUrl="/projects/digital-store-system"
        />

        <ProjectCard
            className='py-4 px-0 lg:py-12 lg:px-8 mt-14 lg:mt-24 bg-neutral-100 rounded-xl'
            title="Amor Components"
            description="2022 · Design System"
            mediaType="image"
            mediaSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/featured%2FAmor%20Components.png?alt=media&token=a9bb7924-a653-4754-981d-222b11f5390b"
            linkUrl="/projects/amor-components"
        />

        <ProjectCard
            className='py-8 px-8 lg:py-20 lg:px-40 mt-14 lg:mt-24 bg-neutral-100 rounded-xl'
            title="Member Rewards"
            description="2023 · Product Design"
            mediaType="image"
            mediaSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/featured%2FMember-Rewards-FT.png?alt=media&token=7d90212c-a066-4c6b-8d5f-d29dc439a9c5"
            linkUrl="/projects/member-rewards"
        />
    </div>
  );
}

export default Projects;