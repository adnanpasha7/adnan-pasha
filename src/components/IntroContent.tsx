import BrutalHeading from "@/components/BrutalHeading";

export default function IntroContent() {
    return (
        <>
            <div className="-translate-y-4 md:-translate-y-6">
                <h1 className="text-7xl md:text-8xl font-anton leading-none">
                    <BrutalHeading top="HEY, I’M" bottom="ADNAN" />
                </h1>
            </div>

            <p className="mt-4 text-muted leading-relaxed">
                I build things on the internet, think out loud,
                write when my brain won’t shut up, and collect
                moments from everyday life.
            </p>

            <p className="mt-3 text-muted">
                this site is my public notebook.
            </p>
        </>
    );
}
