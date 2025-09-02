import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-16 px-6 md:px-20 lg:px-40 binary-background-image">
      <motion.div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg my-10 shadow-2xl border border-gray-800 p-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          variants={itemVariants}
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/3 flex justify-center"
            variants={imageVariants}
          >
            {/* TODO: Replace with your photo.
              - Recommended dimensions: 500x500 pixels (or any square image).
              - Place your image file (e.g., 'your-photo.jpg') in the 'public' folder.
            */}
            <img
              src="/AboutPageImage.jpg" // <-- UPDATE THIS FILENAME
              alt="A professional photo of Saloni Maheshwari"
              className="rounded-lg shadow-lg w-full max-w-sm border border-gray-700 object-cover aspect-square"
            />
          </motion.div>
          <motion.div
            className="md:w-2/3 text-lg text-gray-300 leading-relaxed"
            variants={containerVariants} // Stagger paragraphs
          >
            <motion.p className="mb-4" variants={itemVariants}>
              Hello! I'm <span className="text-cyan-400 font-semibold">Saloni Maheshwari</span>, 
              a passionate learner and aspiring Full Stack Developer currently pursuing my 
              Bachelor of Technology in Computer Science and Engineering at 
              <span className="text-cyan-400"> Ajay Kumar Garg Engineering College, Ghaziabad</span>.
            </motion.p>
            <motion.p className="mb-4" variants={itemVariants}>
              I love solving problems and building user-friendly web applications that make 
              technology more accessible. My journey began with a strong curiosity for 
              programming, which grew into hands-on experience in <span className="text-cyan-400">Data Structures & Algorithms (DSA)</span> 
              and <span className="text-cyan-400">MERN Stack Development</span>.
            </motion.p>
            <motion.p variants={itemVariants}>
              On the technical side, I am skilled in <span className="text-cyan-400">C/C++, JavaScript, React.js, Redux, Node.js, 
              Express.js, MongoDB, and SQL</span>. I also enjoy working with modern tools like 
              Git, GitHub, Postman, and deployment platforms such as Vercel and Netlify.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

