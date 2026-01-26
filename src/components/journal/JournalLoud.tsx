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

export default function JournalLoud() {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-6">
      <h3 className="font-anton text-3xl md:text-4xl mb-12">
        SOME THINGS I’VE WRITTEN
      </h3>

      <ul className="space-y-10">
        {entries.map((entry, index) => (
          <li key={index}>
            <Link
              href={entry.href}
              className="block font-anton text-4xl md:text-6xl leading-tight
                         hover:underline underline-offset-8 transition"
            >
              {entry.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
