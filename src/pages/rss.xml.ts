import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../site.config";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: `${site.name} Blog`,
    description: "Çocuk gelişimi, anaokulu seçimi, Montessori ve aile rehberi.",
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.publishDate,
      description: p.data.description,
      link: `/blog/${p.id}`,
      categories: p.data.tags,
      author: p.data.author,
    })),
    customData: `<language>tr-TR</language>`,
  });
};
