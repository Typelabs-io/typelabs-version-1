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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Section />
      <Footer />
    </>
  );
}
