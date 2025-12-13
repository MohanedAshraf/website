"use client";

import { clsx } from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!isMounted) return null;

  return (
    <button
      className="cancel-drag flex h-10 w-20 items-center rounded-full border-2 border-gray-300 bg-gray-200 transition duration-300 focus:outline-none lg:h-12 lg:w-24"
      aria-label="Toggle theme"
      onClick={handleToggle}
    >
      <div
        className={clsx(
          `flex size-10  items-center justify-center rounded-full border-0 border-gray-200 text-white transition duration-300 lg:size-12 lg:border-0`,
          theme === "dark" ? "translate-x-full bg-gray-950" : "bg-yellow-300"
        )}
      >
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </div>
    </button>
  );
}
