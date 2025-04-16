"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GSAPLetters = () => {
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      { y: 100, opacity: 0, rotate: -20, scale: 0.5 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  const letters = ["A", "L"];

  return (
    <div
      className="flex justify-center items-center w-full
    "
    >
      <div
        className="flex  items-center justify-center 
        border-4 border-green-500 bg-black p-4 rounded-lg"
        style={{ padding: "40px" }}
      >
        {letters.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) lettersRef.current[i] = el;
            }}
            className="inline-block text-white text-9xl font-extrabold"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GSAPLetters;
