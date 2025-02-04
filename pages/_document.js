import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="author" content="Ibrahim Space Studio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="keywords" content="Cocoa Powder, Indonesian Cocoa, Cocoa Export" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="920" />
          <meta property="og:image:height" content="470" />
          <meta property="og:site_name" content="Persatu.one - Komoditas Indonesia" />
          <meta name="google-adsense-account" content="ca-pub-9744736888740959" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ANALYTICS}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.G_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
