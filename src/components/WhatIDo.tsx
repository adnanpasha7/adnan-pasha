export default function WhatIDo() {
    return (
        <section className="max-w-6xl mx-auto mt-12 px-6">
            <h3 className="font-anton text-4xl md:text-5xl mb-8 text-transparent
                     [-webkit-text-stroke:2px_var(--text)]">
                RIGHT NOW, I’M INTERESTED IN:
            </h3>

            <div className="font-anton text-3xl md:text-4xl leading-tight text-text">
                <div>BUILDING THINGS THAT FEEL ALIVE.</div>
                <div>DESIGNING WITH FEELING, NOT CHECKLISTS.</div>
                <div>WRITING IN PUBLIC, EVEN WHEN IT’S MESSY.</div>
                <div>TURNING THOUGHTS INTO SYSTEMS.</div>
            </div>

            <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed">
                sometimes it looks like code.
                <br />
                sometimes it looks like words.
                <br />
                sometimes it’s just a bad idea that survived.
            </p>
            <div className="mt-10 h-1 w-full bg-text" />
        </section>
    );
}
