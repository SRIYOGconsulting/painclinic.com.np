import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  CLINIC_ADDRESS,
  CLINIC_EMAIL,
  CLINIC_PHONE,
  getRouteMeta,
  SITE_NAME,
  SITE_URL,
  socialLinks,
} from "../seo";

function setMetaAttribute(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);

    document.title = meta.title;
    setLink("canonical", meta.canonical);
    setMetaAttribute('meta[name="title"]', "content", meta.title);
    setMetaAttribute('meta[name="description"]', "content", meta.description);
    setMetaAttribute('meta[property="og:url"]', "content", meta.canonical);
    setMetaAttribute('meta[property="og:title"]', "content", meta.title);
    setMetaAttribute('meta[property="og:description"]', "content", meta.description);
    setMetaAttribute('meta[name="twitter:title"]', "content", meta.title);
    setMetaAttribute('meta[name="twitter:description"]', "content", meta.description);

    const address = {
      "@type": "PostalAddress",
      addressLocality: CLINIC_ADDRESS.locality,
      addressRegion: CLINIC_ADDRESS.region,
      addressCountry: CLINIC_ADDRESS.country,
    };

    const businessData = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/og/og.jpg`,
      telephone: CLINIC_PHONE,
      email: CLINIC_EMAIL,
      address,
      medicalSpecialty: "PainManagement",
      sameAs: Object.values(socialLinks),
      openingHours: "Mo-Sa 09:00-17:00",
      areaServed: ["Birtamode", "Jhapa", "Nepal"],
    };

    setJsonLd("clinic-structured-data", businessData);
    setJsonLd("website-structured-data", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: meta.description,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    });
    setJsonLd("webpage-structured-data", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: meta.title,
      description: meta.description,
      url: meta.canonical,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: {
        "@type": "MedicalCondition",
        name: "Pain management",
      },
    });
    setJsonLd("local-business-structured-data", {
      ...businessData,
      "@type": "LocalBusiness",
      priceRange: "$$",
      areaServed: ["Birtamode", "Jhapa", "Nepal"],
    });
    setJsonLd("breadcrumb-structured-data", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: pathname
        .split("/")
        .filter(Boolean)
        .reduce(
          (items, segment, index) => {
            const path = `/${pathname
              .split("/")
              .filter(Boolean)
              .slice(0, index + 1)
              .join("/")}`;

            items.push({
              "@type": "ListItem",
              position: index + 2,
              name: segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
              item: `${SITE_URL}${path}`,
            });
            return items;
          },
          [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/`,
            },
          ],
        ),
    });
  }, [pathname]);

  return null;
};

export default Seo;
