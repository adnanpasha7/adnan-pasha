"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * PLACEHOLDER IMAGES
 * Replace these later with /public/hidden/*.jpg
 */
const images = [
  "https://picsum.photos/600/900?random=1",
  "https://picsum.photos/600/900?random=2",
  "https://picsum.photos/600/900?random=3",
  "https://picsum.photos/600/900?random=4",
  "https://picsum.photos/600/900?random=5",
];

/**
 * FLOATING WHISPERS
 */
const whispers = [
  "you found water.",
  "rest is allowed here.",
  "luxury is time.",
  "you don’t need to explain yourself.",
  "stay as long as you want.",
];

export default function HiddenPage() {
  const [stack, setStack] = useState(images);

  /** NEXT IMAGE */
  const next = () => {
    setStack(([first, ...rest]) => [...rest, first]);
  };

  /** PREVIOUS IMAGE */
  const prev = () => {
    setStack((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  };

  /** KEYBOARD SUPPORT */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f4ee]">

      {/* FLOATING WHISPERS */}
      {whispers.map((text, i) => (
        <motion.div
          key={i}
          className="absolute text-sm text-muted pointer-events-none"
          style={{
            top: `${15 + i * 14}%`,
            left: `${i % 2 === 0 ? "10%" : "65%"}`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.div>
      ))}

      {/* TOP COPY */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 max-w-xs"
      >
        <h1 className="font-anton text-4xl leading-tight">
          YOU FOUND THE OASIS.
        </h1>
        <p className="mt-4 text-muted">
          nothing is required of you here.
        </p>
      </motion.div>

      {/* CENTER STACK */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[280px] h-[400px] md:w-[380px] md:h-[520px]">
          <AnimatePresence>
            {stack.map((src, i) => {
              const isTop = i === 0;
              return (
                <motion.img
                  key={src}
                  src={src}
                  alt="hidden oasis"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
                  style={{ zIndex: stack.length - i }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: isTop ? [1, 0.98, 1] : 0.94,
                    y: i * 14,
                    filter: isTop ? "blur(0px)" : "blur(1.5px)",
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-14 inset-x-0 flex justify-center gap-20 font-anton text-4xl select-none z-10">
        <button
          onClick={prev}
          className="hover:-translate-x-1 transition"
          aria-label="previous"
        >
          ←
        </button>
        <button
          onClick={next}
          className="hover:translate-x-1 transition"
          aria-label="next"
        >
          →
        </button>
      </div>

      {/* KEYBOARD HINT */}
      <p className="absolute bottom-6 right-6 text-xs text-muted">
        ← →
      </p>

    </main>
  );
}
