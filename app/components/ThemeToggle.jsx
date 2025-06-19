"use client";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import clsx from "clsx";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setAnimating(true);

    setTimeout(() => {
      const newTheme = !isDark;
      setIsDark(newTheme);

      if (newTheme) {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }

      setTimeout(() => setAnimating(false), 300); // duration of fade
    }, 150); // allow fade-out before switching
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 w-14 h-14 border-solid border-[var(--foreground)] border-[0.7px] bg-[var(--secondary)] rounded-full text-[var(--foreground)] shadow-lg z-999999 flex items-center justify-center"
    >
      <span
        className={clsx(
          "absolute transition-all duration-300",
          animating && "animate-spin opacity-0",
          !animating && !isDark && "opacity-100",
          isDark && "opacity-0"
        )}
      >
        <FaMoon size={24} />
      </span>
      <span
        className={clsx(
          "absolute transition-all duration-300",
          animating && "animate-spin opacity-0",
          isDark && !animating && "opacity-100",
          !isDark && "opacity-0"
        )}
      >
        <FaSun size={24} />
      </span>
    </button>
  );
}
