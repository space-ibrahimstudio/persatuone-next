import React from "react";
import PropTypes from "prop-types";
import { scrollToSection, scrollToElement } from "@/utils/handler";
import styles from "@/styles/Home.module.css";

export function Footer({ componentId }) {
  return (
    <footer id={componentId} className={styles.footer}>
      <div className={styles.footerNav}>
        <div
          className={styles.footerLogo}
          onClick={() => scrollToSection("hero-section")}
        >
          <img
            className={styles.footerLogoImg}
            loading="lazy"
            alt={componentId}
            src="/svg/logo.svg"
          />
        </div>
        <div className={styles.footerMenu}>
          <div className={styles.footerMenuWrapper}>
            <h1 className={styles.footerMenuTitle}>About us</h1>
            <h2
              onClick={() => scrollToSection("about-us")}
              className={styles.footerMenuLink}
            >
              Who we are
            </h2>
            <h2
              onClick={() => scrollToElement("factory-section")}
              className={styles.footerMenuLink}
            >
              Factory
            </h2>
            <h2
              onClick={() => scrollToElement("facility-section")}
              className={styles.footerMenuLink}
            >
              Our facilities
            </h2>
            <h2
              onClick={() => scrollToElement("why-section")}
              className={styles.footerMenuLink}
            >
              Why choose us
            </h2>
            <h2
              onClick={() => scrollToSection("gallery-showcase")}
              className={styles.footerMenuLink}
            >
              Gallery
            </h2>
          </div>
          <div className={styles.footerMenuWrapper}>
            <h1 className={styles.footerMenuTitle}>Products & Brands</h1>
            <h2
              onClick={() => scrollToSection("our-products")}
              className={styles.footerMenuLink}
            >
              Cocoa
            </h2>
            <h2
              onClick={() => scrollToElement("coffee-section")}
              className={styles.footerMenuLink}
            >
              Coffee
            </h2>
            <h2
              onClick={() => scrollToElement("certi-section")}
              className={styles.footerMenuLink}
            >
              Certifications
            </h2>
            <h2
              onClick={() => scrollToSection("our-brands")}
              className={styles.footerMenuLink}
            >
              Cartenz Cocoa Powder
            </h2>
            <h2
              onClick={() => scrollToElement("celco-section")}
              className={styles.footerMenuLink}
            >
              Celebes Coffee
            </h2>
          </div>
          <div className={styles.footerMenuWrapper}>
            <h1 className={styles.footerMenuTitle}>Socials</h1>
            <h2 className={styles.footerMenuLink}>Facebook</h2>
            <h2 className={styles.footerMenuLink}>Instagram</h2>
            <h2 className={styles.footerMenuLink}>Twitter</h2>
            <h2 className={styles.footerMenuLink}>YouTube</h2>
            <h2 className={styles.footerMenuLink}>LinkedIn</h2>
          </div>
        </div>
      </div>
      <div className={styles.footerFooter}>
        <h1 className={styles.footerMenuLink}>
          2024 Persatu.one. All right reserved.
        </h1>
        <div className={styles.footerPptnc}>
          <h2 className={styles.footerMenuLink}>Privacy Policy</h2>
          <h2 className={styles.footerMenuLink}>Terms and Conditions</h2>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  componentId: PropTypes.string,
};
