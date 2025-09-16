import React, { useRef, useEffect, useState } from 'react';
import ProjectHeader from '../../components/ProjectHeader';
import SayHi from '../../components/SayHi';

function VerizonRetail() {
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
  });

  // Original content (only shown after authentication)
  return (
    <div className='container mx-auto'>
      <ProjectHeader
        title="Verizon Retail AI"
        company="Verizon"
        year="2025"
        scope="Product Design"
      />
    
        <div className='mb-12 flex lg:flex-row flex-col rounded-lg fade-in delay-4'>
            <div className='flex-1 rounded-lg relative overflow-hidden'>
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 56.25% = 9/16 = 16:9 aspect ratio */}
                    <video 
                        className='lazyload rounded-lg absolute top-0 left-0 w-full h-full object-cover' 
                        ref={el => videoRefs.current[1] = el} 
                        muted 
                        autoPlay 
                        loop 
                        playsInline 
                        preload="auto" 
                        poster='/images/flipfolder/ff-featured-lazy.png'
                    >
                        <source
                            type='video/mp4'
                            src='/videos/verizon/VerizonMain.mp4'
                        ></source>
                    </video>
                </div>
            </div>
        </div>
        
        {/* Project Intro */}
        <p className='mb-6 lg:w-3/5 fade-in delay-5'>
            I am currently leading design for Verizon’s next-generation retail point-of-sale and connected in-store experience, helping store representatives serve customers faster and with greater transparency.
        </p>
        <p className='mb-6 lg:w-3/5 fade-in delay-6'>
            My work focuses on AI-assisted workflows for sales recommendations, bill support, and complex service journeys—designing for control, clarity, and speed. To respect confidentiality, a detailed case study is available privately on request.
        </p>

      <SayHi></SayHi>
    </div>
  );
}

export default VerizonRetail; 