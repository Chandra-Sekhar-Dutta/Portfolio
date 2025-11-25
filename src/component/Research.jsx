// src/component/Research.jsx
import React from 'react';
import { motion } from 'framer-motion';

const researchProjects = [
  {
    id: 1,
    title: "Smart Plant Watering System",
    overview:
      "This research explores the design and implementation of an IoT-based Smart Automated Plant Watering System. Aimed at reducing water waste and minimizing manual intervention, the system leverages real-time soil moisture data and embedded hardware to automate irrigation in a sustainable, resource-efficient manner.",
    methodology:
      "The system integrates a soil moisture sensor with an Arduino Uno to control a water pump via a relay. Data is logged using a Python backend with a MySQL database. The setup was tested in a controlled environment for one week.",
    findings:
      "The prototype reduced water usage by approximately 35% compared to manual irrigation, without affecting plant health. It proved to be low-cost, reliable, and scalable.",
    conclusion:
      "The project demonstrates how IoT-based automation can enhance agricultural efficiency. Future work could involve solar integration, AI-based prediction, and remote monitoring to support smart farming.",
  },
  {
    id: 2,
    title: "Empowering Rural Tribal Women Farmers and School Children",
    overview:
      "This field research aimed to understand the socio-economic status and agricultural practices of tribal women farmers in four villages of Nadia district, West Bengal. It also introduced school children to science-based learning through field activities and workshops.",
    methodology:
      "A month-long study (June 5 - July 5, 2024) involving 50 tribal women was conducted using structured interviews, field visits, and group discussions. Partner institutions included ICAR-NDRI and WBUAFS.",
    findings:
      "Women showed strong interest in integrated farming systems and technology adoption. Most used hybrid seeds and social media for farming knowledge. Children participated in science awareness sessions, enhancing their engagement with education.",
    conclusion:
      "The study highlights the potential of combining education with rural empowerment. Scientific training and improved access to technology can significantly uplift agricultural practices and youth education in tribal communities.",
  }
];

const Research = () => {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-4">
      <motion.h2 
        className="text-3xl text-purple-300 font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        #research
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
          <motion.article 
            key={project.id} 
            className="bg-[#0d0e12] border border-gray-800 rounded p-6 shadow-sm transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-lg text-purple-200 font-semibold mb-3"
              whileHover={{ color: "#c084fc" }}
            >
              {project.title}
            </motion.h3>
            <div className="text-sm text-gray-300 space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <strong className="text-purple-300">Overview:</strong>
                <p className="mt-1 text-gray-300">{project.overview}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <strong className="text-purple-300">Methodology:</strong>
                <p className="mt-1 text-gray-300">{project.methodology}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <strong className="text-purple-300">Findings:</strong>
                <p className="mt-1 text-gray-300">{project.findings}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <strong className="text-purple-300">Conclusion:</strong>
                <p className="mt-1 text-gray-300">{project.conclusion}</p>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Research;
