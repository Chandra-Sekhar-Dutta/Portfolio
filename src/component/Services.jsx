import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { id: 1, title: "Web Development", description: "Building responsive and dynamic websites using modern technologies.", icon: "{" },
  { id: 2, title: "Databases", description: "Designing and managing databases for efficient data storage and retrieval.", icon: "<>" },
  { id: 3, title: "Frontend Development", description: "Creating interactive and engaging user interfaces.", icon: "[]"},
  { id: 4, title: "Backend Development", description: "Developing robust server-side applications and APIs.", icon: "</>" },
  { id: 5, title: "Full Stack Development", description: "Combining frontend and backend skills to build complete applications.", icon: "{}" },
  { id: 6, title: "IoT Development", description: "Creating IoT solutions for smart devices and automation.", icon: "⊡" }
]

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-4">
      <motion.h2 
        className="text-3xl text-purple-300 font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        #services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, index) => (
          <motion.div 
            key={s.id} 
            className="bg-[#0d0e12] border border-gray-800 rounded p-6 shadow-sm transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <motion.div 
              className="text-4xl mb-3 text-gray-300"
              whileHover={{ scale: 1.2, color: "#c084fc" }}
              transition={{ duration: 0.3 }}
            >
              {s.icon}
            </motion.div>
            <motion.h3 
              className="text-lg text-purple-200 font-semibold mb-2"
              whileHover={{ color: "#e9d5ff" }}
            >
              {s.title}
            </motion.h3>
            <p className="text-sm text-gray-300 leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
