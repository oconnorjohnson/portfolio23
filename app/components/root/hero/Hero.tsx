"use client";
import TiltCard from "@/app/components/root/hero/TiltCard";

export default function Hero() {
  return (
    <>
      <div className="flex p-32 flex-col-2 justify-between bg-white dark:bg-black transition-colors">
        <div className="text-black dark:text-white transition-colors">
          This is the hero text.
        </div>
        <TiltCard />
      </div>
    </>
  );
}
