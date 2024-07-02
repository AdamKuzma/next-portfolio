import React, { useRef, useEffect } from 'react';
import ProjectHeader from '../../components/ProjectHeader';
import SayHi from '../../components/SayHi';

function DigitalStoreSystem() {

  const videoRefs = useRef([]);

    useEffect(() => {
      const playVideo = (video) => {
        video.play().catch(error => {
          console.error('Error attempting to play', error);
        });
      };

      videoRefs.current.forEach(video => {
        if (video) {
          // Try to play the video directly
          playVideo(video);

          // Add event listener to try to play the video on user interaction
          video.addEventListener('click', () => playVideo(video));
          video.addEventListener('touchstart', () => playVideo(video));
        }
      });
    }, []);

  return (
    <div className='container mx-auto'>
      <ProjectHeader
        title="Clienteling Filters"
        company="Signet Jewelers"
        year="2024"
        scope="Product Design"
      />

      {/* Project Intro */}

      <div className='mb-12 py-3 px-3 lg:py-0 lg:px-28 bg-[#F4F4F5] fade-in delay-2 rounded-lg'>
            <video className='lazyload' ref={el => videoRefs.current[0] = el} muted autoplay loop playsInline preload="auto" poster='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20FirstComp.jpg?alt=media&token=39439f65-8cd9-42b4-b023-050f299788d1'>
                <source
                  type='video/mp4'
                  src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FCL%20-%20Featured%201.mp4?alt=media&token=23bf42c3-4a5a-4674-992e-f8c07a59d22c'></source>
            </video>
      </div>

      <b className='mb-4 block fade-in delay-3'>Context</b>
      <p className='mb-6 lg:w-3/5 fade-in delay-3'>
        Jewelry experts at Signet&apos;s stores use the Clienteling iPad app to build stronger relationships with customers. Customer outreach is one of the most frequently performed tasks in-store. 
      </p>

      <p className='mb-12 lg:w-3/5 fade-in delay-4'>
        Jewelry experts would typically use Clienteling&apos;s customer search filters to find specific customers or customer segments for targeted communication and reach out to them via email or schedule a reminder to contact them at a later time - for example to promote a new line of engagement rings to customers who would potentially be interested.
      </p>

      <div className='mb-12 px-12 py-6 lg:px-56 lg:py-16 bg-[#F2F2F4] rounded-lg'>
        <img
          className='w-full h-auto object-contain rounded-lg'
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FClienteling%20Context.png?alt=media&token=d77d10bb-5364-44c3-af58-43676044aa6a" 
          alt="Digital Store System"
        />
      </div>

      {/* Problem */}

      <b className='mb-4 block'>Problem</b>
      <p className='mb-6 lg:w-3/5'>
        As the search capabilities kept evolving and new filters were added, their organization started to become unintuitive. New Jewelry Experts faced a steep learning curve, while experienced JEs asked for more filtering options. Many of the frequently used filters were hidden under the second navigation level, which led to poor discoverability.
      </p>

      <p className='mb-12 lg:w-3/5'>
        Once the filters for a specific customer segment were applied, there was no visibility to the contact method each customer was opted into, meaning the JEs would often find out that some of the selected customers don&apos;t have an email address in their records.
      </p>

      <div className='mb-12 px-6 py-6 lg:px-44 lg:py-16 bg-[#F2F2F4] rounded-lg'>
        <img className='w-full h-auto object-contain rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FClienteling%20-%20Current%20Filters.png?alt=media&token=90228814-411d-4477-8d71-eff32cc3a03e" alt="Digital Store System" />
      </div>

      {/* Solution */}

      <b className='mb-4 block'>Solution</b>
      <p className='mb-6 lg:w-3/5'>
        In collaboration with product managers, researchers, and engineers, I led the design for the new customer filters for Jewelry Experts from discovery to implementation.
      </p>

      <p className='mb-6 lg:w-3/5'>
        The new design offered a simple and approachable filtering experience for new JEs, while maintaining the functionality and flexibility appreciated by tenured JEs.
      </p>

      <p className='mb-6 lg:w-3/5'>
        I also streamlined outreach and creating outreach reminders by bringing visibility to available contact methods to inform decision-making and remove unnecessary steps.
      </p>

      <p className='mb-12 lg:w-3/5'>
        After testing two design variants with Jewelry Experts in-store, we&apos;ve taken the features that tested positively to inform the final designs below.
      </p>

      <div className='mb-12 py-4 px-6 lg:px-44 lg:py-16 bg-[#F2F2F4] rounded-lg'>
        <img className='w-full h-auto object-contain' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FClienteling%20Filters.png?alt=media&token=a9f1bdda-d9f4-4bc1-875c-f07004775abe" alt="Digital Store System" />
      </div>

      <p className='mb-6 lg:w-3/5'>
        With the new customer filters, you can now...
      </p>
      <ul className='mb-12 lg:w-3/5 list-disc'>
        <li className='mb-2'>Use the search bar to find specific customers by name or contact info</li>
        <li className='mb-2'>View all filters and apply them from a single drawer</li>
        <li className='mb-2'>View and filter specific contact methods</li>
        <li className='mb-2'>Apply multiple filters at the same time</li>
        <li className='mb-2'>Filter by last outreach activity</li>
      </ul>


      {/* Search Bar */}

      <div className='mb-3 pt-8 pb- px-6 lg:pt-16 lg:pb-0 lg:px-32 bg-[#F2F2F4] rounded-lg'>
            <video className='lazyload' ref={el => videoRefs.current[1] = el} muted autoplay loop playsInline preload="auto" poster='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20SearchComp.jpg?alt=media&token=5669a678-0026-4683-b39a-88692ea6edaf'>
                <source
                  type='video/mp4'
                  src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20Search.mp4?alt=media&token=63eb4635-8c8f-4797-92af-d1c79f77d578'></source>
            </video>
      </div>
      <p className='mb-8 annotation text-sm'>Search bar</p>

      <p className='mb-12 lg:w-3/5'>
        Previously, users had to select from a dropdown option to show a search bar. Now the search bar is directly accessible, allowing users to quickly find a specific customer.
      </p>


      {/* New Filter Drawer */}

      <div className='mb-3 pt-8 pb- px-6 lg:pt-16 lg:pb-0 lg:px-32 bg-[#F2F2F4] rounded-lg'>
            <video className='lazyload' ref={el => videoRefs.current[2] = el} muted autoplay loop playsInline preload="auto" poster='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20Filter.jpg?alt=media&token=5261857a-c22e-484c-a077-1fd95bbcd81f'>
                <source
                  type='video/mp4'
                  src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20Filter.mp4?alt=media&token=86eb82ba-8168-44c4-a933-cf777fba8cdd'></source>
            </video>
      </div>
      <p className='mb-8 annotation text-sm'>New filter drawer</p>

      <p className='mb-12 lg:w-3/5'>
        All filters are applied from a drawer, which creates a more focused experience, brings more visibility to all available filters, and better supports adding new filters in the future.
      </p>


      {/* Contact Methods */}

      <div className='mb-3 pt-8 pb- px-6 lg:pt-16 lg:pb-0 lg:px-32 bg-[#F2F2F4] rounded-lg'>
            <video className='lazyload' ref={el => videoRefs.current[3] = el} muted autoplay loop playsInline preload="auto" poster='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20Filter.jpg?alt=media&token=5261857a-c22e-484c-a077-1fd95bbcd81f'>
                <source
                  type='video/mp4'
                  src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20Filter.mp4?alt=media&token=86eb82ba-8168-44c4-a933-cf777fba8cdd'></source>
            </video>
      </div>
      <div className='mb-3 pt-0 pb-8 px-6 lg:pt-0 lg:pb-16 lg:px-32 bg-[#F2F2F4] rounded-lg'>
            <video className='lazyload' ref={el => videoRefs.current[4] = el} muted autoplay loop playsInline preload="auto" poster='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20ScheduleTaskComp.jpg?alt=media&token=090c7063-8f0f-4c8c-968d-399901a262e8'>
                <source
                  type='video/mp4'
                  src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/clienteling-filters%2FCL%20-%20Schedule%20Task.mp4?alt=media&token=d5508d0b-bbf0-4f67-a9cf-f8e9fb9528d4'></source>
            </video>
      </div>
      <p className='mb-8 annotation text-sm'>Contact methods</p>

      <p className='mb-4 lg:w-3/5'>
        JEs can now see the contact methods customers are opted-into and filter for specific methods to schedule a method-specific task.
      </p>

      <p className='mb-12 lg:w-3/5'>
        Previously, scheduled tasks had a &apos;generic outreach&apos; type which required the JE to spend additional time to view the customer profile in search of available contact information.
      </p>


      {/* Multiple Filers */}


      <div className='mt-4 mb-3 px-6 py-6 lg:px-40 lg:py-12 bg-[#F2F2F4] rounded-lg'>
        <img className='w-full h-auto object-contain rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FCL%20Multiple%20Filters.png?alt=media&token=7992cb03-b341-45be-898c-40edf070df7c" alt="Digital Store System" />
      </div>
      <p className='mb-8 annotation text-sm'>Faceted filters</p>

      <p className='mb-16 lg:w-3/5'>
        Multiple filters can be applied at the same time, allowing for a more personalized outreach. The numbers next to each filter update with each selection, representing the customers who belong to that segment.
      </p>


      {/* Last Outreach */}


      <div className='mt-4 mb-3 px-6 py-6 lg:px-40 lg:py-12 bg-[#F2F2F4] rounded-lg'>
        <img className='w-full h-auto object-contain rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FCL%20Last%20Outreach.png?alt=media&token=52d1a1df-f35e-47bd-8599-e874f12b9be7" alt="Digital Store System" />
      </div>
      <p className='mb-8 annotation text-sm'>Last outreach filter</p>

      <p className='mb-4 lg:w-3/5'>
        One of the pain points was finding when was the last time each customer was contacted to avoid spam.
      </p>

      <p className='mb-16 lg:w-3/5'>
        I added a new Last Outreach filter which allows to filter customers who haven&apos;t been contacted in a while and also exclude customers who already have a scheduled outreach task.
      </p>


      {/* Details

      <b className='mb-4 block'>Details</b>
      <p className='mb-8 lg:w-3/5'>
        Since this was a larger initiative, I took the opportunity to address some of the smaller interaction issues in the previous experience.
      </p>
      */}

      {/* Takeaways */}
      <div className='mb-12 pt-12 px-28 lg:px-[34%] lg:pt-24 bg-[#F2F2F4] rounded-lg'>
        <img className='w-full h-auto object-contain rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/projects%2FCL%20Icon.png?alt=media&token=9ed1018c-8bce-4c66-92ae-de4f47c60592" alt="Digital Store System" />
      </div>

      <b className='mb-4 block'>Takeaways</b>
      <p className='mb-4 lg:w-3/5'>
        This project was part of a larger initiative and it was a great learning opportunity because of its broad scope and complexity. Here are some of the personal learnings:
      </p>

      <ul className='mb-6 lg:w-3/5 list-disc'>
        <li className='mb-4'>Understanding how changes to product features can impact the app in the larger context</li>
        <li className='mb-4'>Building and continuing the collaboration momentum with multiple teams on the project from start to finish</li>
        <li className='mb-4'>Prioritizing effort on the most important features and avoiding scope creep</li>
        <li className='mb-4'>Balancing the needs of new employees and power users</li>
        <li className='mb-4'>Keeping the user testing sessions short, and prototypes simple to retain participant engagement</li>
      </ul>

      <SayHi></SayHi>
    </div>
  );
}

export default DigitalStoreSystem;