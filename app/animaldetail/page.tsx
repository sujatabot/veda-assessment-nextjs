// pages/animal/[id].tsx
"use client";

import React from 'react';
import { useRouter } from 'next/router';

const AnimalDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Placeholder data - replace this with actual data fetching logic
  const animalDetails = {
    image: "/photos/photo3.jpg",
    goal: "$1340",
    raised: "$800",
    description: "Your donation can save lives. Help us provide care and find loving homes for rescued animals. Every contribution counts. Donate now!",
    progress: 60,
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-10 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        <div className="md:w-1/2 relative">
          <img src={animalDetails.image} alt="Dog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-black text-white text-sm font-bold p-2 rounded transform rotate-90 translate-y-10">Pawprints</span>
          </div>
        </div>
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-xs text-orange-600 font-semibold">A HELP TO THOSE WHO NEED IT</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Transform lives with donations</h2>
          <p className="text-gray-600 mb-4">{animalDetails.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">GOAL: {animalDetails.goal}</span>
            <span className="text-sm font-medium text-gray-600">RAISED: {animalDetails.raised}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${animalDetails.progress}%` }}></div>
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="$ 10.00"
              className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {[10, 25, 50, 100, 250].map(amount => (
                <button
                  key={amount}
                  className="border border-gray-300 rounded px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => console.log(`Donate ${amount}`)}
                >
                  ${amount}.00
                </button>
              ))}
            </div>
          </div>
          <button className="px-6 py-2 font-medium text-white bg-orange-600 rounded-md transition-colors duration-300 hover:bg-orange-700">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
