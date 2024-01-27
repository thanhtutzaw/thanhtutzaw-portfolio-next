import Head from "next/head";
import { About } from "../components/About";
import { Myworks } from "../components/Myworks";
import { Picture } from "../components/Picture";
import { Skills } from "../components/Skills";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import thanhtutzawImage from "../public/thanhtutzaw.png";
const title = "Than Htut Zaw - React DEV";
const description =
  "Frontend Developer based in Yangon, Myanmar, with a profound passion for software development. Specializing in crafting dynamic web applications that seamlessly blend creativity and functionality.";
const url = "https://thz.vercel.app";
// const image = "/thanhtutzaw.png";
const image = "https://thz.vercel.app/thanhtutzaw.png";
export default function Home() {
  const [mounted, setMounted] = useState(false);
  return (
    <>
      <Head>
        <title>Than Htut Zaw - React DEV</title>
        <link rel="canonical" href="https://thz.vercel.app/" />
        <meta itemProp="image" content={image} />
        <meta name="description" content={description} />
        <meta property="profile:username" content="thanhtutzaw" />
        <meta
          name="keywords"
          content="thanhtutzaw-Frontend Web Developer , Next.js , thanhtutzaw , React , thz , Yangon , Myanmar , METRO , Japan , IT , Facebook , Facebook clone , Facebook zee , Javascript , Typescript , Linkedin , github"
        />
        <meta name="theme-color" content="#FFF" />
        <meta name="title" content={title} />
        <meta name="image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="thanhtutzaw" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:url" content={url} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <main>
        <Link
          tabIndex={-1}
          style={{
            opacity: "0",
            position: "fixed",
            userSelect: "none",
            top: "0",
            display: "none",
          }}
          href={"/"}
        >
          Test Link
        </Link>
        <Link
          tabIndex={-1}
          style={{
            opacity: "0",
            position: "fixed",
            userSelect: "none",
            top: "0",
            display: "none",
          }}
          href={"https://facebook-ui-zee.vercel.app"}
        >
          Facebook Clone
        </Link>
        <div data-mounted={mounted} className={styles.cardsContainer}>
          <Picture
            mounted={mounted}
            setMounted={setMounted}
            image={thanhtutzawImage}
          />
          <About />
          <Myworks />
          <Skills mounted={mounted} />
        </div>
      </main>
    </>
  );
}
