import React, { Fragment } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { WhatsAppButton } from "./buttons";
import styles from "@/styles/Home.module.css";

export default function PageLayout({ pageid, children }) {
  return (
    <Fragment>
      <Navbar id={`${pageid}-top-navigation`} />
      <WhatsAppButton />
      <main id={pageid} className={styles.home}>
        {children}
      </main>
      <Footer id={`${pageid}-bottom-navigation`} />
    </Fragment>
  );
}
