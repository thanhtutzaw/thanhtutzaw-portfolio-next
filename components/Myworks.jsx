import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const works = [
  {
    title: "Todo",
    liveDemo: "https://todolistzee3.netlify.app",
    logo: "https://raw.githubusercontent.com/thanhtutzaw/todolist3/ce254d835d5987c1ceb447f2c6ee8750ef1441d3/public/assets/logo.svg",
    github: "https://github.com/thanhtutzaw/todolist3",
    watchDemo: "",
  },
  {
    title: "Too",
    liveDemo: "https://toodemo.vercel.app",
    logo: "https://raw.githubusercontent.com/thanhtutzaw/too/47389ae63da321da5eb68a6ec19760781a8486a0/public/logo.svg",
    github: "https://github.com/thanhtutzaw/too",
    watchDemo: "https://www.youtube.com/watch?v=Nm6O924DuCs",
  },
  {
    title: "facebook",
    liveDemo: "https://facebook-ui-zee.vercel.app",
    logo: "https://facebook-ui-zee.vercel.app/logo.svg",
    github: "https://github.com/thanhtutzaw/facebook-ui",
    watchDemo:
      "https://www.youtube.com/watch?v=CRV3aZOFefQ&list=PL7OpFd3agQxb3jOqAVm4msHNlH34uai3i&index=1",
  },
  {
    title: "Kyat Zay",
    liveDemo: "https://kyatzay.vercel.app",
    logo: "https://kyatzay.vercel.app/assets/favicon.svg",
    github: "https://github.com/thanhtutzaw/kyatzay",
  },
  {
    title: "Draggable Drawer",
    liveDemo: "https://utube-next.vercel.app",
    logo: "https://utube-next.vercel.app/favicon.ico",
    github: "https://github.com/thanhtutzaw/u-tube",
  },
];
export function Myworks() {
  return (
    <div className={`${styles.myworks}`}>
      <h1>My Works</h1>
      <ul>
        {works.map((project, index) => (
          <li key={`${project.title}-${index}`}>
            <Link
              target="_blank"
              rel="noreferrer"
              href={project.liveDemo}
              title={project.title}
            >
              <Image
                priority={false}
                width={30}
                height={30}
                alt={`${project.title} Logo` ?? "Logo"}
                src={project.logo ? project.logo : ""}
              />
              <p>{project.title}</p>
            </Link>
            {project.watchDemo && (
              <Link
                target="_blank"
                rel="noreferrer"
                title={`Watch ${project.title}'s Demo`}
                style={{
                  flex: "0 !important",
                  padding: "0 !important",
                  fontSize: "11px",
                  marginTop: "auto",
                  textDecoration: "none !important",
                }}
                href={project.watchDemo}
              >
                Watch Demo
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
