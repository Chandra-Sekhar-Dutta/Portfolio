import React from 'react';
import profilePic from '../assets/profilePic.jpg';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython, FaDatabase, FaArrowDown } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus } from 'react-icons/si';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-purple-800 via-indigo-800 to-black text-white text-center py-12 md:py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Profile Image */}
        <img
          className="mx-auto mb-8 w-32 h-32 md:w-32 md:h-45 rounded-full object-cover shadow-2xl ring-4 ring-purple-400 transform transition-transform duration-300 hover:scale-105"
          src={profilePic}
          alt="Profile of Chandra Sekhar Dutta"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight animate-fade-in">
          Hi, I'm Chandra Sekhar Dutta
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-in delay-100">
          A passionate Computer Science student specializing in MERN Stack and IoT applications.
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in delay-200">
          Passionate Software Engineer skilled in C++, Python, and full-stack development, seeking to build efficient, scalable applications. Experienced in network programming, database management, and real-time systems, with a strong problem-solving mindset. Looking for opportunities to contribute to innovative projects while continuously growing in a dynamic environment.
        </p>

        {/* Tech Stack */}
        <div className="mb-10 animate-fade-in delay-300">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">Tech Stack</h2>
          <div className="flex justify-center flex-wrap gap-6 md:gap-8">
            <SiMongodb className="text-5xl text-green-500 hover:text-green-400 transition duration-300" title="MongoDB" />
            <SiExpress className="text-5xl text-gray-300 hover:text-gray-200 transition duration-300" title="Express.js" />
            <FaReact className="text-5xl text-cyan-400 hover:text-cyan-300 transition duration-300" title="React" />
            <FaNodeJs className="text-5xl text-green-600 hover:text-green-500 transition duration-300" title="Node.js" />
            <SiCplusplus className="text-5xl text-blue-600 hover:text-blue-500 transition duration-300" title="C++" />
            <FaPython className="text-5xl text-yellow-400 hover:text-yellow-300 transition duration-300" title="Python" />
            <FaDatabase className="text-5xl text-purple-400 hover:text-purple-300 transition duration-300" title="Database" />
          </div>
        </div>

        {/* Social Media and Resume Buttons */}
        <div className="flex flex-col items-center gap-6 animate-fade-in delay-400">
          <div className="flex justify-center gap-6 items-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1EZsCzHb2aPdgMRxkcXoachhuiWD6M_Xg"
              download="Chandra_Sekhar_Dutta_Resume.pdf"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4 bg-gray-900 bg-opacity-50 py-2 px-6 rounded-full">
            <span className="text-lg font-semibold text-gray-100 bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Connect with me:
            </span>
            <a
              href="https://github.com/Chandra-Sekhar-Dutta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300 relative group"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-4xl" />
              <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/chandra-sekhar-dutta-578595234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300 relative group"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-4xl" />
              <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;