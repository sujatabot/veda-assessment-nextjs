import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="bg-green-200 p-4 text-center">
        <p className="text-sm font-medium">Join our newsletter</p>
        <p className="text-xs">Pawprint that has been for pets.</p>
        <div className="mt-2 flex justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none" 
          />
          <button className="bg-orange-600 text-white px-4 py-2 rounded-r-md hover:bg-orange-700">Subscribe</button>
        </div>
      </div>
      <div className="container mx-auto py-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Pawprints</h2>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="font-medium mb-2">QUICK LINKS</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Get Involved</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Media</Link></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="font-medium mb-2">RESOURCES</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="#">Animal Safety</Link></li>
                <li><Link href="#">Programs</Link></li>
                <li><Link href="#">Events</Link></li>
                <li><Link href="#">Alumni</Link></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="font-medium mb-2">WAYS TO GIVE</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="#">Find a Family</Link></li>
                <li><Link href="#">Donation</Link></li>
                <li><Link href="#">Volunteer</Link></li>
                <li><Link href="#">Give a Gift</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">SOCIAL MEDIA</h3>
              <p className="text-sm mb-2">Follow us on social media to find out the latest updates on our progress.</p>
              <div className="flex space-x-2">
                <Link href="#"><span aria-label="Twitter" className="text-gray-600 hover:text-gray-800">Twitter</span></Link>
                <Link href="#"><span aria-label="Facebook" className="text-gray-600 hover:text-gray-800">Facebook</span></Link>
                <Link href="#"><span aria-label="Instagram" className="text-gray-600 hover:text-gray-800">Instagram</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-sm">&copy; 2024 fourpaws. All Rights Reserved</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="#"><span className="text-xs text-gray-600 hover:underline">Terms of Service</span></Link>
            <Link href="#"><span className="text-xs text-gray-600 hover:underline">Privacy Policy</span></Link>
            <Link href="#"><span className="text-xs text-gray-600 hover:underline">Security</span></Link>
            <Link href="#"><span className="text-xs text-gray-600 hover:underline">Sitemap</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
