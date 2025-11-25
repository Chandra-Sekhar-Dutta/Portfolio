import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0e0e15] text-gray-400 border-t border-purple-900/20 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left */}
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h2 className="text-gray-200 font-semibold">Chandra Sekhar Dutta</h2>
          <p className="mt-2 text-sm">Full Stack Developer and IoT Developer</p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col md:items-end"
        >
          <h3 className="text-gray-200 text-lg mb-3">Media</h3>
          
          <div className="flex gap-6 text-xl">
            {[ 
              { icon: FaGithub, link: "https://github.com/Chandra-Sekhar-Dutta" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/chandra-sekhar-dutta-578595234/" },
              { icon: FaEnvelope, link: "mailto:chandrasekhardutta3@gmail.com" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{
                  scale: 1.2,
                  color: "#c084fc",
                  textShadow: "0px 0px 10px rgba(192,132,252,0.8)"
                }}
                className="cursor-pointer"
              >
                <item.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center text-xs text-gray-600"
      >
        © {new Date().getFullYear()} Chandra Sekhar Dutta. Made by Chandra.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
