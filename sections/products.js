import React from "react";
import { ProductsButton } from "@/components/buttons";
import { CocoaCard, CoffeeCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function Products({ sectionId }) {
  return (
    <>
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
            <ProductsButton buttonText="Low Fat Series" />
            <ProductsButton buttonText="Standard Series" />
            <ProductsButton buttonText="Premium Series" />
            <ProductsButton buttonText="Black Series" />
          </div>
          <div className={styles.coaproductsBody}>
            <CocoaCard
              imageUrl="/img/img-13.webp"
              cardTitle="CT700 Low Fat Alkalized"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
            />
            <CocoaCard
              variant="revert"
              imageUrl="/img/img-18.webp"
              cardTitle="CT700N Low Fat Natural"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
            />
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
            We offer you high quality cocoa powder produced from the best
            fermented Indonesian and African cocoa beans.
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
    </>
  );
}
