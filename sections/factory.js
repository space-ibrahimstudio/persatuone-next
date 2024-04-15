import React from "react";
import { ClientOnly } from "@/lib/client/client";
import PropTypes from "prop-types";
import { FactoryCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function Factory({ sectionId }) {
  return (
    <ClientOnly>
      <section
        id={sectionId}
        element-view-id={sectionId}
        className={styles.factory}
      >
        <div className={styles.factoryHeading}>
          <h1 className={styles.factoryTitle}>Our Factory</h1>
          <p className={styles.aboutDesc}>
            At our factory, we take pride in turning the best Indonesian cocoa
            and coffee into top-high quality products. Count on us to meet all
            your global needs with quality you can trust!
          </p>
        </div>
        <FactoryCard
          variant="revert"
          imageUrl="/img/img-01.webp"
          cardTitle="Persatu.one Cocoa Factory"
          cardDesc="Located in West Java, Indonesia, we focus on COCOA POWDER production. With production capacity up to 800 metric tons/month, we can supply Alkalized Cocoa Powder, Natural Cocoa Powder, and Hot Chocolate Mix for your business."
        />
        <FactoryCard
          imageUrl="/img/img-08.webp"
          cardTitle="Persatu.one Coffee Factory"
          cardDesc="Located in Banten, Indonesia, we produce Arabica and Robusta roasted coffee beans from more than 20 origins all over the world. We also produce instant coffee, supplying green beans, and help coffee shops around the world get the best coffee from Indonesia!"
        />
      </section>
    </ClientOnly>
  );
}

Factory.propTypes = {
  sectionId: PropTypes.string,
};
