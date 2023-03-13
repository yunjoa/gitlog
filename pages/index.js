import Head from "next/head";
import Layout from "@/components/layout";
import Gallery from "./gallery";
import Record from "../data.json";

export default function Home() {
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
