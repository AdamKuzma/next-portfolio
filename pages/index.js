import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Nav />
    <main>
      <div className='container'>
        <div className='mb-44'>
          <h1 className='mt-64 intro-header fade-in delay-0'>
              Adam Kuzma, <br />
              Product Designer.
          </h1>
          <p className='mt-10 max-w-lg intro-description fade-in delay-1'>
              I’m a digital product designer, working at the intersection ↔ of design and engineering, passionate about crafting thoughtful human interactions with technology.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;