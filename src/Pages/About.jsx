// src/pages/About.jsx
import React, { useEffect, useState } from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaCss3, FaConnectdevelop } from 'react-icons/fa'
import { SiJavascript, SiPython, SiMongodb, SiMysql, SiCplusplus, SiSocketdotio, SiGit, SiPostman, SiArduino, SiStrapi, SiReplit, SiVercel, SiCloudflare, SiRender } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import Services from '../component/Services'
import Research from '../component/Research'

const About = () => {
  const [githubStats, setGithubStats] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const githubResponse = await fetch('https://api.github.com/users/Chandra-Sekhar-Dutta')
        const githubData = await githubResponse.json()
        setGithubStats({
          Repos: githubData.public_repos,
          Followers: githubData.followers,
          Following: githubData.following,
          Location: githubData.location || 'N/A',
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-200 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-6 py-12">

        {/* LEFT SIDEBAR */}
        <aside className="hidden md:flex flex-col items-center w-16">
          <div className="h-24 border-r border-purple-900/40 mr-6" />
          <nav className="flex flex-col gap-6 text-gray-400">
            <span className="transform -rotate-90 tracking-widest text-xs">#about</span>
            <div className="w-px h-24 bg-gray-800" />
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1">
          <motion.header 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-3">/about-me</h2>
            <p className="text-sm text-gray-400">Who am I?</p>
          </motion.header>

          {/* GRID */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* LEFT SECTION */}
            <div className="md:col-span-7 space-y-6">
              <motion.div 
                className="bg-[#0e0f14] border border-gray-800 p-6 rounded-lg shadow-sm text-gray-300 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <p>Hello, I'm <span className="text-purple-300 font-semibold">Chandra Sekhar Dutta</span>.</p>
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  Self-taught full-stack developer based in India. I build responsive, modern and
                  performance-focused web applications.
                </p>
              </motion.div>

              {/* SKILLS LIKE THE REFERENCE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-purple-300 text-xl mb-4">#skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                  <motion.div 
                    className="p-3 border border-gray-700 rounded bg-[#0d0d10] transition-all duration-300 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/30 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h4 className="text-xs text-gray-400 mb-2 uppercase">Languages</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li className="flex items-center gap-2"><SiCplusplus /> C++</li>
                      <li className="flex items-center gap-2"><SiPython /> Python</li>
                      <li className="flex items-center gap-2"><SiJavascript /> JavaScript</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="p-3 border border-gray-700 rounded bg-[#0d0d10] transition-all duration-300 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/30 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <h4 className="text-xs text-gray-400 mb-2 uppercase">Frontend</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li className="flex items-center gap-2"><FaReact /> React</li>
                      <li className='flex items-center gap-2'><FaHtml5 /> Html</li>
                      <li className='flex items-center gap-2'><FaCss3 /> CSS</li>
                      <li className='flex items-center gap-2'><SiJavascript /> JavaScript</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="p-3 border border-gray-700 rounded bg-[#0d0d10] transition-all duration-300 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/30 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <h4 className="text-xs text-gray-400 mb-2 uppercase">Backend</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li className="flex items-center gap-2"><FaNodeJs /> Node.js</li>
                      <li className="flex items-center gap-2"><FaDatabase /> Express.js</li>
                      <li className='flex items-center gap-2'><FaConnectdevelop /> WebSocket</li>
                      <li className='flex items-center gap-2'><SiSocketdotio /> Socket.IO</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="p-3 border border-gray-700 rounded bg-[#0d0d10] transition-all duration-300 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/30 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <h4 className="text-xs text-gray-400 mb-2 uppercase">Databases</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li className="flex items-center gap-2"><SiMysql /> MySQL</li>
                      <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="p-3 border border-gray-700 rounded bg-[#0d0d10] transition-all duration-300 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/30 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <h4 className="text-xs text-gray-400 mb-2 uppercase">Tools</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li className="flex items-center gap-2"><SiGit /> Git</li>
                      <li className="flex items-center gap-2"><VscCode /> VS Code</li>
                      <li className="flex items-center gap-2"><VscCode /> Visual Studio</li>
                      <li className="flex items-center gap-2"><SiPostman /> Postman</li>
                      <li className="flex items-center gap-2"><SiArduino /> Arduino IDE</li>
                      <li className="flex items-center gap-2"><SiStrapi /> Strapi CMS</li>
                      <li className="flex items-center gap-2"><SiReplit /> Replit</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="p-3 border border-gray-700 rounded bg-[#0d0d10] transition-all duration-300 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/30 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                  >
                    <h4 className="text-xs text-gray-400 mb-2 uppercase">Cloud</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li className="flex items-center gap-2"><SiVercel /> Vercel</li>
                      <li className="flex items-center gap-2"><SiCloudflare /> Cloudflare</li>
                      <li className="flex items-center gap-2"><SiRender /> Render</li>
                    </ul>
                  </motion.div>

                </div>
              </motion.div>

              {/* FUN FACTS */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h3 className="text-purple-300 text-xl mb-4">#my-fun-facts</h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "I prefer winter over summer",
                    "I enjoy learning new tech",
                    "Coffee fuels my coding sessions",
                    "I love art"
                  ].map((f, i) => (
                    <motion.span
                      key={i}
                      className="text-xs border border-gray-700 px-3 py-2 rounded bg-[#0d0d12] cursor-pointer transition-all duration-300 hover:border-purple-500 hover:bg-purple-900/20"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* RIGHT SIDEBAR - ANIMATED */}
            <aside className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative h-96">
              <motion.div
                className="absolute top-0 left-32 w-px h-40 bg-gradient-to-b from-purple-500 to-transparent"
                animate={{ height: [160, 200, 160] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute top-32 left-24 w-32 h-32 rounded-full border-2 border-purple-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute top-64 left-0 w-16 h-16 rounded-lg border border-purple-400/40"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 90, 180]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute bottom-32 left-12 w-4 h-4 rounded-full bg-purple-400/60"
                animate={{ 
                  y: [0, -25, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute bottom-12 left-32 w-px h-32 bg-gradient-to-t from-pink-500/60 to-transparent"
                animate={{ height: [128, 160, 128] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </aside>

          </section>

          {/* GRAPHS */}
          <motion.section 
            className="mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-purple-300 text-xl mb-6">My Activity Graphs</h3>

            <div className="w-full">
              <motion.a
                href="https://github.com/Chandra-Sekhar-Dutta"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-lg overflow-hidden border border-gray-800 p-6 bg-[#0d0d12] transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <div className="text-sm text-purple-300 mb-3">GitHub Contributions</div>
                <img
                  src="https://ghchart.rshah.org/Chandra-Sekhar-Dutta"
                  alt="github chart"
                  className="w-full rounded"
                />
              </motion.a>
            </div>
          </motion.section>

          <section className="mt-16">
            <Services />
            <Research />
          </section>

        </main>
      </div>


    </div>
  )
}

export default About
