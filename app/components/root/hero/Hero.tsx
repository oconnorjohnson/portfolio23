"use client";
import { useEffect, useRef } from "react";
import TiltCard from "@/app/components/root/hero/TiltCard";
import { useAnimation, useInView, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const WaterDropHero = () => {
  const router = useRouter();
  return (
    <>
      <section className="text-gray-800 dark:text-slate-200 transition-colors flex flex-col-2 justify-around overflow-hidden bg-white dark:bg-black px-8 py-24 md:px-12 md:py-32">
        <div className="">
          <div className="pointer-events-none relative z-10">
            <Reveal>
              <h1 className="pointer-events-auto text-6xl font-black text-gray-800 dark:text-slate-200 transition-colors md:text-8xl">
                Hi, I'm Daniel
                <span className="text-sky-500 dark:text-indigo-500 transition-colors">
                  .
                </span>
              </h1>
            </Reveal>
            <Reveal>
              <h2 className="pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl">
                I'm a{" "}
                <span className="font-semibold text-sky-500 dark:text-indigo-500 transition-colors">
                  Full Stack Developer
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="pointer-events-auto text-2xl text-slate-800 dark:text-slate-200 transition-colors">
                I love React, Next.js, and Typescript. <br />
                What better way to move quickly and break nothing?
              </p>
            </Reveal>
            <Reveal>
              <button
                onClick={() => {
                  router.push("/contact");
                }}
                className="pointer-events-auto mt-4 rounded-3xl bg-gradient-to-r from-blue-500 to-sky-300 dark:from-indigo-600 dark:to-indigo-300 text-lg px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6"
              >
                Contact me
              </button>
            </Reveal>
          </div>
        </div>
        <div className="hidden md:block">
          <TiltCard />
        </div>
      </section>
      <section className="grid place-items-center md:hidden">
        <TiltCard />
      </section>
    </>
  );
};

interface RevealProps {
  children: JSX.Element;
}

export const Reveal = ({ children }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-gradient-to-r from-sky-300 to-blue-500 dark:from-indigo-300 dark:to-indigo-600 transition-colors"
      />
    </div>
  );
};

export default WaterDropHero;
