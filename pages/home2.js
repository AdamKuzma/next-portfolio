import React from 'react';
import Footer from '../components/Footer';
import SayHi from '../components/SayHi';
import Projects from '../components/Projects';
import TypingAnimation from '../components/TypingAnimation';

const Home = () => (
  <>
    <main>
      <div className='container mx-auto px-4 flex flex-col lg:flex-row lg:space-x-8'>
        <div className='mb-44 mt-24 lg:mb-0 flex-1'>
          <p className='fade-in delay-0'>
              Adam Kuzma, <br />
              Product Designer.
          </p>
        {/*<TypingAnimation className="text-sm" />*/}
          <p className='mt-10 fade-in delay-2'>
              I’m a digital product designer, working at the intersection ↔ of design and engineering, passionate about crafting thoughtful human interactions with technology.
          </p>
          <div className='mt-16 mb-32'>
            <div className='mb-8'>
                <p>Clienteling Filters</p>
                <p className='text-neutral-400'>2024 · Product Design</p>
            </div>
            <div className='mb-8'>
                <p>Digital Store System</p>
                <p className='text-neutral-400'>2024 · Design System</p>
            </div>
            <div className='mb-8'>
                <p>Amor Components</p>
                <p className='text-neutral-400'>2022 · Design System</p>
            </div>
            <div className='mb-8'>
                <p>Member Rewards</p>
                <p className='text-neutral-400'>2023 · Product Design</p>
            </div>
        </div>
        </div>
        <div className='flex-1'>
            <div className="w-full h-full flex items-center justify-center">
                <div className='py-8 px-8 bg-neutral-100 rounded-lg'>
                    <img className='' src='https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/featured%2FCL%20-%20Clienteling%20Filters.png?alt=media&token=b384fcfc-79d5-48ab-9a42-7eb6a0d38577' alt='test' />
                </div>
            </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;