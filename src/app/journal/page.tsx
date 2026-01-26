import Link from "next/link";
import { journals } from "@/lib/journal";

export default function JournalIndex() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="font-anton text-5xl md:text-7xl mb-16">
        ALL WRITING
      </h1>

      <ul className="space-y-12">
        {journals.map((entry) => (
          <li key={entry.slug}>
            <Link
              href={`/journal/${entry.slug}`}
              className="font-anton text-4xl md:text-6xl leading-tight
                         hover:underline underline-offset-8 transition"
            >
              {entry.title}
            </Link>

            <p className="mt-2 text-sm text-muted">
              {entry.date}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
