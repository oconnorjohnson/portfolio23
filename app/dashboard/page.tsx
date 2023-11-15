"use client";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

function HomePage() {
  return (
    <div>
      <MarkdownEditor value="Hello Markdown!" />
    </div>
  );
}

export default HomePage;
