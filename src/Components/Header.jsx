import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/home/pain-clinic-logo.png";
import ChevronDown from "/icons/chevron-down.svg";
import Menu from "/icons/menu.svg";
import X from "/icons/x.svg"; 
import MoveUpRight from "/icons/move-up-right.svg";
import Facebook from "/icons/facebook.svg";
import Instagram from "/icons/instagram.svg";
import Twitter from "/icons/twitter.svg";
import Youtube from "/icons/youtube.svg";
import Phone from "/icons/phone.svg";
import Mail from "/icons/email2.svg";

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState({ main: null, sub: null });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMessagesOpen, setMobileMessagesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileConditionsOpen, setMobileConditionsOpen] = useState(false);

  const location = useLocation();

  /* Reset menu on route change */
  useEffect(() => {
    setHoveredMenu({ main: null, sub: null });
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileMessagesOpen(false);
    setMobileServicesOpen(false);
    setMobileConditionsOpen(false);
  }, [location]);

  /* Freeze background scroll when mobile menu is open */
useEffect(() => {
  if (mobileOpen) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.height = "";
  }

  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.height = "";
  };
}, [mobileOpen]);


  return (
    <header
      className={`w-[96%] mx-auto mt-4 z-50 rounded-xl ${
        location.pathname === "/"
          ? "absolute top-4 left-1/2 -translate-x-1/2 bg-white shadow-md"
          : "relative bg-white"
      }`}
    >
      <nav className="flex items-center justify-between py-4 px-12">

        {/* LOGO */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-22" />
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10 text-[17px] mx-auto font-medium">
          <li><Link to="/" className="hover:text-[#234179]">Home</Link></li>

          {/* ABOUT */}
          <li
            className="relative"
            onMouseEnter={() => setHoveredMenu({ main: "about", sub: null })}
            onMouseLeave={() => setHoveredMenu({ main: null, sub: null })}
          >
            <span className="cursor-pointer hover:text-[#234179]">About</span>

            {hoveredMenu.main === "about" && (
              <ul className="absolute bg-white shadow-lg rounded-md top-full left-0 w-48 py-2 z-50">
                <li><Link to="/about" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">About Us</Link></li>
                <li><Link to="/team" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">Our Team</Link></li>
                <li><Link to="/cure" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">What We Cure</Link></li>

                {/* MESSAGES */}
                <li
                  className="relative"
                  onMouseEnter={() => setHoveredMenu({ main: "about", sub: "messages" })}
                  onMouseLeave={() => setHoveredMenu({ main: "about", sub: null })}
                >
                  <span className="block px-4 py-2 hover:bg-[#234179] hover:text-white cursor-pointer">
                    Messages
                  </span>

                  {hoveredMenu.sub === "messages" && (
                    <ul className="absolute left-full top-0 bg-white shadow-lg rounded-md w-48 py-2">
                      <li><Link to="/puspak-message" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">Dr. Puspak</Link></li>
                      <li><Link to="/niru-message" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">Dr. Niru</Link></li>
                      <li><Link to="/muskaan-message" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">Dr. Muskaan</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* SERVICES */}
          <li
            className="relative"
            onMouseEnter={() => setHoveredMenu({ main: "services", sub: null })}
            onMouseLeave={() => setHoveredMenu({ main: null, sub: null })}
          >
            <span className="cursor-pointer hover:text-[#234179]">Services</span>

            {hoveredMenu.main === "services" && (
              <ul className="absolute bg-white shadow-lg rounded-md top-full left-0 w-48 py-2 z-50">
                <li><Link to="/lab" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">Lab</Link></li>
                <li><Link to="/pharmacy" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">Pharmacy</Link></li>
                <li><Link to="/physiotherapy" className="block px-4 py-2 hover:bg-[#234179] hover:text-white">Physiotherapy</Link></li>
              </ul>
            )}
          </li>

          {/* Conditions */}
          <li
            className="relative"
            onMouseEnter={() => setHoveredMenu({ main: "conditions", sub: null })}
            onMouseLeave={() => setHoveredMenu({ main: null, sub: null })}
          >
            <span className="cursor-pointer hover:text-[#234179]"><Link to="/conditions">Conditions</Link></span>

            {hoveredMenu.main === "conditions" && (
              <ul className="grid grid-cols-3 absolute bg-white shadow-lg rounded-md top-full left-0 w-125 py-3 z-50">
                <li><Link to="/conditions/headache" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Headache</Link></li>
                <li><Link to="/conditions/joint-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Joint Pain</Link></li>
                <li><Link to="/conditions/neck-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Neck Pain</Link></li>
                <li><Link to="/conditions/shoulder-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Shoulder Pain</Link></li>
                <li><Link to="/conditions/orofacial-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Orofacial Pain</Link></li>
                <li><Link to="/conditions/knee-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Knee Pain</Link></li>
                <li><Link to="/conditions/nerve-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Nerve Pain</Link></li>
                <li><Link to="/conditions/muscle-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Muscle Pain</Link></li>
                <li><Link to="/conditions/sports-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Sports Injury</Link></li>
                <li><Link to="/conditions/whole-body-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Whole Body Pain</Link></li>
                <li><Link to="/conditions/cancer-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Cancer Pain</Link></li>
                <li><Link to="/conditions/disc-prolapse" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Disc Prolapse</Link></li>
                <li><Link to="/conditions/ankel-pain" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Ankel Pain</Link></li>
                <li><Link to="/conditions/fibromyalgia" className="block px-4 py-3 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Fibromyalgia</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/faqs" className="hover:text-[#234179]">FAQs</Link></li>
          <li><Link to="/blog" className="hover:text-[#234179]">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-[#234179]">Contact</Link></li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:block">
            <a
              href="https://www.facebook.com/painclinicbirtamode"
              className="flex items-center gap-2 bg-[#234179] text-white px-6 py-3 rounded-full font-semibold"
            >
              Book An Appointment <img src={MoveUpRight} alt="External Link" className="h-4 w-4" />
            </a>
          </div>

          {/* HAMBURGER */}
          <button className="lg:hidden text-3xl" onClick={() => setMobileOpen(true)}>
            <img src={Menu} alt="Menu" />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE DRAWER*/}
      <div
  className={`fixed top-0 left-0 h-screen w-[70%] bg-white z-50 lg:hidden overscroll-contain
    transform transition-transform duration-300
    ${mobileOpen ? "translate-x-0" : "-translate-x-[110%]"}
  `}
>
  {/* HEADER (Logo + Close) */}
  <div className="flex items-center justify-between px-6 py-4 ">
    <img src={logo} alt="Logo" className="h-16 w-42" />

    <button
      className="text-2xl"
      onClick={() => setMobileOpen(false)}
      aria-label="Close menu"
    >
       <img src={X} alt="Close" />
    </button>
  </div>

  {/* SCROLLABLE MENU */}
  <div className="h-[calc(100vh-80px)] overflow-y-auto px-6 py-4">
    <ul className="flex flex-col gap-4 font-medium text-lg">

      <li>
        <Link to="/" onClick={() => setMobileOpen(false)}>
          Home
        </Link>
      </li>

      {/* ABOUT */}
      <li>
        <button
          onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
          className="w-full flex justify-between items-center"
        >
          About <img src={ChevronDown} className="h-5 w-5" alt="Expand" />
        </button>

        {mobileAboutOpen && (
          <ul className="ml-4 mt-2 flex flex-col gap-2 text-base">
            <li><Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link></li>
            <li><Link to="/team" onClick={() => setMobileOpen(false)}>Our Team</Link></li>
            <li><Link to="/whatwecure" onClick={() => setMobileOpen(false)}>What We Cure</Link></li>

            <li>
              <button
                onClick={() => setMobileMessagesOpen(!mobileMessagesOpen)}
                className="w-full flex justify-between items-center"
              >
                Messages <img src={ChevronDown} className="h-5 w-5" alt="Expand" />
              </button>

              {mobileMessagesOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <li><Link to="/puspak-message" onClick={() => setMobileOpen(false)}>Dr. Puspak</Link></li>
                  <li><Link to="/niru-message" onClick={() => setMobileOpen(false)}>Dr. Niru</Link></li>
                  <li><Link to="/muskaan-message" onClick={() => setMobileOpen(false)}>Dr. Muskaan</Link></li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>

      {/* SERVICES */}
      <li>
        <button
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          className="w-full flex justify-between items-center"
        >
          Services <img src={ChevronDown} className="h-5 w-5" alt="Expand" />
        </button>

        {mobileServicesOpen && (
          <ul className="ml-4 mt-2 flex flex-col gap-2 text-base">
            <li><Link to="/lab" onClick={() => setMobileOpen(false)}>Lab</Link></li>
            <li><Link to="/pharmacy" onClick={() => setMobileOpen(false)}>Pharmacy</Link></li>
            <li><Link to="/physiotherapy" onClick={() => setMobileOpen(false)}>Physiotherapy</Link></li>
          </ul>
        )}
      </li>
      {/* Conditions */}
      <li>
        <button
          onClick={() => setMobileConditionsOpen(!mobileConditionsOpen)}
          className="w-full flex justify-between items-center"
        >
          <Link to="/conditions">Conditions</Link> <img src={ChevronDown} className="h-5 w-5" alt="Expand" />
        </button>

        {mobileConditionsOpen && (
          <ul className="ml-4 mt-2 grid grid-cols-3 gap-2 text-base">
             <li><Link to="/conditions/headache" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Headache</Link></li>
                <li><Link to="/conditions/joint-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Joint Pain</Link></li>
                <li><Link to="/conditions/neck-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Neck Pain</Link></li>
                <li><Link to="/conditions/shoulder-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Shoulder Pain</Link></li>
                <li><Link to="/conditions/orofacial-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Orofacial Pain</Link></li>
                <li><Link to="/conditions/knee-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Knee Pain</Link></li>
                <li><Link to="/conditions/nerve-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Nerve Pain</Link></li>
                <li><Link to="/conditions/muscle-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Muscle Pain</Link></li>
                <li><Link to="/conditions/sports-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Sports Injury</Link></li>
                <li><Link to="/conditions/whole-body-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Whole Body Pain</Link></li>
                <li><Link to="/conditions/cancer-pain" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Cancer Pain</Link></li>
                <li><Link to="/conditions" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Disc Prolapse</Link></li>
                <li><Link to="/conditions" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Ankel Pain</Link></li>
                <li><Link to="/conditions" className="block px-4 py-2 hover:bg-[#234179] hover:text-white" onClick={() => setMobileOpen(false)}>Fibromyalgia</Link></li>
          </ul>
        )}
      </li>

      <li><Link to="/faqs" onClick={() => setMobileOpen(false)}>FAQs</Link></li>
      <li><Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link></li>
      <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
 <div className="space-y-2">
      {/* Email */}
          <div className="flex items-center space-x-2">
            <div className="text-gray-500 p-2 rounded-full">
              <img src={Mail} alt="Email" />
            </div>
              <a className="text-base" href="mailto:info@painclinic.com.np">info@painclinic.com.np</a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
  <div className="text-gray-500 p-2 rounded-full">
    <img src={Phone} alt="Phone" />
  </div>
  <a className="text-base" href="tel:+9779701012345">
    97010-12345
  </a>
</div>
</div>


      {/* SOCIALS */}
      <div className="flex gap-4 mt-4 text-gray-500">
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
        <img src={Instagram} alt="Instagram" />
        <img src={Youtube} alt="Youtube" />
      </div>
    </ul>
  </div>
</div>

    </header>
  );
};

export default Header;
