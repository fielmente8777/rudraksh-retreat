import blogPostPageData from "../[slug]/components/pagedata";

export const blogsPageData = {
  heroSection: {
    title: "Blogs",
    image: "/images/blogs/hero.jpg",
  },
  cards: blogPostPageData.map((card) => {
    return {
      slug: card.slug,
      title: card.title,
      // description: card.description,
      publishedAt: card.publishedAt,
      author: card.author,
      image: card.bannerImage,
    };
  }),
};
