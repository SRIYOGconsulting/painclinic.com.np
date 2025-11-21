import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/pain-clinic-logo.png";
import { ChevronDown, Menu, PhoneCall } from "lucide-react";

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState({ main: null, sub: null });
  const [mobileSub, setMobileSub] = useState(null);
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMessagesOpen, setMobileMessagesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setHoveredMenu({ main: null, sub: null });
    setMobileOpen(false);
    setMobileSub(null);
  }, [location]);

  return (
    <header
      className={`w-[94%] mx-auto mt-4 z-50 rounded-xl ${
        location.pathname === "/"
          ? "absolute top-4 left-1/2 -translate-x-1/2 bg-white shadow-md"
          : "relative bg-white"
      }`}
    >
      <nav className="flex items-center justify-between py-4 px-8">

        {/* LEFT LOGO (always fixed in same place) */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        {/* DESKTOP NAV (centered, lg and up) */}
        <ul className="hidden lg:flex items-center gap-8 font-medium mx-auto">
          <li><Link to="/" className="hover:text-blue-300 transition">Home</Link></li>

          {/* ABOUT (Desktop hover) */}
          <li
            className="relative"
            onMouseEnter={() => setHoveredMenu({ main: "about", sub: null })}
            onMouseLeave={() => setHoveredMenu({ main: null, sub: null })}
          >
            <span className="cursor-pointer hover:text-blue-300 transition">About</span>

            {hoveredMenu.main === "about" && (
              <ul className="absolute bg-white shadow-lg rounded-md top-full left-0 w-48 py-2 animate-fadeIn z-50">
                <li><Link to="/about" className="block px-4 py-2 hover:bg-blue-50">About Us</Link></li>
                <li><Link to="/team" className="block px-4 py-2 hover:bg-blue-50">Our Team</Link></li>
                <li><Link to="/whatwecure" className="block px-4 py-2 hover:bg-blue-50">What We Cure</Link></li>

                {/* Messages submenu */}
                <li
                  className="relative"
                  onMouseEnter={() => setHoveredMenu({ main: "about", sub: "messages" })}
                  onMouseLeave={() => setHoveredMenu({ main: "about", sub: null })}
                >
                  <span className="block px-4 py-2 hover:bg-blue-50 cursor-pointer">Messages</span>

                  {hoveredMenu.sub === "messages" && (
                    <ul className="absolute left-full top-0 bg-white shadow-lg rounded-md w-48 py-2 animate-fadeIn z-50">
                      <li><Link to="/puspak-message" className="block px-4 py-2 hover:bg-blue-50">Dr. Puspak</Link></li>
                      <li><Link to="/niru-message" className="block px-4 py-2 hover:bg-blue-50">Dr. Niru</Link></li>
                      <li><Link to="/muskan-message" className="block px-4 py-2 hover:bg-blue-50">Dr. Muskan</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* SERVICES (Desktop hover) */}
          <li
            className="relative"
            onMouseEnter={() => setHoveredMenu({ main: "services", sub: null })}
            onMouseLeave={() => setHoveredMenu({ main: null, sub: null })}
          >
            <span className="cursor-pointer hover:text-blue-300 transition">Services</span>

            {hoveredMenu.main === "services" && (
              <ul className="absolute bg-white shadow-lg rounded-md top-full left-0 w-48 py-2 animate-fadeIn z-50">
                <li><Link to="/lab" className="block px-4 py-2 hover:bg-blue-50">Lab</Link></li>
                <li><Link to="/pharmacy" className="block px-4 py-2 hover:bg-blue-50">Pharmacy</Link></li>
                <li><Link to="/physiotherapy" className="block px-4 py-2 hover:bg-blue-50">Physiotherapy</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/conditions" className="hover:text-blue-300 transition">Conditions</Link></li>
          <li><Link to="/faqs" className="hover:text-blue-300 transition">FAQs</Link></li>
          <li><Link to="/blog" className="hover:text-blue-300 transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
        </ul>

        {/* RIGHT SECTION: Call Emergency, Book Appointment, Hamburger */}
        <div className="flex items-center gap-4 flex-shrink-0">

          {/* CALL EMERGENCY — only LG+ */}
          <div className="hidden xl:flex items-center space-x-3">
            <div className="w-9 h-9 bg-[#E8F0FF] text-[#234179] rounded-full flex items-center justify-center">
              <PhoneCall size={18} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-gray-500 text-xs">Call Emergency</span>
              <a href="tel:+9779701012345" className="text-lg font-semibold text-[#234179] hover:text-blue-800">
                +977-97010-12345
              </a>
            </div>
          </div>

          {/* BOOK APPOINTMENT — only XL */}
          <div className="hidden xl:block">
            <Link to="/appointment" className="bg-[#234179] text-white px-4 py-2 rounded-full">
              Book Appointment
            </Link>
          </div>

          {/* HAMBURGER — visible < LG */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-8 pb-6 animate-fadeIn">
          <ul className="flex flex-col gap-4 font-medium">

            <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>

            {/* ABOUT MOBILE */}
            <li>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full text-left flex"
              >
                About <ChevronDown />
              </button>

              {mobileAboutOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <li><Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link></li>
                  <li><Link to="/team" onClick={() => setMobileOpen(false)}>Our Team</Link></li>
                  <li><Link to="/whatwecure" onClick={() => setMobileOpen(false)}>What We Cure</Link></li>

                  <li>
                    <button
                      onClick={() => setMobileMessagesOpen(!mobileMessagesOpen)}
                      className="w-full text-left flex"
                    >
                      Messages <ChevronDown />
                    </button>

                    {mobileMessagesOpen && (
                      <ul className="ml-4 mt-2 flex flex-col gap-2">
                        <li><Link to="/puspak-message" onClick={() => setMobileOpen(false)}>Dr. Puspak</Link></li>
                        <li><Link to="/niru-message" onClick={() => setMobileOpen(false)}>Dr. Niru</Link></li>
                        <li><Link to="/muskan-message" onClick={() => setMobileOpen(false)}>Dr. Muskan</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* SERVICES MOBILE */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left flex"
              >
                Services <ChevronDown />
              </button>

              {mobileServicesOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <li><Link to="/lab" onClick={() => setMobileOpen(false)}>Lab</Link></li>
                  <li><Link to="/pharmacy" onClick={() => setMobileOpen(false)}>Pharmacy</Link></li>
                  <li><Link to="/physiotherapy" onClick={() => setMobileOpen(false)}>Physiotherapy</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/conditions" onClick={() => setMobileOpen(false)}>Conditions</Link></li>
            <li><Link to="/faqs" onClick={() => setMobileOpen(false)}>FAQs</Link></li>
            <li><Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>

            <li>
              <Link
                to="/appointment"
                onClick={() => setMobileOpen(false)}
                className="bg-[#234179] text-white px-4 py-2 rounded-full inline-block"
              >
                Book Appointment
              </Link>
            </li>

          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;
