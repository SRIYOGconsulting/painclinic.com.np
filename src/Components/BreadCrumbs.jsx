import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import breadcrumb from "../assets/images/breadcrumb.jpg";
import { House } from "lucide-react";

// Map special pages for friendly breadcrumbs
const breadcrumbMap = {
  "/puspak-message": {
    hierarchy: ["/messages", "/puspak-message"],
    labels: ["Messages", "Message from Dr. Puspak"],
  },
  "/niru-message": {
    hierarchy: ["/messages", "/niru-message"],
    labels: ["Messages", "Message from Dr. Niru"],
  },
  "/muskan-message": {
    hierarchy: ["/messages", "/muskan-message"],
    labels: ["Messages", "Message from Dr. Muskan"],
  },

  // footer links
  "/what-is-headache": {
    hierarchy: ["/blog"],
    labels: ["How Weather Changes Trigger Headaches: Causes and Solutions"],
  },
  "/what-is-joint-pain": {
    hierarchy: ["/blog"],
    labels: ["Joint Care: How to Protect Your Joints"],
  },
  "/what-is-neck-pain": {
    hierarchy: ["/blog"],
    labels: ["Neck Pain: Causes of Neck Pain During the Monsoon Season"],
  },
  "/what-is-shoulder-pain": {
    hierarchy: ["/blog"],
    labels: ["Shoulder Pain and Cold Weather: Understanding the Connection"],
  },
  "/what-is-orofacial-pain": {
    hierarchy: ["/blog"],
    labels: ["The Winter Chill and Orofacial Pain: Causes and Care"],
  },
  "/what-is-knee-pain": {
    hierarchy: ["/blog"],
    labels: ["Winter and Knee Pain: Why It Happens and What You Can Do"],
  },
  "/what-is-nerve-pain": {
    hierarchy: ["/blog"],
    labels: ["Winter and Nerve Pain: Understanding the Triggers"],
  },
  "/what-is-muscle-pain": {
    hierarchy: ["/blog"],
    labels: ["Muscle Pain: Symptoms and causes"],
  },
  "/what-is-sports-pain": {
    hierarchy: ["/blog"],
    labels: ["Preventing Sports Injuries During Outdoor Activities"],
  },
  "/what-is-whole-body-pain": {
    hierarchy: ["/blog"],
    labels: ["Whole Body Pain: Causes, Symptoms and Treatments"],
  },
  "/what-is-cancer-pain": {
    hierarchy: ["/blog"],
    labels: ["Comprehensive Pain Management for Cancer Patients"],
  },
};

// Default mapping for normal navbar pages
const defaultBreadcrumbMap = {
  "/about": "About Us",
  "/team": "Our Team",
  "/whatwecure": "What We Cure",
  "/messages": "Messages",
  "/lab": "Lab",
  "/pharmacy": "Pharmacy",
  "/physiotherapy": "Physiotherapy",
  "/conditions": "Conditions",
  "/faqs": "Frequently Asked Questions",
  "/blog": "Pain Clinic Blog",
  "/contact": "Contact Us",
  "/": "Home",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if(pathname==="/") return null;
  let breadcrumbItems = [];
  let pageTitle = "";

  useEffect(()=>{
    if(pathname === "/"){
     document.title = "Home | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepa" 
    }
  },[pathname]);

  if (breadcrumbMap[pathname]) {
    const { hierarchy, labels } = breadcrumbMap[pathname];

    if (labels.length === 1 && hierarchy.length === 1) {

      breadcrumbItems = [{ path: "/blog", label: "Our Blog" }];
      pageTitle = labels[0];
    } else {
      // Normal navbar special pages
      breadcrumbItems = hierarchy.map((path, index) => ({
        path,
        label: labels[index],
      }));
      pageTitle = labels[labels.length - 1];
    }
  } else {
    // Default: split pathname and build breadcrumb
    const segments = pathname.split("/").filter(Boolean);
    let currentPath = "";
    breadcrumbItems = segments.map((seg) => {
      currentPath += `/${seg}`;
      return {
        path: currentPath,
        label:
          defaultBreadcrumbMap[currentPath] ||
          seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      };
    });
    pageTitle = breadcrumbItems[breadcrumbItems.length - 1].label;
  }

  // document title
  useEffect(()=>{
    document.title = `${pageTitle} | Advance Pain Clinic`
  },[pageTitle]);

  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 mx-auto rounded-xl px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url(${breadcrumb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: "1500px",
      }}
    >
      <div className="absolute inset-0 bg-[#ecf0f5cc] rounded-xl"></div>
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Page Title */}
        <p className="text-[#0A2241] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
          {pageTitle}
        </p>

        {/* Breadcrumb navigation */}
        <nav className="text-[#0A2241] flex flex-wrap justify-center gap-2 items-center font-semibold text-xs sm:text-sm md:text-base">
          <House className="text-[#234179]" size={18} />
          <Link to="/" className="hover:underline hover:text-gray-900">
            Home
          </Link>
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <React.Fragment key={item.path}>
                <span className="mx-1 text-xs sm:text-sm md:text-base">{">"}</span>
                {isLast ? (
                  <span className="text-[#234179] text-xs sm:text-sm md:text-base break-words">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:underline hover:text-gray-900 text-xs sm:text-sm md:text-base break-words"
                  >
                    {item.label}
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
