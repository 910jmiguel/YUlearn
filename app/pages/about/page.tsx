import React from 'react';
import Navbar from "@/app/comp/navbar";
import Chatbot from "@/app/comp/chatbot";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <img src="/yulearncourses.png" alt="YuLearn Logo" className=" w-auto mx-auto mt-10"></img>
      </main>

      {/* Footer */}
      <footer className="p-4 w-full text-end bg-red-600">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} YuLearn. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
