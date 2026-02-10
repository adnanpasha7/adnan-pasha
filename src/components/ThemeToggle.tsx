"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
    setShowCurtain(true);
    setTimeout(() => setShowCurtain(false), 100);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="
          fixed bottom-6 right-6 z-50
          px-4 py-2
          text-sm font-anton
          border-2 border-text
          bg-bg text-text
          hover:bg-text hover:text-bg
          transition
        "
        aria-label="Toggle theme"
      >
        {dark ? "LIGHT" : "DARK"}
      </button>
      <AnimatePresence>
        {showCurtain && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-text pointer-events-none"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
