import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export function Picture({ mounted, setMounted, image }) {
  return (
    <div className={`${styles.picture}`}>
      <Image
        style={{ zIndex: "1" }}
        priority
        className={styles.profilePicture}
        width={256}
        height={256}
        layout="fixed"
        src={image}
        alt="my face"
      />
      <span
        onAnimationEnd={() => {
          if (!mounted) {
            setMounted(true);
          }
        }}
        className={styles.rotater}
      ></span>
      <div
        style={{ zIndex: "2" }}
        className={mounted ? styles.resumeLink : styles.disabled}
      >
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
