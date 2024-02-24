import React from "react";
import styles from "@/styles/Home.module.css";

export function Why() {
  return (
    <section id="why-section" className={styles.why}>
      <div className={styles.aboutHeading}>
        <h1 className={styles.factoryTitle}>What make us different?</h1>
        <div className={styles.whyDesc}>
          <div className={styles.whyPoint}>
            <img
              className={styles.checkIcon}
              alt="We have our own manufacturer and we directly sourced our raw materials to farmers. Therefore, we can offer you a very very competitive price,"
              src="/svg/check-icon.svg"
            />
            <h2 className={styles.whyPointText}>
              We have our own manufacturer and we directly sourced our raw
              materials to farmers. Therefore, we can offer you a very very
              competitive price,
            </h2>
          </div>
          <div className={styles.whyPoint}>
            <img
              className={styles.checkIcon}
              alt="Quality and Safe Shipment Guarantee,"
              src="/svg/check-icon.svg"
            />
            <h2 className={styles.whyPointText}>
              Quality and Safe Shipment Guarantee,
            </h2>
          </div>
          <div className={styles.whyPoint}>
            <img
              className={styles.checkIcon}
              alt="Private Label Solutions,"
              src="/svg/check-icon.svg"
            />
            <h2 className={styles.whyPointText}>Private Label Solutions,</h2>
          </div>
          <div className={styles.whyPoint}>
            <img
              className={styles.checkIcon}
              alt="World Class Service for customers."
              src="/svg/check-icon.svg"
            />
            <h2 className={styles.whyPointText}>
              World Class Service for customers.
            </h2>
          </div>
        </div>
      </div>
      <img
        className={styles.aboutImage}
        src="/img/img-14.webp"
        loading="lazy"
        alt="What make us different?"
      />
    </section>
  );
}
