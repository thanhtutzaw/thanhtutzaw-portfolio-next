import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { works } from "../data";
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
