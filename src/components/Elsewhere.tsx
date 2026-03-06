import Link from "next/link";

export default function Elsewhere() {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-6 text-text">

      <h3 className="font-anton text-5xl md:text-6xl leading-tight">
        OTHER PLACES I PUT MY ENERGY
      </h3>

      <div className="mt-6 h-2 w-full bg-text" />

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
        not everything I do turns into a journal entry.
        <br />
        some things become photos.
        <br />
        some become half-built ideas.
        <br />
        some just sit with me for a while.
      </p>

      <div className="mt-12 flex flex-col gap-6 font-anton text-4xl md:text-5xl">
        <Link
          href="/moments"
          className="hover:underline underline-offset-8 transition"
        >
          MOMENTS →
        </Link>
        <Link
          href="/building"
          className="hover:underline underline-offset-8 transition"
        >
          BUILDING →
        </Link>
      </div>
      <div className="mt-16 h-1 w-full bg-text" />
    </section>
  );
}
