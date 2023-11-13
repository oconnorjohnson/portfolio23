"use client";
import NavBar from "@/app/components/shared/NavBar";
import { motion, spring, useScroll, useTransform } from "framer-motion";
import { RxTriangleDown } from "react-icons/rx";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const spacing = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);

  const helloWorldY = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["100vh", "0vh", "-30vh"]
  );
  const helloWorldScale = useTransform(scrollYProgress, [0, 1], [5, 1]);
  const helloWorldOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Adjust the values as needed

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <div className="flex flex-col justify-center align-center pt-12 xl:pt-32 pb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -25, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-black dark:text-white transition-colors font-bold text-xl md:text-3xl lg:text-5xl xl:text-7xl"
          >
            I heard you&apos;re in need of <br />
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="animated-gradient font-bold text-3xl md:text-5xl lg:text-7xl xl:text-9xl"
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
            }}
            transition={{ spring }}
            className="text-black pt-32 text-center dark:text-white transition-colors font-bold  text-xl md:text-3xl lg:text-5xl xl:text-7xl"
          >
            Well, I&apos;m a full-stack <br />
            <span className="animated-gradient text-3xl md:text-5xl lg:text-7xl xl:text-9xl">
              problem solver
            </span>
            .
          </motion.div>
        </div>
        <div className="text-black pt-32 dark:text-white transition-colors font-bold text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
          Let&apos;s make beautiful user experiences.
        </div>
      </main>
    </>
  );
}
