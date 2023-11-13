"use client";
import NavBar from "@/app/components/shared/NavBar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 400]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const spacing = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);

  const tagline1Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    [0, 1, 0]
  );
  const tagline2Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.8],
    [0, 1, 0]
  );
  const tagline3Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <div className="flex flex-col justify-center align-center pt-12 xl:pt-32 pb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -25, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-black dark:text-white transition-colors font-bold text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
          >
            I'm a full-stack <br />
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="animated-gradient font-bold text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
          >
            problem solver.
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
          <div className="py-8" />
          <div className="min-h-screen">
            <motion.div
              className=" p-1  bg-gray-300 dark:bg-gray-700 transition-colors"
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ duration: 3, delay: 1 }}
              style={{ scale, y }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
