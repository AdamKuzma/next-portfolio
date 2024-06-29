import React from 'react';
import Footer from '../components/Footer';
import SayHi from '../components/SayHi';
import Projects from '../components/Projects';

const Home = () => (
  <>
    <main>
      <div className='container'>
        <div className='mb-24 lg:mb-24'>
          <h1 className='mt-44 lg:mt-64 intro-header fade-in delay-0'>
              Adam Kuzma, <br />
              Product Designer.
          </h1>
          <p className='mt-10 max-w-lg intro-description fade-in delay-1'>
              I’m a digital product designer, working at the intersection ↔ of design and engineering, passionate about crafting thoughtful human interactions with technology.
          </p>
        </div>
        <Projects id="work-section"></Projects>
        <SayHi />
      </div>
    </main>
    <Footer/>
  </>
);

export default Home;