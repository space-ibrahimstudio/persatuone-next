"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@ibrahimstudio/button";
import { NewsCard } from "@/components/cards";
import styles from "@/styles/Home.module.css";

export function News({ sectionId }) {
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
    <section
      id={sectionId}
      section-view-id={sectionId}
      className={styles.certifications}
    >
      <div className={styles.articlesHeading}>
        <h1 className={styles.factoryTitle}>News & Articles</h1>
      </div>
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
      <Button
        id="view-all-news"
        buttonText="View All News"
        radius="md"
        onClick={() => router.push("/news")}
      />
    </section>
  );
}
