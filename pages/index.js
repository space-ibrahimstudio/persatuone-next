import React, { Fragment } from "react";
import SEO from "@/utils/seo";
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

export default function HomePage({ pagedata }) {
  return (
    <Fragment>
      <SEO title={pagedata.title} description={pagedata.description} />
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
    </Fragment>
  );
}

export async function getStaticProps() {
  const documentdata = {
    id: "persatu.one-home",
    title:
      "Finest Cocoa Powder Supplier from Indonesia | Persatu.one - Komoditas Indonesia",
    description:
      "We are one of the leading COCOA POWDER manufacturer, SUPPLIER, and exporter from INDONESIA. We provide you the best quality of cocoa for your business!",
  };

  return {
    props: {
      idpage: documentdata.id,
      title: documentdata.title,
      description: documentdata.description,
      pagepath: "/",
      pagedata: documentdata,
    },
  };
}
