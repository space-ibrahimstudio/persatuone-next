"use client";

import React, { useState, useEffect } from "react";
import { SmButton } from "./buttons";
import styles from "@/styles/Home.module.css";

export function Navbar() {
  const [activeTab, setActiveTab] = useState("hero-section");
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = -80;
      const sections = document.querySelectorAll("[data-scroll-to]");

      sections.forEach((section) => {
        const top =
          section.getBoundingClientRect().top + window.scrollY + yOffset;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          const id = section.getAttribute("data-scroll-to");
          setActiveTab(id);
          const pageTitle = getPageTitle(id);
          document.title = pageTitle;
          if (id !== "hero-section") {
            window.history.replaceState(null, null, `#${id}`);
          } else {
            window.history.replaceState(null, null, window.location.pathname);
          }
        }
      });
    };

    const getPageTitle = (id) => {
      switch (id) {
        case "about-us":
          return "Persatu.one | About Us";
        case "our-brands":
          return "Persatu.one | Our Brands";
        case "our-products":
          return "Persatu.one | Our Products";
        case "gallery-showcase":
          return "Persatu.one | Gallery Showcase";
        case "news-articles":
          return "Persatu.one | News & Articles";
        case "contact-us":
          return "Persatu.one | Contact Us";
        default:
          return "Persatu.one | Cocoa manufacturers and Coffee roaster from Indonesia";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(`[data-scroll-to="${id}"]`);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.visible : ""}`}>
      <div
        className={styles.navLogo}
        onClick={() => scrollToSection("hero-section")}
      >
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/svg/logo.svg"
        />
      </div>
      <div className={styles.navMenu}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "about-us" ? styles.active : ""
          }`}
          onClick={() => scrollToSection("about-us")}
        >
          <div className={styles.tabButtonText}>About Us</div>
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "our-brands" ? styles.active : ""
          }`}
          onClick={() => scrollToSection("our-brands")}
        >
          <div className={styles.tabButtonText}>Brands</div>
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "our-products" ? styles.active : ""
          }`}
          onClick={() => scrollToSection("our-products")}
        >
          <div className={styles.tabButtonText}>Products</div>
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "gallery-showcase" ? styles.active : ""
          }`}
          onClick={() => scrollToSection("gallery-showcase")}
        >
          <div className={styles.tabButtonText}>Gallery</div>
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "news-articles" ? styles.active : ""
          }`}
          onClick={() => scrollToSection("news-articles")}
        >
          <div className={styles.tabButtonText}>Articles</div>
        </button>
      </div>
      <SmButton
        variant={isVisible ? "white" : ""}
        buttonText="Contact Us"
        onClick={() => scrollToSection("contact-us")}
      />
    </nav>
  );
}
