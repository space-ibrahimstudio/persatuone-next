import React, { useState } from "react";
import { Input } from "@ibrahimstudio/input";
import { Button } from "@ibrahimstudio/button";
import * as ga from "@/lib/ga";
import styles from "@/styles/Home.module.css";

export function Contact({ sectionId }) {
  const [success, setSuccess] = useState(false);
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

  const getAnalytics = () => {
    ga.event({
      action: "submit-form",
      params: {
        name: inputData.name,
        phone: inputData.phone,
        email: inputData.email,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateStep()) {
      getAnalytics();
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
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <Input
              id="client-name"
              name="name"
              type="text"
              placeholder="Your Name"
              isLabeled={false}
              value={inputData.name}
              onChange={handleInputChange}
              isRequired
            />
            <Input
              id="client-email"
              name="email"
              type="email"
              placeholder="Your Email"
              isLabeled={false}
              value={inputData.email}
              onChange={handleInputChange}
              isRequired
            />
          </div>
          <div className={styles.inputWrapper}>
            <Input
              id="client-phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              isLabeled={false}
              value={inputData.phone}
              onChange={handleInputChange}
              isRequired
            />
            <Input
              id="client-subject"
              name="subject"
              type="text"
              placeholder="Subject"
              isLabeled={false}
              value={inputData.subject}
              onChange={handleInputChange}
              isRequired
            />
          </div>
          <Input
            id="client-message"
            variant="textarea"
            name="message"
            placeholder="Write message here ..."
            isLabeled={false}
            value={inputData.message}
            onChange={handleInputChange}
            isRequired
            rows={3}
          />
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
          <Button
            id="submit-messages"
            type="submit"
            bgColor="var(--color-darkred)"
            buttonText="Send Messages"
            radius="md"
          />
        </form>
      </div>
    </section>
  );
}
