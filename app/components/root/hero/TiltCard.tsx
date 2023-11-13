import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { SiTypescript, SiTrpc, SiTailwindcss, SiPython } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa";

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const touchX = e.touches[0].clientX - rect.left;
    const touchY = e.touches[0].clientY - rect.top;

    const xPct = touchX / width - 0.5;
    const yPct = touchY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative text-black dark:text-white transition-colors h-96 w-72 rounded-xl bg-gradient-to-b from-blue-500 to-sky-300 dark:from-indigo-700 dark:to-indigo-300"
    >
      <div
        style={{
          transform: "translateZ(150px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid grid-cols-3 my-4 rounded-xl bg-white dark:bg-slate-800 transition-colors shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(180px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl pt-12"
        >
          <TbBrandNextjs />
        </div>
        <div
          style={{
            transform: "translateZ(155px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl pt-12 "
        >
          <IoLogoVercel />
        </div>
        <div
          style={{
            transform: "translateZ(200px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl pt-12 "
        >
          <SiTypescript />
        </div>
        <div
          style={{
            transform: "translateZ(160px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl "
        >
          <SiTrpc />
        </div>
        <div
          style={{
            transform: "translateZ(190px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl "
        >
          <SiTailwindcss />
        </div>
        <div
          style={{
            transform: "translateZ(140px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl "
        >
          <SiPython />
        </div>
        <div
          style={{
            transform: "translateZ(140px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl "
        >
          <DiJavascript />
        </div>
        <div
          style={{
            transform: "translateZ(175px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl "
        >
          <BiLogoPostgresql />
        </div>
        <div
          style={{
            transform: "translateZ(185px)",
            transformStyle: "preserve-3d",
          }}
          className="flex justify-center align-center text-5xl "
        >
          <FaNode />
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard;
