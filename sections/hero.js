import React from "react";
import PropTypes from "prop-types";
import { scrollToSection } from "@/utils/handler";
import { LgButton } from "@/components/buttons";
import { FeatureCount } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function Hero({ sectionId }) {
  return (
    <header id={sectionId} section-view-id={sectionId} className={styles.hero}>
      <div className={styles.heroHeading}>
        <h2 className={styles.herSubtitle}>
          Cocoa Powder Supplier From Indonesia
        </h2>
        <h1 className={styles.heroTitle}>
          World’s Leading Cocoa Powder Manufacturer
        </h1>
        <p className={styles.heroDesc}>
          We are one of the leading cocoa manufacturers and coffee roaster from
          Indonesia. We are happy to grow with your business, to spread the
          beauty of Indonesian Commodities to the entire world!
        </p>
        <LgButton
          buttonText="Explore More"
          onClick={() => scrollToSection("our-products")}
        />
      </div>
      <div className={styles.feature}>
        <FeatureCount
          finalCount={50}
          units="+"
          description="Overseas Partners"
        />
        <FeatureCount
          finalCount={10}
          units="+"
          description="Export Destination Countries"
        />
        <FeatureCount
          finalCount={99}
          units="%"
          description="Customer Satisfaction"
        />
      </div>
    </header>
  );
}

Hero.propTypes = {
  sectionId: PropTypes.string,
};
