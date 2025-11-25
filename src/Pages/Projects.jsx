import React from 'react';
import ProjectCard from '../component/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0c10] text-gray-200 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-tight">
            /projects
          </h1>
          <p className="mt-3 text-sm text-gray-400">List of my projects</p>
        </header>

        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
