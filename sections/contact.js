"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { handleContactUs } from "@/pages/api/api";
import { LgButton } from "@/components/buttons";
import styles from "@/styles/Home.module.css";

export function Contact({ sectionId }) {
  const [inputData, setInputData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    setErrors((prevErrors) => {
      return { ...prevErrors, [name]: "" };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleContactUs(inputData);
    } catch (error) {
      console.error("Error occurred during submit reservation:", error);
    }
  };

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
          <div className={styles.contactOption}>
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
        </div>
        <div className={styles.contactForm}>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <input
                className={styles.iputField}
                placeholder="Your Name*"
                type="text"
                name="name"
                value={inputData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.iputField}
                placeholder="Your Email*"
                type="email"
                name="email"
                value={inputData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <input
                className={styles.iputField}
                placeholder="Phone Number"
                type="tel"
                name="phone"
                value={inputData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.iputField}
                placeholder="Subject"
                type="text"
                name="subject"
                value={inputData.subject}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.input4}>
            <textarea
              className={styles.iputField4}
              placeholder="Write message"
              name="message"
              value={inputData.message}
              onChange={handleInputChange}
            />
          </div>
          <LgButton
            buttonText="Send Messages"
            color="yellow"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  sectionId: PropTypes.string,
};
