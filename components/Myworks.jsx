import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export function Myworks() {
  const works = [
    {
      title: "Todo - firebase",
      demo: "https://todolistzee3.netlify.app",
      github: "https://github.com/thanhtutzaw/todolist3",
    },
    {
      title: "Too - NoteTakingApp",
      demo: "https://too.netlify.app",
      github: "https://github.com/thanhtutzaw/too",
    },
    {
      title: "GoogleFile UI",
      demo: "https://google-file.vercel.app",
      github: "https://github.com/thanhtutzaw/google-file",
    },
    {
      title: "utube Draggable Drawer",
      demo: "https://utube-next.vercel.app",
      github: "https://github.com/thanhtutzaw/u-tube",
    },
  ];
  return (
    <div className={`${styles.card} ${styles.myworks}`}>
      <h4>My Works</h4>
      <ul>
        {works.map((w, index) => (
          <li key={index}>
            <Link href={w.github}>
              <a rel="noopener noreferrer" target="_blank">
                <Image
                  width={30}
                  height={30}
                  alt="github"
                  title={w.title}
                  src="/github-mark-white.png"
                />
              </a>
            </Link>
            <Link href={w.demo}>
              <a rel="noopener noreferrer" target="_blank">
                <p>{w.title}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
