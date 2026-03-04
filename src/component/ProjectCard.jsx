import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

import IOT from '../assets/IOT.jpg';
import chat from '../assets/chat.png';
import CPPChat from '../assets/CPPChat.png';
import Terminal from '../assets/Terminal.png';
import Resume from '../assets/Resume.jpeg';

const projects = [
  {
    id: 1,
    title: 'AI Powered Resume Builder',
    description:
      'A full-stack web application for building, editing, and downloading AI-generated professional resumes.',
    topics: ['AI', 'Resume Builder', 'Web Dev'],
    technologies: ['React', 'Node.js', 'Strapi', 'Tailwind'],
    image: Resume,
    link: 'https://github.com/Chandra-Sekhar-Dutta/AI-Powered-Resume-Generator',
  },
  {
    id: 2,
    title: 'AI-Powered Python Terminal',
    description:
      'A Linux-like terminal built in Python with NLP-based command interpretation.',
    topics: ['CLI', 'AI Interface'],
    technologies: ['Python', 'Flask', 'NLP'],
    image: Terminal,
    link: 'https://github.com/Chandra-Sekhar-Dutta/Python-Terminal',
  },
  {
    id: 3,
    title: 'IoT Smart Irrigation System',
    description:
      'Arduino-based smart irrigation with real-time moisture monitoring and SQL logging.',
    topics: ['IoT', 'Sensors'],
    technologies: ['Arduino', 'SQL', 'Python'],
    image: IOT,
    link: 'https://github.com/Chandra-Sekhar-Dutta/IOT-Research-Papers-and-Project',
  },
  {
    id: 4,
    title: 'Real-Time Chat App',
    description: 'A real-time chat platform using Node.js and Socket.IO.',
    topics: ['Chat', 'Realtime'],
    technologies: ['Node.js', 'Socket.IO'],
    image: chat,
    link: 'https://github.com/Chandra-Sekhar-Dutta/OnlineChat',
  },
  {
    id: 5,
    title: 'C++ TCP Chat App',
    description: 'Multi-threaded TCP chat using Winsock in C++.',
    topics: ['C++', 'Networking'],
    technologies: ['C++', 'Winsock'],
    image: CPPChat,
    link: 'https://github.com/Chandra-Sekhar-Dutta/Chatting-App-in-Cpp',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = (direction = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -60 : 60, scale: 0.98 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
});

export default function ProjectCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <div className="relative px-4 py-8" ref={ref}>
      {/* Section heading */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-3">
          <div className="text-xs text-gray-400 font-mono">#complete-apps</div>
        </div>
      </div>

      {/* Relative wrapper so timeline height matches content */}
      <div className="relative max-w-6xl mx-auto">

        {/* TIMELINE - corrected version */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? '100%' : 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="hidden md:block absolute left-1/2 top-0.2 w-[2px] bg-gray-800"
          style={{ transform: 'translateX(-50%)' }}
        />

        {/* PROJECTS WITH ANIMATION */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <div className="space-y-20">
            {projects.map((project, idx) => {
              const isLeft = idx % 2 === 0;
              const direction = isLeft ? 'left' : 'right';

              return (
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={itemVariants(direction)}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Circle marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0.6 }}
                      animate={{ scale: [0.8, 1.05, 0.95], opacity: [0.6, 1, 0.9] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="block w-5 h-5 bg-purple-500 rounded-full border-2 border-[#0b0c10]"
                    />
                  </div>

                  {/* Left card */}
                  <div className={`md:w-5/12 w-full ${isLeft ? 'md:pr-8 md:order-1' : 'md:pl-8 md:order-2'} z-10`}>
                    <div className="border border-gray-700 rounded-sm p-4 bg-[#0d0d12]">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">Project</div>
                        <div className="text-xs text-gray-400 font-mono">#{project.id}</div>
                      </div>

                      <h3 className="text-lg font-semibold text-purple-300 mb-2 tracking-tight font-mono">{project.title}</h3>

                      <p className="text-sm text-gray-300 mb-3 leading-relaxed">{project.description}</p>

                      <div className="flex gap-2 flex-wrap mb-3">
                        {project.topics.map((t, i) => (
                          <span key={i} className="text-xs px-2 py-1 border border-gray-700 rounded bg-[#0b0c10] text-purple-300 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400 font-mono">{project.technologies.slice(0, 3).join(', ')}</div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-cyan-300 font-semibold underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/12 hidden md:block"></div>

                  {/* Right project image */}
                  <div className={`md:w-5/12 w-full ${isLeft ? 'md:pl-8 md:order-2' : 'md:pr-8 md:order-1'} z-10`}>
                    <div className="border border-gray-800 rounded p-2 bg-[#0d0d10]">
                      <div className="relative overflow-hidden rounded-sm">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-44 object-cover rounded-sm border border-gray-700/40"
                        />
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute left-3 bottom-3 text-xs bg-[#0b0c10] border border-purple-700 text-purple-300 px-3 py-1 rounded"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <div className="mt-16 flex justify-center">
        <a href="#projects" className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full">
          <FaArrowUp /> Back to Top
        </a>
      </div>
    </div>
  );
}
