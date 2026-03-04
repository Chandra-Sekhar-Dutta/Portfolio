import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, Link as LinkIcon } from 'lucide-react'
import { 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiFirebase, 
  SiCloudinary, 
  SiExpress, 
  SiMysql,
  SiRedux
} from 'react-icons/si'

const TechIcon = ({ tech }) => {
  const techMap = {
    'React': <SiReact className="w-5 h-5" />,
    'Node.js': <SiNodedotjs className="w-5 h-5" />,
    'PostgreSQL': <SiPostgresql className="w-5 h-5" />,
    'NeonDB': <SiPostgresql className="w-5 h-5" />,
    'Firebase Auth': <SiFirebase className="w-5 h-5" />,
    'Cloudinary': <SiCloudinary className="w-5 h-5" />,
    'Express.js': <SiExpress className="w-5 h-5" />,
    'MySQL': <SiMysql className="w-5 h-5" />,
    'Redux': <SiRedux className="w-5 h-5" />,
  }
  return techMap[tech] || null
}

const Experiences = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "Jeevigo",
      location: "Remote, India",
      duration: "Dec 2025 - Present",
      type: "Full-Stack Developer",
      tech: "React · Node.js · PostgreSQL / NeonDB · Firebase Auth · Cloudinary · Resend",
      link: "https://jeevigo.com",
      description: [
        "Contributing to Jeevigo, a city-centric super-app consolidating accommodation, daily essentials, and career services for students and professionals relocating across India.",
        "Integrated Firebase Auth for secure sessions and Cloudinary for property image storage.",
        "Implemented Resend for transactional email notifications and user communications.",
        "Architected backend optimizations on NeonDB including query optimization and connection pooling.",
        "Designed efficient relational schemas to reliably handle 300+ concurrent users."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "National e-Governance Division (NeGD), MeitY",
      location: "Delhi-NCR, India",
      duration: "Jan 2026 - Jul 2026",
      type: "Full-Stack Developer",
      tech: "React · Express.js · Node.js · Redux · MySQL",
      link: null,
      description: [
        "Developed UPSC governance modules including the Advisory Portal for a national-scale internal government platform.",
        "Built the frontend using React.js with Redux for state management.",
        "Designed and implemented RESTful APIs using Express.js with middleware layers for request validation and authentication.",
        "Implemented centralized error handling and structured request/response pipelines.",
        "Created dynamic React.js components and multi-step form workflows for structured data submission.",
        "Enabled real-time status tracking and tracking for UPSC advisory processes.",
        "Designed relational schemas in MySQL and wrote optimized queries for performance.",
        "Managed database migrations to support evolving module requirements and scaling needs."
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(147, 51, 234, 0.4)",
      transition: { duration: 0.2 }
    }
  }

  const descriptionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.3,
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f16] via-[#1a1a2e] to-[#0f0f16] text-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              /experience
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Details about my experience
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              {/* Card Content */}
              <div className="relative bg-[#1a1a2e]/50 backdrop-blur-sm border border-purple-900/30 rounded-lg p-8 hover:border-purple-700/50 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        whileHover={{ rotate: 20, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Briefcase className="w-5 h-5 text-purple-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    </div>
                    <p className="text-xl text-purple-300 font-semibold">{exp.company}</p>
                  </motion.div>
                  {exp.link && (
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-900/30 hover:bg-purple-800/50 text-purple-300 rounded-lg transition-colors duration-300"
                    >
                      <LinkIcon className="w-4 h-4" />
                      Visit
                    </motion.a>
                  )}
                </div>

                {/* Meta Info */}
                <motion.div
                  className="flex flex-wrap gap-6 mb-6 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.div 
                    className="flex items-center gap-2 text-gray-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-4 h-4 text-pink-400" />
                    {exp.location}
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-gray-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="w-4 h-4 text-pink-400" />
                    {exp.duration}
                  </motion.div>
                  <motion.div 
                    className="text-purple-400 font-medium"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.type}
                  </motion.div>
                </motion.div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.split(" · ").map((tech, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={techBadgeVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="flex items-center gap-2 px-3 py-2 bg-purple-900/20 border border-purple-700/30 text-purple-300 rounded-full text-xs font-medium cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <TechIcon tech={tech} />
                        </motion.div>
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  {exp.description.map((point, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={descriptionVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex gap-4 group/item"
                    >
                      <motion.div
                        variants={dotVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2"
                      />
                      <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-100 transition-colors duration-300">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Experiences
