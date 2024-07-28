"use client";

import React, { useEffect, useState } from 'react';

interface Testimonial {
  imagePath: string;
  fullName: string;
  content: string;
}

const Volunteer: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json')
      .then(response => response.json())
      .then(data => setTestimonials(data.testimonial))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <div className="w-full min-h-screen py-10 bg-gray-100">
      <div className="mb-10 space-y-2 text-center">
        <h1 className='text-3xl font-bold text-gray-800'>Volunteer Testimonials</h1>
        <h2 className='text-xl text-gray-600'>Check what our volunteers are saying</h2>
        <p className='max-w-xl mx-auto text-gray-500'>
          We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-10'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center p-6 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <img src={testimonial.imagePath} alt={testimonial.fullName} className="w-24 h-24 rounded-full" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.fullName}</h3>
            </div>
            <p className="text-center text-gray-600">{testimonial.content}</p>
          </div>
        ))}
      </div>
      <div className="relative mt-20 bg-[#8a4f2b] rounded-lg py-10">
        <div className="absolute inset-0 flex items-center justify-between">
          <img src="/photos/photo6.jpg" alt="Dog" className="hidden h-40 rounded-lg md:block" />
          <img src="/photos/photo7.jpg" alt="Cat" className="hidden h-40 rounded-lg md:block" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Get Involved</h2>
          <p className="max-w-2xl mx-auto mb-6 text-white">
            Our work is made possible by the generosity of people like you, who have contributed to our mission to improve the lives of all animals.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 font-semibold text-[#8a4f2b] bg-white rounded-md hover:bg-gray-200">
              Adopt & Donate to help us →
            </button>
            <button className="px-4 py-2 font-semibold text-[#8a4f2b] bg-white rounded-md hover:bg-gray-200">
              Volunteering opportunities →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
