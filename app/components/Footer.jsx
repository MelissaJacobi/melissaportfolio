"use client";

import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="border-y-solid border-y-[0.7px]  border-y-[var(--foreground)] bg-[var(--secondary)] py-6 font-quicksand mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm mt-2"></p>
        <p className="text-sm mt-2">
          <a
            href="https://www.linkedin.com/in/melissa-jacobi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] text-[2rem] inline-flex items-center gap-2 hover:translate-y-1 duration-300"
          >
            <CiLinkedin />
          </a>
        </p>
        <p className="text-xs text-[var(--foreground)] mt-4">
          &copy; {new Date().getFullYear()} Melissa Jacobi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
