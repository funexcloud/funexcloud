import fs from "fs";
import path from "path";

import matter from "gray-matter";

export type CeoPost = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  published: boolean;
  content: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    summary: string;
    published: boolean;
  };
};

const contentDirectory = path.join(process.cwd(), "src", "content", "ceo");

type CeoPostFrontmatter = {
  title?: unknown;
  slug?: unknown;
  date?: unknown;
  summary?: unknown;
  published?: unknown;
};

function toPost(fileName: string): CeoPost | null {
  const filePath = path.join(contentDirectory, fileName);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  const frontmatter = data as CeoPostFrontmatter;
  const slug =
    typeof frontmatter.slug === "string"
      ? frontmatter.slug
      : fileName.replace(/\.md$/, "");

  if (
    typeof frontmatter.title !== "string" ||
    typeof frontmatter.date !== "string" ||
    typeof frontmatter.summary !== "string"
  ) {
    return null;
  }

  return {
    title: frontmatter.title,
    slug,
    date: frontmatter.date,
    summary: frontmatter.summary,
    published: frontmatter.published === true,
    content,
    frontmatter: {
      title: frontmatter.title,
      slug,
      date: frontmatter.date,
      summary: frontmatter.summary,
      published: frontmatter.published === true,
    },
  };
}

function getAllPosts(): CeoPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs
    .readdirSync(contentDirectory)
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map(toPost)
    .filter((post): post is CeoPost => post !== null);
}

export function getPublishedPosts(): CeoPost[] {
  return getAllPosts()
    .filter((post) => post.published === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): CeoPost | null {
  const post = getAllPosts().find((item) => item.slug === slug);

  if (!post || post.published !== true) {
    return null;
  }

  return post;
}
