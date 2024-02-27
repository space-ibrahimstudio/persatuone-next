"use client";

import React, { useEffect } from "react";
import { LgButton } from "@/components/buttons";
import styles from "@/styles/Home.module.css";

export function Brands({ sectionId }) {
  const cocoaDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.usercontent.google.com/u/0/uc?id=1kBOa3n_I4HN9ix9uHyFdJmiEmw1J8VOe&export=download";
    downloadLink.download = "Persatu.one | Cocoa Catalog";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const cocoaLink = () => {
    const link = "https://www.cartenzcocoa.com";
    window.open(link, "_blank");
  };

  const coffeeDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.usercontent.google.com/u/0/uc?id=1J0_0-hkSA8UQslaS01EuyfAJ4ka4Wc1g&export=download";
    downloadLink.download = "Persatu.one | Coffee Catalog";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const cofeeLink = () => {
    const link = "https://www.celcogroup.com/en/englishhomepage";
    window.open(link, "_blank");
  };

  useEffect(() => {
    const svg = document.getElementById("visit-cocoa");
    svg.setAttribute(
      "width",
      getComputedStyle(document.documentElement).getPropertyValue("--pixel-18")
    );
  }, []);

  useEffect(() => {
    const svg = document.getElementById("visit-coffee");
    svg.setAttribute(
      "width",
      getComputedStyle(document.documentElement).getPropertyValue("--pixel-18")
    );
  }, []);

  return (
    <>
      <section
        id={sectionId}
        section-view-id={sectionId}
        className={styles.brands}
      >
        <img
          className={styles.brandsImage}
          src="/img/img-17.webp"
          loading="lazy"
          alt="Cartenz Cocoa Powder"
        />
        <div className={styles.brandsHeading}>
          <div className={styles.brandsHeadingContent}>
            <h2 className={styles.herSubtitle}>OUR BRAND</h2>
            <h1 className={styles.brandsTitle}>Cartenz Cocoa Powder</h1>
            <p className={styles.heroDesc}>
              We provide a large selection of cocoa powder, ranging from natural
              to alkalized. Our cocoa powder is precisely made to support the
              different food and beverage sectors. Our many years of
              professional experience have earned us the trust of the global
              chocolate, bakery, pastry, ice cream, instant drink, coffee,
              biscuit, and confectionery industries, among many others.
            </p>
          </div>
          <div className={styles.brandsHeadingFooter}>
            <LgButton buttonText="Download Catalog" onClick={cocoaDownload} />
            <LgButton
              buttonText="Visit cartenzcocoa.com"
              hasIcon="yes"
              onClick={cocoaLink}
            >
              <svg
                id="visit-cocoa"
                height="100%"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0.5L9.428 1.545L15.112 7.25H0V8.75H15.113L9.428 14.43L10.5 15.5L18 8L10.5 0.5Z"
                  fill="currentColor"
                />
              </svg>
            </LgButton>
          </div>
        </div>
      </section>
      <section
        id="celco-section"
        element-view-id="celco-section"
        className={styles.brands}
        style={{ flexWrap: "wrap-reverse" }}
      >
        <div className={styles.brandsHeading}>
          <div className={styles.brandsHeadingContent}>
            <h2 className={styles.herSubtitle}>OUR BRAND</h2>
            <h1 className={styles.brandsTitle}>Celebes Coffee (CELCO)</h1>
            <p className={styles.heroDesc}>
              We offer you more than 20 single origin coffee all over Indonesia,
              from Sumatra to Papua. With advanced roastery machine and
              professionals, we ensure to supply the best coffee for your
              business!
            </p>
          </div>
          <div className={styles.brandsHeadingFooter}>
            <LgButton buttonText="Download Catalog" onClick={coffeeDownload} />
            <LgButton
              buttonText="Visit celcogroup.com"
              hasIcon="yes"
              onClick={cofeeLink}
            >
              <svg
                id="visit-coffee"
                height="100%"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0.5L9.428 1.545L15.112 7.25H0V8.75H15.113L9.428 14.43L10.5 15.5L18 8L10.5 0.5Z"
                  fill="currentColor"
                />
              </svg>
            </LgButton>
          </div>
        </div>
        <img
          className={styles.brandsImage}
          src="/img/img-07.webp"
          loading="lazy"
          alt="Celebes Coffee (CELCO)"
        />
      </section>
    </>
  );
}
