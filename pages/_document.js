import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <meta property="og:locale" content="en_US" />
          <meta name="author" content="Ibrahim Space Studio" />
          <meta property="og:image:width" content="920" />
          <meta property="og:image:height" content="470" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="og:site_name"
            content="Persatu.one - Komoditas Indonesia"
          />
          <meta
            name="keywords"
            content="Cocoa Powder, Indonesian Cocoa, Cocoa Export"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
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
