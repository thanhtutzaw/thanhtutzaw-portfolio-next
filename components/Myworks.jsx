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
    liveDemo: "https://too.netlify.app",
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
    title: "GoogleFile UI",
    liveDemo: "https://google-file.vercel.app",
    logo: "https://google-file.vercel.app/favicon.ico",
    github: "https://github.com/thanhtutzaw/google-file",
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
      <h2>My Works</h2>
      <ul>
        {works.map((project, index) => (
          <li key={index}>
            <Link target="_blank" href={project.liveDemo} title={project.title}>
              <Image
                priority={false}
                width={30}
                height={30}
                alt={`${project.title} logo` ?? "Logo"}
                src={project.logo ? project.logo : ""}
              />
              <p>{project.title}</p>
            </Link>
            {project.watchDemo && (
              <Link
                target="_blank"
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
