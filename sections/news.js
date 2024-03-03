import React from "react";
import PropTypes from "prop-types";
import { NewsCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function News({ sectionId }) {
  return (
    <section
      id={sectionId}
      section-view-id={sectionId}
      className={styles.certifications}
    >
      <div className={styles.articlesHeading}>
        <h1 className={styles.factoryTitle}>News & Articles</h1>
      </div>
      <div className={styles.newsBody}>
        <NewsCard
          imageUrl="/img/img-16.webp"
          cardTitle="Tips to Import Cocoa Powder"
          cardDesc="Cocoa powder is a fundamental ingredient in the confectionery, bakery, and beverage industries, making it a commodity with steady demand. However, the success of your cocoa powder import business depends on several key factors."
          cardDate="Mar 02, 2024"
          cardComments="0"
        />
        <NewsCard
          imageUrl="/img/img-13.webp"
          cardTitle="Difference Between Alkalized and Natural Cocoa Powder"
          cardDesc="Two of the most prominent variants are alkalized cocoa powder and natural cocoa powder. Understanding the distinctions between these two types of cocoa is vital for both industry professionals and passionate home bakers. In this article, we'll delve into the world of cocoa to explore the differences between alkalized cocoa powder and natural cocoa powder, shedding light on their properties, uses, and how Cartenz Cocoa ensures the highest quality for both varieties."
          cardDate="Mar 02, 2024"
          cardComments="0"
        />
        <NewsCard
          imageUrl="/img/img-14.webp"
          cardTitle="How Cocoa Powder is Made?"
          cardDesc="Cocoa powder, the magical ingredient that infuses our baked goods, confections, and beverages with irresistible chocolate flavor, has a fascinating journey from cocoa beans to your kitchen. At Cartenz Cocoa, we take immense pride in the craftsmanship and precision that goes into creating the cocoa powder we offer."
          cardDate="Mar 02, 2024"
          cardComments="0"
        />
      </div>
    </section>
  );
}

News.propTypes = {
  sectionId: PropTypes.string,
};
