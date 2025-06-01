import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between animate-fade-in">

        {/* Text */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-purple-300 font-semibold">Chandra Sekhar Dutta</span>. All rights reserved.
        </p>

        {/* Icons */}
        <div className="flex gap-6">
          {[
            {
              icon: <FaGithub size={24} />,
              href: "https://github.com/Chandra-Sekhar-Dutta",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin size={24} />,
              href: "https://www.linkedin.com/in/chandra-sekhar-dutta-578595234/",
              label: "LinkedIn",
            },
            {
              icon: <FaEnvelope size={24} />,
              href: "mailto:chandrasekhardutta3@gmail.com",
              label: "Email",
            }
          ].map(({ icon, href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-gray-300 hover:text-purple-300 transition-transform transform hover:scale-110 duration-300"
              aria-label={label}
            >
              {icon}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center text-xs bg-gray-900 text-white px-3 py-1 rounded shadow-lg z-10">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
