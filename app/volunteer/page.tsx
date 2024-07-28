"use client";

import React, { useEffect, useState } from 'react';

const Volunteer = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json')
      .then(response => response.json())
      .then(data => setTestimonials(data.testimonial))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <div className="min-h-screen w-full grid grid-rows-auto py-10">
      <div className="grid place-items-center pb-10">
        <h1 className='text-2xl'>Volunteer Testimonials</h1>
        <h2 className='text-bold'>Check what our volunteers are saying</h2>
        <p>We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-10'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow space-y-2 border border-dotted border-gray-400 flex items-center">
            <img src={testimonial.imagePath} alt={testimonial.fullName} className="w-6 h-6 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-bold">{testimonial.fullName}</h3>
              <p>{testimonial.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#8a4f2b] py-10 rounded-lg mt-10 relative">
        <div className="absolute inset-0 flex justify-between items-center">
          <img src="/photos/photo6.jpg" alt="Dog" className="h-40 hidden md:block" />
          <img src="/photos/photo7.jpg" alt="Cat" className="h-40 hidden md:block" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h2 className="text-3xl font-bold text-black mb-4">Get Involved</h2>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            Our work is made possible by the generosity of people like you, who have contributed to our mission to improve the lives of all animals.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-black text-[#8a4f2b] font-semibold rounded-md hover:bg-gray-200">
              Adopt & Donate to help us →
            </button>
            <button className="px-4 py-2 bg-black text-[#8a4f2b] font-semibold rounded-md hover:bg-gray-200">
              Volunteering opportunities →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
