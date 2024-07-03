import React from "react";
import styles from "@/styles/buttons.module.css";

export const ProductsButton = ({ buttonText, isActive, onClick }) => {
  return (
    <button
      className={`${styles.productsButton} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
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

export const WhatsAppButton = () => {
  const waLink = () => {
    const link =
      "https://wa.me/6282122279540?text=Hi%2C%20Saya%20Ingin%20Order";
    window.open(link, "_blank");
  };

  return (
    <img
      className={styles.floatingWaBtn}
      loading="lazy"
      alt="WhatsApp Persatu.one official"
      src="/svg/whatsapp-icon.svg"
      onClick={waLink}
    />
  );
};
