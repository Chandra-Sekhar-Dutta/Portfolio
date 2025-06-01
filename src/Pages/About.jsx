// About.jsx
import React, { useEffect, useState } from 'react'

import skills from '../assets/skills.svg'
import highlights from '../assets/highlights.png'
import Services from '../component/Services'
import Research from '../component/Research'

const About = () => {
  const [githubStats, setGithubStats] = useState({})
  const [leetcodeStats, setLeetcodeStats] = useState({})
  const [codechefStats, setCodechefStats] = useState({})

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

        const leetcodeResponse = await fetch('https://leetcode-stats-api.herokuapp.com/ChandraSekharDutta')
        const leetcodeData = await leetcodeResponse.json()
        setLeetcodeStats({
          'Total Solved': leetcodeData.totalSolved,
          'Ranking': leetcodeData.ranking,
          'Acceptance Rate': leetcodeData.acceptanceRate + '%',
          'Easy': `${leetcodeData.easySolved} / ${leetcodeData.totalEasy}`,
          'Medium': `${leetcodeData.mediumSolved} / ${leetcodeData.totalMedium}`,
          'Hard': `${leetcodeData.hardSolved} / ${leetcodeData.totalHard}`,
        })

      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <section className="bg-gradient-to-br from-purple-800 via-indigo-800 to-black text-white text-center py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-purple-300">About Me</h1>
          <p className="text-lg leading-relaxed mb-8 text-gray-300">
            Hello! I'm <span className="font-semibold text-purple-400">Chandra Sekhar Dutta</span>, a passionate Computer Science undergraduate at SRMIST Ramapuram with a deep interest in <span className="font-semibold text-purple-400">IoT and Full-Stack Development</span>.
            I have maintained my a CGPA of 9.29 while actively contributing to the tech world. I love building real-world solutions that make an impact and constantly seek to expand my knowledge through hands-on learning.
          </p>

          <div className="text-left bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300 flex items-center gap-3">
              <img src={skills} alt="skills icon" className="w-7 h-7" />
              Technical Skills
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><span className="font-medium text-white">Languages:</span> C++, Python, JavaScript, SQL</li>
              <li><span className="font-medium text-white">Frontend:</span> React.js, HTML5, CSS3, Tailwind CSS</li>
              <li><span className="font-medium text-white">Backend:</span> Node.js, Express.js</li>
              <li><span className="font-medium text-white">Database:</span> MongoDB, MySQL</li>
              <li><span className="font-medium text-white">Tools & Platforms:</span> Git, GitHub, Postman, Vercel</li>
              <li><span className="font-medium text-white">IoT:</span> Arduino and Arduino IDE</li>
            </ul>
          </div>

          <div className="mt-12 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl p-8 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300 flex items-center gap-3">
              <img src={highlights} alt="highlights icon" className="w-7 h-7" />
              Highlights
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Developed a smart irrigation system using IoT for automated plant watering.</li>
              <li>Built full-stack apps including a Resume Builder, TODO list, and real-time chat app in C++ and HTML, CSS.</li>
              <li>Smart India Hackathon 2023 Semi-finalist - contributed to impactful educational tech.</li>
              <li>Participated in techXcelerate in BITS Pilani Hyderabad and secured top 10 ranking</li>
              <li>Active problem solver on LeetCode and CodeChef, with a strong focus on algorithms.</li>
              <li>Participated as a research analyst under the Department of Veterinary and Animal Extension Education, WBUAFS.</li>
              <li>Always exploring new tools and pushing the boundaries of personal projects.</li>
            </ul>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-purple-300 mt-20 mb-10 pt-10 text-center">
          My Activity Graphs
        </h1>

        <div className="flex flex-col items-center gap-10 px-4">
          <a
            href="https://github.com/Chandra-Sekhar-Dutta"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-3/4 lg:w-2/3 transform transition duration-500 hover:scale-105"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-purple-600 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 hover:border-pink-500">
              <p className="text-lg font-semibold text-center text-purple-300 mb-2 group-hover:text-pink-400 transition">
                GitHub Contributions
              </p>
              <img
                src="https://ghchart.rshah.org/Chandra-Sekhar-Dutta"
                alt="GitHub Contribution Chart"
                className="w-full h-auto rounded"
              />
            </div>
          </a>

          <a
            href="https://leetcode.com/u/Chandra_Sekhar_Dutta/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-3/4 lg:w-2/3 transform transition duration-500 hover:scale-105"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-yellow-600 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 hover:border-yellow-400">
              <p className="text-lg font-semibold text-center text-yellow-300 mb-2 group-hover:text-yellow-400 transition">
                LeetCode Progress
              </p>
              <img
                src="https://leetcard.jacoblin.cool/Chandra_Sekhar_Dutta?theme=dark&ext=heatmap"
                alt="LeetCode Card"
                className="w-full h-auto rounded"
              />
            </div>
          </a>
        </div>


        <div className="mt-20 mb-10 pt-10 text-center">
          <Services />
          <Research/>
        </div>
      </section>
    </>
  )
}

export default About
