import NavBar from "@/app/components/shared/NavBar";
import BlogPostCarousel from "@/app/components/blog/BlogPostCarousel";

export default function Blog() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <BlogPostCarousel />
      </div>
    </>
  );
}
