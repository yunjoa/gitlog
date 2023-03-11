import Head from "next/head";
import Layout from "@/components/layout";
import Gallery from "./gallery";
import Record from "../data.json";
import { useState } from "react";

export default function Home() {
  const [clickedProj, setClickedProj] = useState();

  return (
    <>
      <Layout Record={Record}>
        <Head>
          <title>PORTFOLIO</title>
          <meta name="description" content="Git log for Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <Gallery />
      </Layout>
    </>
  );
}
