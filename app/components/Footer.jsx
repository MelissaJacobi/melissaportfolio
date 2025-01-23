"use client";

import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 font-quicksand mt-auto">
      <div className="container mx-auto text-right">
        <p className="text-xl font-regular">Melissa Jacobi</p>
        <p className="text-sm mt-2">
          <a href="mailto:miffyjacobi@gmail.com" className="hover:underline">
            miffyjacobi@gmail.com
          </a>
        </p>
        <p className="text-sm mt-2">
          <a
            href="https://www.linkedin.com/in/melissajacobi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white inline-flex items-center gap-2 hover:underline"
          >
            <CiLinkedin className="text-xl" />
            LinkedIn
          </a>
        </p>
        <p className="text-xs text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Melissa Jacobi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
