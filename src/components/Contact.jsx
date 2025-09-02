import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 lg:px-40 binary-background-image">
      <div className="relative z-10 max-w-6xl mx-auto bg-transparent rounded-lg my-10 p-8 shadow-2xl border border-gray-800">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          CONTACT <span className="text-cyan-400">INFO</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-transparent p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-700 hover:shadow-cyan-500/40">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <i className="fas fa-phone-alt text-3xl text-teal-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-300">+91-7007571931</p>
          </div>

          {/* Email */}
          <div className="bg-transparent p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-700 hover:shadow-cyan-500/40">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <i className="fas fa-envelope text-3xl text-teal-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-300">saloni.jaju.95@gmail.com</p>
          </div>

          {/* Location */}
          <div className="bg-transparent p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-700 hover:shadow-cyan-500/40">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <i className="fas fa-map-marker-alt text-3xl text-teal-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-300">Ghaziabad, India</p>
          </div>
        </div>

        {/* Extra: Social Links */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.linkedin.com/in/saloni-maheshwari-189b6632a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white text-3xl transition-colors"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/salonimaheshwari98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white text-3xl transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
