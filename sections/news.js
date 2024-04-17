"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { stripHtmlTags } from "@/utils/handler";
import { fetchBlogList } from "@/utils/data";
import { Button } from "@ibrahimstudio/button";
import { NewsCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function News({ sectionId }) {
  const router = useRouter();
  const [newsList, setNewsList] = useState([]);

  const navigateDetail = (blogid) => {
    router.push(`/news/${blogid}`);
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
    <section
      id={sectionId}
      section-view-id={sectionId}
      className={styles.certifications}
    >
      <div className={styles.articlesHeading}>
        <h1 className={styles.factoryTitle}>News & Articles</h1>
      </div>
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
      <Button
        id="view-all-news"
        buttonText="View All News"
        radius="md"
        onClick={() => router.push("/news")}
      />
    </section>
  );
}

News.propTypes = {
  sectionId: PropTypes.string,
};
