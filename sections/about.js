import React from "react";
import { ClientOnly } from "@/lib/client/client";
import PropTypes from "prop-types";
import styles from "@/styles/Home.module.css";

export function About({ sectionId }) {
  return (
    <ClientOnly>
      <section
        id={sectionId}
        section-view-id={sectionId}
        className={styles.about}
      >
        <div className={styles.aboutHeading}>
          <h1 className={styles.aboutTitle}>Who we are?</h1>
          <h2 className={styles.aboutSubtitle}>
            A Global Cocoa Powder and Coffee Manufacturer based in Indonesia
          </h2>
          <p className={styles.aboutDesc}>
            Persatu.one Group (PT. Persatuone Komoditas Indonesia) is a family
            company and manufacturer, aims to unite the diversity of Indonesian
            commodities into high value products & brands! In 2000, we started a
            family-owned cocoa and coffee manufacturer in West Java to spread
            this blessing to the entire world!
          </p>
        </div>
        <img
          className={styles.aboutImage}
          src="/img/img-12.webp"
          loading="lazy"
          alt="Persatu.one Group (PT. Persatuone Komoditas Indonesia) is a family company and manufacturer, aims to unite the diversity of Indonesian commodities into high value products & brands! In 2000, we started a family-owned cocoa and coffee manufacturer in West Java to spread this blessing to the entire world!"
        />
      </section>
    </ClientOnly>
  );
}

About.propTypes = {
  sectionId: PropTypes.string,
};
