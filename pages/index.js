import Navbar from "@/components/Nav";

import Head from "next/head";

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
    </>
  );
}
