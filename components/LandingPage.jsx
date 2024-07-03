"use client";
import React, { useState, useEffect } from "react";
import RectangleGrid from "./RectangleGrid";
import Line from "./Line";
import CurvyLine from "./CurvyLine";
import Image from "next/image";
import image from "/public/WindowPane.jpg"

const LandingPage = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showGlow, setShowGlow] = useState(false);

  const handleMouseMove = (e) => {
    const gridContainer = document.getElementById("grid-container");
    if (gridContainer) {
      const rect = gridContainer.getBoundingClientRect();
      const isInGrid =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      setShowGlow(isInGrid);
    }
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-pageBg text-center pt-16 text-white">
      <CurvyLine />
      <Line className="ml-[69px]" />
      <div
        className="absolute inset-x-8 mt-40 flex items-center justify-center"
        style={{ overflow: "visible" }}
      >
        <div
          id="grid-container"
          className="grid grid-cols-6 grid-rows-4 relative z-10"
        >
          {Array.from({ length: 24 }).map((_, index) => (
            <RectangleGrid key={index} />
          ))}
        </div>
      </div>
      <div
        className="absolute top-0 left-0 pointer-events-none z-0"
        style={{
          top: cursorPos.y - 25,
          left: cursorPos.x - 20,
          width: "20rem",
          height: "20rem",
          borderRadius: "552px",
          background:
            "radial-gradient(50% 50% at 50% 50%, #CFA4FF 0%, #6639BA 100%)",
          filter: "blur(90px)",
          mixBlendMode: "screen",
          transform: showGlow
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0)",
          opacity: showGlow ? 1 : 0,
          transition: "transform 0.4s ease, opacity 0.4s ease",
        }}
      ></div>
      <div className="relative z-20">
        <p className="title-case text-white capitalize w-6/12 m-auto text-6xl leading-tight mb-4">
          We bring to you the next big thing
        </p>
        <div className="text-sm mb-3">
          <p>A world of cyber security to learn, compete and grow.</p>
          <p>Some more content of what we offer will come here.</p>
        </div>
        <button className="outline-white/50 outline-1 outline border-none text-sm font-light my-4 border bg-gray-900/80 rounded-full p-3">
          Get Started Now &rarr;
        </button>
        <div className="mt-[40px] rounded-t-xl overflow-hidden w-[700px] mx-auto h-[400px] relative z-20">
          <Image
            src={image}
            alt="Background"
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
