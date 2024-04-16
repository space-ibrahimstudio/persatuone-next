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

export const stripHtmlTags = (html) => {
  if (typeof document === "undefined") {
    return html;
  }

  const temp = document.createElement("div");
  temp.innerHTML = html;

  return temp.innerText || temp.textContent || "";
};
