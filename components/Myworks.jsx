import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const works = [
  {
    title: "Todo",
    demo: "https://todolistzee3.netlify.app",
    logo: "https://raw.githubusercontent.com/thanhtutzaw/todolist3/ce254d835d5987c1ceb447f2c6ee8750ef1441d3/public/assets/logo.svg",
    github: "https://github.com/thanhtutzaw/todolist3",
  },
  {
    title: "Too",
    demo: "https://too.netlify.app",
    logo: "https://raw.githubusercontent.com/thanhtutzaw/too/47389ae63da321da5eb68a6ec19760781a8486a0/public/logo.svg",
    github: "https://github.com/thanhtutzaw/too",
  },
  {
    title: "facebook",
    demo: "https://facebook-ui-zee.vercel.app",
    logo: "https://facebook-ui-zee.vercel.app/logo.svg",
    github: "https://github.com/thanhtutzaw/facebook-ui",
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
export function Myworks() {
  return (
    <div className={`${styles.myworks}`}>
      {/* <div style={{ backgroundColor: "red" }}> */}
      <h2>My Works</h2>
      <ul>
        {works.map((w, index) => (
          <li title={w.title} key={index}>
            <a rel="noopener noreferrer" target="_blank" href={w.demo}>
              <div>
                <Image
                  priority={false}
                  width={30}
                  height={30}
                  alt={w.title}
                  src={w.logo ? w.logo : ""}
                />
              </div>
              <p>{w.title}</p>
            </a>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
}
