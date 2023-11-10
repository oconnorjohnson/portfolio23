import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { FcBusinessman } from "react-icons/fc";

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
        className="absolute inset-4 grid rounded-xl bg-white dark:bg-slate-800 transition-colors shadow-lg"
      >
        <div className="flex flex-col-2 space-between px-2">
          <FcBusinessman
            style={{
              transform: "translateZ(100px)",
            }}
            className="mx-auto text-8xl"
          />
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-start text-large font-light"
          >
            Hi, my name is:
          </p>
        </div>
        <p
          style={{
            transform: "translateZ(150px)",
          }}
          className="text-center text-2xl font-bold"
        >
          Daniel!
        </p>
        <p
          style={{
            transform: "translateZ(85px)",
          }}
          className="text-start text-medium"
        >
          This is a little paragraph about me. I love x y and z, and i'm going
          to need to fill this out later. Divee deep and learn about me!
        </p>
      </div>
    </motion.div>
  );
};

export default TiltCard;
