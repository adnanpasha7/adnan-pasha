"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import IntroContent from "@/components/IntroContent";

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isDesktop;
}

function fireConfetti() {
    confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.4 },
        colors: ["#FFB703", "#111111", "#555555"],
        scalar: 0.8,
    });
}

export default function Header() {
    const isDesktop = useIsDesktop();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => {
            if (!prev) fireConfetti();
            return !prev;
        });
    };

    return (
        <header className={`md:pt-12 md:pb-12 ${open && isDesktop ? "bg-[#ff3800]" : ""}`}>
            <div className={`relative max-w-6xl mx-auto px-6 py-12 flex flex-col items-center ${open && isDesktop ? "bg-white" : ""}`}>
                <motion.button
                    onClick={handleClick}
                    className="w-72 h-72 md:w-96 md:h-96 cursor-pointer z-10"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src="/adnan-cartoon.png"
                        alt="Adnan"
                        className="w-full h-full object-cover rounded-xl"
                        animate={{
                            rotate: [-3, 3, -3],
                            x: open && isDesktop ? -180 : 0, // move only on desktop
                        }}
                        transition={{
                            rotate: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            x: {
                                duration: 0.45,
                                ease: "easeOut",
                            },
                        }}
                    />
                </motion.button>
                
                <div className="-mt-10 h-0 md:h-4 md:flex items-center justify-center">
                    <span
                        className={`text-xs text-muted transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"
                            }`}
                    >
                        tap me
                    </span>
                </div>

                {/* MOBILE INTRO */}
                <AnimatePresence>
                    {open && !isDesktop && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="mt-8 p-10 max-w-md text-center bg-white"
                        >
                            <IntroContent />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* DESKTOP INTRO */}
                <AnimatePresence>
                    {open && isDesktop && (
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute right-0 top-16 max-w-md"
                        >
                            <IntroContent />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
