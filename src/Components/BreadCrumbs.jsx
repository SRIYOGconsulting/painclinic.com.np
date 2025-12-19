import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import breadcrumb from "/images/home/breadcrumb.jpg";
import House from "/icons/house.svg";

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
  "/muskaan-message": {
    hierarchy: ["/messages", "/muskaan-message"],
    labels: ["Messages", "Message from Dr. Muskaan"],
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
    labels: ["Muscle Pain: Symptoms and Causes"],
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

// Default breadcrumb labels for normal pages
const defaultBreadcrumbMap = {
  "/about": "About Us",
  "/team": "Our Team",
  "/cure": "What We Cure",
  "/messages": "Messages",
  "/lab": "Lab",
  "/pharmacy": "Pharmacy",
  "/physiotherapy": "Physiotherapy",
  "/conditions": "Conditions",
  "/faqs": "Frequently Asked Questions",
  "/blog": "Pain Clinic Blog",
  "/contact": "Contact Us",
  "/qr" : "QR"
};

  //  Page title configuration

const pageTitleMap = {
  "/": "Home | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",

  "/about": "About | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/lab": "Lab | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/pharmacy": "Pharmacy | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/physiotherapy": "Physiotherapy | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/team": "Team | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/whatwecure": "Cure | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/puspak-message": "Dr. Puspak Message | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/niru-message": "Dr. Niru Message | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/muskan-message": "Dr. Muskan Message | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/conditions": "Conditions | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/faq": "FAQs | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/blog": "Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",

  "/what-is-headache":
    "What is Headache | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-joint-pain":
    "What is Joint Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-neck-pain":
    "What is Neck Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-shoulder-pain":
    "What is Shoulder Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-orofacial-pain":
    "What is Orofacial Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-knee-pain":
    "What is Knee Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-nerve-pain":
    "What is Nerve Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-muscle-pain":
    "What is Muscle Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-sports-pain":
    "What is Sports Injury | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-whole-body-pain":
    "What is Whole Body Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/what-is-cancer-pain":
    "What is Cancer Pain | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",

  "/contact": "Contact | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
};

  //  Breadcrumb Component

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  let breadcrumbItems = [];

  // Page Title Effect 
  useEffect(() => {
    document.title =
      pageTitleMap[pathname] ||
      "Advance Pain Clinic | Birtamode, Jhapa, Nepal";
  }, [pathname]);

  // Breadcrumb Logic 
  if (!isHome) {
    if (breadcrumbMap[pathname]) {
      const { hierarchy, labels } = breadcrumbMap[pathname];

      if (labels.length === 1 && hierarchy.length === 1) {
        breadcrumbItems = [{ path: "/blog", label: "Our Blog" }];
      } else {
        breadcrumbItems = hierarchy.map((path, index) => ({
          path,
          label: labels[index],
        }));
      }
    } else {
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
    }
  }

  // Do not render breadcrumbs on Home
  if (isHome) return null;

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
        {/* Page Heading */}
        <h1 className="text-[#0A2241] text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
          {
            breadcrumbItems[breadcrumbItems.length - 1]?.label
          }
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="text-[#0A2241] flex flex-wrap justify-center gap-2 items-center font-semibold">
          <img src={House} alt="Home" className="text-[#234179]h-4 w-4" />
          <Link to="/" className="hover:underline hover:text-gray-900">
            Home
          </Link>

          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <React.Fragment key={item.path}>
                <span className="mx-1">{">"}</span>
                {isLast ? (
                  <span className="text-[#234179] break-words">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:underline hover:text-gray-900 break-words"
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
