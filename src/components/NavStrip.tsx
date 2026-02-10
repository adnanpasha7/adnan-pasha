import Link from "next/link";

export default function NavStrip() {
  return (
    <nav className="font-anton max-w-6xl mx-auto px-6 mt-0 md:mt-12">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center">

        <p className="text-lg md:text-5xl  tracking-wide max-w-md">
          click around. this is basically my head on the internet.
        </p>

        <div className="w-1 bg-text self-stretch" />

        <div className="flex flex-col gap-8 items-start">          
          <Link
            href="/journal"
            className="text-2xl md:text-4xl hover:underline underline-offset-8"
          >
            JOURNAL →
          </Link>
          <Link
            href="/moments"
            className="border-2 border-text px-2 md:px-4 py-2 text-lg md:text-2xl hover:bg-text hover:text-bg transition"
          >
            MOMENTS ◻
          </Link>
          <Link
            href="/building"
            className="italic text-2xl md:text-3xl hover:-rotate-1 transition"
          >
            BUILDING *
          </Link>
          <Link
            href="/about"
            className="text-xl tracking-wide underline underline-offset-4"
          >
            ABOUT _
          </Link>
        </div>
      </div>
      
      <div className="mt-12 h-1 w-full bg-text" />
    </nav>
  );
}
