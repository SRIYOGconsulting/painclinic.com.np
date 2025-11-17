import React from "react";
import { Link, useLocation } from "react-router-dom";
import breadcrumb from "../assets/images/breadcrumb.jpg";
import { House } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") return null;

  const pageTitleMap = {
    about: "About Us",
    team: "Our Team",
    whatwecure: "What We Cure",
    contact: "Contact Us",
    messages: "Messages",
    lab: "Lab",
    pharmacy: "Pharmacy",
    physiotherapy: "Physiotherapy",
    conditions: "Conditions",
    faqs: "Frequently Asked Questions",
    blog: "Pain Clinic Blog",
    appointment: "Book Appointment",
    "puspak-message": "Message from Dr. Puspak Regmi",
    "what-is-headache": "How Weather Changes Trigger Headaches: Causes and Solutions",
    "what-is-joint-pain":"Joint Care: How to Protect Your Joints",
    "what-is-neck-pain":"Neck Pain: Causes of neck pain during the monsoon season",
    "what-is-shoulder-pain":"Shoulder Pain and Cold Weather: Understanding the Connection",
    "what-is-orofacial-pain":"The Winter Chill and Orofacial Pain: Causes and Care",
    "what-is-knee-pain": "Winter and Knee Pain: Why It Happens and What You Can Do",
  };

  const formatName = (name) => {
    if (pageTitleMap[name.toLowerCase()]) {
      return pageTitleMap[name.toLowerCase()];
    }
    return name
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <section
      className="relative sm:py-20 md:py-28 mx-auto rounded-xl px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url(${breadcrumb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: '1500px',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#ecf0f5cc] rounded-xl"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Page Title */}
        <p className="text-[#0A2241] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
          {formatName(pathnames[pathnames.length - 1])}
        </p>

        {/* Breadcrumb navigation */}
        <nav className="text-[#0A2241] flex flex-wrap justify-center gap-2 items-center font-semibold text-xs sm:text-sm md:text-base">
          <House className="text-[#234179]" size={18} />
          <Link to="/" className="hover:underline hover:text-gray-900">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <React.Fragment key={to}>
                <span className="mx-1 text-xs sm:text-sm md:text-base">{">"}</span>
                {isLast ? (
                  <span className="text-[#234179] text-xs sm:text-sm md:text-base break-words">
                    {formatName(value)}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:underline hover:text-gray-900 text-xs sm:text-sm md:text-base break-words"
                  >
                    {formatName(value)}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
