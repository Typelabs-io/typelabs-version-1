import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Typelabs</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon.ico" />
      </Head>
      <Navbar />
      <hr className="w-full border-2 border-Leal" />
      <section>
        <Hero />
      </section>
      <Footer />
    </>
  );
}
