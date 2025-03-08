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
        <h1 className="text-3xl font-bold mt-20 text-center">About YuLearn</h1>
        <p className="text-lg text-center mt-5 max-w-3xl mx-auto">
          YuLearn is an online learning platform that offers a wide range of courses in various fields. Our mission is to provide affordable, high-quality education to everyone.
        </p>

        <Chatbot />
      </main>

      {/* Footer */}
      <footer className="p-4 w-full text-end">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} YuLearn. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
