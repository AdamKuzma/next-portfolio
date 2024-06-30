import React from 'react';
import SayHi from '../components/SayHi';
import Footer from '../components/Footer';

const About = () => (
  <>
  <div className='container'>
      <div className='lg:flex mt-32 gap-20'>
        <div className='lg:w-1/2'>
            <h1 className='text-7xl lg:text-8xl fade-in delay-0'>About</h1>
            <div className='mt-6 mb-18'>
                <p className='mt-8 fade-in delay-1'>
                    I’m a product designer, living in New York City, interested in creating delightful experiences at the intersection of design and technology.
                </p>
                <p className='mt-8 fade-in delay-2'>
                    Currently, I’m a part of the design team at Signet Jewelers, where I create internal tools that empower in-store jewelry experts to build customer relationships.
                </p>
                <p className='mt-8 fade-in delay-3'>
                    As a design generalist, I like to get involved in the whole lifecycle of a product, working both on a strategic and hands-on level, with a primary focus on interaction and design systems. I value simple and aesthetic visual design backed by clever systems thinking.
                </p>
                <p className='mt-8 fade-in delay-4'>
                    In my spare time, you’ll find me walking the streets of NYC and exploring new neighborhoods and restaurants. I love photography, traveling, coffee, and running circles in Prospect Park. I also mentor design students at Chegg Skills.
                </p>
            </div>
        </div>
        <div className='lg:w-1/2 mt-16 lg:mt-0fade-in delay-1'>
            <img className='rounded-xl' src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/Me.jpg?alt=media&token=e9b9b91d-ab42-40b0-ae12-1d0a5698d53d'/>
        </div>
      </div>
      <SayHi></SayHi>
    </div>
    <Footer/>
    </>
);

export default About;