import React from 'react';
import Link from 'next/link';

function SayHi() {
  return (
    <div className='text-center mb-44 mt-24 lg:mb-48 lg:mt-44 max-w-sm mx-auto'>
      <h2 className='text-7xl lg:text-9xl mb-6 lg:mb-8'>Say Hi</h2>
      <p className='place-content-center content-center'>If you would like to collaborate or learn more about my work, <Link className='link pb-[2px]' href="/contact">get in touch</Link></p>
    </div>
  );
}

export default SayHi;