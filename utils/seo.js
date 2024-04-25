import React from "react";
import Head from "next/head";
import { stripMetaContent } from "./handler";

export default function SEO({ title, description }) {
  const strippedContent = description
    ? stripMetaContent(description).substring(0, 160)
    : "";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={strippedContent} />
    </Head>
  );
}
