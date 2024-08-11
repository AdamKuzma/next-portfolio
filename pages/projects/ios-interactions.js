import React, { useRef, useEffect } from 'react';
import ProjectHeader from '../../components/ProjectHeader';
import SayHi from '../../components/SayHi';

function IOSInteractions() {

  const videoRefs = useRef([]);

    useEffect(() => {
      const playVideo = (video) => {
        video.play().catch(error => {
          console.error('Error attempting to play', error);
        });
      };

      videoRefs.current.forEach(video => {
        if (video) {
          // Try to play the video direct
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
        title="iOS Interactions"
        company="Side Project"
        year="2024"
        scope="Interaction Design"
      />

      {/* Project Intro */}

      <p className='mb-12 lg:w-3/5 fade-in delay-4'>
        I&apos;ve always been fascinated by unique interactions that feel natural and fluid. Driven by curiosity and desire to push boundaries of my craft, I started creating a series of Origami prototypes, where I experiment with new ways of interacting with mobile devices by leveraging iOS hardware capabilities.
      </p>

      <div className='mb-3 flex lg:flex-row flex-col rounded-lg gap-10 fade-in delay-5'>
        <div className='flex-1 rounded-lg relative lg:h-[541px] overflow-hidden'>
            <video className='lazyload rounded-lg' ref={el => videoRefs.current[1] = el} muted autoplay loop playsInline preload="auto" poster=''>
                <source
                  type='video/mp4'
                  src='/videos/GyroLightA.mp4'></source>
            </video>
        </div>
        <div className='flex-1 rounded-lg relative lg:h-[541px] overflow-hidden'>
            <video className='lazyload rounded-lg mt-[-15px]' ref={el => videoRefs.current[2] = el} muted autoplay loop playsInline preload="auto" poster=''>
                <source
                  type='video/mp4'
                  src='/videos/GyroDarkA.mp4'></source>
            </video>
        </div>
      </div>
      <p className='mb-8 annotation text-sm'>Gyroscope device motion interaction</p>

      <p className='mb-24 lg:w-3/5'>
        Payment card concept that is leveraging iOS gyroscope capabilities to tilt the card as you rotate the phone. Here, I also experimented with simulated lighting and holographic shimmer effect which dynamically changes with device motion.
      </p>

      <div className='mb-3 flex lg:flex-row flex-col rounded-lg gap-10'>
        <div className='flex-1 rounded-lg relative lg:h-[580px] overflow-hidden'>
            <video className='lazyload rounded-lg mt-[-70px]' ref={el => videoRefs.current[3] = el} muted autoplay loop playsInline preload="auto" poster=''>
                <source
                  type='video/mp4'
                  src='/videos/PortalClosing.mp4'></source>
            </video>
        </div>
        <div className='flex-1 rounded-lg relative lg:h-[580px] overflow-hidden'>
            <video className='lazyload rounded-lg mt-[-70px]' ref={el => videoRefs.current[4] = el} muted autoplay loop playsInline preload="auto" poster=''>
                <source
                  type='video/mp4'
                  src='/videos/SwipingShort.mp4'></source>
            </video>
        </div>
      </div>
      <p className='mb-8 annotation text-sm'>Masked view transitions</p>

      <p className='mb-12 lg:w-3/5'>
        Masked views exploration, revealing additional information on tap. To create a sense of depth, the cards visually lift and lower along the Z-axis with smooth scale transitions. Details are dismissed by tapping the close button or swiping down beyond a specific threshold, creating a more natural interaction.
      </p>

      <p className='mb-12 lg:w-3/5'>
        More coming soon...
      </p>

      <SayHi></SayHi>
    </div>
  );
}

export default IOSInteractions;