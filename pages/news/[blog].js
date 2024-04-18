import React from "react";
import { useRouter } from "next/router";
import { NewsCard } from "@/components/cards";
import { formatDate, toTitleCase } from "@ibrahimstudio/function";
import { fetchBlogDetail, fetchBlogList } from "@/utils/data";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import styles from "@/styles/Home.module.css";

export default function NewsDetail({ blogdetail, bloglist }) {
  const router = useRouter();
  const navigateDetail = (blog) => {
    router.push(`/news/${blog}`);
  };

  return (
    <React.Fragment>
      <WhatsAppButton />
      <div id="persatu.one-news" className={styles.home}>
        <Navbar componentId="news-detail-nav" />
        <img
          className={styles.blogBanner}
          loading="lazy"
          src={blogdetail.thumbnail}
          alt={blogdetail.title}
        />
        <div className={styles.about}>
          <div className={styles.aboutHeading}>
            <h1 className={styles.aboutTitle}>
              {toTitleCase(blogdetail.title)}
            </h1>
            <h2 className={styles.aboutSubtitle}>
              Posted at {formatDate(blogdetail.blogcreate, "en-gb")}
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
        <Footer componentId="detail-news-footer" />
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const { blog } = context.query;

  try {
    const data = await fetchBlogList();
    if (data && data.data && data.data.length > 0) {
      const blogid = data.data.find((post) => post.slug === blog).idblog;

      if (blogid) {
        const detaildata = await fetchBlogDetail(blogid);

        return {
          props: {
            bloglist: data.data,
            blogdetail: detaildata,
            title: `${toTitleCase(
              detaildata.title
            )} | Persatu.one - Komoditas Indonesia`,
            description: detaildata.content,
            pagepath: `/news/${detaildata.slug}`,
            thumbnail: detaildata.thumbnail,
          },
        };
      }
    }
  } catch (error) {
    console.error("Error fetching blog detail data:", error);
  }

  return {
    props: {
      bloglist: [],
      blogdetail: [],
      title: "",
      description: "",
      pagepath: "",
      thumbnail: "",
    },
  };
}
