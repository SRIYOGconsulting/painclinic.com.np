import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMeta, SITE_NAME, SITE_URL, socialLinks } from "../seo";

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
    setMetaAttribute('meta[name="description"]', "content", meta.description);
    setMetaAttribute('meta[property="og:url"]', "content", meta.canonical);
    setMetaAttribute('meta[property="og:title"]', "content", meta.title);
    setMetaAttribute('meta[property="og:description"]', "content", meta.description);
    setMetaAttribute('meta[name="twitter:title"]', "content", meta.title);
    setMetaAttribute('meta[name="twitter:description"]', "content", meta.description);

    setJsonLd("clinic-structured-data", {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/og/og.jpg`,
      telephone: "+9779701012345",
      email: "info@painclinic.com.np",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Birtamode",
        addressRegion: "Jhapa",
        addressCountry: "NP",
      },
      medicalSpecialty: "PainManagement",
      sameAs: Object.values(socialLinks),
    });
  }, [pathname]);

  return null;
};

export default Seo;
