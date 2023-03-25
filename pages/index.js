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
        <meta name="description" content="Page description." />
        <meta
          property="og:title"
          content="High-Quality Documentation for Software Products - Typelabs"
        />
        <meta
          property="og:description"
          content="Our agency specializes in creating high-quality user manuals, online help systems, and articles for software products.Get competitive pricing without compromising on quality."
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="High-Quality Documentation for Software Products - Typelabs"
        />
        <meta
          name="twitter:description"
          content="High-Quality Documentation for Software Products"
        />
        <meta name="twitter:image" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Section />
      <Footer />
    </>
  );
}
