"use client";
import NavBar from "@/app/components/shared/NavBar";
import { motion, spring, useScroll, useTransform, clamp } from "framer-motion";
import { RxTriangleDown } from "react-icons/rx";
import { useEffect, useState } from "react";
import Card from "@/app/components/root/hero/Card";
import Link from "next/link";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const spacing = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);

  const helloWorldY = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["100vh", "-30vh", "-30vh", "10vh"]
  );
  const helloWorldScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 1],
    [5, 4, 3, 1]
  );
  const helloWorldOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Adjust the values as needed

  const experiencesY = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["150vh", "150vh", "150vh", "-10vh"]
  );

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center align-center pt-48 lg:pt-32 pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -25, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-black dark:text-white transition-colors font-bold  text-3xl lg:text-5xl xl:text-7xl"
        >
          I heard you&apos;re in need of <br />
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 25, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="animated-gradient font-bold text-5xl lg:text-7xl xl:text-9xl"
        >
          solutions.
        </motion.h1>
      </div>
      <div className="grid place-items-center">
        <motion.div
          className="border-t border-2 w-4/12 border-gray-300 dark:border-gray-700 transition-colors"
          animate={{ opacity: [1, 0.25, 1] }}
          style={{ marginBottom: spacing }}
          transition={{ repeat: Infinity, duration: 3, delay: 0 }}
        />
        <div className="py-8" />
        <motion.div
          className="border-t border-2 w-3/12 border-gray-300 dark:border-gray-700 transition-colors"
          animate={{ opacity: [1, 0.25, 1] }}
          style={{ marginBottom: spacing }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.25 }}
        />
        <div className="py-8" />
        <motion.div
          className="border-t border-2 w-2/12 border-gray-300 dark:border-gray-700 transition-colors"
          animate={{ opacity: [1, 0.25, 1] }}
          style={{ marginBottom: spacing }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        />
        <div className="py-8" />
        <motion.div
          className="border-t border-2 w-1/12 border-gray-300 dark:border-gray-700 transition-colors"
          animate={{ opacity: [1, 0.25, 1] }}
          style={{ marginBottom: spacing }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.75 }}
        />
        <div className="py-4" />
        <div className="min-h-screen">
          <motion.div
            className="rounded-full text-gray-500 text-7xl dark:text-gray-500 transition-colors"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            style={{ scale, y }}
          >
            <RxTriangleDown />
          </motion.div>
        </div>
        <motion.div
          style={{
            scale: helloWorldScale,
            y: helloWorldY,
            opacity: helloWorldOpacity,
            zIndex: 2,
          }}
          transition={{ ease: "backInOut" }}
          className="text-black pt-36 text-center dark:text-white transition-colors font-bold   text-3xl lg:text-5xl xl:text-7xl"
        >
          Well, I&apos;m a full-stack <br />
          <span
            style={{ zIndex: 2 }}
            className="animated-gradient text-5xl lg:text-7xl xl:text-9xl"
          >
            problem solver.
          </span>
        </motion.div>
        <div className="py-8" />
        <Card />
        {/* <motion.div className="pt-24">
          <div className="border border-gray-800 dark:border-gray-200 px-24 py-12 md:px-32 md:py-16 lg:px-40 lg:py-20 xl:px-48 xl:py-24 transition-colors rounded-3xl">
            Let's go
          </div>
        </motion.div> */}

        <motion.div
          style={{ y: experiencesY }}
          className="text-black pt-4 dark:text-gray-600 transition-colors font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
        >
          Let&apos;s build great products.
        </motion.div>
        <ul className="pb-4">
          <Link
            href="/"
            className="px-4 text-gray-800 dark:text-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="px-4 text-gray-800 dark:text-gray-200 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="px-4 text-gray-800 dark:text-gray-200 transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="px-4 text-gray-800 dark:text-gray-200 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="px-4 text-gray-800 dark:text-gray-200 transition-colors"
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
};

export default function Root() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white dark:bg-black transition-colors">
        <Home />
      </main>
    </>
  );
}
