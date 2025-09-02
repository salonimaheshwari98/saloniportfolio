import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Framer Motion variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const orbVariants = {
    initial: { y: 0, scale: 1 },
    animate: (i) => ({
      y: [0, -20, 0, 20, 0],
      transition: {
        duration: 10 + i * 2, // Vary duration for each orb
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
};

export default function Hero() {
  const professions = [
    "Full Stack Developer",
    "MERN Stack Enthusiast",
    "Creative Coder",
    "Problem Solver",
  ];
  const [professionIndex, setProfessionIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentProfession = professions[professionIndex];
      // Determine if we are deleting or typing
      if (isDeleting) {
        setCurrentText(currentProfession.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentProfession.substring(0, currentText.length + 1));
      }

      // Switch to deleting mode when word is fully typed
      if (!isDeleting && currentText === currentProfession) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } 
      // Switch to typing mode when word is fully deleted
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setProfessionIndex((prev) => (prev + 1) % professions.length);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, professionIndex, professions]);


  const handleDownloadCV = () => {
    // In a real app, you would have the resume in the public folder.
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // This path should point to the resume in the public folder
    link.setAttribute("download", "Saloni_Maheshwari_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Download CV clicked. Ensure resume.pdf is in the public folder.");
  };

  // Split headline for word-by-word animation
  const headline = "Hi, I'm Saloni Maheshwari".split(" ");

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 lg:px-40 bg-gray-900 text-white overflow-hidden"
    >
        {/* Animated Background Orbs */}
        {[...Array(4)].map((_, i) => (
             <motion.div
                key={i}
                custom={i}
                variants={orbVariants}
                initial="initial"
                animate="animate"
                className={`absolute rounded-full bg-indigo-500/20 blur-3xl -z-10`}
                style={{
                    width: `${100 + i * 50}px`,
                    height: `${100 + i * 50}px`,
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`,
                }}
             />
        ))}

      {/* LEFT SECTION */}
      <motion.div
        className="relative z-10 text-center md:text-left md:w-1/2 mb-10 md:mb-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-4"
          variants={itemVariants}
        >
          {headline.map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mr-3 ${word.toLowerCase() === 'saloni' || word.toLowerCase() === 'maheshwari' ? 'text-indigo-400' : ''}`}
              variants={itemVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-6 min-h-[3rem]"
          variants={itemVariants}
        >
          A passionate{" "}
          <span className="font-semibold text-purple-400">{currentText}</span>
          <motion.span
             className="inline-block"
             animate={{ opacity: [0, 1, 0] }}
             transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
          <br />
          building impactful web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center md:justify-start space-x-4 mb-8"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hire Me
          </motion.a>
          <motion.button
            onClick={handleDownloadCV}
            className="bg-gray-700 text-gray-200 font-bold py-3 px-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 10px 30px rgba(107, 114, 128, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center md:justify-start space-x-6 text-3xl"
          variants={containerVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/saloni-maheshwari-189b6632a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400"
            whileHover={{ scale: 1.2, y: -5, color: '#0A66C2' }}
            variants={itemVariants}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a
            href="https://github.com/salonimaheshwari98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400"
            whileHover={{ scale: 1.2, y: -5, color: '#FFFFFF' }}
            variants={itemVariants}
          >
            <i className="fab fa-github"></i>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="relative z-10 md:w-1/2 flex justify-center md:justify-end"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
      >
        <motion.img
           src="https://placehold.co/400x400/1e1b4b/93c5fd?text=SM"
           alt="Saloni Maheshwari"
           className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/20"
           animate={{
             y: [0, -15, 0],
             rotate: [0, 2, 0, -2, 0]
           }}
           transition={{
             duration: 8,
             repeat: Infinity,
             ease: "easeInOut",
           }}
        />
      </motion.div>
    </section>
  );
}
