import styles from "../styles/Home.module.css";

export function Skills({ mounted }) {
  return (
    <div className={`${styles.card} ${styles.skill}`}>
      <div
        className={`${styles.d4_face} ${styles.d4_front} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        React.js
      </div>
      <div
        className={`${styles.d4_face} ${styles.d4_back} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        Next.js
      </div>
      <div
        className={`${styles.d4_face} ${styles.d4_right} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        SASS
      </div>
      <div
        className={`${styles.d4_face} ${styles.d4_left} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        TypeScript
      </div>
      <div
        className={`${styles.d4_face} ${styles.d4_top} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        Firebase
      </div>
      <div
        className={`${styles.d4_face} ${styles.d4_bottom} ${
          mounted ? styles.cardPadding : ""
        }`}
      >
        Nest
      </div>
    </div>
  );
}
