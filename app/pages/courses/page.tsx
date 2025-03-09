//app\pages\courses\page.tsx
import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Chatbot from "@/app/comp/chatbot";

const CoursesPage = () => {
  const courses = [
    { img: "/course3.webp", title: "Introduction to Git and GitHub", level: "Beginner" },
    { img: "/course1.webp", title: "Introduction to Coding (Python)", level: "Intermediate" },
    { img: "/course2.webp", title: "Frontend Development Basics", level: "Beginner" },
    { img: "/course4.webp", title: "Advanced React.js", level: "Advanced" },
    { img: "/course5.webp", title: "Database Management with PostgreSQL", level: "Intermediate" },
    { img: "/course6.webp", title: "Backend Development with Node.js", level: "Advanced" },
    { img: "/course7.webp", title: "Cybersecurity Fundamentals", level: "Beginner" },
    { img: "/course8.webp", title: "Machine Learning with Python", level: "Intermediate" },
  ];

  return (
    <main className="h-screen w-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between bg-red-600 shadow-md p-4 fixed top-0 z-10">
        <div className="ml-5">
          <Link href="/pages/dashboard">
            <img src="/YuLearn White.svg" alt="YuLearn Logo" className="h-10 w-auto" />
          </Link>
        </div>
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
      <section className="mt-16 flex flex-col items-center justify-center bg-red-500 py-8">
        <h1 className="text-5xl font-bold text-white">Explore Our Courses</h1>
        <p className="text-lg text-white mt-2">Learn new skills and advance your career</p>
      </section>

      {/* Course Listings */}
      <section className="px-10 py-8 flex-grow overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Link key={index} href={`/pages/courses/${index + 1}`} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 w-full">
                <div className="w-full h-40">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h2 className="font-semibold text-lg">{course.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{course.level}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Chatbot */}
      <div className="fixed bottom-5 right-5">
        <Chatbot />
      </div>

      {/* Footer */}
      <footer className="w-full p-4 text-start bg-gray-200">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} YuLearn. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default CoursesPage;
