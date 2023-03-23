import styles from "../styles/Home.module.css";

export function About({}) {
  // const year = new Date().getFullYear()
  return (
    <div className={`${styles.card} ${styles.about}`}>
      <p>
        <span style={{fontSize:'25px', fontFamily: "serif" }}>I</span> am a Professional Web
        Developer who specializes in Frontend Development with React.js
      </p>
      <div className={styles.footer}>
        <p>Name - Than Htut Zaw</p>
        <p>DOB - {2001}</p>
        <p>zgyi5025@gmail.com</p>
      </div>
    </div>
  );
}