import Image from "next/image";
import s from "../styles/Home.module.css";
import { skills } from "../data";

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
