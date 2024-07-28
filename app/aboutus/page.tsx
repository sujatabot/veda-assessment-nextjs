import React from 'react';
import Link from 'next/link';

const Aboutus = () => {
  return (
    <div className="bg-magic-mint h-screen w-full grid grid-rows-2">
      <div className="grid place-items-center">
        <div className='text-center space-y-2'>
          <h1 className='text-sm text-red-600'>WHO WE ARE AND OUR MISSION</h1>
          <p>About our shelter and values</p>
          <p>We advocate for vulnerable animals providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center p-10 gap-4">
        <div className="space-y-4">
          <h1>Your donation helps us run important projects</h1>
          <h2>As a pioneer of the no-kill movement, paw-print leads the way with national and international programs designed to increase adoptions and raise awareness about the plight of homeless animals, continuing to make a significant impact.</h2>
          <Link href="/donate">
            <button className='px-4 py-2 font-medium text-white bg-red-700 rounded-md transition-colors duration-300 hover:bg-red-800'>
              Donate for pets
            </button>
          </Link>
        </div>
        <div className="grid place-items-center">
          <img src="/photos/photo2.jpg" className="w-auto h-80" alt="Cover" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
