import { getAllByType, getBySlug } from "@/prismic/prismicClient";
import { getJournalCache, setJournalCache } from "./journalCache";
import { Journal } from "@/types/journal";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const getJournals = async (): Promise<Journal[]> => {
  const cached = getJournalCache();
  if (cached) return cached;

  const journalAll = await getAllByType("journal");

  const formatted = journalAll.map((journal: any) => ({
    slug: journal.uid ?? "",
    title: journal.data.title?.[0]?.text ?? "",
    date: formatDate(journal.data.published_date),
    content:
      journal.data.content
        ?.map((block: any) => block.text)
        .join("\n\n") ?? "",
    href: `/journal?slug=${journal.uid}`,
  }));

  setJournalCache(formatted);

  return formatted;
};
export const getJournalBySlug = async (
  slug: string
): Promise<Journal | null> => {
  const journal = await getBySlug("journal", slug);

  if (!journal) return null;

  return {
    slug: journal.uid ?? "",
    title: journal.data.title?.[0]?.text ?? "",
    date: formatDate(journal.data.published_date),
    content:
      journal.data.content
        ?.map((block: any) => block.text)
        .join("\n\n") ?? "",
    href: `/journal?slug=${journal.uid}`,
  };
};
