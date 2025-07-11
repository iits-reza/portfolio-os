import React, { useEffect, useState } from "react";

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

const animations = [
  "animate-spin",
  "animate-ping",
  "animate-pulse",
  "animate-bounce",
];

function getRandomPosition() {
  const top = Math.floor(Math.random() * 90);
  const left = Math.floor(Math.random() * 90);
  return { top: `${top}%`, left: `${left}%` };
}

function getRandomAnimation() {
  return animations[Math.floor(Math.random() * animations.length)];
}

function TopHeader() {
  const [shapeData, setShapeData] = useState([]);

  useEffect(() => {
    const newShapeData = shapes.map(() => ({
      position: getRandomPosition(),
      animation: getRandomAnimation(),
      size: 40 + Math.random() * 80,
    }));
    setShapeData(newShapeData);

    const interval = setInterval(() => {
      setShapeData((prev) =>
        prev.map((item) => ({
          ...item,
          animation: getRandomAnimation(),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center">
      {shapes.map((shape, idx) => (
        <img
          key={idx}
          src={`./shapes/${shape}`}
          alt={`shape-${idx}`}
          className={`absolute ${shapeData[idx]?.animation || ""}`}
          style={{
            top: shapeData[idx]?.position.top,
            left: shapeData[idx]?.position.left,
            width: shapeData[idx]?.size || 60,
            animationDuration: "6s",
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
