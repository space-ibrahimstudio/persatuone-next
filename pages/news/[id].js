import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { NewsCard } from "@/components/cards";
import { stripHtmlTags } from "@/utils/handler";
import { fetchBlogDetail, fetchBlogList } from "@/utils/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import styles from "@/styles/Home.module.css";

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState("");
  const [newsList, setNewsList] = useState([]);

  const navigateDetail = (id) => {
    router.push(`/news/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlogDetail(id);
        setBlog(data[0]);
      } catch (error) {
        console.error("Error fetching blog list data:", error);
      }
    };

    fetchData();
  }, [id]);

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
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={stripHtmlTags(blog.content)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="persatu.one-news" className={styles.home}>
        <Navbar componentId="news-detail-nav" />
        <img
          className={styles.blogBanner}
          loading="lazy"
          src={blog.thumbnail}
        />
        <div className={styles.about}>
          <div className={styles.aboutHeading}>
            <h1 className={styles.aboutTitle}>{blog.title}</h1>
            <h2 className={styles.aboutSubtitle}>{blog.blogcreate}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className={styles.aboutDesc}
            />
          </div>
        </div>
        <section className={styles.certifications}>
          <div className={styles.articlesHeading}>
            <h1 className={styles.factoryTitle}>Suggested Posts</h1>
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
        </section>
        <Footer componentId="detail-news-footer" />
      </div>
    </React.Fragment>
  );
}
