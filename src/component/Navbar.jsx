import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 tracking-wider text-[13px] uppercase transition 
     ${isActive ? "text-purple-400" : "text-gray-300"} 
     hover:text-purple-300`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-full sticky top-0 z-50 border-b border-purple-900/20 
        ${scrolled ? "bg-[#0f0f16]/80 backdrop-blur-lg" : "bg-[#0f0f16]"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, color: "#c084fc" }}
          className="text-lg font-semibold text-gray-200 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-purple-400">Chandra Sekhar Dutta</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {["/", "/about", "/projects", "/experience", "/contact"].map((path, i) => (
            <NavLink key={i} to={path} className={navLinkClass}>
              <span className="hover-underline-animation">
                {path === "/" ? "Home" : path.slice(1)}
              </span>
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f0f16] border-t border-purple-900/20"
          >
            <ul className="flex flex-col items-center py-6 space-y-4">
              {["/", "/about", "/projects", "/experience", "/contact"].map((path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {path === "/" ? "Home" : path.slice(1)}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Underline Hover Animation */}
      <style>
        {`
        .hover-underline-animation {
          position: relative;
        }
        .hover-underline-animation::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0%;
          height: 2px;
          background: #c084fc;
          transition: width 0.3s ease;
        }
        .hover-underline-animation:hover::after {
          width: 100%;
        }
        `}
      </style>
    </motion.nav>
  );
};

export default Navbar;
