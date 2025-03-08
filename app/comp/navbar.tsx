import React from 'react'
import Link from 'next/link'
import UserButton from '../comp/userhandle'
import { User } from '@clerk/nextjs/server'

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full flex items-center justify-between bg-red-600 backdrop-blur-md shadow-md p-4">
              {/* Logo on the Left */}
              <div className="ml-5">
                <Link href="/pages/dashboard">
                  <img src="/YuLearn White.svg" alt="YuLearn Logo" className="h-10 w-auto" />
                </Link>
              </div>
      
              {/* Navigation Links + UserButton on the Right */}
              <div className="flex items-center space-x-6 mr-5">
              <Link href="/pages/about" className="text-lg font-medium cursor-pointer hover:text-gray-600 text-white transition">
                About
              </Link>
                <Link href="/pages/dashboard" className="text-lg font-medium cursor-pointer hover:text-gray-600 text-white transition">
                Dashboard
              </Link>
                
              </div>
            </nav>
    </div>
  )
}

export default Navbar
