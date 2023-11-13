import NavBar from "@/app/components/shared/NavBar";
import Projects from "@/app/components/projects/Projects";

export default function Work() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <Projects />
      </div>
    </>
  );
}
