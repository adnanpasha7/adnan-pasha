import Link from "next/link";

export default function WIP() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                WORK IN PROGRESS
            </h1>

            <p className="mt-6 text-lg text-gray-500 max-w-md">
                I’m building something here.
                It’s not ready yet.
                But it will be.
            </p>

            <p className="mt-4 text-sm text-gray-400">
                — Adnan
            </p>

            <Link
                href="/"
                className="mt-10 px-8 py-3 border border-black hover:bg-black hover:text-white transition duration-300"
            >
                Back Home
            </Link>
        </div>
    );
}
