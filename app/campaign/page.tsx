"use client";
import React, { useState } from 'react';

const Campaigns = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const boxes = Array.from({ length: 9 }).map((_, index) => (
    <div key={index} className="bg-white w-48 h-48 flex flex-col justify-center items-center rounded-lg shadow space-y-2 border border-gray-400">
      <h3 className="text-lg font-bold">08 June</h3>
      <p>Event Description</p>
      <p className="text-sm text-gray-600">Time: 10:00 AM</p>
    </div>
  ));

  return (
    <div className="min-h-screen w-full grid grid-rows-auto">
      <div className="grid place-items-center py-10">
        <div className='text-center space-y-2'>
          <h1 className='text-2xl'>CALENDAR</h1>
          <h2 className='text-xl'>Event Schedule</h2>
          <p>We advocate for vulnerable animals providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
        </div>
      </div>
      <div className="grid place-items-center py-10">
        <div className='grid grid-cols-3 gap-7 pt-0 pb-4 pl-24 pr-20'>
          {showAll ? boxes : boxes.slice(0, Math.ceil(boxes.length / 3))}
        </div>
      </div>
      <div className="grid place-items-center py-10">
        <button
          onClick={handleToggle}
          className='px-4 py-2 font-medium text-white bg-red-700 rounded-md transition-colors duration-300 hover:bg-red-800'
        >
          {showAll ? 'Show Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default Campaigns;

