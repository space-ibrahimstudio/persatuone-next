import React from "react";
import { LgButton } from "@/components/buttons";
import styles from "@/styles/Home.module.css";

export function Contact({ sectionId }) {
  return (
    <section
      id={sectionId}
      section-view-id={sectionId}
      className={styles.contact}
      style={{ backgroundImage: "url(/img/img-18.webp)" }}
    >
      <div className={styles.contactCard}>
        <div className={styles.aboutHeading}>
          <h1 className={styles.contactTitle}>
            Be Our Distributor in Your Country
          </h1>
          <p className={styles.contactDesc}>
            Please contact us to know more about our company, products, and
            sample request.
          </p>
          <p
            className={styles.contactDesc}
            style={{ fontSize: "var(--font-xsmall)", fontWeight: "500" }}
          >
            Phone Number: +62 821 2227 9540
          </p>
          <p
            className={styles.contactDesc}
            style={{ fontSize: "var(--font-xsmall)", fontWeight: "500" }}
          >
            Email: sales@persatu.one | sales@cartenzcocoa.com
          </p>
          <p
            className={styles.contactDesc}
            style={{ fontSize: "var(--font-xsmall)", fontWeight: "500" }}
          >
            Marketing Office: Ruko North Sorrento Square, Jalan Ir. Sukarno
            No.3, Pagedangan, Tangerang, Banten, Indonesia, 15332
          </p>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <input
                className={styles.iputField}
                placeholder="Your Name*"
                type="text"
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.iputField}
                placeholder="Your Email*"
                type="email"
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <input
                className={styles.iputField}
                placeholder="Phone Number"
                type="tel"
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.iputField}
                placeholder="Subject"
                type="text"
              />
            </div>
          </div>
          <div className={styles.input4}>
            <textarea
              className={styles.iputField4}
              placeholder="Write message"
            />
          </div>
          <LgButton buttonText="Send Messages" color="yellow" />
        </div>
      </div>
    </section>
  );
}
