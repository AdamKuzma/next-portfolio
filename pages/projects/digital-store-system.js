import React from 'react';
import ProjectHeader from '../../components/ProjectHeader';
import SayHi from '../../components/SayHi';

function DigitalStoreSystem() {
  return (
    <div className='container mx-auto'>
      <ProjectHeader
        title="Digital Store System"
        company="Signet Jewelers"
        year="2024"
        scope="Design System"
      />

      {/* Project Intro */}

      <div className='flex gap-20'>
        <div className='w-1/2'>
          <p className='mb-8 fade-in delay-2'>
            At Signet, we use the Amor Design System for our digital experiences. Although the system was successfully used in our e-commerce experiences, it didn’t cater to our Digital Store internal apps used in-store. This led to inconsistencies, including different colors, spacing, shadows, and incongruent components as our designers created new interfaces without proper references.
          </p>

          <p className='mb-8 fade-in delay-2'>
            I conducted an audit of our apps, mapping all of the styles, spacings, treatments, and components we were using. Next, I developed a comprehensive system that was minimal enough to converge all the inconsistencies into fewer styles and components, while still being simple to use for our designers.
          </p>
        </div>
        <div className='w-1/2 items-start fade-in delay-3'>
          <div className='bg-neutral-100 rounded-xl'>
            <img className='w-full h-auto object-contain' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FMain.png?alt=media&token=0cdeb778-ce90-44d2-ab70-b104d1eb78ac" alt="Digital Store System" />
          </div>
        </div>
      </div>

      <div className='flex gap-10 mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FGrid.png?alt=media&token=7f2d1d80-0be3-44ea-a54a-497c103df30b" alt="Digital Store System" />
        </div>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FGrid-1.png?alt=media&token=fffccc2a-85b3-4e81-90f9-e1010a4465c8" alt="Digital Store System" />
        </div>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FGrid-2.png?alt=media&token=8c4548f0-10de-416e-b358-3c1abe87f018" alt="Digital Store System" />
          </div>
      </div>


      {/* Interface Audit */}

      <b className='mb-4 block'>Interface Audit</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        Starting the project, I audited all our apps, mapping all the style properties and components used across all screens. I grouped similar elements, seeking opportunities to converge different treatments of the same component into a more minimal interface inventory.
      </p>

      <div className='mb-14 mt-14 pt-12 px-12 bg-neutral-100 rounded-xl'>
        <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FButtons-Tabs.png?alt=media&token=c21c20b5-1092-4605-8c04-f2b787840355" alt="Digital Store System" />
      </div>

      <div className='mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FButton.png?alt=media&token=84e4bcb6-d362-4965-9b26-98fc3051c25e" alt="Digital Store System" />
      </div>


      {/* Building the Components */}

      <b className='mb-4 block'>Building the Components</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        Once the first set of styling and components were ready, I organized them into reusable Figma components so that designers could start using them.
      </p>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        I modeled the component construction based on the existing examples from Amor and discussions with designers, following the structure they were already familiar with.
      </p>

      <div className='mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FDSComponents1.png?alt=media&token=2ab3b7cc-b516-483a-89b1-bcb7dc665a68" alt="Digital Store System" />
      </div>

      <div className='mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FDSComponents2.png?alt=media&token=c085565b-2975-437a-8bd3-ee3deea3b62e" alt="Digital Store System" />
      </div>


      {/* Documentation & Handoff */}

      <b className='mb-4 block'>Documentation & Handoff</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        I wanted to make sure that the design system was accessible to everyone on the team, including product and engineering teams, which is why I created a separate documentation page in Zeroheight to reference the Digital Store System.
      </p>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        Working with one of our engineers to prepare a handover, we shipped the components that would be accessed via a shared repository and Storybook. Since our development team had limited capacity, I selected a few initial components that were easy to develop, but visually impactful, making the apps more consistent.
      </p>

      <div className='mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FDSCardComp.png?alt=media&token=bd403bb8-1ff6-4f3b-a593-2bce2945fc6a" alt="Digital Store System" />
      </div>


      {/* Adoption Efforts */}

      <b className='mb-4 block'>Adoption Efforts</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        To increase the visibility of the new design system and ensure successful adoption, I scheduled demo sessions with the product and engineering teams, demonstrating the value of a design system, introducing its documentation, and speaking on the next steps for gradual implementation.
      </p>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        Since late 2023, I have continued to be in charge of maintaining the system while working on other projects, updating and creating new components to address the design team’s needs. The Digital Store system continues to be used daily, receiving lots of positive feedback.
      </p>
      <SayHi></SayHi>
    </div>
  );
}

export default DigitalStoreSystem;