import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0d0d15] text-gray-200 overflow-hidden">
      
      {/* Floating Social Icons */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex flex-col gap-6 absolute left-8 top-1/3 text-gray-400"
      >
        {[
          { Icon: FaGithub, link: "https://github.com/Chandra-Sekhar-Dutta" },
          { Icon: FaLinkedin, link: "https://www.linkedin.com/in/chandra-sekhar-dutta-578595234/" }
        ].map(({ Icon, link }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -4, color: "#c084fc" }}
            className="cursor-pointer"
          >
            <Icon className="text-xl" />
          </motion.a>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm 
            <span className="text-purple-400"> Chandra Sekhar Dutta</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl">
            A passionate Computer Science student specializing in MERN Stack and IoT applications.
          </p>

          <p className="max-w-xl text-gray-400">
            Passionate Software Engineer skilled in C++, Python, and full-stack development. 
            Experienced in network programming, database management, and real-time systems.
          </p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/17PXPQvyh9dsKk5F1kHE3p_jJ-W92ItxQ/view?usp=sharing"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
            className="inline-block mt-4 px-8 py-3 border border-purple-500 text-purple-300 
                       hover:bg-purple-600/20 transition rounded"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center mt-10 md:mt-0 relative"
        >
          <motion.img
            src={profilePic}
            alt=""
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-72 md:w-96 rounded-xl shadow-lg opacity-90"
          />

          {/* Animated Geometric Shapes */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -left-10 top-10 w-28 h-28 border border-purple-500/30 rounded-lg"
          />

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute left-5 top-24 w-20 h-20 border border-purple-500/20 rounded-lg"
          />
        </motion.div>

      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 mt-20"
      >
        <div className="border border-gray-700 p-6 rounded relative hover:border-purple-500/50 transition">
          <p className="text-lg">“Talk is cheap. Show me the code.”</p>
          <p className="text-right mt-3 text-gray-400">- Linus Torvalds</p>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
