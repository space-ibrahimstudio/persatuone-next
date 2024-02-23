import React from "react";
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

export const CocoaCard = ({ variant, cardTitle, cardDesc, imageUrl }) => {
  if (variant === "revert") {
    return (
      <section className={cocoa.productCard}>
        <img
          className={cocoa.productCardImage1}
          src={imageUrl}
          alt={cardDesc}
          loading="lazy"
        />
        <div className={cocoa.productCardHeading}>
          <h1 className={cocoa.productCardTitle}>{cardTitle}</h1>
          <p className={cocoa.productCardDesc}>{cardDesc}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className={cocoa.productCard}>
        <div className={cocoa.productCardHeading}>
          <h1 className={cocoa.productCardTitle}>{cardTitle}</h1>
          <p className={cocoa.productCardDesc}>{cardDesc}</p>
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
            zIndex: "-1",
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
