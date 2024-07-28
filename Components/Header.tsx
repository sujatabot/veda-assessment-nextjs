import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='pt-6 pl-8 pr-8 ' >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between rounded-2xl bg-slate-100  h-auto">
        <ul className="flex items-center space-x-8">
          <li>
            <Link href="/" className='text-lg font-semibold text-red-900 transition-colors duration-300 hover:text-red-700'>
              Paw Prints
            </Link>
          </li>
          <li>
            <Link href="/campaign" className='text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900'>
              Campaigns & Topics
            </Link>
          </li>
          <li>
            <Link href="/animals" className='text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900'>
              Animals
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className='text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900'>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contacts" className='text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900'>
              Contacts
            </Link>
          </li>
        </ul>
        <div className='flex items-center space-x-4'>
          <Link href="/volunteer" className='px-4 py-2 font-medium text-red-600 border border-red-600 rounded-md transition-colors duration-300 hover:bg-red-600 hover:text-white'>
            Volunteer
          </Link>
          <Link href="/donate" className='px-4 py-2 font-medium text-white bg-red-700 rounded-md transition-colors duration-300 hover:bg-red-800'>
            Donate
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
