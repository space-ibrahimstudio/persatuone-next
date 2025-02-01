import React, { Fragment } from "react";
import { Button } from "@ibrahimstudio/button";
import styles from "@/styles/Home.module.css";

export function Brands({ sectionId }) {
  const cocoaDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.usercontent.google.com/u/0/uc?id=1kBOa3n_I4HN9ix9uHyFdJmiEmw1J8VOe&export=download";
    downloadLink.download = "Persatu.one | Cocoa Catalog";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const coffeeDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.usercontent.google.com/u/0/uc?id=1J0_0-hkSA8UQslaS01EuyfAJ4ka4Wc1g&export=download";
    downloadLink.download = "Persatu.one | Coffee Catalog";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Fragment>
      <section id={sectionId} section-view-id={sectionId} className={styles.brands}>
        <img className={styles.brandsImage} src="/img/img-17.webp" loading="lazy" alt="Cartenz Cocoa Powder" />
        <div className={styles.brandsHeading}>
          <div className={styles.brandsHeadingContent}>
            <h2 className={styles.herSubtitle}>OUR BRAND</h2>
            <h1 className={styles.brandsTitle}>Cartenz Cocoa Powder</h1>
            <p className={styles.heroDesc}>We provide a large selection of cocoa powder, ranging from natural to alkalized. Our cocoa powder is precisely made to support the different food and beverage sectors. Our many years of professional experience have earned us the trust of the global chocolate, bakery, pastry, ice cream, instant drink, coffee, biscuit, and confectionery industries, among many others.</p>
          </div>
          <div className={styles.brandsHeadingFooter}>
            <Button id="download-cartenzcocoa-catalog" buttonText="Download Catalog" radius="md" onClick={cocoaDownload} />
            <Button id="visit-cartenzcocoa" variant="line" type="link" color="var(--color-red)" buttonText="Visit cartenzcocoa.com" radius="md" href="https://www.cartenzcocoa.com" endContent={<img style={{ width: "var(--pixel-18)", height: "auto", position: "relative" }} src="/svg/arrow-icon.svg" />} />
          </div>
        </div>
      </section>
      <section id="celco-section" element-view-id="celco-section" className={styles.brands} style={{ flexWrap: "wrap-reverse" }}>
        <div className={styles.brandsHeading}>
          <div className={styles.brandsHeadingContent}>
            <h2 className={styles.herSubtitle}>OUR BRAND</h2>
            <h1 className={styles.brandsTitle}>Celebes Coffee (CELCO)</h1>
            <p className={styles.heroDesc}>We offer you more than 20 single origin coffee all over Indonesia, from Sumatra to Papua. With advanced roastery machine and professionals, we ensure to supply the best coffee for your business!</p>
          </div>
          <div className={styles.brandsHeadingFooter}>
            <Button id="download-celcogroup-catalog" buttonText="Download Catalog" radius="md" onClick={coffeeDownload} />
            <Button id="visit-celcogroup" variant="line" type="link" color="var(--color-red)" buttonText="Visit celcogroup.com" radius="md" href="https://www.celcogroup.com/en/englishhomepage" endContent={<img style={{ width: "var(--pixel-18)", height: "auto", position: "relative" }} src="/svg/arrow-icon.svg" />} />
          </div>
        </div>
        <img className={styles.brandsImage} src="/img/img-07.webp" loading="lazy" alt="Celebes Coffee (CELCO)" />
      </section>
    </Fragment>
  );
}
