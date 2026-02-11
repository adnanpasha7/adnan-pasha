import { fetchContent } from "@/prismic/prismicClient";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const getJournal = async () => {
    const journalAll = await fetchContent("journal");
    const journals = journalAll.map((journal) => {
      const fullContent = journal.data.content
      .map((block) => block.text)
      .join("\n\n")
        return {
            slug: journal.uid,
            title: journal.data.title[0].text,
            date: formatDate(journal.data.published_date),
            content: fullContent,
            href: `/journal/${journal.uid}`,
        }
    });
    return journals;
    
};

export default getJournal;