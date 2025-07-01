import "./Skills.css";
import {
  SiBootstrap,
  SiHtml5,
  SiPostman,
  SiNodedotjs,
  SiReact,
  SiMongodb,
} from "react-icons/si";
import { IoGitMergeSharp } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TbSql } from "react-icons/tb";
import { GiPenguin } from "react-icons/gi";
import { FaLinux } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";

const skills = [
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    shape: "square",
    background: "bg-yellow-300",
    color: "text-black",
  },
  {
    skill: "Bootstrap",
    icon: SiBootstrap,
    shape: "seven-sided-cookie",
    background: "bg-violet-600",
    color: "text-white",
  },
  {
    skill: "HTML",
    icon: SiHtml5,
    shape: "bun",
    background: "bg-red-500",
    color: "text-white",
  },
  {
    skill: "Postman",
    icon: SiPostman,
    shape: "circle",
    background: "bg-orange-500",
    color: "text-white",
  },
  {
    skill: "Node.js",
    icon: SiNodedotjs,
    shape: "square",
    background: "bg-lime-600",
    color: "text-white",
  },
  {
    skill: "React",
    icon: SiReact,
    shape: "oval",
    background: "bg-cyan-400",
    color: "text-white",
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    shape: "arch",
    background: "bg-green-500",
    color: "text-white",
  },
  {
    skill: "SQL",
    icon: TbSql,
    shape: "pixel-circle",
    background: "bg-sky-300",
  },

  {
    skill: "Git",
    icon: IoGitMergeSharp,
    shape: "diamond",
    background: "bg-orange-600",
    color: "text-white",
  },
  {
    skill: "Linux",
    icon: FcLinux,
    shape: "circle",
    background: "bg-sky-200",
    color: "text-white",
  },
];

function Skills() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {skills.map(({ skill, icon: Icon, shape, background, color }) => (
        <div
          key={skill}
          className={`w-52 h-52  flex items-center justify-center ${background}`}
          style={{
            WebkitMaskImage: `url(/shapes/${shape}.svg)`,
            maskImage: `url(/shapes/${shape}.svg)`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        >
          <Icon className={`${color}`} size={64} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
