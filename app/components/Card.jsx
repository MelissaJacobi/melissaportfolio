"use client"; // If required for your Next.js app (App Router)


import Link from "next/link";


export default function Card({ imgUrl, projectName, softwares }) {
  return (
    <Link href={`/${encodeURIComponent(projectName?.toLowerCase() || '')}`}>
      <div className="relative group w-[25rem] h-[30rem] rounded-[4.5rem] overflow-hidden shadow-md duration-300 cursor-pointer">
        {/* Image */}
        <img
          src={imgUrl}
          alt={`${projectName} screenshot`}
          className="w-full h-full object-cover rounded-[4.5rem] group-hover:scale-105 duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-[4.5rem] opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center text-center p-4">
          <h2 className="font-quicksand text-3xl font-bold text-white">
            {projectName}
          </h2>
          <h3 className="mt-2 text-white font-semibold">Software Used:</h3>
          <ul className="mt-1 text-gray-200 list-none ">
            {softwares.map((software, index) => (
              <li key={index}>{software}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
