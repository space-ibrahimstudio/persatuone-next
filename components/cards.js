import React, { useState, useEffect } from "react";
import { formatDate, toTitleCase } from "@ibrahimstudio/function";
import { stripHtmlTags } from "@/utils/handler";
import styles from "@/styles/Home.module.css";
import ftr from "@/styles/feature-card.module.css";
import fctr from "@/styles/factory-card.module.css";
import cocoa from "@/styles/cocoa-card.module.css";
import coffee from "@/styles/coffee-card.module.css";
import news from "@/styles/news-card.module.css";

export const FeatureCard = ({ cardText, iconSrc }) => {
  return (
    <section className={ftr.featureCard}>
      <div className={ftr.featureCardTop}>
        <img
          className={ftr.starIcon}
          loading="lazy"
          alt={cardText}
          src={iconSrc}
        />
      </div>
      <div className={ftr.featureCardDesc}>
        <h1 className={ftr.featureCardText}>{cardText}</h1>
      </div>
    </section>
  );
};

export const FactoryCard = ({ variant, cardTitle, cardDesc, imageUrl }) => {
  if (variant === "revert") {
    return (
      <section className={fctr.factoryCard}>
        <img
          className={fctr.factoryCardImage}
          src={imageUrl}
          alt={cardTitle}
          loading="lazy"
        />
        <div className={fctr.factoryCardHeading}>
          <h1 className={fctr.factoryCardTitle}>{cardTitle}</h1>
          <p className={fctr.factoryCardDesc}>{cardDesc}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className={fctr.factoryCard}>
        <div className={fctr.factoryCardHeading}>
          <h1 className={fctr.factoryCardTitle}>{cardTitle}</h1>
          <p className={fctr.factoryCardDesc}>{cardDesc}</p>
        </div>
        <img
          className={fctr.factoryCardImage}
          src={imageUrl}
          alt={cardTitle}
          loading="lazy"
        />
      </section>
    );
  }
};

export const CocoaCard = ({
  variant,
  cardTitle,
  cardDesc,
  cardCta,
  imageUrl,
}) => {
  if (variant === "revert") {
    return (
      <section
        className={cocoa.productCard}
        style={{ flexWrap: "wrap-reverse" }}
      >
        <img
          className={cocoa.productCardImage1}
          src={imageUrl}
          alt={cardDesc}
          loading="lazy"
        />
        <div className={cocoa.productCardHeading}>
          <h1 className={cocoa.productCardTitle}>{cardTitle}</h1>
          <p className={cocoa.productCardDesc}>{cardDesc}</p>
          <p className={cocoa.productCardDesc} style={{ fontWeight: "300" }}>
            {cardCta}
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className={cocoa.productCard} style={{ flexWrap: "wrap" }}>
        <div className={cocoa.productCardHeading}>
          <h1 className={cocoa.productCardTitle}>{cardTitle}</h1>
          <p className={cocoa.productCardDesc}>{cardDesc}</p>
          <p className={cocoa.productCardDesc} style={{ fontWeight: "300" }}>
            {cardCta}
          </p>
        </div>
        <img
          className={cocoa.productCardImage}
          src={imageUrl}
          alt={cardDesc}
          loading="lazy"
        />
      </section>
    );
  }
};

export const CoffeeCard = ({ imageUrl, cardTitle }) => {
  return (
    <section className={coffee.coffeeCard}>
      <img
        className={coffee.coffeeCardImage}
        src={imageUrl}
        alt={cardTitle}
        loading="lazy"
      />
      <h1 className={coffee.coffeeCardText}>{cardTitle}</h1>
    </section>
  );
};

export const NewsCard = ({
  cardTitle,
  cardDesc,
  cardDate,
  cardComments,
  imageUrl,
  onClick,
}) => {
  return (
    <section className={news.newsCard} onClick={onClick}>
      <div className={news.newsCardImage}>
        <div className={news.newsCardDate}>
          <h6 className={news.newsCardDateText}>
            {formatDate(cardDate, "en-gb")}
          </h6>
        </div>
        <div
          className={news.newsCardImageSrc}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className={news.newsCardBody}>
        <div className={news.newsCardHeading}>
          <h1 className={news.newsCardTitle}>{toTitleCase(cardTitle)}</h1>
          <h2 className={news.newsCardDesc}>{stripHtmlTags(cardDesc, 100)}</h2>
        </div>
        <div className={news.newsCardComments}>{cardComments} Comments</div>
      </div>
    </section>
  );
};

export const FeatureCount = ({ finalCount, units, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const increment = finalCount / (duration / 100);
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= finalCount) {
        setCount(finalCount);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(currentCount));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [finalCount]);

  return (
    <div className={styles.featureContent}>
      <h1 className={styles.featureContentTitle}>
        {count}
        {units}
      </h1>
      <h6 className={styles.featureContentDesc}>{description}</h6>
    </div>
  );
};
