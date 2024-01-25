import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";

export function About({}) {
  const [copied, setcopied] = useState(false);
  const gmailModalRef = useRef(null);
  function closeModal(e) {
    if (e.target === gmailModalRef.current) {
      gmailModalRef.current.close();
      setcopied(false);
    }
  }
  return (
    <div className={`${styles.about}`}>
      <div className={styles.container}>
        <p className={styles.info}>
          Let&apos;s connect on{" "}
          <Link href="mailto:zgi5025@gmail.com" target="_blank">
            Gmail
          </Link>{" "}
          ,{" "}
          <Link target="_blank" href="https://github.com/thanhtutzaw">
            GitHub
          </Link>{" "}
          ,{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/than-htut-zaw-373954213/"
          >
            Linkedin
          </Link>{" "}
          or{" "}
          <Link target="_blank" href="https://t.me/ThanHtutZaw">
            Telegram
          </Link>{" "}
          to chat more about your project needs!
          {/* <span style={{ fontSize: "25px", fontFamily: "serif" }}>I</span> am a */}
          {/* Let's connect on Gmail, Github, LinkedIn, or Telegram to chat more about
          your project needs!  */}
          {/* If you're interested in learning more about my work or would like to
          connect with me, please feel free to reach out via Gmail, Github,
          LinkedIn, or Telegram. I look forward to the opportunity to collaborate
          with you! */}
        </p>
        <div className={styles.footer}>
          <p>
            Hey there, I&apos;m Than Htut Zaw – a React.js specialist with a
            focus on frontend development
            <br />
            {/* Diploma in Web Engineering from METRO and am skilled in building
            high-quality web applications. */}
            <br />I hold a Diploma in Web Engineering from METRO and excel at
            crafting top-notch web applications.
          </p>
          {/* <p>I am currently working as a Frontend Developer at [Company Name].</p> */}
          <p>Currently working at Personal Projects.</p>
          {/* <p>Currently a Frontend Developer at [Company Name].</p> */}
        </div>
        <dialog onClick={closeModal} id="gmailModal" ref={gmailModalRef}>
          {gmailModalRef.current?.hasAttribute("open") && (
            <>
              {copied && <div style={{ color: "green" }}>✔️ Copied</div>}
              <p>zgyi5025@gmail.com</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("zgyi5025@gmail.com");
                  setcopied(true);
                }}
              >
                Copy
              </button>
            </>
          )}
        </dialog>
      </div>
    </div>
  );
}
