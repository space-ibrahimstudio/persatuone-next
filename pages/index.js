import React from "react";
import { fetchBlogList } from "@/utils/data";
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

export default function HomePage({ bloglist }) {
  return (
    <React.Fragment>
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
        <News sectionId="news-articles" bloglist={bloglist} />
        <Contact sectionId="contact-us" />
        <Footer componentId="home-footer" />
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  try {
    const data = await fetchBlogList();
    if (data && data.data && data.data.length > 0) {
      return {
        props: {
          bloglist: data.data,
          title:
            "Finest Cocoa Powder Supplier from Indonesia | Persatu.one - Komoditas Indonesia",
          description:
            "We are one of the leading COCOA POWDER manufacturer, SUPPLIER, and exporter from INDONESIA. We provide you the best quality of cocoa for your business!",
          pagepath: "/",
        },
      };
    }
  } catch (error) {
    console.error("Error fetching blog list data:", error);
  }

  return {
    props: {
      bloglist: [],
      title: "",
      description: "",
      pagepath: "",
    },
  };
}
