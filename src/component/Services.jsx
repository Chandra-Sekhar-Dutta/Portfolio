import React from 'react'

const services = [
  { id: 1, title: "Web Development", description: "Building responsive and dynamic websites using modern technologies.", icon: "🌐" },
  { id: 2, title: "Databases", description: "Designing and managing databases for efficient data storage and retrieval.", icon: "🛢" },
  { id: 3, title: "Frontend Development", description: "Creating interactive and engaging user interfaces.", icon: "💻" },
  { id: 4, title: "Backend Development", description: "Developing robust server-side applications and APIs.", icon: "⚙️" },
  { id: 5, title: "Full Stack Development", description: "Combining frontend and backend skills to build complete applications.", icon: "🖥️" },
  { id: 6, title: "IoT Development", description: "Creating IoT solutions for smart devices and automation.", icon: "📡" }
]

const Services = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-300 mb-12">My Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.05] cursor-pointer
              bg-black/40 backdrop-blur-xl border border-gray-700 hover:border-purple-400 hover:shadow-purple-500/30"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-purple-200 mb-2">{service.title}</h3>
              <p className="text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
