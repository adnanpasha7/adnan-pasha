import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t-2 border-text text-text">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">

          <div>
            <p className="font-anton text-2xl md:text-3xl">
              ADNAN
            </p>
            <p className="mt-2 text-muted text-sm max-w-xs">
              building things. writing thoughts. collecting moments.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/journal" className="hover:underline underline-offset-4">
              journal
            </Link>
            <Link href="/moments" className="hover:underline underline-offset-4">
              moments
            </Link>
            <Link href="/building" className="hover:underline underline-offset-4">
              building
            </Link>
            <Link href="/hidden" className="text-bg">
              hidden
            </Link>
          </div>

          <div className="text-sm">
            <p className="mb-3">contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+919108811142"
                  className="underline underline-offset-4 hover:text-text transition"
                >
                  +91 9108811142
                </a>
              </li>

              <li>
                <a
                  href="mailto:adnanbasha786@gmail.com"
                  className="underline underline-offset-4 hover:text-text transition"
                >
                  adnanbasha786@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/humblekidpasha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-text transition"
                >
                  instagram · @humblekidpasha
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/adnanpasha_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-text transition"
                >
                  x · @adnanpasha_
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t border-text flex flex-col md:flex-row justify-between text-xs text-muted gap-4">
          <span>© {new Date().getFullYear()} adnan</span>
          <span>built slowly · still evolving</span>
        </div>

      </div>
    </footer>
  );
}
