export default function LoudIntro() {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-6">
      <div className="flex justify-end">
        <div className="text-right">
          <h2 className="font-anton text-text leading-tight">
            <div className="text-3xl md:text-4xl">
              I BUILD.
            </div>
            <div className="text-4xl md:text-5xl">
              I WRITE.
            </div>
            <div className="text-5xl md:text-6xl text-transparent
                     [-webkit-text-stroke:2px_var(--text)]">
              I OVERTHINK.
            </div>
            <div className="text-6xl md:text-7xl">
              I COLLECT MOMENTS.
            </div>
          </h2>

          <p className="mt-6 text-base md:text-lg text-muted max-w-md ml-auto">
            this site is where all of that ends up.
          </p>
        </div>
      </div>
      <div className="mt-10 h-1 w-full bg-text" />
    </section>
  );
}
