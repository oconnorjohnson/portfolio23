// imports
"use client";
import NavBar from "@/app/components/shared/NavBar";
import Hero from "@/app/components/root/hero/Hero";
import DarkModeToggle from "@/app/components/shared/DarkModeToggle";

export default function Home() {
  return (
    <>
      <main>
        <DarkModeToggle />
        <NavBar />
        <Hero />
      </main>
    </>
  );
}
