import Navbar from "@/components/Nav";
import SplitScreen from "@/components/SplitScreen";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

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
      <main className="py-2 px-4 md:px-8 lg:px-16">
        <SplitScreen left={LeftSide} right={RightSide} />
      </main>
    </>
  );
}
