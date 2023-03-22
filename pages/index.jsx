import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import image from "../public/thanhtutzaw.png";
import Link from "next/link";
import { useState } from "react";

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
        {/* <iframe
          width="100%"
          height="600px"
          src="Resume-Than-Htut-Zaw.pdf"
           type="application/pdf"
        ></iframe> */}
        <ul className={styles.cardsContainer}>
          <li className={[styles.card, styles.card1].join(" ")}>
            <span
              onAnimationEnd={() => {
                setMounted(true);
              }}
              className={styles.rotater}
            ></span>
            <Image
              priority
              className={styles.profilePicture}
              width={256}
              height={256}
              layout="fixed"
              src={image}
              alt="my face"
            />
            <div className={mounted ? styles.resumeLink : styles.disabled}>
              {/* <a href="./resume">View Resume</a> */}
              <Link
                href={
                  "https://docs.google.com/document/d/1YTJpGv03D44GieELhkUlbbzpIIBYY6MSR25vvy51IzQ/edit?usp=sharing"
                }
              >
                View Resume
              </Link>
            </div>
          </li>
          <li className={[styles.card, styles.card2].join(" ")}>2</li>
          <li className={[styles.card, styles.card3].join(" ")}>3</li>
          <li className={[styles.card, styles.card4].join(" ")}>
            <div className={[styles.d4_face, styles.d4_front].join(" ")}>
              React.js
            </div>
            <div className={[styles.d4_face, styles.d4_back].join(" ")}>
              Next.js
            </div>
            <div className={[styles.d4_face, styles.d4_right].join(" ")}>
              SCSS
            </div>
            <div className={[styles.d4_face, styles.d4_left].join(" ")}>
              TypeScript
            </div>
            <div className={[styles.d4_face, styles.d4_top].join(" ")}>
              Firebase
            </div>
            <div className={[styles.d4_face, styles.d4_bottom].join(" ")}>
              Nest
            </div>
            {/* <li className={[ styles.card4].join(" ")}>d</li> */}
            {/* <li className={[ styles.card5].join(" ")}>ccc</li> */}
          </li>
        </ul>
      </main>
    </>
  );
}
