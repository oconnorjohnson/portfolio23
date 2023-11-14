"use client";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
          <Image
            alt="Profile"
            className="aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
            height="200"
            src="/profile.jpeg"
            width="200"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hello, I'm Daniel
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a full-stack web developer with 5+ years of experience in modern
            web technologies like React, Node.js, and MongoDB. I love coding,
            creating web applications, and working with the latest technologies.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-950 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
            href="#"
          >
            <svg
              className=" h-5 w-5 mx-auto"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-950 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
            href="#"
          >
            <svg
              className=" h-5 w-5 mx-auto"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect height="12" width="4" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-950 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
            href="#"
          >
            <svg
              className=" h-5 w-5 mx-auto"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tighter md:text-3xl">
            About Me
          </h3>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a problem solver, and I love the challenges that come with
            developing web applications. I have a keen eye for detail, and I am
            always striving to improve my skills and learn new technologies.
          </p>
          <h3 className="text-2xl font-bold tracking-tighter md:text-3xl">
            My Skills
          </h3>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I specialize in full-stack development, with a strong focus on
            JavaScript, React, Node.js, and MongoDB. I also have experience in
            other technologies such as Python, Docker, and AWS.
          </p>
          <h3 className="text-2xl font-bold tracking-tighter md:text-3xl">
            My Goals
          </h3>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My goal is to create efficient, scalable, and user-friendly web
            applications. I am eager to take on new challenges and contribute to
            exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
}
