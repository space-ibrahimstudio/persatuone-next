import React from "react";
import styles from "@/styles/Home.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <div className={styles.footerLogo}>
          <img
            className={styles.logoIcon1}
            loading="lazy"
            alt=""
            src="/svg/logo.svg"
          />
        </div>
        <div className={styles.footerMenu}>
          <div className={styles.footerMenuWrapper}>
            <h1 className={styles.footerMenuTitle}>About us</h1>
            <h2 data-scroll-to="about-us" className={styles.footerMenuLink}>
              Who we are
            </h2>
            <h2
              data-scroll-to="factory-section"
              className={styles.footerMenuLink}
            >
              Factory
            </h2>
            <h2
              data-scroll-to="facility-section"
              className={styles.footerMenuLink}
            >
              Our facility
            </h2>
            <h2 data-scroll-to="why-section" className={styles.footerMenuLink}>
              Why choose us
            </h2>
            <h2
              data-scroll-to="gallery-showcase"
              className={styles.footerMenuLink}
            >
              Gallery
            </h2>
          </div>
          <div className={styles.footerMenuWrapper}>
            <h1 className={styles.footerMenuTitle}>Products & Brands</h1>
            <h2 data-scroll-to="our-products" className={styles.footerMenuLink}>
              Cocoa
            </h2>
            <h2
              data-scroll-to="coffee-section"
              className={styles.footerMenuLink}
            >
              Coffee
            </h2>
            <h2
              data-scroll-to="certi-section"
              className={styles.footerMenuLink}
            >
              Cetifications
            </h2>
            <h2 data-scroll-to="our-brands" className={styles.footerMenuLink}>
              Cartenz Cocoa Powder
            </h2>
            <h2
              data-scroll-to="celco-section"
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
