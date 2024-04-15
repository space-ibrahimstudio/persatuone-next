import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

FeatureCard.propTypes = {
  cardText: PropTypes.string,
  iconSrc: PropTypes.string,
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

FactoryCard.propTypes = {
  variant: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDesc: PropTypes.string,
  imageUrl: PropTypes.string,
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

CocoaCard.propTypes = {
  variant: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDesc: PropTypes.string,
  cardCta: PropTypes.string,
  imageUrl: PropTypes.string,
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

CoffeeCard.propTypes = {
  cardTitle: PropTypes.string,
  imageUrl: PropTypes.string,
};

export const NewsCard = ({
  cardTitle,
  cardDesc,
  cardDate,
  cardComments,
  imageUrl,
}) => {
  return (
    <section className={news.newsCard}>
      <div className={news.newsCardImage}>
        <div className={news.newsCardDate}>
          <h6 className={news.newsCardDateText}>{cardDate}</h6>
        </div>
        <div
          style={{
            content: "''",
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            zIndex: "1",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
      <div className={news.newsCardBody}>
        <div className={news.newsCardHeading}>
          <h1 className={news.newsCardTitle}>{cardTitle}</h1>
          <h2 className={news.newsCardDesc}>{cardDesc}</h2>
        </div>
        <div className={news.newsCardComments}>{cardComments} Comments</div>
      </div>
    </section>
  );
};

NewsCard.propTypes = {
  cardTitle: PropTypes.string,
  cardDesc: PropTypes.string,
  cardDate: PropTypes.string,
  cardComments: PropTypes.string,
  imageUrl: PropTypes.string,
};

export const FeatureCount = ({ finalCount, units, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const increment = Math.ceil(finalCount / (duration / 100));

    const interval = setInterval(() => {
      if (count < finalCount) {
        setCount((prevCount) => prevCount + increment);
      } else {
        setCount(finalCount);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count, finalCount]);

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

FeatureCount.propTypes = {
  finalCount: PropTypes.number,
  units: PropTypes.string,
  description: PropTypes.string,
};
