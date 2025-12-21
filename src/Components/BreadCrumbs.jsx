import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import breadcrumb from "/images/home/breadcrumb.jpg";
import House from "/icons/house.svg";

// Special breadcrumb mappings
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
};

// Default breadcrumb labels
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
  "/qr": "QR",
};

// Blog titles 
const blogTitleMap = {
  "/blog/what-is-headache":
    "How Weather Changes Trigger Headaches: Causes and Solutions",
  "/blog/what-is-joint-pain":
    "Joint Care: How to Protect Your Joints",
  "/blog/what-is-neck-pain":
    "Neck Pain: Causes of Neck Pain During the Monsoon Season",
  "/blog/what-is-shoulder-pain":
    "Shoulder Pain and Cold Weather: Understanding the Connection",
  "/blog/what-is-orofacial-pain":
    "The Winter Chill and Orofacial Pain: Causes and Care",
  "/blog/what-is-knee-pain":
    "Winter and Knee Pain: Why It Happens and What You Can Do",
  "/blog/what-is-nerve-pain":
    "Winter and Nerve Pain: Understanding the Triggers",
  "/blog/what-is-muscle-pain":
    "Muscle Pain: Symptoms and Causes",
  "/blog/what-is-sports-pain":
    "Preventing Sports Injuries During Outdoor Activities",
  "/blog/what-is-whole-body-pain":
    "Whole Body Pain: Causes, Symptoms and Treatments",
  "/blog/what-is-cancer-pain":
    "Comprehensive Pain Management for Cancer Patients",
};

// Page title (document.title)
const pageTitleMap = {
  "/": "Home | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/about": "About | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/lab": "Lab | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/pharmacy":
    "Pharmacy | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/physiotherapy":
    "Physiotherapy | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/team": "Team | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/conditions":
    "Conditions | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/blog": "Blog | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
  "/contact":
    "Contact | Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal",
};

// Breadcrumb Component
const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  let breadcrumbItems = [];

// Page title effect  
  useEffect(() => {
    document.title =
      pageTitleMap[pathname] ||
      "Advance Pain Specialist Clinic | Birtamode, Jhapa, Nepal";
  }, [pathname]);

  // Breadcrumb logic 
  if (!isHome) {
    if (pathname.startsWith("/blog/") && pathname !== "/blog") {
      breadcrumbItems = [{ path: "/blog", label: "Our Blog" }];
    }

    else if (breadcrumbMap[pathname]) {
      const { hierarchy, labels } = breadcrumbMap[pathname];
      breadcrumbItems = hierarchy.map((path, index) => ({
        path,
        label: labels[index],
      }));
    }

    else {
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

  // No breadcrumbs on home
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
        {/*  Page Heading  */}
        <h1 className="text-[#0A2241] text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
          {blogTitleMap[pathname] ||
            breadcrumbItems[breadcrumbItems.length - 1]?.label}
        </h1>

        {/*  Breadcrumb Navigation  */}
        <nav className="text-[#0A2241] flex flex-wrap justify-center gap-2 items-center font-semibold">
          <img src={House} alt="Home" className="h-4 w-4" />
          <Link to="/" className="hover:underline">
            Home
          </Link>

          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <React.Fragment key={item.path}>
                <span className="mx-1">{">"}</span>
                {isLast ? (
                  <span className="text-[#234179]">{item.label}</span>
                ) : (
                  <Link to={item.path} className="hover:underline">
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
