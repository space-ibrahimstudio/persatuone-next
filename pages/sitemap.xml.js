import { fetchBlogList } from "@/utils/data";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const response = await fetchBlogList();
  const posts = response.data;

  if (!posts) {
    res.setHeader("Content-Type", "text/xml");
    res.write(`<?xml version="1.0" encoding="UTF-8"?>`);
    res.end();
    return { props: {} };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>`;
  sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  sitemapXml += `<url><loc>${baseUrl}</loc><changefreq>daily</changefreq><priority>1</priority><lastmod>${new Date().toISOString()}</lastmod></url>`;
  sitemapXml += `<url><loc>${baseUrl}/news</loc><changefreq>weekly</changefreq><priority>0.8</priority><lastmod>${new Date().toISOString()}</lastmod></url>`;

  posts.forEach((post) => {
    const isoDate = new Date(post.blogcreate).toISOString();
    sitemapXml += `<url><loc>${baseUrl}/news/${post.slug}</loc><lastmod>${isoDate}</lastmod></url>`;
  });

  sitemapXml += `</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapXml);
  res.end();

  return { props: {} };
};

export default Sitemap;
