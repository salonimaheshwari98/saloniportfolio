import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import projectPlaceholder1 from './assets/project6.png';
import projectPlaceholder2 from './assets/project7.png';
import projectPlaceholder3 from './assets/project8.png';
import projectPlaceholder4 from './assets/project4.png';
import projectPlaceholder5 from "./assets/project5.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll spy for active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 150) {
          current = sections[i];
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Skills from Resume
  const skillsList = [
    { name: "C/C++", icon: "devicon-cplusplus-plain", color: "text-blue-400" },
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
    { name: "React.js", icon: "fab fa-react", color: "text-sky-400" },
    { name: "Redux", icon: "devicon-redux-original", color: "text-purple-400" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "Next.js", icon: "devicon-nextjs-original", color: "text-gray-200" },
    { name: "Express.js", icon: "fas fa-server", color: "text-gray-400" },
    { name: "MongoDB", icon: "fas fa-database", color: "text-green-600" },
    { name: "SQL", icon: "fas fa-database", color: "text-indigo-400" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-red-600" },
    { name: "GitHub", icon: "fab fa-github", color: "text-gray-200" },
    { name: "VS Code", icon: "devicon-vscode-plain", color: "text-blue-400" },
    { name: "Netlify", icon: "devicon-netlify-plain", color: "text-cyan-400" },
    { name: "Vercel", icon: "devicon-vercel-original", color: "text-white" },
    { name: "Postman", icon: "devicon-postman-plain", color: "text-orange-400" },
  ];

  // Projects from Resume
  const projectsList = [
    { 
      title: "Study Notion", 
      description: "A full-stack EdTech platform built with React, Node.js, Express.js, and MongoDB. Features include secure user authentication, course exploration, enrollment, progress tracking, and real-time updates. Deployed on Vercel for global access.", 
      image: projectPlaceholder1, 
      link: "https://vercelbackend-iml9.vercel.app/" 
    },
    { 
      title: "Merchant Aisle", 
      description: "A two-page e-commerce website built using React.js and Redux. Fetches product data dynamically from REST APIs to provide a seamless, responsive user experience.", 
      image: projectPlaceholder2, 
      link: "https://merchantaisle.netlify.app/" 
    },
    { 
      title: "Spotify Clone", 
      description: "Replicated core Spotify functionality including music playback and playlist creation using HTML, CSS, and JavaScript.", 
      image: projectPlaceholder3, 
      link: "https://github.com/salonimaheshwari98/SpotifyClone" 
    },
  ];

  // No certificates listed in resume → leave empty
  const certificatesList = [];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-inter">
      <Navbar
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills skillsList={skillsList} />
        <Projects projectsList={projectsList} />
        {/* <Certificates certificatesList={certificatesList} /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
