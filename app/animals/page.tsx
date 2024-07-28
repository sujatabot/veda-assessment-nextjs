"use client";

import React from 'react';

const Animals: React.FC = () => {
  return (
    <div className="min-h-screen w-full p-10 bg-[#fef5f3]">
      <div className="mb-10 space-y-2 text-center">
        <h1 className='text-sm font-semibold tracking-wider text-orange-600'>A HELP TO THOSE WHO NEED IT</h1>
        <h2 className='text-4xl font-bold text-gray-800'>Each donation is an essential</h2>
        <p className='max-w-xl mx-auto text-gray-600'>
          We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
        </p>
      </div>
      <div className='grid h-auto grid-cols-1 gap-6 md:grid-cols-3'>
        <div className="flex flex-col w-full h-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="w-full h-40 overflow-hidden rounded-t-md">
            <img src="/photos/photo3.jpg" alt="Animal 1" className="object-cover w-full h-auto" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">GOAL: $1340</span>
              <span className="text-sm font-medium text-gray-600">RAISED: $800</span>
            </div>
            <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
              <div className="bg-[#ec7034] h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">New chance for animals</h3>
            <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="font-medium text-orange-700 hover:underline">VIEW DETAILS</button>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="w-full h-40 overflow-hidden rounded-t-md">
            <img src="/photos/photo4.jpg" alt="Animal 2" className="object-cover w-full h-50" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">GOAL: $1340</span>
              <span className="text-sm font-medium text-gray-600">RAISED: $800</span>
            </div>
            <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
              <div className="h-2 bg-orange-700 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">Help the eco system</h3>
            <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="font-medium text-orange-700 hover:underline">VIEW DETAILS</button>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="w-full h-40 overflow-hidden rounded-t-md">
            <img src="/photos/photo5.jpg" alt="Animal 3" className="object-cover w-full h-50" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">GOAL: $1340</span>
              <span className="text-sm font-medium text-gray-600">RAISED: $800</span>
            </div>
            <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
              <div className="h-2 bg-orange-700 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">New Sustainability</h3>
            <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="font-medium text-orange-700 hover:underline">VIEW DETAILS</button>
          </div>
        </div>
      </div>
      <div className="grid py-10 place-items-center">
        <button className='px-6 py-2 font-medium text-white transition-colors duration-300 bg-orange-700 rounded-md hover:bg-orange-700'>
          View All Cause
        </button>
      </div>
    </div>
  );
}

export default Animals;
