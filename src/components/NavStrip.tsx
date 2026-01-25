import Link from "next/link";

export default function NavStrip() {
  return (
    <nav className="font-anton max-w-6xl mx-auto px-6">
      {/* Loud intro line */}
      <p className="text-lg md:text-xl tracking-wide mb-6">
        click around. this is basically my head on the internet.
      </p>

      {/* Links */}
      <ul className="flex flex-wrap gap-x-10 gap-y-4 text-xl md:text-2xl font-anton">
        <li>
          <Link
            href="/journal"
            className="hover:underline underline-offset-8 transition"
          >
            JOURNAL
          </Link>
        </li>
        <li>
          <Link
            href="/moments"
            className="hover:underline underline-offset-8 transition"
          >
            MOMENTS
          </Link>
        </li>
        <li>
          <Link
            href="/building"
            className="hover:underline underline-offset-8 transition"
          >
            BUILDING
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:underline underline-offset-8 transition"
          >
            ABOUT
          </Link>
        </li>
      </ul>

      {/* Brutal divider */}
      <div className="mt-10 h-1 w-full bg-text" />
    </nav>
  );
}
