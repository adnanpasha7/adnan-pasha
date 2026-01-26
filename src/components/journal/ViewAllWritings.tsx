import Link from "next/link";

export default function ViewAllWriting() {
  return (
    <div className="mt-20">
      <Link
        href="/journal"
        className="font-anton text-3xl md:text-4xl
                   hover:underline underline-offset-8 transition"
      >
        VIEW ALL WRITING →
      </Link>
    </div>
  );
}
