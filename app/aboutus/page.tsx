import React from 'react';
import Link from 'next/link';

const Aboutus: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-10 bg-[#fef5f3] md:px-20">
      <div className="mb-10 text-center">
        <h1 className='mb-2 text-sm font-semibold tracking-wider text-[#ec7034]'>WHO WE ARE AND OUR MISSION</h1>
        <h2 className='mb-4 text-4xl font-bold text-gray-800'>About our shelter and values</h2>
        <p className='max-w-2xl mx-auto text-gray-600'>We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="max-w-lg space-y-6">
          <h1 className='text-2xl font-semibold text-gray-800'>Your donations help us run important projects</h1>
          <p className='text-gray-600'>As a pioneer of the no-kill movement, Paw Print leads the way with national and international programs designed to increase adoptions and raise awareness about the plight of homeless animals, continuing to make a significant impact.</p>
          <Link href="/donate" passHref>
            <button className='px-6 py-2 font-medium text-white transition-colors duration-300 bg-[#ec7034] rounded-md hover:bg-[#d6632f]'>
              Donate for pets
            </button>
          </Link>
        </div>
        <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
          <img src="/photos/photo2.jpg" className="object-cover w-full h-64 md:h-80" alt="Cover" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
