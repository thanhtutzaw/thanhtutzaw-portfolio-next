import Image from "next/image";
import s from "../styles/Home.module.css";
const skills = [
  { label: "React.js", imageURL: "/assets/react.svg", id: "front" },
  { label: "Next.js", imageURL: "/assets/nextjs.svg", id: "back" },
  { label: "SASS", imageURL: "/assets/sass.svg", id: "right" },
  { label: "TypeScript", imageURL: "/assets/typescript.svg", id: "left" },
  { label: "Firebase", imageURL: "/assets/firebase.svg", id: "top" },
  { label: "Nest", imageURL: "", id: "bottom" },
];
export function Skills({ mounted }) {
  return (
    <div data-mounted={mounted} className={`${s.skill}`}>
      {skills.map(({ id, label, imageURL }) => (
        <div id={id} key={id} className={`${s[id]}`}>
          {imageURL && (
            <Image width={40} height={40} alt={label} src={imageURL} />
          )}
          {label}
        </div>
      ))}
    </div>
  );
}
