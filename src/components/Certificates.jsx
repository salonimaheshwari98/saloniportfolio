import React from "react";

export default function Certificates({ certificatesList = [] }) {
  return (
    <section id="certificates" className="py-16 px-6 md:px-20 lg:px-40 binary-background-image">
      <div className="relative z-10 max-w-6xl mx-auto bg-transparent rounded-lg my-10 p-8 shadow-2xl border border-gray-800">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My <span className="text-cyan-400">Certificates</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificatesList.map((cert, idx) => (
            <div key={idx} className="bg-transparent rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 duration-300 border border-gray-700 hover:-translate-y-2 hover:shadow-cyan-500/40 flex flex-col">
              <img src={cert.image} alt={cert.title} className="w-full h-52 object-cover" />
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">Issuer: {cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">Date: {cert.date}</p>
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors self-start">
                  View Certificate <i className="fas fa-external-link-alt ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
