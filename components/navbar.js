import React, { Fragment, useState, useEffect, useRef } from "react";
import { Button } from "@ibrahimstudio/button";
import Link from "next/link";
import { scrollToSection } from "@/utils/handler";
import styles from "@/styles/Home.module.css";
import menu from "@/styles/mobile-menu.module.css";

export const SocialIcon = ({ id, iconSrc, onClick }) => {
  return (
    <div id={id} className={menu.socialIcon} onClick={onClick}>
      <div className={menu.iconWrap}>
        <img className={menu.fbIcon} alt={id} src={iconSrc} />
      </div>
    </div>
  );
};

export function Navbar({ componentId }) {
  const [activeTab, setActiveTab] = useState("hero-section");
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const scrollToTop = () => {
    const isBrowser = () => typeof window !== "undefined";
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = -80;
      const sections = document.querySelectorAll("[section-view-id]");
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY + yOffset;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          const id = section.getAttribute("section-view-id");
          setActiveTab(id);
          if (id !== "hero-section") window.history.replaceState(null, null, `#${id}`);
          else window.history.replaceState(null, null, window.location.pathname);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <nav id={componentId} className={`${styles.nav} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.navLogo} onClick={scrollToTop}>
          <img className={styles.logoIcon} loading="lazy" alt={componentId} src="/svg/logo.svg" />
        </div>
        <div className={styles.navMenu}>
          <Link className={`${styles.tabButton} ${activeTab === "hero-section" ? styles.active : ""}`} href="#hero-section" scroll={false}>
            <b className={styles.tabButtonText}>Home</b>
          </Link>
          <Link className={`${styles.tabButton} ${activeTab === "about-us" ? styles.active : ""}`} href="#about-us" scroll={false}>
            <b className={styles.tabButtonText}>About Us</b>
          </Link>
          <Link className={`${styles.tabButton} ${activeTab === "our-brands" ? styles.active : ""}`} href="#our-brands" scroll={false}>
            <b className={styles.tabButtonText}>Brands</b>
          </Link>
          <Link className={`${styles.tabButton} ${activeTab === "our-products" ? styles.active : ""}`} href="#our-products" scroll={false}>
            <b className={styles.tabButtonText}>Products</b>
          </Link>
          <Link className={`${styles.tabButton} ${activeTab === "gallery-showcase" ? styles.active : ""}`} href="#gallery-showcase" scroll={false}>
            <b className={styles.tabButtonText}>Gallery</b>
          </Link>
          {/* <Link className={`${styles.tabButton} ${activeTab === "news-articles" ? styles.active : ""}`} href="#news-articles" scroll={false}>
            <b className={styles.tabButtonText}>Articles</b>
          </Link> */}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
          <Button id="contact-nav" size="sm" radius="md" buttonText="Contact Us" bgColor={isVisible ? "var(--color-darkred)" : "var(--color-red)"} onClick={() => scrollToSection("contact-us")} />
          <div className={menu.burgerIcon} onClick={openMenu}>
            <img src="/svg/menu-icon.svg" loading="lazy" alt={componentId} style={{ width: "auto", height: "var(--pixel-20)", position: "relative" }} />
          </div>
        </div>
      </nav>
      {menuOpen && <MobileMenu componentId="mobile-menu" activeTab={activeTab} onClose={closeMenu} />}
    </Fragment>
  );
}

const MobileMenu = ({ componentId, activeTab, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef(null);

  const handleClose = () => setIsClosing(true);
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsClosing(true);
  };

  const igLink = () => {
    const link = "https://www.instagram.com/persatu.one";
    window.open(link, "_blank");
  };

  const liLink = () => {
    const link = "https://www.linkedin.com/company/persatu-one-indonesia";
    window.open(link, "_blank");
  };

  const fbLink = () => {
    const link = "https://www.facebook.com/profile.php?id=100083610881443";
    window.open(link, "_blank");
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
      if (ref.current && !ref.current.contains(e.target)) setIsClosing(true);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, setIsClosing]);

  return (
    <Fragment>
      <div ref={ref} className={`${menu.mobileMenu} ${isClosing ? menu.close : ""}`}>
        <div className={menu.menuHeader}>
          <img className={menu.logoMenu} loading="lazy" alt={componentId} src="/svg/logo-red.svg" />
          <button className={menu.closeButton} onClick={handleClose}>
            <img className={menu.closeIcon} alt={componentId} src="/svg/close-icon.svg" />
          </button>
        </div>
        <div className={menu.menuNav}>
          <button className={`${menu.menuButton} ${activeTab === "hero-section" ? menu.active : ""}`} onClick={() => handleClick("hero-section")}>
            <div className={menu.menuButtonText}>Home</div>
          </button>
          <button className={`${menu.menuButton} ${activeTab === "about-us" ? menu.active : ""}`} onClick={() => handleClick("about-us")}>
            <div className={menu.menuButtonText}>About Us</div>
          </button>
          <button className={`${menu.menuButton} ${activeTab === "our-brands" ? menu.active : ""}`} onClick={() => handleClick("our-brands")}>
            <div className={menu.menuButtonText}>Brands</div>
          </button>
          <button className={`${menu.menuButton} ${activeTab === "our-products" ? menu.active : ""}`} onClick={() => handleClick("our-products")}>
            <div className={menu.menuButtonText}>Products</div>
          </button>
          <button className={`${menu.menuButton} ${activeTab === "gallery-showcase" ? menu.active : ""}`} onClick={() => handleClick("gallery-showcase")}>
            <div className={menu.menuButtonText}>Gallery</div>
          </button>
          <button className={`${menu.menuButton} ${activeTab === "news-articles" ? menu.active : ""}`} onClick={() => handleClick("news-articles")}>
            <div className={menu.menuButtonText}>Articles</div>
          </button>
        </div>
        <div className={menu.menuSocial}>
          <div className={menu.menuSocialTitle}>Connect Socially :</div>
          <div className={menu.menuSocialIcon}>
            <SocialIcon id="facebook" iconSrc="/svg/fb-icon.svg" onClick={fbLink} />
            <SocialIcon id="instagram" iconSrc="/svg/ig-icon.svg" onClick={igLink} />
            <SocialIcon id="linkedin" iconSrc="/svg/li-icon.svg" onClick={liLink} />
            {/* <SocialIcon id="twitter" iconSrc="/svg/twitter-icon.svg" />
            <SocialIcon id="youtube" iconSrc="/svg/yt-icon.svg" /> */}
          </div>
        </div>
        <button className={menu.menuCta} onClick={() => handleClick("contact-us")}>
          <div className={menu.menuCtaText}>Contact Us</div>
          <img className={menu.arrowIcon} alt={componentId} src="/svg/arrow-white-icon.svg" />
        </button>
      </div>
      <div className={`${menu.mobileMenuBg} ${isClosing ? menu.close : ""}`} style={{ content: "''", position: "fixed", top: "0", right: "0", bottom: "0", left: "0", zIndex: "1001", backgroundColor: "var(--color-black-50)" }}></div>
    </Fragment>
  );
};
