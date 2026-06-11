import { getCollection, type CollectionEntry } from "astro:content";
import { withBase } from "../utils/paths";

export type BlogPost = CollectionEntry<"blog">;

export const getBlogPosts = async () => {
  const posts = await getCollection("blog");

  return posts.sort((a, b) => b.data.date.localeCompare(a.data.date));
};

export const formatPostDate = (date: string) => date.replaceAll("-", ".");

export const getPostHref = (slug: string) => withBase(`/blog/${slug}/`);
