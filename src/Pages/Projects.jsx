import React from 'react';
import ProjectCard from '../component/ProjectCard';

const Projects = () => {
  return (
    <section className="bg-gradient-to-br from-purple-800 via-indigo-800 to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-purple-300">My Projects</h1>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
