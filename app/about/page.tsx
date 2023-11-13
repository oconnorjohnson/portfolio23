import NavBar from "@/app/components/shared/NavBar";
import VerticalSlideFeatures from "@/app/components/about/About";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <VerticalSlideFeatures />
      </div>
    </>
  );
}
