import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-fixed bg-center bg-cover bg-[url('/background.svg')]">
        <Main />
        <NextScript />
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          <Image
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerpolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </Html>
  );
}
