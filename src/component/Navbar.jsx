import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const navLinkClass = ({ isActive }) =>
    `relative text-sm md:text-base font-semibold px-2 py-1 transition duration-300 
     hover:text-purple-300
     ${isActive ? 'text-purple-400' : 'text-white'} 
     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
     after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 
     hover:after:w-full`

  return (
    <nav className="bg-gradient-to-r from-purple-950/80 via-indigo-900/80 to-black/80 backdrop-blur-lg shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

        <div
          className="text-xl md:text-2xl font-bold text-white tracking-wide cursor-pointer hover:text-purple-300 transition duration-300"
          onClick={() => navigate('/')}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Chandra Sekhar Dutta
          </span>
        </div>

        <ul className="flex gap-4 md:gap-8 items-center">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
