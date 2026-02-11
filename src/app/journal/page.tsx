import { Suspense } from "react";
import JournalClient from "./JournalClient";

export default function JournalPage() {
  return (
    <Suspense fallback={<div />}>
      <JournalClient />
    </Suspense>
  );
}
