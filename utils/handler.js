"use client";

export const scrollToSection = (id) => {
  const element = document.querySelector(`[section-view-id="${id}"]`);
  if (element) {
    const yOffset = -70;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const scrollToElement = (id) => {
  const element = document.querySelector(`[element-view-id="${id}"]`);
  if (element) {
    const yOffset = -70;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const stripHtmlTags = (html, max) => {
  return html.replace(/<[^>]*>?/gm, "").substring(0, max);
};

export const stripMetaContent = (html) => {
  return html.replace(/<[^>]*>?/gm, "");
};
