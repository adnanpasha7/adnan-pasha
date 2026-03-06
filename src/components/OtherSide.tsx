import Link from "next/link";

export default function OtherSide() {
    return (
        <section className="max-w-6xl mx-auto mt-12 px-6">

            <h2 className="font-anton text-text text-4xl md:text-5xl leading-tight">
                THIS IS THE QUIET VERSION.
            </h2>

            <div className="mt-10 max-w-xl space-y-4 text-lg text-muted leading-relaxed">
                <p>
                    You’re currently looking at the calm side of this website.
                </p>

                <p>
                    Clean layouts.
                    Slow thoughts.
                    Journal entries.
                </p>

                <p>
                    But there’s another version.
                </p>

                <p>
                    Less disciplined.
                    More experimental.
                    Probably a bad idea.
                </p>
            </div>

            <div className="mt-10">
                <a
                    href="https://alt.thisisadnan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-block
                        text-text
                        font-anton
                        text-xl
                        border-2 border-text
                        px-6 py-3
                        hover:bg-text hover:text-bg
                        hover:rotate-1
                        transition
                    "
                >
                    ENTER THE CHAOTIC VERSION →
                </a>

                <p className="mt-3 text-sm text-muted">
                    don’t say I didn’t warn you.
                </p>
            </div>
        </section>
    );
}