import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/router";
import { stripMetaContent } from "@/utils/handler";
import * as ga from "@/lib/ga";
import "@/styles/globals.css";
import Head from "next/head";

const baseUrl = "https://persatu.one";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { title, description, pagePath } = pageProps;
  const pageUrl = `${baseUrl}${pagePath}`;
  const strippedContent = description
    ? stripMetaContent(description).substring(0, 160)
    : "";

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Suspense>
      <Head>
        <title>{title}</title>
        <meta name="description" content={strippedContent} />
        <meta property="og:url" content={pageUrl} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={strippedContent} />
        <meta property="og:image" content={`${baseUrl}/img/img-12.webp`} />
      </Head>
      <Component {...pageProps} />
    </Suspense>
  );
}
