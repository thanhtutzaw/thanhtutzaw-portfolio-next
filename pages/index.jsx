import Head from "next/head";
import { About } from "../components/About";
import { Myworks } from "../components/Myworks";
import { Picture } from "../components/Picture";
import { Skills } from "../components/Skills";
import image from "../public/thanhtutzaw.png";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <Head>
        <title>Than Htut Zaw - React DEV</title>
        <link rel="canonical" href="https://thz.vercel.app" />
        {/* <meta
          name="google-site-verification"
          content="qc6hIVo2Smmqv8yS1lTr3fCqAEcAvnAve9MwVzmp0nc"
        /> */}
        {/* <meta
          name="description"
          content="Web Dev , React , Next.js , thanhtutzaw , thz"
        /> */}
        <meta
          name="description"
          content="Frontend Web Developer Portfolio. React.js and Next.js Developer based
in Yangon, Myanmar. Tech stacks are React.js, Next.js, Typescript and Firebase "
        />
        <meta property="og:image" content="thanhtutzaw.png" />
        <meta property="og:site_name" content="GitHub" />
        <meta property="og:type" content="portfolio" />
        <meta property="og:url" content="https://github.com/thanhtutzaw" />
        <meta property="profile:username" content="thanhtutzaw" />
        <meta
          name="keywords"
          content="thanhtutzaw - Frontend Web Developer , Next.js , thanhtutzaw , React , thz , Yangon , Myanmar , METRO , Japan"
        />

        <meta name="title" content="Than Htut Zaw - React DEV" />
        <meta
          name="description"
          content="Frontend Web Developer Portfolio. React.js and Next.js Developer based in Yangon, Myanmar. Tech stack include React, Typescript, Cloud Firestore, Firebase and Next.js"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thz.vercel.app/" />
        <meta property="og:title" content="Than Htut Zaw - React DEV" />
        <meta
          property="og:description"
          content="Frontend Web Developer Portfolio. React.js and Next.js Developer based in Yangon, Myanmar. Tech stack include React, Typescript, Cloud Firestore, Firebase and Next.js"
        />
        <meta property="og:image" content="thanhtutzaw.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thz.vercel.app/" />
        <meta property="twitter:title" content="Than Htut Zaw - React DEV" />
        <meta
          property="twitter:description"
          content="Frontend Web Developer Portfolio. React.js and Next.js Developer based in Yangon, Myanmar. Tech stack include React, Typescript, Cloud Firestore, Firebase and Next.js"
        />
        <meta property="twitter:image" content="thanhtutzaw.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          <Picture mounted={mounted} setMounted={setMounted} image={image} />
          <About />
          <Myworks />
          <Skills mounted={mounted} />
        </div>
      </main>
    </>
  );
}
