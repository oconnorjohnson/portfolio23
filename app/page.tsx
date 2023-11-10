import NavBar from "@/app/components/shared/NavBar";
import Hero from "@/app/components/root/hero/Hero";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <Hero />
      </main>
    </>
  );
}
