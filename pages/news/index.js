import React, { Fragment, useState, useEffect } from "react";
import SEO from "@/utils/seo";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NewsCard } from "@/components/cards";
import { FeatureCount } from "@/components/cards";
import { Button } from "@ibrahimstudio/button";
import { Input } from "@ibrahimstudio/input";
import styles from "@/styles/Home.module.css";

export default function NewsPage({ pagedata }) {
  const router = useRouter();
  const [blogpost, setBlogpost] = useState([]);

  const navigateDetail = (blog) => {
    router.push(`/news/${blog}`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "api/ankabut?scope=main&endpoint=viewblog"
        );
        setBlogpost(response.data.data);
      } catch (error) {
        console.error("Error occurred during fetch posts data:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Fragment>
      <SEO title={pagedata.title} description={pagedata.description} />
      <header className={styles.hero}>
        <div className={styles.heroHeading}>
          <h2 className={styles.herSubtitle}>Persatu.one</h2>
          <h1 className={styles.heroTitle}>News & Articles</h1>
          <div className={styles.searchBar}>
            <Input
              id="search-news"
              type="text"
              isLabeled={false}
              placeholder="Search News ..."
              name=""
              value=""
              onChange=""
            />
            <Button
              id="submit-search"
              buttonText="Search"
              radius="md"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className={styles.feature}>
          <FeatureCount
            finalCount={50}
            units="+"
            description="Overseas Partners"
          />
          <FeatureCount
            finalCount={10}
            units="+"
            description="Export Destination Countries"
          />
          <FeatureCount
            finalCount={99}
            units="%"
            description="Customer Satisfaction"
          />
        </div>
      </header>
      <section className={styles.certifications}>
        <div className={styles.newsBody}>
          {blogpost.map((post, index) => (
            <NewsCard
              key={index}
              imageUrl={post.thumbnail}
              cardTitle={post.title}
              cardDesc={post.content}
              cardDate={post.blogcreate}
              cardComments="0"
              onClick={() => navigateDetail(post.slug)}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const documentdata = {
    id: "persatu.one-news",
    title: "News and Articles | Persatu.one - Komoditas Indonesia",
    description:
      "We are one of the leading COCOA POWDER manufacturer, SUPPLIER, and exporter from INDONESIA. We provide you the best quality of cocoa for your business!",
  };

  return {
    props: {
      idpage: documentdata.id,
      title: documentdata.title,
      description: documentdata.description,
      pagepath: "/news",
      pagedata: documentdata,
    },
  };
}
