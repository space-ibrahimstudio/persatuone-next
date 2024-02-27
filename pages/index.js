import React from "react";
import Head from "next/head";
import { WhatsAppButton } from "@/components/buttons";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Factory } from "@/sections/factory";
import { Facility } from "@/sections/facility";
import { Why } from "@/sections/why";
import { Brands } from "@/sections/brands";
import { Products } from "@/sections/products";
import { Certifications } from "@/sections/certifications";
import { Gallery } from "@/sections/gallery";
import { News } from "@/sections/news";
import { Contact } from "@/sections/contact";
import { Footer } from "@/components/footer";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Finest Cocoa Powder Supplier from Indonesia - Persatu.one - Komoditas
          Indonesia
        </title>
        <meta
          name="description"
          content="We are one of the leading cocoa manufacturers and coffee roaster from Indonesia. We are happy to grow with your business, to spread the beauty of Indonesian Commodities to the entire world!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WhatsAppButton />
      <div id="persatu.one-home" className={styles.home}>
        <Navbar componentId="home-nav" />
        <Hero sectionId="hero-section" />
        <About sectionId="about-us" />
        <Factory sectionId="factory-section" />
        <Facility sectionId="facility-section" />
        <Why sectionId="why-section" />
        <Brands sectionId="our-brands" />
        <Products sectionId="our-products" />
        <Certifications sectionId="certi-section" />
        <Gallery sectionId="gallery-showcase" />
        <News sectionId="news-articles" />
        <Contact sectionId="contact-us" />
        <Footer componentId="home-footer" />
      </div>
    </>
  );
}
