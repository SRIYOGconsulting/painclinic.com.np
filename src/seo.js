export const SITE_URL = "https://painclinic.com.np";
export const SITE_NAME = "Advance Pain Specialist Clinic";
export const DEFAULT_DESCRIPTION =
  "Pain management clinic in Birtamode, Jhapa offering specialist care for chronic pain, acute pain, nerve pain, joint pain, and rehabilitation.";

export const socialLinks = {
  facebook: "https://www.facebook.com/painclinicbirtamode/",
  instagram: "https://www.instagram.com/advancepainclinic/",
};

const pageDescriptions = {
  "/": DEFAULT_DESCRIPTION,
  "/about":
    "Learn about Advance Pain Specialist Clinic, a specialist pain management center serving patients in Birtamode, Jhapa, Nepal.",
  "/team":
    "Meet the doctors and clinical team at Advance Pain Specialist Clinic in Birtamode, Jhapa.",
  "/cure":
    "Explore pain conditions treated at Advance Pain Specialist Clinic, including headache, joint pain, nerve pain, muscle pain, and cancer pain.",
  "/lab":
    "Lab services at Advance Pain Specialist Clinic support diagnosis and treatment planning for pain patients in Birtamode.",
  "/pharmacy":
    "Pharmacy services at Advance Pain Specialist Clinic help patients access medicines for pain management and recovery.",
  "/physiotherapy":
    "Physiotherapy services at Advance Pain Specialist Clinic support mobility, rehabilitation, and long-term pain relief.",
  "/conditions":
    "Browse pain conditions treated by Advance Pain Specialist Clinic, from headache and neck pain to knee, nerve, and whole body pain.",
  "/faqs":
    "Answers to common questions about appointments, treatments, services, and pain management at Advance Pain Specialist Clinic.",
  "/blog":
    "Read pain management articles, treatment tips, and patient education from Advance Pain Specialist Clinic.",
  "/contact":
    "Contact Advance Pain Specialist Clinic in Birtamode, Jhapa for appointments, directions, phone, and email enquiries.",
};

export const pageTitleMap = {
  "/": "Pain Clinic in Birtamode, Jhapa | Advance Pain Specialist Clinic",
  "/about": "About Advance Pain Specialist Clinic | Birtamode, Jhapa",
  "/team": "Pain Specialist Team | Advance Pain Specialist Clinic",
  "/cure": "Pain Conditions We Treat | Advance Pain Specialist Clinic",
  "/lab": "Lab Services | Advance Pain Specialist Clinic",
  "/pharmacy": "Pharmacy Services | Advance Pain Specialist Clinic",
  "/physiotherapy": "Physiotherapy Services | Advance Pain Specialist Clinic",
  "/conditions": "Pain Conditions | Advance Pain Specialist Clinic",
  "/faqs": "FAQs | Advance Pain Specialist Clinic",
  "/blog": "Pain Management Blog | Advance Pain Specialist Clinic",
  "/contact": "Contact Advance Pain Specialist Clinic | Birtamode",
  "/puspak-message": "Message from Dr. Puspak | Advance Pain Specialist Clinic",
  "/niru-message": "Message from Dr. Niru | Advance Pain Specialist Clinic",
  "/muskaan-message": "Message from Dr. Muskaan | Advance Pain Specialist Clinic",
  "/blog/what-is-headache":
    "How Weather Changes Trigger Headaches | Advance Pain Specialist Clinic",
  "/blog/what-is-joint-pain":
    "Joint Care and Joint Pain Relief | Advance Pain Specialist Clinic",
  "/blog/what-is-neck-pain":
    "Neck Pain Causes and Care | Advance Pain Specialist Clinic",
  "/blog/what-is-shoulder-pain":
    "Shoulder Pain Causes and Care | Advance Pain Specialist Clinic",
  "/blog/what-is-orofacial-pain":
    "Orofacial Pain Causes and Care | Advance Pain Specialist Clinic",
  "/blog/what-is-knee-pain":
    "Knee Pain Causes and Care | Advance Pain Specialist Clinic",
  "/blog/what-is-nerve-pain":
    "Nerve Pain Causes and Care | Advance Pain Specialist Clinic",
  "/blog/what-is-muscle-pain":
    "Muscle Pain Symptoms and Causes | Advance Pain Specialist Clinic",
  "/blog/what-is-sports-pain":
    "Sports Injury Prevention and Care | Advance Pain Specialist Clinic",
  "/blog/what-is-whole-body-pain":
    "Whole Body Pain Causes and Treatment | Advance Pain Specialist Clinic",
  "/blog/what-is-cancer-pain":
    "Cancer Pain Management | Advance Pain Specialist Clinic",
};

export function getRouteMeta(pathname) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const generatedTitle =
    normalizedPath
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()) || "Home";

  return {
    title:
      pageTitleMap[normalizedPath] ||
      `${generatedTitle} | ${SITE_NAME}`,
    description: pageDescriptions[normalizedPath] || DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`,
  };
}
