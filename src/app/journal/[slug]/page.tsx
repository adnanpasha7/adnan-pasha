import Link from "next/link";
import getJournal from "@/lib/journal";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const journals = await getJournal();

  return journals.map((journal) => ({
    slug: journal.slug,
  }));
}

export default async function JournalPage({
  params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = await params; 

  const journals = await getJournal();

  const index = journals.findIndex((j) => j.slug === slug);
  if (index === -1) notFound();

  const entry = journals[index];
  const prev = journals[index - 1];
  const next = journals[index + 1];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-text">
      <div className="mb-12 font-anton text-sm md:text-base">
        <Link href="/" className="hover:underline underline-offset-8 transition">
          ← HOME
        </Link>
      </div>

      <h1 className="font-anton text-5xl md:text-7xl leading-tight">
        {entry.title}
      </h1>

      <p className="mt-4 text-sm text-muted">{entry.date}</p>

      <div className="mt-10 h-1 w-24 bg-text" />

      <article className="mt-12 whitespace-pre-line text-lg leading-relaxed">
        {entry.content}
      </article>

      <div className="mt-24 flex justify-between gap-8 font-anton text-lg md:text-xl">
        {prev ? (
          <Link
            href={`/journal/${prev.slug}`}
            className="hover:underline underline-offset-8 transition"
          >
            ← PREVIOUS
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link
            href={`/journal/${next.slug}`}
            className="hover:underline underline-offset-8 transition"
          >
            NEXT →
          </Link>
        )}
      </div>

      <div className="mt-10 h-1 w-full bg-text" />
    </main>
  );
}
