import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NewsCard } from "@/components/cards";
import { stripHtmlTags } from "@/utils/handler";
import {
  fetchBlogDetail,
  fetchBlogList,
  fetchBlogMetadata,
} from "@/utils/data";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import styles from "@/styles/Home.module.css";

export default function NewsDetail({ title, description }) {
  const router = useRouter();
  const { blogid } = router.query;
  const [blog, setBlog] = useState([]);
  const [newsList, setNewsList] = useState([]);

  const navigateDetail = (blogid) => {
    router.push(`/news/${blogid}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlogDetail(blogid);
        if (data && data.data && data.data.length > 0) {
          const blog = data.data.find((blog) => blog.idblog === blogid);
          setBlog(blog);
        } else {
          setBlog([]);
        }
      } catch (error) {
        console.error("Error fetching blog list data:", error);
      }
    };

    fetchData();
  }, [blogid]);

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
        <Navbar componentId="news-detail-nav" />
        <img
          className={styles.blogBanner}
          loading="lazy"
          src={blog.thumbnail}
        />
        <div className={styles.about}>
          <div className={styles.aboutHeading}>
            <h1 className={styles.aboutTitle}>{title}</h1>
            <h2 className={styles.aboutSubtitle}>{blog.blogcreate}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
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

NewsDetail.getInitialProps = async (ctx) => {
  try {
    const { blogid } = ctx.query;
    const data = await fetchBlogMetadata(blogid);
    const { title, content } = data;

    const description = content;
    const pagePath = `/${blogid}`;

    return { title, description, pagePath };
  } catch (error) {
    console.error("Error fetching blog detail data:", error);
    return { title: "", description: "", pagePath: "" };
  }
};
