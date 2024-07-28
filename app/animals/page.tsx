"use client";

import React from 'react';

const Animals: React.FC = () => {
  return (
    <div className="min-h-screen w-full p-10 bg-[#fef5f3]">
      <div className="text-center mb-10 space-y-2">
        <h1 className='text-sm font-semibold text-[#ec7034] tracking-wider'>A HELP TO THOSE WHO NEED IT</h1>
        <h2 className='text-4xl font-bold text-gray-800'>Each donation is an essential</h2>
        <p className='text-gray-600 max-w-xl mx-auto'>
          We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className="bg-white w-full h-auto flex flex-col rounded-lg shadow-md border border-gray-200">
          <img src="/photos/photo3.jpg" alt="Animal 1" className="w-full h-40 object-cover rounded-t-md" />
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">GOAL: $1340</span>
              <span className="text-sm font-medium text-gray-600">RAISED: $800</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-[#ec7034] h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">New chance for animals</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="text-[#ec7034] font-medium hover:underline">VIEW DETAILS</button>
          </div>
        </div>
        <div className="bg-white w-full h-auto flex flex-col rounded-lg shadow-md border border-gray-200">
          <img src="/photos/photo4.jpg" alt="Animal 2" className="w-full h-40 object-cover rounded-t-md" />
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">GOAL: $1340</span>
              <span className="text-sm font-medium text-gray-600">RAISED: $800</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-[#ec7034] h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Help the eco system</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="text-[#ec7034] font-medium hover:underline">VIEW DETAILS</button>
          </div>
        </div>
        <div className="bg-white w-full h-auto flex flex-col rounded-lg shadow-md border border-gray-200">
          <img src="/photos/photo5.jpg" alt="Animal 3" className="w-full h-40 object-cover rounded-t-md" />
          <div className="p-6">
          <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">GOAL: $1340</span>
              <span className="text-sm font-medium text-gray-600">RAISED: $800</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-[#ec7034] h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">New Sustainability</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="text-[#ec7034] font-medium hover:underline">VIEW DETAILS</button>
          </div>
        </div>
      </div>
      <div className="grid place-items-center py-10">
        <button className='px-6 py-2 font-medium text-white bg-[#ec7034] rounded-md transition-colors duration-300 hover:bg-[#d6632f]'>
          View All Cause
        </button>
      </div>
    </div>
  );
}

export default Animals;
