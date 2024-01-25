import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export function Picture({ mounted, setMounted, image }) {
  return (
    <div className={`${styles.picture}`}>
      <Image
        priority
        placeholder="blur"
        style={{ zIndex: "1" }}
        className={styles.profilePicture}
        width={256}
        height={256}
        // fill
        src={image}
        alt="thanhtutzaw's photo"
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
          View Resume
        </Link>
      </div>
    </div>
  );
}
