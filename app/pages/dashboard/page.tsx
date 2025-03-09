import React from "react";
import { UserButton } from "@clerk/nextjs";
import User from "../../comp/userhandle";
import Link from "next/link";
import Chatbot from "../../comp/chatbot";

const UserId = () => {
  return (
    <main className="h-screen w-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between bg-red-600 shadow-md p-4 z-10">
        <div className="ml-5">
          <Link href="/pages/dashboard">
            <img src="/YuLearn White.svg" alt="YuLearn Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Links + UserButton on the Right */}
        <div className="flex items-center space-x-6 mr-5">
          <Link href="/pages/about" className="text-lg font-medium text-white hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/pages/courses" className="text-lg font-medium text-white hover:text-gray-300 transition">
            Courses
          </Link>
          <UserButton />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/Lassonde.webp" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
        </div>

        {/* Welcome Text */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">WELCOME <User /></h1>
        </div>
      </section>

      {/* Course Recommendations */}
      <section className="px-10 py-6 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Course Cards */}
          {[
            { img: "/course3.webp", title: "Introduction to Git and GitHub", level: "Beginner" },
            { img: "/course1.webp", title: "Introduction to Coding (Python)", level: "Intermediate" },
            { img: "/course2.webp", title: "Introduction to Frontend", level: "Beginner" },
          ].map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="w-full h-40">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 text-center">
                <h2 className="font-semibold text-lg">{course.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{course.level}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Footer - Now in Bottom Right */}
      <footer className="absolute bottom-0 right-0 p-2">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} YuLearn. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default UserId;