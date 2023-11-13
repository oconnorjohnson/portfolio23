"use client";
import NavBar from "@/app/components/shared/NavBar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <div className="flex flex-col justify-center align-center py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -25, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-black dark:text-white transition-colors font-extrabold text-3xl md:text-5xl lg:text-7xl xl:text-9xl"
          >
            I'm a full-stack <br />
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="animated-gradient font-extrabold text-3xl md:text-5xl lg:text-7xl xl:text-9xl"
          >
            Problem Solver
          </motion.h1>
        </div>
      </main>
    </>
  );
}
