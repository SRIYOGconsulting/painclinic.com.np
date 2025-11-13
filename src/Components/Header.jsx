import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/pain-clinic-logo.png";

const Header = () => {
  // Two-level hover state system
  const [hoveredMenu, setHoveredMenu] = useState({ main: null, sub: null });
  const location = useLocation();

  // Close dropdowns when route changes
  useEffect(() => {
    setHoveredMenu({ main: null, sub: null });
  }, [location]);

  return (
    <header
      className={`w-[94%] mx-auto mt-4 z-50 rounded-xl ${
        location.pathname === "/"
          ? "absolute top-4 left-11 bg-white shadow-md"
          : "relative bg-white"
      }`}
    >
      <nav className="flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
          </li>

          {/* About dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setHoveredMenu({ main: "about", sub: null })}
            onMouseLeave={() => setHoveredMenu({ main: null, sub: null })}
          >
            <span className="cursor-pointer hover:text-blue-300 transition">
              About
            </span>

            {/* Main About dropdown */}
            {hoveredMenu.main === "about" && (
              <ul className="absolute bg-white text-gray-800 shadow-lg rounded-md top-full left-0 w-48 py-2 animate-fadeIn z-50">
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setHoveredMenu({ main: null, sub: null })}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/team"
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setHoveredMenu({ main: null, sub: null })}
                  >
                    Our Team
                  </Link>
                </li>

                <li>
                  <Link
                    to="/whatwecure"
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setHoveredMenu({ main: null, sub: null })}
                  >
                    What We Cure
                  </Link>
                </li>

                {/* Messages with nested submenu */}
                <li
                  className="relative"
                  onMouseEnter={() =>
                    setHoveredMenu({ main: "about", sub: "messages" })
                  }
                  onMouseLeave={() =>
                    setHoveredMenu({ main: "about", sub: null })
                  }
                >
                  <span className="block px-4 py-2 hover:bg-blue-50 cursor-pointer">
                    Messages 
                  </span>

                  {/* Sub-dropdown */}
                  {hoveredMenu.sub === "messages" && (
                    <ul className="absolute left-full top-0 bg-white text-gray-800 shadow-lg rounded-md w-48 py-2 animate-fadeIn z-50">
                      <li>
                        <Link
                          to="/puspak-message"
                          className="block px-4 py-2 hover:bg-blue-50"
                          onClick={() => setHoveredMenu({ main: null, sub: null })}
                        >
                          Dr. Puspak
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/niru-message"
                          className="block px-4 py-2 hover:bg-blue-50"
                          onClick={() => setHoveredMenu({ main: null, sub: null })}
                        >
                          Dr. Niru
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/muskan-message"
                          className="block px-4 py-2 hover:bg-blue-50"
                          onClick={() => setHoveredMenu({ main: null, sub: null })}
                        >
                          Dr. Muskan
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Services dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setHoveredMenu({ main: "services", sub: null })}
            onMouseLeave={() => setHoveredMenu({ main: null, sub: null })}
          >
            <span className="cursor-pointer hover:text-blue-300 transition">
              Services
            </span>
            {hoveredMenu.main === "services" && (
              <ul className="absolute bg-white text-gray-800 shadow-lg rounded-md top-full left-0 w-48 py-2 animate-fadeIn z-50">
                <li>
                  <Link
                    to="/lab"
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setHoveredMenu({ main: null, sub: null })}
                  >
                    Lab
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pharmacy"
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setHoveredMenu({ main: null, sub: null })}
                  >
                    Pharmacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/physiotherapy"
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setHoveredMenu({ main: null, sub: null })}
                  >
                    Physiotherapy
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/conditions" className="hover:text-blue-300 transition">
              Conditions
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-blue-300 transition">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-300 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Book Appointment Button */}
        <div>
          <Link
            to="/appointment"
            className="bg-[#234179] text-white px-4 py-2 rounded-full"
          >
            Book Appointment
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
