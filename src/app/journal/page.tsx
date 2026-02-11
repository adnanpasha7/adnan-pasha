import { Suspense } from "react";
import JournalClient from "./JournalClient";

export const dynamic = "force-static";

export default function JournalPage() {
  return (
    <Suspense fallback={<div />}>
      <JournalClient />
    </Suspense>
  );
}
