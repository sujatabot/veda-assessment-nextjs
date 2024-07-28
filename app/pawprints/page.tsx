import Link from 'next/link';
import React from 'react';

const Pawprints = () => {
  return (
    <div className="bg-[#8AC4A2] h-screen w-full grid grid-cols-2">
      <div className="pl-10 grid content-center">
        <div className="space-y-4">
          <h1 className="text-sm text-red-700">SAVING LIVES EVERY DAY</h1>
          <h2 className="text-2xl">Saving lives of cats and dogs across the world</h2>
          <h3>
            We advocate for vulnerable animals, providing safety while responsible pet ownership. We uplift both animals and communities.
          </h3>
          <button className='border border-black bg-red-950'>  <Link href="/aboutus" className='text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900'>
              About Us
            </Link></button>
        </div>
      </div>
      <div className="grid place-items-center">
        <img src="/photos/photo1.jpg" className="w-auto h-80" alt="Cover" />
      </div>
    </div>
  );
}

export default Pawprints;




