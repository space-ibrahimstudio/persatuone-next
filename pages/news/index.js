import React from "react";
import { useRouter } from "next/navigation";
import { fetchBlogList } from "@/utils/data";
import { NewsCard } from "@/components/cards";
import { FeatureCount } from "@/components/cards";
import { Button } from "@ibrahimstudio/button";
import { Input } from "@ibrahimstudio/input";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import styles from "@/styles/Home.module.css";

export default function NewsPage({ bloglist }) {
  const router = useRouter();
  const navigateDetail = (blog) => {
    router.push(`/news/${blog}`);
  };

  return (
    <React.Fragment>
      <WhatsAppButton />
      <div id="persatu.one-news" className={styles.home}>
        <Navbar componentId="news-nav" />
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
            {bloglist.map((news, index) => (
              <NewsCard
                key={index}
                imageUrl={news.thumbnail}
                cardTitle={news.title}
                cardDesc={news.content}
                cardDate={news.blogcreate}
                cardComments="0"
                onClick={() => navigateDetail(news.slug)}
              />
            ))}
          </div>
        </section>
        <Footer componentId="news-footer" />
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
          title: "News and Articles | Persatu.one - Komoditas Indonesia",
          description:
            "We are one of the leading COCOA POWDER manufacturer, SUPPLIER, and exporter from INDONESIA. We provide you the best quality of cocoa for your business!",
          pagepath: "/news",
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
