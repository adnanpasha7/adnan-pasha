"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { moments } from "@/lib/moments";
import Link from "next/link";

export default function MomentsPage() {
    const [active, setActive] = useState<any>(null);

    return (
        <main className="max-w-6xl mx-auto px-6 py-24 text-text">
            <div className="mb-12 font-anton text-sm md:text-base">
                <Link
                    href="/"
                    className="hover:underline underline-offset-8 transition"
                >
                    ← HOME
                </Link>
            </div>
            {/* HEADER */}
            <h1 className="font-anton text-6xl md:text-7xl leading-tight">
                ADNAN’S GRAM
            </h1>

            <p className="mt-4 text-lg text-muted max-w-md">
                photos from my life.
                <br />
                no filters. no pressure.
                <br />
                just moments.
            </p>

            <div className="mt-8 h-2 w-full bg-text" />

            {/* GRID */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {moments.map((m) => (
                    <motion.div
                        key={m.id}
                        className="bg-white rounded-xl p-4 shadow-sm cursor-pointer"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setActive(m)}
                    >
                        {/* IMAGE */}
                        <img
                            src={m.src}
                            alt="moment"
                            className="w-full rounded-lg object-cover"
                        />

                        {/* CAPTION */}
                        <div className="mt-3">
                            <p className="text-sm text-muted">{m.date}</p>
                            <p className="mt-1 text-black">{m.note}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ACTIVE CARD / ZOOM */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActive(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-md bg-white rounded-xl p-5"
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={() => setActive(null)}
                        >
                            {/* IMAGE */}
                            <img
                                src={active.src}
                                alt="moment"
                                className="w-full max-h-[60vh] rounded-lg object-cover"
                            />

                            {/* CAPTION */}
                            <div className="mt-4">
                                <p className="text-sm text-muted">{active.date}</p>
                                <p className="mt-1 text-base">{active.note}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}
