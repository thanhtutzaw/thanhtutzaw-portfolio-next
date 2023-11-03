import Image from "next/image";
import styles from "../styles/Home.module.css";

export function Skills({ mounted }) {
  return (
    <div className={`${styles.skill}`}>
      <div
        className={`${styles.d4_front} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        <Image
          width={40}
          height={40}
          alt="React.js"
          src="/assets/react.svg"
        ></Image>
        React.js
      </div>
      <div
        className={`${styles.d4_back} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        <Image
          width={40}
          height={40}
          alt="React.js"
          src="/assets/nextjs.svg"
        ></Image>
        Next.js
      </div>
      <div
        className={`${styles.d4_right} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        <Image width={40} height={40} alt="SASS" src="/assets/sass.svg"></Image>
        SASS
      </div>
      <div
        className={`${styles.d4_left} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        <Image
          width={40}
          height={40}
          alt="TypeScript"
          src="/assets/typescript.svg"
        ></Image>
        TypeScript
      </div>
      <div
        className={`${styles.d4_top} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        <Image
          width={40}
          height={40}
          alt="Firebase"
          src="/assets/firebase.svg"
        ></Image>
        Firebase
      </div>
      <div
        className={`${styles.d4_bottom} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        Nest
      </div>
    </div>
  );
}
