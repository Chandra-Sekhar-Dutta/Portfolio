import React from 'react';
import Form from '../component/Form';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-[#0f0f16]">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">
            <span className="text-purple-500">/</span>contacts
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Who am I?
          </p>
          <p className="text-gray-400 mt-4 max-w-3xl">
            I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form />
          </motion.div>

          {/* Right Side - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Message Card */}
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-800/30 backdrop-blur-sm hover:border-purple-500 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Message me here</h3>
              <div className="space-y-3">
                <a
                  href="mailto:chandrasekhardutta3@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-sm">chandrasekhardutta3@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
