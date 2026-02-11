export default function JournalSkeleton({
  type,
}: {
  type: "list" | "detail";
}) {
  if (type === "detail") {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20 text-text animate-pulse">
        <div className="mb-12 h-4 w-24 bg-muted rounded" />
        <div className="h-16 w-3/4 bg-muted rounded mb-6" />
        <div className="h-4 w-32 bg-muted rounded mb-10" />

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-full bg-muted rounded" />
          ))}
        </div>
      </main>
    );
  }
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-text animate-pulse">
      <div className="mb-12 h-4 w-24 bg-muted rounded" />
      <div className="mb-16 h-16 w-80 bg-muted rounded" />

      <ul className="space-y-12">
        {[1, 2, 3, 4].map((i) => (
          <li key={i}>
            <div className="h-12 w-2/3 bg-muted rounded mb-4" />
            <div className="h-4 w-40 bg-muted rounded" />
          </li>
        ))}
      </ul>
    </main>
  );
}
