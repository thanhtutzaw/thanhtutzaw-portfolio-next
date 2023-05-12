import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export function Myworks() {
  const works = [
    {
      title: "Todo",
      demo: "https://todolistzee3.netlify.app",
      logo: "https://todolistzee3.netlify.app/assets/logo.svg",
      github: "https://github.com/thanhtutzaw/todolist3",
    },
    {
      title: "Too",
      demo: "https://too.netlify.app",
      logo: "https://too.netlify.app/logo.svg",
      github: "https://github.com/thanhtutzaw/too",
    },
    {
      title: "GoogleFile UI",
      demo: "https://google-file.vercel.app",
      logo: "https://google-file.vercel.app/favicon.ico",
      github: "https://github.com/thanhtutzaw/google-file",
    },
    {
      title: "Draggable Drawer",
      demo: "https://utube-next.vercel.app",
      logo: "https://utube-next.vercel.app/favicon.ico",
      github: "https://github.com/thanhtutzaw/u-tube",
    },
  ];
  return (
    <div className={`${styles.card} ${styles.myworks}`}>
      <h2>My Works</h2>
      <ul>
        {works.map((w, index) => (
          // <li key={index}>
          <Link href={w.demo} key={index}>
            {/* <a rel="noopener noreferrer" target="_blank"> */}
            <li>
              <div>
                <Image
                  width={30}
                  height={30}
                  alt="w.title"
                  title={w.title}
                  src={w.logo ? w.logo : ""}
                />
              </div>
              <a rel="noopener noreferrer" target="_blank">
                <p>{w.title}</p>
              </a>
            </li>
            {/* </a> */}
            {/* <Link href={w.github}>
              <a rel="noopener noreferrer" target="_blank">
                <Image
                  width={30}
                  height={30}
                  alt="github"
                  title={`Source Code`}
                  src="/github-mark-white.png"
                />
              </a>
            </Link> */}
          </Link>
        ))}
      </ul>
    </div>
  );
}
