"use client";

import React, { useState } from 'react';

const Contacts: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email address is not valid');
    } else {
      setError('');
      // handle the form submission
      console.log('Form submitted:', email);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1c1c1c]">
      <div className="w-full max-w-4xl space-y-6">
        {/* First Newsletter Form */}
        <div className="bg-[#8AC4A2] p-6 rounded-md shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">Join our newsletter</h2>
            <p className="text-sm">Pawprint that has been for pets.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="email"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a4f2b] border border-gray-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#8a4f2b] text-black font-semibold rounded-md hover:bg-[#6d3d23]"
            >
              Subscribe
            </button>
          </form>
        </div>
        {error && (
          <div className="text-red-600 text-center mt-2">{error}</div>
        )}
        
        {/* Second Newsletter Form */}
        <div className="bg-[#8AC4A2] p-6 rounded-md shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">Join our newsletter</h2>
            <p className="text-sm">Pawprint that has been for pets.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="email"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a4f2b] border border-gray-300"
              placeholder="narjit@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#8a4f2b] text-black font-semibold rounded-md hover:bg-[#6d3d23]"
            >
              Subscribe
            </button>
          </form>
        </div>
        {error && (
          <div className="text-red-600 text-center mt-2">{error}</div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
