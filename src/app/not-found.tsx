import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
        404
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-md">
        You tried something bold.
        <br />
        Respect.
        <br />
        But this page doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-10 px-8 py-3 border border-black hover:bg-black hover:text-white transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
