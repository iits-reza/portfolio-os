import React, { useEffect, useState } from "react";
import "./TopHeader.css";

const shapes = [
  "arch.svg",
  "puffyflowers.svg",
  "diamond.svg",
  "sunny.svg",
  "bun.svg",
  "puffydiamond.svg",
  "flower.svg",
  "pill.svg",
  "diamond.svg",
  "heart.svg",
  "puffydiamond.svg",
  "tewlvesidedcookie.svg",
  "circle.svg",
  "square.svg",
  "tewlvesidedcookie.svg",
  "heart.svg",
  "pill.svg",
  "triangle.svg",
  "star.svg",
  "diamond.svg",
  "oval.svg",
  "triangle.svg",
  "tewlvesidedcookie.svg",
  "pixel-circle.svg",
  "square.svg",
  "tewlvesidedcookie.svg",
  "seven-sided-cookie.svg",
];

function getRandomPosition() {
  const top = Math.floor(Math.random() * 90);
  const left = Math.floor(Math.random() * 90);
  return { top: `${top}%`, left: `${left}%` };
}

const animations = [
  "animate-spin",
  "animate-ping",
  "animate-pulse",
  "animate-bounce",
];
function TopHeader() {
  const [positions, setPositions] = useState([]);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const randomPositions = shapes.map(() => getRandomPosition());
    setPositions(randomPositions);
    const changeAnimation = () => {
      const random = animations[Math.floor(Math.random() * animations.length)];
      setAnimation(random);
    };
    changeAnimation();
    const interval = setInterval(changeAnimation, 5000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center ">
      {shapes.map((shape, idx) => (
        <img
          key={idx}
          src={`./shapes/${shape}`}
          alt={`shape-${idx}`}
          className={`absolute  ${animation}`}
          style={{
            top: positions[idx]?.top,
            left: positions[idx]?.left,
            width: Math.random() * 120,
            animationDuration: "3s",
          }}
        />
      ))}
      <h1 className="text-7xl text-center z-10 text-shadow-white text-shadow-2xs">
        Hey there, I'm Reza
        <div />A Front end Developer
      </h1>
    </header>
  );
}

export default TopHeader;
