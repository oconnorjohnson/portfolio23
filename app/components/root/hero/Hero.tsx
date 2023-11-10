"use client";
import TiltCard from "@/app/components/root/hero/TiltCard";
import Form from "@/app/components/contact/Form";
import { motion } from "framer-motion";

interface BoxProps {
  front: string;
  bottom: string;
  back: string;
  top: string;
}

const Box = ({ front, bottom, back, top }: BoxProps) => {
  return (
    <motion.span
      className="relative h-16 w-72 font-black text-4xl"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center -40px",
      }}
      initial={{ rotateX: "0deg" }}
      animate={{
        rotateX: [
          "0deg",
          "90deg",
          "90deg",
          "180deg",
          "180deg",
          "270deg",
          "270deg",
          "360deg",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "backInOut",
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
      }}
    >
      {/* FRONT */}
      <span className="absolute flex h-full w-full items-center justify-start bg-white dark:bg-black transition-colors text-white">
        {front}
      </span>

      {/* BOTTOM */}
      <span
        style={{ transform: "translateY(5rem) rotateX(-90deg)" }}
        className="absolute flex h-full w-full origin-top items-center justify-start bg-white dark:bg-black  transition-colors text-white"
      >
        {bottom}
      </span>

      {/* TOP */}
      <span
        style={{ transform: "translateY(-5rem) rotateX(90deg)" }}
        className="absolute flex h-full w-full origin-bottom items-center justify-start bg-white dark:bg-black  transition-colors text-white"
      >
        {top}
      </span>

      {/* BACK */}
      <span
        style={{
          transform: "translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)",
        }}
        className="absolute flex h-full w-full origin-center items-center justify-start bg-white dark:bg-black  transition-colors text-white"
      >
        {back}
      </span>
    </motion.span>
  );
};

export default function Hero() {
  const quals = ["accessible,", "performant,", "& scaleable"];
  return (
    <>
      <div className="flex p-32 flex-col lg:flex-row lg:justify-around bg-white dark:bg-black transition-colors">
        {/* <div className="text-black flex flex-col items-start font-light text-4xl dark:text-white transition-colors max-w-2xl">
          I'm building
          <Box
            front="accessible"
            bottom="performant"
            back="scaleable"
            top="user-friendly"
          />
          solutions with <br />{" "}
          <a className="font-extrabold text-4xl">
            Typescript, Next, & PostgreSQL
          </a>
        </div> */}

        <TiltCard />
        <Form />
      </div>
    </>
  );
}
