import React from "react";
import PropTypes from "prop-types";
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

LgButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  hasIcon: PropTypes.string,
  children: PropTypes.node,
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

SmButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  variant: PropTypes.string,
};

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

ProductsButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  isActive: PropTypes.bool,
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

GalleryButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  isActive: PropTypes.bool,
};

export const WhatsAppButton = () => {
  const waLink = () => {
    const link =
      "https://web.whatsapp.com/send?phone=6282122279540&text=Hi%2C%20Saya%20Ingin%20Order";
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
