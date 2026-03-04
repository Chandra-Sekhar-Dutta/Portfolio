import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../component/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0c10] text-gray-200 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-300 mb-3">
            /projects
          </h1>
          <p className="text-sm text-gray-400">List of my projects</p>
        </motion.header>

        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
