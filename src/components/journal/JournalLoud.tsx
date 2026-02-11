"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getJournals } from "@/lib/journal";
import { Journal } from "@/types/journal";


export default function JournalLoud() {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getJournals();
      setJournals(data.slice(0, 4));
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto mt-12 px-6 text-text animate-pulse">
        <h3 className="font-anton text-4xl md:text-5xl mb-12">
          SOME THINGS I&apos;VE WRITTEN:
        </h3>

        <ul className="space-y-10">
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <div className="h-10 w-2/3 bg-muted rounded" />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto mt-12 px-6 text-text">
      <h3 className="font-anton text-4xl md:text-5xl mb-12">
        SOME THINGS I&apos;VE WRITTEN:
      </h3>

      <ul className="space-y-10">
        {journals.map((journal) => (
          <li key={journal.slug ?? journal.title}>
            <Link
              href={journal.href}
              className="block font-anton text-muted text-3xl md:text-4xl leading-tight
                         hover:text-transparent hover:[-webkit-text-stroke:2px_var(--text)]
                         transition-transform duration-700"
            >
              {journal.title}
            </Link>
          </li>
        ))}
      </ul>

      <span className="mt-8 block">
        <Link
          href="/journal"
          className="font-anton text-lg md:text-xl
                     hover:underline underline-offset-8 transition"
        >
          VIEW ALL WRITING →
        </Link>
      </span>

      <div className="mt-10 h-1 w-full bg-text" />
    </section>
  );
}
