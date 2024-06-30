import React from 'react';
import SayHi from '../components/SayHi';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className='container'>
        <div className='lg:flex mt-32 gap-20'>
          <div className='lg:w-1/2 fade-in delay-0'>
            <h1 className='text-7xl lg:text-8xl'>About</h1>
            <div className='mt-6 mb-18'>
              <p className='mt-8 fade-in delay-1'>
                I’m a product designer in NYC, interested in creating delightful experiences at the intersection of design and technology.
              </p>
              <p className='mt-8 fade-in delay-2'>
                Currently, I design internal tools at Signet Jewelers that empower in-store jewelry experts to build strong customer relationships.
              </p>
              <p className='mt-8 fade-in delay-3'>
                As a design generalist, I like to get involved in the full product lifecycle, working both on a strategic and hands-on level. I am driven by curiosity and aim for a high level of craftsmanship and care in my work.
              </p>
              <p className='mt-8 fade-in delay-4'>
                Outside of work, you’ll find me walking around the city, exploring new neighborhoods. I enjoy photography, traveling, coffee, and running in Prospect Park.
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 mt-16 lg:mt-0 fade-in delay-5'>
            <img
              className='rounded-xl'
              src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/Me-comp.jpg?alt=media&token=a4f00667-93b3-4b80-a81b-d8bdf3a57494'
            />
          </div>
        </div>
        <SayHi />
      </div>
      <Footer />
    </>
  );
};

export default About;



