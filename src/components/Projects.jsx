import React from "react";

export default function Projects({ projectsList = [] }) {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 lg:px-40 binary-background-image">
      <div className="relative z-10 max-w-6xl mx-auto bg-transparent rounded-lg my-10 shadow-2xl border border-gray-800 p-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My <span className="text-cyan-400">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsList.map((project, idx) => (
            <div key={idx} className="bg-transparent rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 duration-300 border border-gray-700 hover:-translate-y-2 hover:shadow-cyan-500/40 flex flex-col">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-base mb-4">{project.description}</p>
                </div>
                <a href={project.link} className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors self-start">
                  View Project <i className="fas fa-external-link-alt ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
