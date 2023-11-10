"use client";
import NavBar from "@/app/components/shared/NavBar";
import Hero from "@/app/components/root/hero/Hero";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <main>
        <NavBar />
        <Hero />
      </main>
    </>
  );
}
