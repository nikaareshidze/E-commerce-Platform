import Header from "@/components/header/Header";
import MainContent from "@/components/landing/MainContent";
import Head from "next/head";

export default function Home() {
  return typeof window ? (
    <>
      <Head>
        <title>Oneplus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <MainContent />
      </main>
    </>
  ) : null;
}
