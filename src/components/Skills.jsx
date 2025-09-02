import React from "react";

export default function Skills({ skillsList = [] }) {
  return (
    <section id="skills" className="py-16 px-6 md:px-20 lg:px-40 binary-background-image">
      <div className="relative z-10 max-w-6xl mx-auto rounded-lg my-10 p-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My <span className="text-cyan-400">Skills</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsList.map((skill, idx) => (
            <div key={idx} className="bg-transparent p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-transparent border border-gray-700 transform hover:-translate-y-2 hover:shadow-cyan-500/40">
              <i className={`${skill.icon} text-5xl mb-3 ${skill.color}`}></i>
              <p className="text-lg font-medium text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
