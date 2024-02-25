import React from "react";
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
          cardTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui."
          cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
          cardDate="Jan 15, 2024"
          cardComments="2"
        />
        <NewsCard
          imageUrl="/img/img-07.webp"
          cardTitle="Nullam vulputate commodo euismod. In sodales imperdiet nisl vel scelerisque."
          cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
          cardDate="Jan 15, 2024"
          cardComments="3"
        />
        <NewsCard
          imageUrl="/img/img-03.webp"
          cardTitle="Duis venenatis fermentum lacinia. Quisque in porta dui, vel dictum odio"
          cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
          cardDate="Jan 15, 2024"
          cardComments="5"
        />
      </div>
    </section>
  );
}
