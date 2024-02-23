import React from "react";
import styles from "@/styles/buttons.module.css";

export const LgButton = ({ hasIcon, buttonText }) => {
  if (hasIcon === "yes") {
    return (
      <button className={styles.lgButtonHollow}>
        <b className={styles.lgButtonHollowText}>{buttonText}</b>
        <img
          className={styles.arrowIcon}
          alt={buttonText}
          src="/svg/arrowicon.svg"
        />
      </button>
    );
  } else {
    return (
      <button className={styles.lgButton}>
        <b className={styles.lgButtonText}>{buttonText}</b>
      </button>
    );
  }
};

export const SmButton = ({ buttonText }) => {
  return (
    <button className={styles.smButton}>
      <b className={styles.productsButtonText}>{buttonText}</b>
    </button>
  );
};

export const ProductsButton = ({ buttonText }) => {
  return (
    <button className={styles.productsButton}>
      <b className={styles.productsButtonText}>{buttonText}</b>
    </button>
  );
};

export const GalleryButton = ({ buttonText }) => {
  return (
    <button className={styles.galleryButton}>
      <b className={styles.galleryButtonText}>{buttonText}</b>
    </button>
  );
};
