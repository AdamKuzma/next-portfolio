import React, { useRef, useEffect } from 'react';
import ProjectHeader from '../../components/ProjectHeader';
import SayHi from '../../components/SayHi';

function MemberRewards() {

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
    <div className='container mx-auto'>
      <ProjectHeader
        title="Member Rewards"
        company="Signet Jewelers"
        year="2023"
        scope="Product Design"
      />

        {/* Project Intro */}

        <p className='mb-8 fade-in delay-2 w-3/5'>
            The introduction of the Member Rewards initiative marks a significant enhancement to our loyalty program, allowing members to earn shopping credits. These credits can be applied to their purchase, complementing existing promo codes and fostering a more rewarding shopping experience.
        </p>

        <p className='mb-8 fade-in delay-3 w-3/5'>
            I conducted an audit of our apps, mapping all of the styles, spacings, treatments, and components we were using. Next, I developed a comprehensive system that was minimal enough to converge all the inconsistencies into fewer styles and components, while still being simple to use for our designers.
        </p>

      <div className='flex gap-10 mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FScreen-1-Member.png?alt=media&token=981ba837-bfcb-4635-b821-b75a3f367600" alt="Digital Store System" />
        </div>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FScreen-2-Member.png?alt=media&token=e3c89b43-41c7-43e8-8676-00e47b10a7be" alt="Digital Store System" />
        </div>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FScreen-3-Member.png?alt=media&token=54402170-afb9-490b-b44d-fd6ca3810258" alt="Digital Store System" />
          </div>
      </div>

      <div className='mb-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2F000.png?alt=media&token=746f9932-13fa-4590-80dc-f6840b8d81c4" alt="Digital Store System" />
      </div>

      {/* Gathering Requirements */}

      <b className='mb-4 block'>Gathering the Requirements</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        We started with a comprehensive analysis of the new program’s requirements. Engaging with cross-functional teams, we crafted a detailed project brief, identified potential challenges, and outlined key design considerations.
      </p>

      <div className='mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img className='invert' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FRoadmapC.svg?alt=media&token=510bf371-74bd-424b-bfb5-d36a63014d2e" alt="Digital Store System" />
      </div>


      {/* Structuring the Experience */}

      <b className='mb-4 block'>Structuring the Experience</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        To make sense of the complex project requirements, I started exploring the potential user flows considering all the possible scenarios that depend on different variables.
      </p>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        Factors such as membership status, authenticated state, exclusions, order total, items in the bag, applied promos, promo hierarchy, and rewards expiration would all result in a different experience for the user.
      </p>

      <div className='mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img className='' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FLogic-Flow-Light.png?alt=media&token=78edd8dd-0ed7-4872-b53e-0e5c3df1fbb8" alt="Digital Store System" />
      </div>

      {/* Exploring Ideas */}

      <b className='mb-4 block'>Exploring Ideas</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        Despite all the internal complexity, I wanted to create an experience as simple as possible for the end user, minimizing the friction before proceeding to checkout.
      </p>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        I explored different ideas through the lens of previously identified scenarios, highlighting the pros and cons of the user experience and technical debt.
      </p>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        With a tight timeline for the MVP release, I needed to design for an easy implementation. Some of the best user experiences required complex calculations and were not feasible in the short term, so we decided to put them out for the future and settle with alternative solutions.
      </p>

      <div className='flex gap-10 mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FExploring-1-1200x2206.png?alt=media&token=29a44ac6-2fb4-4c5e-bf13-716ffbbcc4cc" alt="Digital Store System" />
        </div>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FExploring-2-1200x2023.png?alt=media&token=8329d9da-0b0c-46e3-9629-958577c5722b" alt="Digital Store System" />
        </div>
        <div className='flex-1'>
          <img className='w-full h-auto' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FExploring-3-1200x1448.png?alt=media&token=34dd8d9c-0538-4d6b-bb80-391ae7854240" alt="Digital Store System" />
          </div>
      </div>


      {/* Applying Rewards */}

      <div className='flex gap-16 mb-14 mt-14 '>
        <div className='w-1/2'>
            <b className='mb-4 block'>Selecting Rewards</b>
            <p className='mb-8 fade-in delay-2'>
                Customers with multiple promos available can either choose the best combination of promos and Rewards shown up front or make their selection within a drawer. It was important to visually communicate that only one promo code can be applied per order, while the Rewards can be redeemed in increments of one dollar.
            </p>
        </div>
        <div className='w-1/2 py-12 px-24 bg-neutral-100 rounded-xl'>
            <video className='rounded-[36px]' ref={el => videoRefs.current[0] = el} muted autoplay loop>
                <source type='video/mp4' src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FApply-Rewards-cut.mp4?alt=media&token=92a8076f-bc61-42bd-b2e7-54539440ef57'></source>
            </video>
        </div>
      </div>


      {/* Selecting Rewards */}

      <div className='flex gap-20 mb-14 mt-14 '>
        <div className='w-1/2'>
            <b className='mb-4 block'>Applying Rewards</b>
            <p className='mb-8fade-in delay-2'>
                In the final experience, loyalty members can easily view their most valuable promos and Rewards based on the items in their shopping bag. Toggling a switch applies the Rewards with all the discounts reflected under the Order Total.
            </p>
        </div>
        <div className='w-1/2 py-12 px-24 bg-neutral-100 rounded-xl'>
            <video className='rounded-[36px]' ref={el => videoRefs.current[1] = el} muted autoplay loop>
                <source type='video/mp4' src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FSelecting-Rewards-cut.mp4?alt=media&token=ca90bad7-dbdc-4898-8861-acfe850f8bf5'></source>
            </video>
        </div>
      </div>


      {/* Potential Scenarios */}

      <b className='mb-4 block'>Potential Scenarios</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        Collaborating closely with dev and product partners, I identified some of the edge cases that needed to be addressed in the design, such as considerations on what happens if the customer tries to override a promo code or if their Rewards reduce the order total below zero.
      </p>

      <div className='mb-14 mt-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FScenarios-1-Export.png?alt=media&token=8f708dde-afcc-40ce-af68-b19aa1dee21e" alt="Digital Store System" />
      </div>

      <div className='mb-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FScenarios-2-Rewards.png?alt=media&token=510123ea-455f-464c-851f-a8b9941c09fc" alt="Digital Store System" />
      </div>

      <div className='mb-14 py-12 px-12 bg-neutral-100 rounded-xl'>
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FRewards-Messages.png?alt=media&token=a1e75d10-678d-4366-920c-a94c76fd154c" alt="Digital Store System" />
      </div>


      {/* Project Takeaways */}

      <b className='mb-4 block'>Project Takeaways</b>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        This project was a valuable demonstration of the advantages of involving cross-functional teams strategically early in the process.
      </p>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        Dialogue with the program team allowed us to fill the gaps in the program requirements identified through design exploration. Collaboration with the development team helped us find a common ground to translate the tech constraints to create a user-friendly experience.
      </p>
      <p className='mb-8 w-3/5 fade-in delay-2'>
        While keeping the technical limitations top of mind presented a challenge in simplifying all the complexity, the additional effort invested to outline all the requirements was worthwhile, saving us a lot of time before committing to design.
      </p>


      <SayHi></SayHi>
    </div>
  );
}

export default MemberRewards;