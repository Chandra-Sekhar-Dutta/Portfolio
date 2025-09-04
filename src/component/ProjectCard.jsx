import React from 'react';
import IOT from '../assets/IOT.jpg';
import chat from '../assets/chat.png';
import CPPChat from '../assets/CPPChat.png';
import task from '../assets/task.png';
import Resume from '../assets/Resume.jpeg';
import { FaArrowUp } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'AI Generated Resume Builder',
    description:
      'A full-stack web application for building, editing, and downloading professional resumes. Powered by AI for content generation.',
    topics: ['Google GEMINI', 'RESUME BUILDER', 'WEB DEVELOPMENT'],
    technologies: ['React', 'Node.js', 'Strapi', 'Tailwind CSS', 'Clerk Auth', 'PDF Generation', 'Google Gemini'],
    image: Resume,
    link: 'https://github.com/Chandra-Sekhar-Dutta/AI-Powered-Resume-Generator',
  },
  {
    id: 2,
    title: 'IOT-BASED SMART IRRIGATION SYSTEM',
    description:
      'An Arduino-powered IoT solution for real-time soil moisture monitoring and automatic watering, with SQL-based data logging and Python visualization.',
    topics: ['IOT', 'ARDUINO', 'SQL', 'DATA VISUALIZATION'],
    technologies: ['Arduino IDE', 'SQL', 'Python'],
    image: IOT,
    link: 'https://github.com/Chandra-Sekhar-Dutta/IOT-Research-Papers-and-Project',
  },
  {
    id: 3,
    title: 'ONLINE CHATTING APPLICATION',
    description: 'Real-time web chat using Node.js and Socket.IO with a clean UI and instant messaging.',
    topics: ['REAL-TIME CHAT', 'SOCKET.IO', 'NODE.JS'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Socket.IO'],
    image: chat,
    link: 'https://github.com/Chandra-Sekhar-Dutta/OnlineChat',
  },
  {
    id: 4,
    title: 'C++ TCP CHAT APPLICATION (CLIENT-SERVER)',
    description:
      'Multi-threaded C++ Winsock-based chat application enabling real-time text exchange using TCP sockets.',
    topics: ['C++', 'TCP CHAT', 'WINSOCK', 'MULTI-THREADING'],
    technologies: ['C++', 'Winsock'],
    image: CPPChat,
    link: 'https://github.com/Chandra-Sekhar-Dutta/Chatting-App-in-Cpp',
  },
  {
    id: 5,
    title: 'TASK MANAGEMENT WEB APPLICATION',
    description: 'A full-stack task tracker and scheduler built with Express.js, SQL, and responsive UI.',
    topics: ['FULL STACK', 'WEB DEVELOPMENT', 'TASK MANAGEMENT'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'SQL'],
    image: task,
    link: 'https://github.com/Chandra-Sekhar-Dutta/Task-Manager',
  },
];

const ProjectCard = () => {
  return (
    <div className="relative px-4 py-10 md:py-8">
      {/* Heading */}
      <h3 className="text-3xl md:text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-16 animate-fade-in tracking-tight">
        From IoT to full-stack—building tech that talks, thinks, and solves.
      </h3>

      {/* Vertical line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-10rem)] w-1 bg-gray-700/60 backdrop-blur-sm" />

      <div className="space-y-28 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={project.id}
              className={`relative flex flex-col md:flex-row items-center ${
                isLeft ? 'md:justify-start' : 'md:justify-end'
              } animate-fade-in delay-${(index + 1) * 100}`}
            >
              {/* Connector dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-gray-800/80 rounded-full border-4 border-gray-900 shadow-lg backdrop-blur-md" />
              </div>

              {/* Dark Glassmorphic Card */}
              <div
                className={`w-full md:w-[45%] p-8 rounded-2xl relative transition-all duration-300
                  ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}
                  bg-gray-900/50 backdrop-blur-xl border border-white/10 
                  shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.8)] hover:scale-[1.02]`}
              >
                {/* Image with Hover Overlay */}
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-lg mb-6 border border-gray-700/50 transition-transform duration-500 group-hover:scale-105"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                  >
                    <span className="text-white font-semibold px-4 py-2 bg-gray-800/80 rounded-full">
                      View Project
                    </span>
                  </a>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-3 tracking-tight">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-base md:text-lg">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="bg-gray-800/70 text-purple-300 px-3 py-1 text-xs rounded-full border border-purple-500/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800/70 text-cyan-300 px-3 py-1 text-xs rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
                >
                  View Project →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Back to Top Button */}
      <div className="mt-16 flex justify-center animate-fade-in delay-500">
        <a
          href="#top"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
        >
          <FaArrowUp className="text-lg" />
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
