import React, { useEffect, useState } from "react";
import "./TopHeader.css";

const shapes = [
  "arch.svg",
  "sunny.svg",
  "bun.svg",
  "pill.svg",
  "circle.svg",
  "tewlvesidedcookie.svg",
  "diamond.svg",
  "oval.svg",
  "pixel-circle.svg",
  "square.svg",
  "seven-sided-cookie.svg",
];
function getRandomColor() {
  const colors = [
    "#F87171", // red
    "#FBBF24", // yellow
    "#34D399", // green
    "#60A5FA", // blue
    "#A78BFA", // purple
    "#F472B6", // pink
    "#FCD34D", // amber
    "#818CF8", // indigo
    "#2DD4BF", // teal
    "#FB923C", // orange
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomPosition() {
  const top = Math.floor(Math.random() * 90); // % of parent height
  const left = Math.floor(Math.random() * 90); // % of parent width
  return { top: `${top}%`, left: `${left}%` };
}

function TopHeader() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const randomPositions = shapes.map(() => getRandomPosition());
    setPositions(randomPositions);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center">
      {shapes.map((shape, idx) => (
        <img
          key={idx}
          src={`./shapes/${shape}`}
          alt={`shape-${idx}`}
          className="h-24 w-24 absolute float"
          style={{
            top: positions[idx]?.top,
            left: positions[idx]?.left,
            animation: "spin 20s linear infinite",
          }}
        />
      ))}
      <h1 className="text-7xl text-center z-10">
        I'm Reza a Front end Developer
      </h1>
    </header>
  );
}

export default TopHeader;
