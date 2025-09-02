import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-8 px-6 md:px-20 lg:px-40 text-center text-gray-400 text-sm rounded-t-lg mt-10 border-t border-gray-800">
      <div className="relative z-10 max-w-4xl mx-auto bg-transparent rounded-lg p-8 shadow-2xl border border-gray-800">
        <h3 className="text-3xl font-bold text-white mb-4">SALONI MAHESHWARI</h3>
        <p className="text-gray-300 text-lg mb-6">
          Aspiring Full Stack Developer | MERN Stack Enthusiast | DSA Learner
        </p>
        <div className="flex justify-center space-x-6 text-3xl mb-6">
          <a
            href="https://www.linkedin.com/in/saloni-maheshwari-189b6632a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/salonimaheshwari98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Saloni Maheshwari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
