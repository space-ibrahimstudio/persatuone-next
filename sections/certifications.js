import React from "react";
import styles from "@/styles/Home.module.css";

export function Certifications({ sectionId }) {
  return (
    <section
      id={sectionId}
      element-view-id={sectionId}
      className={styles.certifications}
    >
      <div className={styles.facilityHeading}>
        <h1 className={styles.factoryTitle}>Certifications</h1>
        <p className={styles.aboutDesc}>
          We offer you high quality cocoa powder produced from organic, fine,
          and fermented Indonesian cocoa beans. we accept customized cocoa
          powder as your needs and request, such like product color and chemical
          properties (pH value).
        </p>
      </div>
      <div className={styles.certificationsBody}>
        <img
          style={{
            position: "relative",
            width: "var(--pixel-70)",
            height: "auto",
          }}
          src="/svg/iso-icon.svg"
          alt="iso certified"
          loading="lazy"
        />
        <img
          style={{
            position: "relative",
            width: "var(--pixel-70)",
            height: "auto",
          }}
          src="/svg/halal-icon.svg"
          alt="iso certified"
          loading="lazy"
        />
        <img
          style={{
            position: "relative",
            width: "var(--pixel-70)",
            height: "auto",
          }}
          src="/svg/sni-icon.svg"
          alt="iso certified"
          loading="lazy"
        />
      </div>
    </section>
  );
}
