import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NewsCard } from "@/components/cards";
import { stripHtmlTags } from "@/utils/handler";
import { fetchBlogDetail, fetchBlogList } from "@/utils/data";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import styles from "@/styles/Home.module.css";

export default function NewsDetail({ blogdetail }) {
  const router = useRouter();
  const [newsList, setNewsList] = useState([]);

  const navigateDetail = (blog) => {
    router.push(`/news/${blog}`);
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
        <Navbar componentId="news-detail-nav" />
        <img
          className={styles.blogBanner}
          loading="lazy"
          src={blogdetail.thumbnail}
        />
        <div className={styles.about}>
          <div className={styles.aboutHeading}>
            <h1 className={styles.aboutTitle}>{blogdetail.title}</h1>
            <h2 className={styles.aboutSubtitle}>
              Posted at {blogdetail.blogcreate}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: blogdetail.content }}
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
                onClick={() => navigateDetail(news.slug)}
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
  const { blog } = ctx.query;

  try {
    const blogList = await fetchBlogList();
    if (blogList && blogList.data && blogList.data.length > 0) {
      const blogid = blogList.data.find((blogList) => blogList.slug === blog);
      const data = await fetchBlogDetail(blogid.idblog);

      const blogdetail = data;
      const title = blogdetail.title;
      const description = blogdetail.content;
      const pagePath = `/${blogdetail.slug}`;
      const thumbnail = blogdetail.thumbnail;

      return { blogdetail, title, description, pagePath, thumbnail };
    } else {
      return {
        blogdetail: [],
        title: "",
        description: "",
        pagePath: "",
        thumbnail: "",
      };
    }
  } catch (error) {
    console.error("Error fetching blog detail data:", error);
    return {
      blogdetail: [],
      title: "",
      description: "",
      pagePath: "",
      thumbnail: "",
    };
  }
};
