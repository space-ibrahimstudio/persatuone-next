import React from "react";
import { FeatureCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function Facility({ sectionId }) {
  return (
    <section
      id={sectionId}
      element-view-id={sectionId}
      className={styles.facility}
      style={{ backgroundImage: "url(/img/facility-bg.jpg)" }}
    >
      <div className={styles.facilityHeading}>
        <h1 className={styles.factoryTitle}>Our Facilities</h1>
        <p className={styles.facilityDesc}>
          All our factory facilities are dedicated to ensuring the satisfaction
          of our customers worldwide.
        </p>
      </div>
      <div className={styles.facilityBody}>
        <FeatureCard
          iconSrc="/svg/star-icon.svg"
          cardText="High level of sanitary conditions are maintained throughout the facility."
        />
        <FeatureCard
          iconSrc="/svg/medal-icon.svg"
          cardText="A well-trained and experienced team in production & export shipment."
        />
        <FeatureCard
          iconSrc="/svg/leaf-icon.svg"
          cardText="Using green energy and eco-friendly practices."
        />
        <FeatureCard
          iconSrc="/svg/person-icon.svg"
          cardText="Collaboration with Coffee and Cocoa Farmers."
        />
        <FeatureCard
          iconSrc="/svg/goods-icon.svg"
          cardText="Research and Development Laboratory."
        />
      </div>
    </section>
  );
}
