import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Our agency specializes in creating high-quality user manuals, online help systems, and articles for software products.Get competitive pricing without compromising on quality."
        />
        <meta property="og:title" content="Typelabs" />
        <meta
          property="og:description"
          content="High-Quality Documentation for Software Products "
        />
        <meta
          property="og:image"
          content="https://elmerlar.sirv.com/BA4CE5EA-BC98-4672-9753-B03189D4D345.png"
        />
        <meta name="twitter:card" content="summary"></meta>
        <meta property="og:url" content="https://typelabs.io" />
        <meta property="twitter:site" content="@TypelabsHQ" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-fixed bg-center bg-cover bg-[url('/background.svg')]">
        <Main />
        <NextScript />
        {/* <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript>
          <Image
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerpolicy="no-referrer-when-downgrade"
          />
        </noscript> */}
      </body>
    </Html>
  );
}
