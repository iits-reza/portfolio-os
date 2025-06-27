import "./Skills.css";

const skills = [
  { skill: "Javascript", icon: "Skills", background: "square" },
  { skill: "Bootstrap", icon: "", background: "sseven-sides-coockie" },
  { skill: "HTML", icon: "", background: "bun" },
  { skill: "Postman", icon: "", background: "ornage-circle" },
  { skill: "NodeJs", icon: "", background: "green-square" },
  { skill: "React", icon: "", background: "oval" },
  { skill: "MongoDB", icon: "", background: "arch" },
  { skill: "SQL", icon: "", background: "pixel-circle" },
  { skill: "Git", icon: "", background: "diamond" },
  { skill: "Linux", icon: "", background: "light-orange-circle" },
];
function Skills() {
  return (
    <div>
      {skills.map((skill) => (
        <div className={`${skill.background}`}>
          <span className="material-symbols">{skill.icon}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
