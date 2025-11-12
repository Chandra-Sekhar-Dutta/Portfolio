import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block text-sm md:text-base font-semibold px-3 py-2 transition duration-300 
     hover:text-purple-300 ${isActive ? "text-purple-400" : "text-white"}`;

  return (
    <nav className="bg-gradient-to-r from-purple-950/80 via-indigo-900/80 to-black/80 backdrop-blur-lg shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Hide the name on small screens */}
        <div
          className="hidden md:block text-xl md:text-2xl font-bold text-white tracking-wide cursor-pointer hover:text-purple-300 transition duration-300"
          onClick={() => navigate("/")}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Chandra Sekhar Dutta
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </ul>

        {/* Hamburger (visible only on small screens) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-950/90 via-indigo-900/90 to-black/90 backdrop-blur-xl border-t border-purple-700/40">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/projects" className={navLinkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
