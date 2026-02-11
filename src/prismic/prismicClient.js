import * as prismic from "@prismicio/client";

export const client = prismic.createClient("adnanpasha");

export const getAllByType = async (type) => {
  try {
    const response = await client.getAllByType(type, {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    });

    return response;
  } catch (error) {
    console.error(`Prismic fetch error (type: ${type}):`, error);
    return [];
  }
};

export const getBySlug = async (type, slug) => {
  try {
    const response = await client.getByUID(type, slug);
    return response;
  } catch (error) {
    console.error(
      `Prismic fetch error (type: ${type}, slug: ${slug}):`,
      error
    );
    return null;
  }
};
