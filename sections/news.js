import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@ibrahimstudio/button";
import { NewsCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function News({ sectionId, bloglist }) {
  const router = useRouter();
  const navigateDetail = (blog) => {
    router.push(`/news/${blog}`);
  };

  return (
    <section
      id={sectionId}
      section-view-id={sectionId}
      className={styles.certifications}
    >
      <div className={styles.articlesHeading}>
        <h1 className={styles.factoryTitle}>News & Articles</h1>
      </div>
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
      <Button
        id="view-all-news"
        buttonText="View All News"
        radius="md"
        onClick={() => router.push("/news")}
      />
    </section>
  );
}
