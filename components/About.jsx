import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";

export function About({}) {
  // const year = new Date().getFullYear()
  const [copied, setcopied] = useState(false);
  const gmailModalRef = useRef(null);
  function closeModal(e) {
    if (e.target === gmailModalRef.current) {
      gmailModalRef.current.close();
      setcopied(false);
    }
  }
  return (
    <div className={`${styles.card} ${styles.about}`}>
      <p className={styles.info}>
        <span style={{ fontSize: "25px", fontFamily: "serif" }}>I</span> am a
        Professional Web Developer who specializes in Frontend Development with
        React.js
      </p>
      <div className={styles.footer}>
        <p>Name - Than Htut Zaw</p>
        <p>DOB - {2001}</p>
        <p>Education - METRO ( Diploma in Web Enginnering)</p>
        <p>
          Reach me via{" "}
          <a
            onClick={() => {
              gmailModalRef.current.showModal();
            }}
          >
            Gmail
          </a>
          {" , "}
          <Link href="https://github.com/thanhtutzaw">
            <a rel="noopener noreferrer" target="_blank">
              Github
            </a>
          </Link>
          {" , "}
          <Link href="https://www.linkedin.com/in/than-htut-zaw-373954213/">
            <a rel="noopener noreferrer" target="_blank">
              Linkedin
            </a>
          </Link>{" "}
          and{" "}
          <Link href="https://t.me/ThanHtutZaw">
            <a rel="noopener noreferrer" target="_blank">
              Telegram
            </a>
          </Link>
        </p>
      </div>
      <dialog onClick={closeModal} id="gmailModal" ref={gmailModalRef}>
        {copied && <div style={{ color: "green" }}>Copied</div>}
        <p>zgyi5025@gmail.com</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText("zgyi5025@gmail.com");
            setcopied(true);
          }}
        >
          Copy
        </button>
      </dialog>
    </div>
  );
}
