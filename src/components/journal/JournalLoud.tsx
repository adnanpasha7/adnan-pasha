import getJournal from "@/lib/journal";
import Link from "next/link";

const entries = [
  {
    title: "I KEEP REDESIGNING THIS WEBSITE.",
    href: "/journal/redesigning-again",
  },
  {
    title: "WHY I DON’T WANT A NORMAL PORTFOLIO.",
    href: "/journal/not-a-portfolio",
  },
  {
    title: "BUILDING IN PUBLIC IS UNCOMFORTABLE. GOOD.",
    href: "/journal/building-in-public",
  },
  {
    title: "I TRUST PROCESS MORE THAN PLANS.",
    href: "/journal/process-over-plans",
  },
  {
    title: "THIS IS ME THINKING OUT LOUD.",
    href: "/journal/thinking-out-loud",
  },
];

export default async function JournalLoud() {
  const journals = await getJournal();
  return (
    <section className="max-w-6xl mx-auto mt-12 px-6">
      <h3 className="font-anton text-4xl md:text-5xl mb-12">
        SOME THINGS I&apos;VE WRITTEN:
      </h3>

      <ul className="space-y-10">
        {journals.map((journal, index) => (
          <li key={index}>
            <Link
              href={journal.href}
              className="block font-anton text-muted text-3xl md:text-4xl leading-tight
                          hover:text-transparent hover:[-webkit-text-stroke:2px_var(--text)] transition-transform duration-700"
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
