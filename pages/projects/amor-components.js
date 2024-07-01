import React, { useRef, useEffect } from 'react';
import SayHi from '../../components/SayHi';
import ProjectHeader from '../../components/ProjectHeader';

function AmorComponents() {

    const videoRefs = useRef([]);

    useEffect(() => {
      videoRefs.current.forEach(video => {
        if (video) {
          video.play().catch(error => {
            console.error('Error attempting to play', error);
          });
        }
      });
    }, []);

  return (
    <div className='container'>
        <ProjectHeader
            title="Amor Components"
            company="Signet Jewelers"
            year="2022"
            scope="Design System"
        />

        {/* Project Intro */}

        <p className='mb-8 lg:w-3/5 fade-in delay-2'>
            Amor is a design system built to ensure uniform and accessible e-commerce experiences on a large scale across multiple Signet brands. While it worked well for our shop and checkout experiences, its implementation wasn’t as successful for the content pages managed by our marketing teams.
        </p>

        <p className='mb-8 lg:w-3/5 fade-in delay-3'>
            My role involved developing a set of reusable content components in Figma and Hybris (our CMS) that encompassed marketing materials with supporting documentation, leveraging the visual language established in the Amor design system.
        </p>

        <p className='mb-12 lg:w-3/5 fade-in delay-4'>
            The redesigned CMS tool, improved the efficiency of our marketing team’s content management processes, currently with over 1,000 components in use across our websites.
        </p>

        <div className='flex mb-3 py-8 px-8 lg:py-12 lg:px-12 bg-neutral-100 fade-in delay-5 rounded-lg'>
            <video className='rounded-md' ref={el => videoRefs.current[0] = el} muted autoplay loop playsInline>
                <source type='video/mp4' src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FAmor-Vid.mp4?alt=media&token=36b16b98-208c-4c60-baba-b29152c3b6c6'></source>
            </video>
        </div>
        <p className='mb-12 annotation text-sm'>Speed of creating a page using new components</p>


        {/* Leveraging Design System */}

        <b className='mb-4 block'>Leveraging Design System</b>
        <p className='mb-4 lg:w-3/5'>
            An audit of Signet’s content pages was necessary from both design and engineering perspective. We used 68 different fonts and 41 colors across five websites at the time, which was a severe performance concern.
        </p>

        <p className='mb-12 lg:w-3/5'>
            When building the new components, I started to standardize our use of color and typography, extending the visual language defined in our design system. This effort helped content authors create new marketing material at velocity and maintain a consistent brand experience.
        </p>

        <div className='mb-12 py-6 px-4 lg:py-12 lg:px-12 bg-neutral-100 rounded-lg'>
            <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FAmor-Exp-Design-System.png?alt=media&token=25728fc3-2886-4869-a75a-3dc056bd4ca0" alt="Amor Components" />
        </div>


        {/* Component Types */}

        <b className='mb-4 block'>Component Types</b>
        <p className='mb-12 lg:w-3/5'>
            Documenting content patterns found across hundreds of pages helped define the scope for the initial batch of components. The new components standardized the most commonly used content patterns and provided better guidance based on the intent behind adding content. These components set the groundwork for creating page templates.
        </p>

        <div className='mb-12 py-6 px-4 lg:py-12 lg:px-12 bg-neutral-100 rounded-lg'>
            <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FExp-Component-Types.png?alt=media&token=cf10a468-afb7-454b-a538-f0414d87f8a2" alt="Amor Components" />
        </div>

        <div className='flex mb-3 py-4 bg-[#1A1A1A] rounded-lg'>
            <video className='rounded-lg' ref={el => videoRefs.current[1] = el} muted autoplay loop playsInline>
                <source type='video/mp4' src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FBanner-Variations.mp4?alt=media&token=0f8950c9-019f-471e-a845-0760b5eb2592'></source>
            </video>
        </div>
        <p className='mb-12 annotation text-sm'>Individual brand expression implemented via typography, language, color, and imagery</p>


        {/* Responsive Design */}

        <b className='mb-4 block'>Responsive Design</b>
        <p className='mb-12 lg:w-3/5'>
            In the past, content authors designed adaptive pages relying primarily on CSS media queries, requiring a separate desktop and mobile code. The new components eliminated the struggle of developing for different devices by having a pre-defined responsive behavior.
        </p>

        <div className='flex mb-12 rounded-lg'>
            <video className='rounded-lg' ref={el => videoRefs.current[2] = el} muted autoplay loop playsInline>
                <source type='video/mp4' src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FResponsive-Amor-2.mp4?alt=media&token=143ebad0-425c-4592-ae14-efcff99bd381'></source>
            </video>
        </div>


        {/* Dynamic Properties */}

        <b className='mb-4 block'>Dynamic Properties</b>
        <p className='mb-12 lg:w-3/5'>
            Content authors can choose different properties within a component or toggle elements on and off. This functionality was embedded both within Figma and Hybris, helping us maintain simplicity and clear content hierarchy.
        </p>

        <div className='flex mb-12 rounded-lg'>
            <video className='rounded-lg' ref={el => videoRefs.current[3] = el} muted autoplay loop playsInline>
                <source type='video/mp4' src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FAmor-Properties.mp4?alt=media&token=75887917-2cc2-40f8-9c83-c4300b63f49b'></source>
            </video>
        </div>


        {/* Component Documentation */}

        <b className='mb-4 block'>Component Documentation</b>
        <p className='mb-4 lg:w-3/5'>
            Collaborating with developers, I created detailed documentation for each component around its typography, spacing, colors, dimensions, and character limits. Keyboard navigation for carousels, header hierarchy, and a space to add alt text in Hybris were also part of the considerations for accessible design.
        </p>
        <p className='mb-12 lg:w-3/5'>
            Specifications on usage and examples helped designers and the marketing team understand how to start using components. Amor Content Components are a part of our Figma library, and anyone can access their documentation in ZeroHeight.
        </p>

        <div className='mb-14 py-8 px-4 lg:py-12 lg:px-12 bg-neutral-900 rounded-lg'>
            <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FType-Specs.png?alt=media&token=19561d95-fe34-4697-98f8-4b8fdfcded0f" alt="Amor Components" />
        </div>

        <div className='mb-14 py-8 px-4 lg:py-12 lg:px-12 bg-neutral-900 rounded-lg'>
            <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FSpacing-Specs.png?alt=media&token=c752c4c3-423d-44c1-84f9-ba2fb3d99d95" alt="Amor Components" />
        </div>


        {/* Empowering Contributors */}

        <b className='mb-4 block'>Empowering Contributors</b>
        <p className='mb-8 lg:w-3/5'>
            Design Systems are only successful when they can be easily used by anyone working on the product. For this project, I partnered with our design system team to develop guidelines and training materials, advocating for the adoption, maintenance, and upkeep of components and documentation. We developed an intake process to submit new component requests or updates to support contributions from our designers and marketing teams.
        </p>


        {/* Impact */}

        <b className='mb-4 block'>Impact</b>
        <p className='mb-8 lg:w-3/5'>
            Amor Content Components have empowered everyone in the organization to launch new marketing pages rapidly and consistently, improving our website’s interface with confidence. Two years after their release, we've have recorded over 3000 component instances used across our websites.
        </p>

      <SayHi></SayHi>
    </div>
  );
}

export default AmorComponents;