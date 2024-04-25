import React, { Suspense, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { stripMetaContent } from "@/utils/handler";
import * as ga from "@/utils/ga";
import PageLayout from "@/components/layouts";
import "@/styles/globals.css";

const baseUrl = process.env.appDomain;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const pageUrl = `${baseUrl}${pageProps?.pagepath}`;
  const strippedContent = pageProps?.description
    ? stripMetaContent(pageProps.description).substring(0, 160)
    : "";

  const thumbnail = pageProps?.thumbnail
    ? pageProps.thumbnail
    : `${baseUrl}/img/img-12.webp`;

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
    <PageLayout pageid={pageProps?.idpage || "persatu.one-official-website"}>
      <Suspense>
        <Head>
          <meta property="og:url" content={pageUrl} />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:title" content={pageProps?.title} />
          <meta property="og:description" content={strippedContent} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Suspense>
    </PageLayout>
  );
}
