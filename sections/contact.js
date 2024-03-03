"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
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

  const [success, setSuccess] = useState(false);

  const cleanInput = () => {
    setInputData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const validateStep = () => {
    const newErrors = {};
    let isValid = true;

    if (inputData.name.trim() === "") {
      newErrors.name = "Please fill in all forms completely";
      isValid = false;
    }
    if (inputData.phone.trim() === "") {
      newErrors.phone = "Please fill in all forms completely";
      isValid = false;
    }
    if (inputData.email.trim() === "") {
      newErrors.email = "Please fill in all forms completely";
      isValid = false;
    }
    if (inputData.subject.trim() === "") {
      newErrors.subject = "Please fill in all forms completely";
      isValid = false;
    }
    if (inputData.message.trim() === "") {
      newErrors.message = "Please fill in all forms completely";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateStep()) {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputData),
        });
        if (response.ok) {
          cleanInput();
          setSuccess(true);
        } else {
          alert("Failed to send email.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send email.");
      }
    } else {
      setSuccess(false);
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
        <div className={styles.aboutHeading} style={{ gap: "var(--pixel-30)" }}>
          <h1 className={styles.contactTitle}>
            Be Our Distributor in Your Country
          </h1>
          <p className={styles.contactDesc}>
            Please contact us to know more about our company, products, and
            sample request.
          </p>
          <div className={styles.contactOption}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                alignSelf: "stretch",
                gap: "var(--pixel-10)",
              }}
            >
              <img
                style={{
                  position: "relative",
                  height: "auto",
                  width: "var(--pixel-18)",
                }}
                alt="phone"
                src="/svg/phone.svg"
              />
              <p
                className={styles.contactDesc}
                style={{ fontSize: "var(--font-xsmall)", fontWeight: "400" }}
              >
                +62 821 2227 9540
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                alignSelf: "stretch",
                gap: "var(--pixel-10)",
              }}
            >
              <img
                style={{
                  position: "relative",
                  height: "auto",
                  width: "var(--pixel-18)",
                }}
                alt="phone"
                src="/svg/mail.svg"
              />
              <p
                className={styles.contactDesc}
                style={{ fontSize: "var(--font-xsmall)", fontWeight: "400" }}
              >
                sales@persatu.one | sales@cartenzcocoa.com
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                alignSelf: "stretch",
                gap: "var(--pixel-10)",
              }}
            >
              <img
                style={{
                  position: "relative",
                  height: "auto",
                  width: "var(--pixel-18)",
                }}
                alt="phone"
                src="/svg/building.svg"
              />
              <p
                className={styles.contactDesc}
                style={{ fontSize: "var(--font-xsmall)", fontWeight: "400" }}
              >
                Ruko North Sorrento Square, Jalan Ir. Sukarno No.3, Pagedangan,
                Tangerang, Banten, Indonesia, 15332
              </p>
            </div>
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
          {errors && (
            <p className={styles.errorMsg}>
              {errors.name ||
                errors.phone ||
                errors.email ||
                errors.subject ||
                errors.message}
            </p>
          )}
          {success && (
            <p className={styles.errorMsg}>Message sent successfully.</p>
          )}
          <LgButton
            variant="dark"
            buttonText="Send Messages"
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
