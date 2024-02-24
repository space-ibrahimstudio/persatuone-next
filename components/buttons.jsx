import React from "react";
import styles from "@/styles/buttons.module.css";

export const LgButton = ({ hasIcon, buttonText, children, onClick }) => {
  if (hasIcon === "yes") {
    return (
      <button className={styles.lgButtonHollow} onClick={onClick}>
        <b className={styles.lgButtonHollowText}>{buttonText}</b>
        {children}
      </button>
    );
  } else {
    return (
      <button className={styles.lgButton} onClick={onClick}>
        <b className={styles.lgButtonText}>{buttonText}</b>
      </button>
    );
  }
};

export const SmButton = ({ variant, buttonText, onClick }) => {
  if (variant === "white") {
    return (
      <button className={styles.smButtonWhite} onClick={onClick}>
        <b className={styles.productsButtonText}>{buttonText}</b>
      </button>
    );
  } else {
    return (
      <button className={styles.smButton} onClick={onClick}>
        <b className={styles.productsButtonText}>{buttonText}</b>
      </button>
    );
  }
};

export const ProductsButton = ({ buttonText, onClick }) => {
  return (
    <button className={styles.productsButton} onClick={onClick}>
      <b className={styles.productsButtonText}>{buttonText}</b>
    </button>
  );
};

export const GalleryButton = ({ buttonText, isActive, onClick }) => {
  return (
    <button
      className={`${styles.galleryButton} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <b className={styles.galleryButtonText}>{buttonText}</b>
    </button>
  );
};

export const WhatsAppButton = ({ onClick }) => {
  return (
    <img
      className={styles.floatingWaBtn}
      loading="lazy"
      alt="WhatsApp Persatu.one official"
      src="/svg/whatsapp-icon.svg"
      onClick={onClick}
    />
  );
};
