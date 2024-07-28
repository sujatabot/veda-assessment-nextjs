"use client";

import React, { useState } from 'react';

const Donate: React.FC = () => {
  const [amount, setAmount] = useState(10);


  const donationDetails = {
    image: "/photos/photo3.jpg",
    goal: "$1340",
    raised: "$800",
    description: "Your donation can save lives. Help us provide care and find loving homes for rescued animals. Every contribution counts. Donate now!",
    progress: 60,
  };

  const handleDonate = (amount: number) => {
    console.log(`Donate ${amount}`);
    setAmount(amount);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-10 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">
        <div className="md:w-1/2 relative">
          <img src={donationDetails.image} alt="Dog" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 m-4">
          
          </div>
        </div>
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-xs text-orange-600 font-semibold">A HELP TO THOSE WHO NEED IT</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Transform lives with donations</h2>
          <p className="text-gray-600 mb-4">{donationDetails.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">GOAL: {donationDetails.goal}</span>
            <span className="text-sm font-medium text-gray-600">RAISED: {donationDetails.raised}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${donationDetails.progress}%` }}></div>
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="$ 10.00"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {[10, 25, 50, 100, 250].map((presetAmount) => (
                <button
                  key={presetAmount}
                  className="border border-gray-300 rounded px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleDonate(presetAmount)}
                >
                  ${presetAmount}.00
                </button>
              ))}
            </div>
          </div>
          <button
            className="mt-4 px-6 py-2 font-medium text-black bg-red-800 rounded-md transition-colors duration-300 hover:bg-red-900"
            onClick={() => handleDonate(amount)}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;

