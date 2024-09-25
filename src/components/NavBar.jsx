import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const elementsRef = useRef([]);
  const logoRef = useRef(null);
  useGSAP(() => {
    gsap.from(logoRef.current, {
      x: -150,
      duration: 0.6,
      opacity: 0,
    });
  });

  useEffect(() => {
    elementsRef.current = gsap.timeline().from(elementsRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.25,
      stagger: 0.14,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md w-full">
      <div className="container mx-auto px-4 lg:px-6 py-5 flex justify-between items-center">
        <div ref={logoRef} className="text-2xl md:text-3xl font-extrabold tracking-widest">
          <Link to="/">TaxiService</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-base">
          <NavLink
            ref={(elem) => (elementsRef.current[0] = elem)}
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
            ref={(elem) => (elementsRef.current[1] = elem)}
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
            ref={(elem) => (elementsRef.current[2] = elem)}
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
            ref={(elem) => (elementsRef.current[3] = elem)}
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
            ref={(elem) => (elementsRef.current[4] = elem)}
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
            ref={(elem) => (elementsRef.current[5] = elem)}
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
        <button className="md:hidden" onClick={toggleMenu}>
          <IoMenu className="text-3xl" />
        </button>
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
