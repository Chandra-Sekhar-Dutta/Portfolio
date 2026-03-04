import React from 'react';
import Form from '../component/Form';
import { motion } from 'framer-motion';
import reactLogo from '../assets/react.svg';

const Contact = () => {
  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      description: 'Drop me an email anytime',
      value: 'chandrasekhardutta3@gmail.com',
      link: 'mailto:chandrasekhardutta3@gmail.com',
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/60',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      value: 'Chandra Sekhar Dutta',
      link: 'https://www.linkedin.com/in/chandra-sekhar-dutta-578595234/',
      color: 'from-blue-600/20 to-blue-700/20 border-blue-600/30 hover:border-blue-600/60',
    },
    {
      icon: '⏰',
      title: 'Response Time',
      description: 'Usually responds within',
      value: '24-48 hours',
      link: null,
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60',
    },
  ];

  return (
    <section className="bg-[#0f0f16] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'm available for freelance opportunities and new challenges. Let's create something amazing.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-medium">Available for projects</span>
          </div>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={method.link}
                target={method.link?.startsWith('http') ? '_blank' : '_self'}
                rel={method.link?.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`block h-full p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer group
                  bg-gradient-to-br ${method.color} hover:shadow-2xl`}
              >
                <div className="text-4xl mb-4">
                  {method.icon === '✉️' ? (
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) : method.icon === '💼' ? (
                    <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{method.description}</p>
                <p className="text-base font-semibold text-purple-300 group-hover:text-purple-200 transition-colors truncate">
                  {method.value}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content - Form and Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start relative">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Form />
          </motion.div>

          {/* Right Side - Additional Info with Animated Background Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6 relative"
          >
            {/* Animated Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -right-8 top-20 w-32 h-32 border border-purple-500/20 rounded-lg pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 bottom-32 w-40 h-40 border border-cyan-500/15 rounded-full pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [0, 30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute right-16 top-40 w-2 h-40 bg-gradient-to-b from-purple-500/60 to-transparent pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
