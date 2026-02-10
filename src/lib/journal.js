import { fetchContent } from "@/prismic/prismicClient";

export const journals = [
  {
    slug: "redesigning-again",
    title: "I KEEP REDESIGNING THIS WEBSITE.",
    date: "Mar 2026",
    content: `
I keep redesigning this website.

Not because it’s broken.
Not because it’s bad.

But because every time I build something,
I understand myself a little better.

This site isn’t a product.
It’s a side effect.
    `,
  },
  {
    slug: "not-a-portfolio",
    title: "WHY I DON’T WANT A NORMAL PORTFOLIO.",
    date: "Mar 2026",
    content: `
Portfolios try to look finished.

I’m not.

I don’t want to present outcomes.
I want to show motion.

This site is closer to a log than a showcase.
    `,
  },
  {
    slug: "building-in-public",
    title: "BUILDING IN PUBLIC IS UNCOMFORTABLE. GOOD.",
    date: "Mar 2026",
    content: `
If it feels uncomfortable,
it means I care.

Building in public removes polish,
but adds honesty.

I’ll take honesty.
    `,
  },
];

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
    console.log("journalAll -> ", journalAll);
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