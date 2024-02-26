"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/utils/handler";
import styles from "@/styles/mobile-menu.module.css";

export const SocialIcon = ({ id, iconSrc, onClick }) => {
  return (
    <div id={id} className={styles.socialIcon} onClick={onClick}>
      <div className={styles.iconWrap}>
        <img className={styles.fbIcon} alt={id} src={iconSrc} />
      </div>
    </div>
  );
};

export function MobileMenu({ componentId, onClose }) {
  const [activeTab, setActiveTab] = useState("hero-section");
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef(null);

  const pathname = usePathname();

  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsClosing(true);
  };

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const animationDuration = 500;
      setTimeout(() => {
        onClose();
      }, animationDuration);
    }
  }, [isClosing, onClose]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsClosing(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsClosing]);

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const currentTab = pathSegments[1] || "hero-section";
    setActiveTab(currentTab);
  }, [location.pathname]);

  return (
    <>
      <div
        ref={ref}
        className={`${styles.mobileMenu} ${isClosing ? styles.close : ""}`}
      >
        <div className={styles.menuHeader}>
          <img
            className={styles.logoMenu}
            loading="lazy"
            alt={componentId}
            src="/svg/logo.svg"
          />
          <button className={styles.closeButton} onClick={handleClose}>
            <img
              className={styles.closeIcon}
              alt={componentId}
              src="/closeicon.svg"
            />
          </button>
        </div>
        <div className={styles.menuNav}>
          <button
            className={`${styles.menuButton} ${
              activeTab === "hero-section" ? styles.active : ""
            }`}
            onClick={() => handleClick("hero-section")}
          >
            <div className={styles.menuButtonText}>Home</div>
          </button>
          <button
            className={`${styles.menuButton} ${
              activeTab === "about-us" ? styles.active : ""
            }`}
            onClick={() => handleClick("about-us")}
          >
            <div className={styles.menuButtonText}>About Us</div>
          </button>
          <button
            className={`${styles.menuButton} ${
              pathname === "/#our-brands" ? styles.active : ""
            }`}
            onClick={() => handleClick("our-brands")}
          >
            <div className={styles.menuButtonText}>Brands</div>
          </button>
          <button
            className={`${styles.menuButton} ${
              activeTab === "our-products" ? styles.active : ""
            }`}
            onClick={() => handleClick("our-products")}
          >
            <div className={styles.menuButtonText}>Products</div>
          </button>
          <button
            className={`${styles.menuButton} ${
              activeTab === "gallery-showcase" ? styles.active : ""
            }`}
            onClick={() => handleClick("gallery-showcase")}
          >
            <div className={styles.menuButtonText}>Gallery</div>
          </button>
          <button
            className={`${styles.menuButton} ${
              activeTab === "news-articles" ? styles.active : ""
            }`}
            onClick={() => handleClick("news-articles")}
          >
            <div className={styles.menuButtonText}>Articles</div>
          </button>
        </div>
        <div className={styles.menuSocial}>
          <div className={styles.menuSocialTitle}>Connect Socially :</div>
          <div className={styles.menuSocialIcon}>
            <SocialIcon id="facebook" iconSrc="/svg/fb-icon.svg" />
            <SocialIcon id="instagram" iconSrc="/svg/ig-icon.svg" />
            <SocialIcon id="twitter" iconSrc="/svg/twitter-icon.svg" />
            <SocialIcon id="youtube" iconSrc="/svg/yt-icon.svg" />
          </div>
        </div>
        <button className={styles.menuCta}>
          <div className={styles.menuCtaText}>Contact Us</div>
          <img
            className={styles.arrowIcon}
            alt={componentId}
            src="/svg/arrow-icon.svg"
          />
        </button>
      </div>
      <div
        className={`${styles.mobileMenuBg} ${isClosing ? styles.close : ""}`}
        style={{
          content: "''",
          position: "fixed",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          zIndex: "1001",
          backgroundColor: "var(--color-black-50)",
        }}
      ></div>
    </>
  );
}
