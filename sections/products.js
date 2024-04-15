"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { ProductsButton } from "@/components/buttons";
import { categories, productsData } from "@/utils/data";
import { CocoaCard, CoffeeCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function Products({ sectionId }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <React.Fragment>
      <section
        id={sectionId}
        section-view-id={sectionId}
        className={styles.coaproducts}
        style={{ backgroundImage: "url(/img/products-bg.jpg)" }}
      >
        <div className={styles.factoryHeading}>
          <h2 className={styles.herSubtitle}>OUR PRODUCTS</h2>
          <h1 className={styles.aboutTitle}>Cocoa Powder</h1>
          <p className={styles.heroDesc}>
            We offer you high quality cocoa powder produced from the best
            fermented Indonesian and African cocoa beans.
          </p>
        </div>
        <div className={styles.coaproductsBody}>
          <div className={styles.coaproductsTab}>
            {categories.map((category, index) => (
              <ProductsButton
                key={index}
                onClick={() => setSelectedCategory(index)}
                buttonText={category}
                isActive={index === selectedCategory}
              />
            ))}
          </div>
          <div className={styles.coaproductsBody}>
            {productsData[selectedCategory].map((product, index) => (
              <CocoaCard
                key={index}
                variant={index % 2 === 0 ? "" : "revert"}
                imageUrl={product.imageUrl}
                cardTitle={product.cardTitle}
                cardDesc={product.cardDesc}
                cardCta={product.cardCta}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="coffee-section"
        element-view-id="coffee-section"
        className={styles.cofproducts}
      >
        <div className={styles.facilityHeading}>
          <h2 className={styles.herSubtitle}>OUR PRODUCTS</h2>
          <h1 className={styles.brandsTitle}>Coffee Products</h1>
          <p className={styles.heroDesc}>
            We offer you high quality coffee products, produced from the best
            Arabica and Robusta Indonesian coffee beans.
          </p>
        </div>
        <div className={styles.cofproductsBody}>
          <CoffeeCard
            cardTitle="Spray Dried Instant Coffee"
            imageUrl="/img/spray-dried-instant-coffee.webp"
          />
          <CoffeeCard
            cardTitle="Liquid Concentrate Coffee"
            imageUrl="/img/liquid-concentrate-coffee.webp"
          />
          <CoffeeCard
            cardTitle="Roasted Coffee Beans"
            imageUrl="/img/roasted-coffee-beans.webp"
          />
          <CoffeeCard
            cardTitle="Grounded Coffee"
            imageUrl="/img/grounded-coffee.webp"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

Products.propTypes = {
  sectionId: PropTypes.string,
};
