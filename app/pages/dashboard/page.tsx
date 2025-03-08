import React from 'react'
import { UserButton } from '@clerk/nextjs'
import User from '../../comp/userhandle'
import Link from 'next/link'
import Chatbot from '../../comp/chatbot'

const UserId = () => {
  return (
    <main className="h-screen w-screen overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between bg-red-600 backdrop-blur-md shadow-md p-4">
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
          <Link href="/pages/courses" className="text-lg font-medium cursor-pointer hover:text-gray-600 text-white transition">
            Courses
          </Link>
          <UserButton />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex h-full w-full items-center justify-center">
        <User />
      </div>

      {/* Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className="text-end p-4 w-full">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} YuLearn. All rights reserved.
        </p>
      </footer>
    </main>
  )
}

export default UserId
