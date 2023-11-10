// imports
"use client";
import NavBar from "@/app/components/shared/NavBar";
import Hero from "@/app/components/root/hero/Hero";
import Button from "@/app/components/shared/Button";
import { useRouter } from "next/navigation";
import { FiHome } from "react-icons/fi";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <main>
        <NavBar />
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </Button>
        <Hero />
      </main>
    </>
  );
}
