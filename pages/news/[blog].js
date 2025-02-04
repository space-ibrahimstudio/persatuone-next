import React, { Fragment } from "react";
import axios from "axios";
import SEO from "@/utils/seo";
import { useRouter } from "next/router";
import { NewsCard } from "@/components/cards";
import { formatDate, toTitleCase } from "@ibrahimstudio/function";
import { getPostLists, getPostDetail } from "@/utils/getpost";
import styles from "@/styles/Home.module.css";

export default function NewsDetail({ pagedata, postdata, postlist }) {
  const router = useRouter();
  const navigateDetail = (blog) => router.push(`/news/${blog}`);

  return (
    <Fragment>
      <SEO title={pagedata.title} description={pagedata.description} />
      <img className={styles.blogBanner} loading="lazy" src={postdata.thumbnail} alt={pagedata.title} />
      <div className={styles.about}>
        <div className={styles.aboutHeading}>
          <h1 className={styles.aboutTitle}>{toTitleCase(postdata.title)}</h1>
          <h2 className={styles.aboutSubtitle}>Posted at {formatDate(postdata.blogcreate, "en-gb")}</h2>
          <div dangerouslySetInnerHTML={{ __html: postdata.content }} className={styles.aboutDesc} />
        </div>
      </div>
      <section className={styles.certifications}>
        <div className={styles.articlesHeading}>
          <h1 className={styles.factoryTitle}>Suggested Posts</h1>
        </div>
        <div className={styles.newsBody}>
          {postlist.map((post, index) => (
            <NewsCard key={index} imageUrl={post.thumbnail} cardTitle={post.title} cardDesc={post.content} cardDate={post.blogcreate} cardComments="0" onClick={() => navigateDetail(post.slug)} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const url = `${process.env.API_DOMAIN}/main/viewblog`;
  const data = await axios.get(url, { headers: { "Content-Type": "multipart/form-data" } });
  const response = data.data;
  const postslugs = response.data.map((post) => ({ params: { blog: post.slug } }));
  return { paths: postslugs, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { blog } = params;
  try {
    const postlist = await getPostLists();
    const blogid = postlist.find((post) => post.slug === blog).idblog;
    if (!blogid) return { props: {} };
    try {
      const postdetail = await getPostDetail(blogid);
      const documentdata = { id: `persatu.one-post-${blogid}`, title: `${toTitleCase(postdetail.title)} | Persatu.one - Komoditas Indonesia`, description: postdetail.content };
      return { props: { idpage: documentdata.id, title: documentdata.title, description: documentdata.description, pagepath: `/news/${postdetail.slug}`, thumbnail: postdetail.thumbnail, pagedata: documentdata, postdata: postdetail, postlist: postlist } };
    } catch (error) {
      console.error("Error fetching blog detail data:", error);
      return { props: {} };
    }
  } catch (error) {
    console.error("Error fetching blog list data:", error);
  }
}
