"use client";
import { useState } from "react";
import PocketModal from "@/app/components/projects/PocketModal";
import CaresModal from "@/app/components/projects/CaresModal";
import NavBar from "@/app/components/shared/NavBar";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  const [isPocketModalOpen, setIsPocketModalOpen] = useState(false);
  const [isCaresModalOpen, setIsCaresModalOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <NavBar />
        <section className="w-full bg-black text-white py-12 md:py-24 lg:py-32">
          <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 pl-24">
              <h1 className="text-4xl  font-bold">My Projects</h1>
              <p className="text-lg text-gray-400">
                Here are a few things I've worked on recently.
              </p>
            </div>
            <div className="grid gap-10">
              <div className="group relative border border-gray-200  rounded-lg shadow-lg overflow-hidden">
                <Image
                  alt="Project 1"
                  className="w-full h-auto object-cover object-center"
                  height="300"
                  src="/pocketprhome.png"
                  style={{
                    aspectRatio: "500/300",
                    objectFit: "cover",
                  }}
                  width="500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPocketModalOpen(true);
                    }}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white text-black px-8 text-sm font-medium transition-opacity opacity-0 group-hover:opacity-100"
                  >
                    View Project
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Project 1</h2>
                  <p className="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                <Image
                  alt="Project 2"
                  className="w-full h-auto object-cover object-center"
                  height="300"
                  src="/careselanding.png"
                  style={{
                    aspectRatio: "500/300",
                    objectFit: "cover",
                  }}
                  width="500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsCaresModalOpen(true);
                    }}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white text-black px-8 text-sm font-medium transition-opacity opacity-0 group-hover:opacity-100"
                  >
                    View Project
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Project 2</h2>
                  <p className="text-lg text-gray-400">
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isPocketModalOpen && (
        <PocketModal closePocketModal={() => setIsPocketModalOpen(false)} />
      )}
      {isCaresModalOpen && (
        <CaresModal closeCaresModal={() => setIsCaresModalOpen(false)} />
      )}
    </>
  );
}
