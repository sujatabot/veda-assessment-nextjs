"use client";
import React, { useState } from 'react';

const Campaigns: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const boxes = [
    { date: '08 June', title: 'Disaster Relief for Animals', time: '07:00 AM - 10:00 PM', location: 'Kathmandu' },
    { date: '12 June', title: 'Rapid Response for Animals', time: '07:00 AM - 10:00 PM', location: 'Kathmandu' },
    { date: '17 June', title: 'Disaster Relief for Animals', time: '07:00 AM - 10:00 PM', location: 'Kathmandu' },
    { date: '20 June', title: 'Rapid Relief for Animals', time: '07:00 AM - 10:00 PM', location: 'Kathmandu' },
    { date: '22 June', title: 'Disaster Relief for Animals', time: '07:00 AM - 10:00 PM', location: 'Kathmandu' },
    { date: '24 June', title: 'Rapid Relief for Animals', time: '07:00 AM - 10:00 PM', location: 'Kathmandu' },
    // Add more events if needed
  ];

  return (
    <div className="grid w-full min-h-screen bg-orange-50 grid-rows-auto">
      <div className="grid py-10 place-items-center">
        <div className="space-y-2 text-center">
          <h1 className="text-sm text-orange-500 uppercase">Calendar</h1>
          <h2 className="text-4xl font-bold">Event Schedule</h2>
          <p className="text-gray-600">We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
        </div>
      </div>
      <div className="grid py-10 place-items-center">
        <div className="grid grid-cols-1 px-4 pt-0 pb-4 md:grid-cols-3 gap-7 md:px-20">
          {(showAll ? boxes : boxes.slice(0, 3)).map((box, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full h-auto p-6 space-y-2 bg-orange-100 border border-orange-200 rounded-lg shadow-lg md:w-72">
              <h3 className="text-3xl font-bold text-gray-700">{box.date.split(' ')[0]}</h3>
              <p className="text-sm tracking-wider text-gray-500 uppercase">{box.date.split(' ')[1]}</p>
              <h4 className="text-xl font-semibold text-gray-800">{box.title}</h4>
              <p className="text-gray-600">{box.time}</p>
              <p className="text-sm text-gray-500">{box.location}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid py-10 place-items-center">
        <button
          onClick={handleToggle}
          className="px-6 py-2 font-medium text-white transition-colors duration-300 bg-orange-500 rounded-md hover:bg-orange-600"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
    </div>
  );
};

export default Campaigns;
