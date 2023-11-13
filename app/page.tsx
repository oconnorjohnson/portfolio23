"use client";
import NavBar from "@/app/components/shared/NavBar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <div className="flex flex-col justify-center align-center py-32 text-center">
          <h1 className="text-black dark:text-white transition-colors font-extrabold text-2xl md:text-4xl lg:text-6xl xl:text-8xl">
            Hi, I'm a full-stack <br />
            <span className="animated-gradient font-extrabold text-3xl md:text-5xl lg:text-7xl xl:text-9xl">
              Problem Solver
            </span>
          </h1>
        </div>
      </main>
    </>
  );
}
