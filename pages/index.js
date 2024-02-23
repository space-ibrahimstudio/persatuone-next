import React from "react";
import Head from "next/head";
import {
  LgButton,
  SmButton,
  ProductsButton,
  GalleryButton,
} from "@/components/buttons";
import {
  FeatureCard,
  FactoryCard,
  CocoaCard,
  CoffeeCard,
  NewsCard,
} from "@/components/cards";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Persatu.one | Cocoa manufacturers and Coffee roaster from Indonesia
        </title>
        <meta
          name="description"
          content="We are one of the leading cocoa manufacturers and coffee roaster from Indonesia. We are happy to grow with your business, to spread the beauty of Indonesian Commodities to the entire world!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <nav className={styles.nav}>
          <div className={styles.navLogo}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/svg/logo.svg"
            />
          </div>
          <div className={styles.navMenu}>
            <button className={styles.tabButton}>
              <div className={styles.tabButtonText}>Home</div>
            </button>
            <button className={styles.tabButtonActive}>
              <div className={styles.tabButtonText}>About Us</div>
            </button>
            <button className={styles.tabButton}>
              <div className={styles.tabButtonText}>Brands</div>
            </button>
            <button className={styles.tabButton}>
              <div className={styles.tabButtonText}>Products</div>
            </button>
            <button className={styles.tabButton}>
              <div className={styles.tabButtonText}>Gallery</div>
            </button>
            <button className={styles.tabButton}>
              <div className={styles.tabButtonText}>Articles</div>
            </button>
          </div>
          <SmButton buttonText="Contact Us" />
        </nav>
        <header className={styles.hero} data-scroll-to="hero">
          <div className={styles.heroHeading}>
            <h2 className={styles.herSubtitle}>
              Cocoa Powder Supplier From Indonesia
            </h2>
            <h1 className={styles.heroTitle}>
              World’s Leading Cocoa Powder Manufacturer
            </h1>
            <p className={styles.heroDesc}>
              We are one of the leading cocoa manufacturers and coffee roaster
              from Indonesia. We are happy to grow with your business, to spread
              the beauty of Indonesian Commodities to the entire world!
            </p>
            <LgButton buttonText="Explore More" />
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h1 className={styles.featureContentTitle}>50+</h1>
              <h6 className={styles.featureContentDesc}>Overseas Partners</h6>
            </div>
            <div className={styles.featureContent}>
              <h1 className={styles.featureContentTitle}>10+</h1>
              <h2 className={styles.featureContentDesc}>
                Export Destination Countries
              </h2>
            </div>
            <div className={styles.featureContent}>
              <h1 className={styles.featureContentTitle}>99.8%</h1>
              <h2 className={styles.featureContentDesc}>
                Customer Satisfaction
              </h2>
            </div>
          </div>
        </header>
        <section className={styles.about} data-scroll-to="about">
          <div className={styles.aboutHeading}>
            <h1 className={styles.aboutTitle}>Who we are?</h1>
            <h2 className={styles.aboutSubtitle}>
              A Global Cocoa Powder and Coffee Manufacturer based in Indonesia
            </h2>
            <p className={styles.aboutDesc}>
              Persatu.one Group (PT. Persatuone Komoditas Indonesia) is a family
              company and manufacturer, aims to unite the diversity of
              Indonesian commodities into high value products & brands! In 2000,
              we started a family-owned cocoa and coffee manufacturer in West
              Java to spread this blessing to the entire world!
            </p>
          </div>
          <img
            className={styles.aboutImage}
            src="/img/img-12.webp"
            loading="lazy"
            alt="Persatu.one Group (PT. Persatuone Komoditas Indonesia) is a family company and manufacturer, aims to unite the diversity of Indonesian commodities into high value products & brands! In 2000, we started a family-owned cocoa and coffee manufacturer in West Java to spread this blessing to the entire world!"
          />
        </section>
        <section className={styles.factory}>
          <div className={styles.factoryHeading}>
            <h1 className={styles.factoryTitle}>Our Factory</h1>
            <p className={styles.featureContentDesc}>
              From refreshing coconut water to rich coconut milk and everything
              in between, we offer a diverse range of coconut products tailored
              to meet your specifications.
            </p>
          </div>
          <FactoryCard
            variant="revert"
            imageUrl="/img/img-01.webp"
            cardTitle="Persatu.one Cocoa Factory"
            cardDesc="Located in West Java, Indonesia, we focus on COCOA POWDER production. With production capacity up to 800 metric tons/month, we can supply Alkalized Cocoa Powder, Natural Cocoa Powder, and Hot Chocolate Mix for your business."
          />
          <FactoryCard
            imageUrl="/img/img-08.webp"
            cardTitle="Persatu.one Coffee Factory"
            cardDesc="Located in Banten, Indonesia, we produce Arabica and Robusta roasted coffee beans from more than 20 origins all over the world. We also produce instant coffee, supplying green beans, and help coffee shops around the world get the best coffee from Indonesia!"
          />
        </section>
        <section
          className={styles.facility}
          style={{ backgroundImage: "url(/img/facility-bg.jpg)" }}
        >
          <div className={styles.facilityHeading}>
            <h1 className={styles.factoryTitle}>Our Facility</h1>
            <p className={styles.facilityDesc}>
              We offer you high quality cocoa powder produced from organic,
              fine, and fermented Indonesian cocoa beans. we accept customized
              cocoa powder as your needs and request, such like product color
              and chemical properties (pH value).
            </p>
          </div>
          <div className={styles.facilityBody}>
            <FeatureCard
              iconSrc="/svg/star-icon.svg"
              cardText="High level of sanitary conditions are maintained throughout the facility."
            />
            <FeatureCard
              iconSrc="/svg/medal-icon.svg"
              cardText="A well-trained and experienced team in production & export shipment."
            />
            <FeatureCard
              iconSrc="/svg/leaf-icon.svg"
              cardText="Using green energy and eco-friendly practices."
            />
            <FeatureCard
              iconSrc="/svg/person-icon.svg"
              cardText="Collaboration with Coffee and Cocoa Farmers."
            />
            <FeatureCard
              iconSrc="/svg/goods-icon.svg"
              cardText="Research and Development Laboratory."
            />
          </div>
        </section>
        <section className={styles.why}>
          <div className={styles.aboutHeading}>
            <h1 className={styles.factoryTitle}>What make us different?</h1>
            <div className={styles.whyDesc}>
              <div className={styles.whyPoint}>
                <img
                  className={styles.checkIcon}
                  alt="We have our own manufacturer and we directly sourced our raw materials to farmers. Therefore, we can offer you a very very competitive price,"
                  src="/svg/check-icon.svg"
                />
                <h2 className={styles.whyPointText}>
                  We have our own manufacturer and we directly sourced our raw
                  materials to farmers. Therefore, we can offer you a very very
                  competitive price,
                </h2>
              </div>
              <div className={styles.whyPoint}>
                <img
                  className={styles.checkIcon}
                  alt="Quality and Safe Shipment Guarantee,"
                  src="/svg/check-icon.svg"
                />
                <h2 className={styles.whyPointText}>
                  Quality and Safe Shipment Guarantee,
                </h2>
              </div>
              <div className={styles.whyPoint}>
                <img
                  className={styles.checkIcon}
                  alt="Private Label Solutions,"
                  src="/svg/check-icon.svg"
                />
                <h2 className={styles.whyPointText}>
                  Private Label Solutions,
                </h2>
              </div>
              <div className={styles.whyPoint}>
                <img
                  className={styles.checkIcon}
                  alt="World Class Service for customers."
                  src="/svg/check-icon.svg"
                />
                <h2 className={styles.whyPointText}>
                  World Class Service for customers.
                </h2>
              </div>
            </div>
          </div>
          <img
            className={styles.aboutImage}
            src="/img/img-14.webp"
            loading="lazy"
            alt="What make us different?"
          />
        </section>
        <section className={styles.brands} data-scroll-to="brands">
          <img
            className={styles.brandsImage}
            src="/img/img-17.webp"
            loading="lazy"
            alt="Cartenz Cocoa Powder"
          />
          <div className={styles.brandsHeading}>
            <div className={styles.brandsHeadingContent}>
              <h1 className={styles.brandsTitle}>Cartenz Cocoa Powder</h1>
              <h2 className={styles.herSubtitle}>OUR BRAND</h2>
              <p className={styles.heroDesc}>
                We provide a large selection of cocoa powder, ranging from
                natural to alkalized. Our cocoa powder is precisely made to
                support the different food and beverage sectors. Our many years
                of professional experience have earned us the trust of the
                global chocolate, bakery, pastry, ice cream, instant drink,
                coffee, biscuit, and confectionery industries, among many
                others.
              </p>
            </div>
            <div className={styles.brandsHeadingFooter}>
              <LgButton buttonText="Download Catalog" />
              <LgButton buttonText="Visit cartenzcocoa.com" hasIcon="yes" />
            </div>
          </div>
        </section>
        <section className={styles.brands}>
          <div className={styles.brandsHeading}>
            <div className={styles.brandsHeadingContent}>
              <h1 className={styles.brandsTitle}>Celebes Coffee (CELCO)</h1>
              <h2 className={styles.herSubtitle}>OUR BRAND</h2>
              <p className={styles.heroDesc}>
                We offer you more than 20 single origin coffee all over
                Indonesia, from Sumatra to Papua. With advanced roastery machine
                and professionals, we ensure to supply the best coffee for your
                business!
              </p>
            </div>
            <div className={styles.brandsHeadingFooter}>
              <LgButton buttonText="Download Catalog" />
              <LgButton buttonText="Visit celcogroup.com" hasIcon="yes" />
            </div>
          </div>
          <img
            className={styles.brandsImage}
            src="/img/img-07.webp"
            loading="lazy"
            alt="Celebes Coffee (CELCO)"
          />
        </section>
        <section
          className={styles.coaproducts}
          style={{ backgroundImage: "url(/img/products-bg.jpg)" }}
          data-scroll-to="coaproducts"
        >
          <div className={styles.factoryHeading}>
            <h2 className={styles.herSubtitle}>OUR PRODUCTS</h2>
            <h1 className={styles.aboutTitle}>Cocoa Powder</h1>
            <p className={styles.heroDesc}>
              We offer you high quality cocoa powder produced from the best
              fermented Indonesian and African cocoa beans.
            </p>
          </div>
          <div className={styles.coaproductsBody}>
            <div className={styles.coaproductsTab}>
              <ProductsButton buttonText="Low Fat Series" />
              <ProductsButton buttonText="Standard Series" />
              <ProductsButton buttonText="Premium Series" />
              <ProductsButton buttonText="Black Series" />
            </div>
            <div className={styles.coaproductsBody}>
              <CocoaCard
                imageUrl="/img/img-13.webp"
                cardTitle="CT700 Low Fat Alkalized"
                cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
              />
              <CocoaCard
                variant="revert"
                imageUrl="/img/img-18.webp"
                cardTitle="CT700N Low Fat Natural"
                cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
              />
            </div>
          </div>
        </section>
        <section className={styles.cofproducts}>
          <div className={styles.facilityHeading}>
            <h2 className={styles.herSubtitle}>OUR PRODUCTS</h2>
            <h1 className={styles.brandsTitle}>Coffee Products</h1>
            <p className={styles.heroDesc}>
              We offer you high quality cocoa powder produced from the best
              fermented Indonesian and African cocoa beans.
            </p>
          </div>
          <div className={styles.cofproductsBody}>
            <CoffeeCard
              cardTitle="Spray Dried Instant Coffee"
              imageUrl="/img/img-02.webp"
            />
            <CoffeeCard
              cardTitle="Liquid Concentrate Coffee"
              imageUrl="/img/img-03.webp"
            />
            <CoffeeCard
              cardTitle="Roasted Coffee Beans"
              imageUrl="/img/img-04.webp"
            />
            <CoffeeCard
              cardTitle="Grounded Coffee"
              imageUrl="/img/img-05.webp"
            />
          </div>
        </section>
        <section className={styles.certifications}>
          <div className={styles.facilityHeading}>
            <h1 className={styles.factoryTitle}>Certifications</h1>
            <p className={styles.featureContentDesc}>
              We offer you high quality cocoa powder produced from organic,
              fine, and fermented Indonesian cocoa beans. we accept customized
              cocoa powder as your needs and request, such like product color
              and chemical properties (pH value).
            </p>
          </div>
          <div className={styles.certificationsBody}>
            <img
              style={{
                position: "relative",
                width: "var(--pixel-125)",
                height: "auto",
              }}
              src="/svg/iso-icon.svg"
              alt="iso certified"
              loading="lazy"
            />
            <img
              style={{
                position: "relative",
                width: "var(--pixel-72)",
                height: "auto",
              }}
              src="/svg/halal-icon.svg"
              alt="iso certified"
              loading="lazy"
            />
            <img
              style={{
                position: "relative",
                width: "var(--pixel-95)",
                height: "auto",
              }}
              src="/svg/sni-icon.svg"
              alt="iso certified"
              loading="lazy"
            />
          </div>
        </section>
        <section className={styles.certifications} data-scroll-to="gallery">
          <div className={styles.facilityHeading}>
            <h1 className={styles.factoryTitle}>Our Gallery</h1>
            <p className={styles.featureContentDesc}>
              We offer you high quality cocoa powder produced from organic,
              fine, and fermented Indonesian cocoa beans. we accept customized
              cocoa powder as your needs and request, such like product color
              and chemical properties (pH value).
            </p>
          </div>
          <div className={styles.galleryBody}>
            <div className={styles.galleryTab}>
              <GalleryButton buttonText="Cocoa Manufacturer" />
              <GalleryButton buttonText="Coffee Manufacturer" />
              <GalleryButton buttonText="Export Shipment" />
              <GalleryButton buttonText="Cocoa Farmers" />
              <GalleryButton buttonText="Coffee Farmers" />
            </div>
            <div className={styles.galleryList}>
              <div className={styles.galleryImage} />
              <div className={styles.galleryImage} />
              <div className={styles.galleryImage} />
              <div className={styles.galleryImage} />
              <div className={styles.galleryImage} />
            </div>
          </div>
        </section>
        <section className={styles.certifications} data-scroll-to="articles">
          <div className={styles.articlesHeading}>
            <h1 className={styles.factoryTitle}>{`News & Articles`}</h1>
          </div>
          <div className={styles.galleryBody}>
            <NewsCard
              imageUrl="/img/img-16.webp"
              cardTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui."
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
              cardDate="Jan 15, 2024"
              cardComments="2"
            />
            <NewsCard
              imageUrl="/img/img-07.webp"
              cardTitle="Nullam vulputate commodo euismod. In sodales imperdiet nisl vel scelerisque."
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
              cardDate="Jan 15, 2024"
              cardComments="3"
            />
            <NewsCard
              imageUrl="/img/img-03.webp"
              cardTitle="Duis venenatis fermentum lacinia. Quisque in porta dui, vel dictum odio"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod."
              cardDate="Jan 15, 2024"
              cardComments="5"
            />
          </div>
        </section>
        <section
          className={styles.contact}
          style={{ backgroundImage: "url(/img/hero.webp)" }}
          data-scroll-to="contact"
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
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.input}>
                  <input
                    className={styles.iputField}
                    placeholder="Phone Number"
                    type="text"
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
              <LgButton buttonText="Send Messages" />
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerNav}>
            <div className={styles.footerLogo}>
              <img
                className={styles.logoIcon1}
                loading="lazy"
                alt=""
                src="/svg/logo.svg"
              />
            </div>
            <div className={styles.footerMenu}>
              <div className={styles.footerMenuWrapper}>
                <h1 className={styles.footerMenuTitle}>About us</h1>
                <h2 className={styles.footerMenuLink}>Who we are</h2>
                <h2 className={styles.footerMenuLink}>Factory</h2>
                <h2 className={styles.footerMenuLink}>Our facility</h2>
                <h2 className={styles.footerMenuLink}>Why choose us</h2>
                <h2 className={styles.footerMenuLink}>Gallery</h2>
              </div>
              <div className={styles.footerMenuWrapper}>
                <h1
                  className={styles.footerMenuTitle1}
                >{`Products  & Brands`}</h1>
                <h2 className={styles.footerMenuLink}>Cocoa</h2>
                <h2 className={styles.footerMenuLink}>Coffee</h2>
                <h2 className={styles.footerMenuLink}>Cetifications</h2>
                <h2 className={styles.footerMenuLink}>Quality</h2>
                <h2 className={styles.footerMenuLink}>Cartenz Cocoa Powder</h2>
                <h2 className={styles.footerMenuLink}>Celebes Coffee</h2>
              </div>
              <div className={styles.footerMenuWrapper}>
                <h1 className={styles.footerMenuTitle}>Socials</h1>
                <h2 className={styles.footerMenuLink}>Facebook</h2>
                <h2 className={styles.footerMenuLink}>Instagram</h2>
                <h2 className={styles.footerMenuLink}>Twitter</h2>
                <h2 className={styles.footerMenuLink}>YouTube</h2>
                <h2 className={styles.footerMenuLink}>LinkedIn</h2>
              </div>
            </div>
          </div>
          <div className={styles.footerFooter}>
            <h1 className={styles.footerMenuLink}>
              2024 Persatu.one. All right reserved.
            </h1>
            <div className={styles.footerPptnc}>
              <h2 className={styles.footerMenuLink}>Privacy Policy</h2>
              <h2 className={styles.footerMenuLink}>Terms and Conditions</h2>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
