import React from "react";

export default function Navbar({ activeSection, isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#0A0A0A] bg-opacity-90 backdrop-blur-sm z-50 shadow-lg py-4 px-6 md:px-20 lg:px-40 rounded-b-lg border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-teal-400"
          >
            Saloni
          </button>
          <ul className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`relative text-lg font-medium transition-colors duration-300 hover:text-teal-400 ${
                    activeSection === section ? 'text-teal-400' : 'text-gray-300'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-teal-400 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-teal-400 text-2xl focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0A0A0A] bg-opacity-80 backdrop-blur-sm z-40 flex flex-col items-center justify-center md:hidden animate-slideInRight">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-300 hover:text-teal-400 text-3xl focus:outline-none"
            aria-label="Close mobile menu"
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="space-y-8 text-xl">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    scrollToSection(section);
                    setIsMobileMenuOpen(false); // close after click
                  }}
                  className={`block text-gray-300 hover:text-teal-400 transition-colors duration-300 ${
                    activeSection === section ? 'text-teal-400 font-semibold' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex space-x-6 text-3xl mt-10">
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
        </div>
      )}
    </>
  );
}
