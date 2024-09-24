import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md w-full">
      <div className="container mx-auto px-4 lg:px-6 py-5 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-extrabold tracking-widest">
          <Link to="/">TaxiService</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold `
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cars"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold `
            }
          >
            Cars
          </NavLink>

          <NavLink
            to="/drivers"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold `
            }
          >
            Drivers
          </NavLink>

          <NavLink
            to="/Pricing"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold `
            }
          >
            Pricing
          </NavLink>
     
          <NavLink
            to="/workingHours"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold `
            }
          >
            Working Hours
          </NavLink>
     
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold `
            }
          >
           Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold block py-2 px-4 text-sm hover:bg-gray-700 `
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cars"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold block py-2 px-4 text-sm hover:bg-gray-700 `
            }
          >
            Cars
          </NavLink>
          
          <NavLink
            to="/drivers"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold block py-2 px-4 text-sm hover:bg-gray-700 `
            }
          >
            Drivers
          </NavLink>
          
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold block py-2 px-4 text-sm hover:bg-gray-700 `
            }
          >
            Pricing
          </NavLink>
          
          <NavLink
            to="/workingHours"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold block py-2 px-4 text-sm hover:bg-gray-700 `
            }
          >
            Working Hours
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:underline font-semibold block py-2 px-4 text-sm hover:bg-gray-700 `
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
