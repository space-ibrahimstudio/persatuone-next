import React from "react";
import { FeatureCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function Facility() {
  return (
    <section
      id="facility-section"
      className={styles.facility}
      style={{ backgroundImage: "url(/img/facility-bg.jpg)" }}
    >
      <div className={styles.facilityHeading}>
        <h1 className={styles.factoryTitle}>Our Facility</h1>
        <p className={styles.facilityDesc}>
          We offer you high quality cocoa powder produced from organic, fine,
          and fermented Indonesian cocoa beans. we accept customized cocoa
          powder as your needs and request, such like product color and chemical
          properties (pH value).
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
