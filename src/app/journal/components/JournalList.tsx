import Link from "next/link";
import { motion } from "framer-motion";

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function JournalList({ journals }: { journals: any[] }) {
    return (
        <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto px-6 py-20 text-text"
        >
            <div className="mb-12 font-anton text-sm md:text-base">
                <Link href="/" className="hover:underline underline-offset-8 transition">
                    ← HOME
                </Link>
            </div>

            <h1
                className="font-anton text-5xl md:text-7xl mb-16 text-transparent
                   [-webkit-text-stroke:2px_var(--text)] leading-tight"
            >
                ALL WRITING
            </h1>

            <ul className="space-y-12">
                {journals.map((entry) => (
                    <li key={entry.slug}>
                        <Link
                            href={entry.href}
                            prefetch
                            className="font-anton text-4xl md:text-6xl leading-tight
                         hover:underline underline-offset-8 transition"
                        >
                            {entry.title}
                        </Link>

                        <p className="mt-2 text-sm text-muted">
                            {formatDate(entry.date)}
                        </p>
                    </li>
                ))}
            </ul>
        </motion.main>
    );
}
