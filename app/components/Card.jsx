"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Card({ imgUrl, projectName, softwares }) {
  return (
    <Link href={`/${encodeURIComponent(projectName?.toLowerCase() || '')}`}>
      <div className="relative group w-[25rem] h-[30rem] overflow-hidden shadow-md duration-300 cursor-pointer border-solid border-[var(--forground)] border-[0.7px] ">
        {/* Image */}
        <img
          src={imgUrl}
          alt={`${projectName} screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--background-half)] opacity-0 group-hover:opacity-100 duration-300">
          <div className="absolute bottom-0 left-0 w-full bg-[var(--secondary)] bg-opacity-50 p-4 flex justify-between items-center">
            <div>
              <h2 className="font-mitr text-2xl font-semibold text-[var(--foreground)]">
                {projectName}
              </h2>
              <h3 className="mt-1 text-[var(--foreground)] font-semibold font-quicksand">Software Used:</h3>
              <ul className="mt-1 text-[var(--foreground)] list-none font-quicksand">
                {softwares.map((software, index) => (
                  <li key={index}>{software}</li>
                ))}
              </ul>
            </div>
            {/* Animated Arrow */}
            <ArrowRight
              className="text-[var(--foreground-color)] ml-4 transform translate-x-[-3rem] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
              size={32}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
