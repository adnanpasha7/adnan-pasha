import * as prismic from '@prismicio/client';

export const client = prismic.createClient("https://adnanpasha.cdn.prismic.io/api/v2");

export const fetchContent = async (type) => {
  try {
    const response = await client.get({
      predicates: [
        prismic.predicate.at("document.type", type)
      ],
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    });
    return response.results;
  } catch (error) {
    console.error("Prismic fetch error:", error);
  }
};