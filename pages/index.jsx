import Head from "next/head";
import styles from "../styles/Home.module.css";
import image from "../public/thanhtutzaw.png";
import { useState } from "react";
import { Myworks } from "../components/Myworks";
import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Picture } from "../components/Picture";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  return (
    <>
      <Head>
        <title>ThanHtutZaw - React DEV</title>
        <meta
          name="google-site-verification"
          content="qc6hIVo2Smmqv8yS1lTr3fCqAEcAvnAve9MwVzmp0nc"
        />
        <meta
          name="description"
          content="Web Dev , React , Next.js , thanhtutzaw , thz"
        />
        <meta
          name="keywords"
          content="thanhtutzaw - Frontend Web Developer , Next.js , thanhtutzaw , React , thz"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          <Picture setMounted={setMounted} image={image} mounted={mounted} />
          <About />
          <Myworks />
          <Skills />
        </div>
      </main>
    </>
  );
}
