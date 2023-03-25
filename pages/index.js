import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          High-Quality Documentation for Software Products - Typelabs
        </title>
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

        <meta property="og:url" content="https://typelabs.io" />
        <meta property="twitter:site" content="@TypelabsHQ" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Section />
      <Footer />
    </>
  );
}
