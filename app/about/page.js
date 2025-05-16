"use client";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="px-6 py-8 flex flex-col items-center w-full max-w-[70rem] mx-auto">
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-[2rem] w-full">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/about.jpg"
            alt="me, my violin, and my bird"
            className="w-full max-w-[30rem] object-cover rounded-[1rem]"
          />
        </div>

        {/* Text */}
        <div className="lg:w-[60%] w-full">
          <h2 className="font-mitr font-semibold text-[2rem] mb-4 text-center lg:text-left">
            Hi! I'm Melissa
          </h2>
          <p className="font-quicksand leading-[2rem] text-base text-center lg:text-left">
            A passionate graphic designer with a love for creativity, music, and the beauty of nature.
            With a background in digital development and design, I bring a strong combination of artistic expression and 
            technical expertise to each of my projects. When I'm not designing, you'll often
            find me playing the violin, arranging music on the piano, or birdwatching.
            Whether it's in the form of bold graphics or delicate details, my goal is
            to create designs that resonate with people and bring a sense of harmony, 
            drawing inspiration from the music I play and the beauty I see in nature.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 mb-8">
        <Link href="/contact">
          <button className="px-6 py-2 flex items-center justify-center gap-2 w-[9rem] bg-white text-black rounded-full font-quicksand font-bold duration-300 hover:translate-y-1 transition group">
            Get in touch!
            <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}
