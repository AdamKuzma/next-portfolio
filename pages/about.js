import React from 'react';
import SayHi from '../components/SayHi';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className='container'>
        <div className='lg:flex mt-32 mb-16 gap-12'>
          <div className='lg:w-1/2 fade-in delay-0'>
            <h1 className='text-7xl lg:text-7xl'>About</h1>
            <div className='mt-6 mb-18'>
              <p className='mt-8 fade-in delay-1'>
                I&apos;m a product designer in NYC, interested in creating delightful experiences at the intersection of design and technology.
              </p>
              <p className='mt-8 fade-in delay-2'>
                Currently, I design internal tools at Signet Jewelers that empower in-store jewelry experts to build strong customer relationships.
              </p>
              <p className='mt-8 fade-in delay-3'>
                As a design generalist, I like to get involved in the full product lifecycle, working both on a strategic and hands-on level. I am driven by curiosity and aim for a high level of craftsmanship and care in my work.
              </p>
              <p className='mt-8 fade-in delay-4'>
                Outside of work, you&apos;ll find me walking around the city, exploring new neighborhoods. I enjoy <Link className='link' href="/photos">photography</Link>, traveling, coffee, and running in Prospect Park.
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 mt-16 lg:mt-0 fade-in delay-5'>
            <Image
              className='rounded-xl'
              alt='Adam Kuzma'
              layout='responsive'
              width={600}
              height={900}
              src='/images/HiAdam.jpg'
              placeholder='blur'
              blurDataURL='/images/HiAdam-comp.jpg'
            />
          </div>
        </div>
        <SayHi />
      </div>
    </>
  );
};

export default About;



