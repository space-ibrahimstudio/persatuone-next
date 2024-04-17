import React, { useState, useEffect } from "react";
import { stripHtmlTags } from "@/utils/handler";
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

export default function NewsPage() {
  const router = useRouter();
  const [newsList, setNewsList] = useState([]);

  const navigateDetail = (id) => {
    router.push(`/news/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlogList();
        if (data && data.data && data.data.length > 0) {
          setNewsList(data.data);
        } else {
          setNewsList([]);
        }
      } catch (error) {
        console.error("Error fetching blog list data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <WhatsAppButton />
      <div id="persatu.one-news" className={styles.home}>
        <Navbar componentId="news-nav" />
        <header className={styles.hero}>
          <div className={styles.heroHeading}>
            <h2 className={styles.herSubtitle}>Persatu.one</h2>
            <h1 className={styles.heroTitle}>News & Articles</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "100%",
                maxWidth: "var(--pixel-450)",
                gap: "var(--pixel-5)",
              }}
            >
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
            {newsList.map((news, index) => (
              <NewsCard
                key={index}
                imageUrl={news.thumbnail}
                cardTitle={news.title}
                cardDesc={stripHtmlTags(news.content)}
                cardDate={news.blogcreate}
                cardComments="0"
                onClick={() => navigateDetail(news.idblog)}
              />
            ))}
          </div>
        </section>
        <Footer componentId="news-footer" />
      </div>
    </React.Fragment>
  );
}

NewsPage.getInitialProps = async () => {
  return {
    title: "News and Articles - Persatu.one - Komoditas Indonesia",
    description:
      "We are one of the leading COCOA POWDER manufacturer, SUPPLIER, and exporter from INDONESIA. We provide you the best quality of cocoa for your business!",
    pagePath: "/news",
  };
};
