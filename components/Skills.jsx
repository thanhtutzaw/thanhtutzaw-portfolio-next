import styles from "../styles/Home.module.css";

export function Skills() {
  return (
    <div className={`${styles.card} ${styles.card4}`}>
      <div className={[styles.d4_face, styles.d4_front].join(" ")}>
        React.js
      </div>
      <div className={[styles.d4_face, styles.d4_back].join(" ")}>Next.js</div>
      <div className={[styles.d4_face, styles.d4_right].join(" ")}>SCSS</div>
      <div className={[styles.d4_face, styles.d4_left].join(" ")}>
        TypeScript
      </div>
      <div className={[styles.d4_face, styles.d4_top].join(" ")}>Firebase</div>
      <div className={[styles.d4_face, styles.d4_bottom].join(" ")}>Nest</div>
    </div>
  );
}
