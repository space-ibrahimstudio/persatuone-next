import React from "react";
import Head from "next/head";
import { WhatsAppButton } from "@/components/buttons";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import styles from "@/styles/Home.module.css";

export default function News() {
  return (
    <>
      <Head>
        <title>
          Finest Cocoa Powder Supplier from Indonesia - Persatu.one - Komoditas
          Indonesia
        </title>
        <meta
          name="description"
          content="We are one of the leading COCOA POWDER manufacturer, SUPPLIER, and exporter from INDONESIA. We provide you the best quality of cocoa for your business!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WhatsAppButton />
      <div id="persatu.one-news" className={styles.home}>
        <Navbar componentId="home-nav" />
        <Button />
        <Footer componentId="home-footer" />
      </div>
    </>
  );
}
