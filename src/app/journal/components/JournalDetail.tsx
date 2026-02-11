import Link from "next/link";
import { motion } from "framer-motion";

import { Journal } from "@/types/journal";

export default function JournalDetail({
    entry,
    journals,
    slug,
}: {
    entry: Journal;
    journals: Journal[];
    slug: string;
}) {
    const index = journals.findIndex((j) => j.slug === slug);

    const prev = index > 0 ? journals[index - 1] : null;
    const next =
        index !== -1 && index < journals.length - 1
            ? journals[index + 1]
            : null;

    return (
        <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto px-6 py-20 text-text"
        >
            <div className="mb-12 flex justify-between font-anton text-sm md:text-base">
                <Link
                    href="/journal"
                    className="hover:underline underline-offset-8 transition"
                >
                    ← ALL JOURNALS
                </Link>
                <Link
                    href="/"
                    className="hover:underline underline-offset-8 transition"
                >
                    ← HOME
                </Link>
            </div>

            <h1 className="font-anton text-5xl md:text-7xl leading-tight">
                {entry.title}
            </h1>

            <p className="mt-4 text-sm text-muted">
                {entry.date}
            </p>

            <div className="mt-10 h-1 w-24 bg-text" />

            <article className="mt-12 whitespace-pre-line text-lg leading-relaxed">
                {entry.content}
            </article>

            <div className="mt-24 flex justify-between gap-8 font-anton text-lg md:text-xl">
                {prev ? (
                    <Link
                        href={`/journal?slug=${prev.slug}`}
                        className="hover:underline underline-offset-8 transition"
                    >
                        ← PREVIOUS
                    </Link>
                ) : (
                    <span />
                )}

                {next && (
                    <Link
                        href={`/journal?slug=${next.slug}`}
                        className="hover:underline underline-offset-8 transition"
                    >
                        NEXT →
                    </Link>
                )}
            </div>

            <div className="mt-10 h-1 w-full bg-text" />
        </motion.main>
    );
}
