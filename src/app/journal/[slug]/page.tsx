import { journals } from "@/lib/journal";
import { notFound } from "next/navigation";

export default async function JournalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const entry = journals.find(j => j.slug === slug);

  if (!entry) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
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
    </main>
  );
}
