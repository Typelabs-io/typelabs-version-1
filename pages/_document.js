import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-fixed bg-center bg-cover bg-[url('/background.png')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
