import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export function Picture({ image }) {
  const [mounted, setMounted] = useState(false);
  return (
    <div className={`${styles.card} ${styles.card1}`}>
      <span
        onAnimationEnd={() => {
          if (!mounted) {
            setMounted(true);
          }
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
        <Link
          href={
            "https://docs.google.com/document/d/1YTJpGv03D44GieELhkUlbbzpIIBYY6MSR25vvy51IzQ/edit?usp=sharing"
          }
        >
          <a rel="noopener noreferrer" target="_blank">
            View Resume
          </a>
        </Link>
      </div>
    </div>
  );
}
