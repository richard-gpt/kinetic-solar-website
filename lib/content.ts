import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import fs from "fs";
import path from "path";
import { routeToFile } from "./routes";

export interface ParsedContent {
  title: string;
  subtitle: string;
  html: string;
  sections: { id: string; title: string }[];
  ctas: { label: string; href: string }[];
  raw: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "phase-1");

async function processMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return String(result);
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Kinetic Solar Solutions";
}

function extractSubtitle(content: string): string {
  const match = content.match(/^##\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function extractSections(content: string): { id: string; title: string }[] {
  const sections: { id: string; title: string }[] = [];
  const regex = /^###\s+(.+)$/gm;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const title = match[1].trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    sections.push({ id, title });
  }

  return sections;
}

function extractCTAs(content: string): { label: string; href: string }[] {
  const ctas: { label: string; href: string }[] = [];

  // Look for links after the last --- separator
  const parts = content.split(/^---$/m);
  if (parts.length > 1) {
    const ctaSection = parts[parts.length - 1];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;

    while ((match = linkRegex.exec(ctaSection)) !== null) {
      ctas.push({
        label: match[1].trim(),
        href: match[2].trim(),
      });
    }
  }

  return ctas;
}

function getMainContent(content: string): string {
  // Remove the title (first H1)
  let processed = content.replace(/^#\s+.+\n+/m, "");

  // Remove the subtitle line if it's right after
  processed = processed.replace(/^##\s+.+\n+(?=.*\n---)/m, "");

  // Remove CTA section at the end (after last ---)
  const parts = processed.split(/^---$/m);
  if (parts.length > 2) {
    // Keep everything except the last part (CTAs)
    processed = parts.slice(0, -1).join("---");
  } else if (parts.length === 2) {
    processed = parts[0];
  }

  return processed.trim();
}

export async function getContent(route: string): Promise<ParsedContent | null> {
  const filename = routeToFile[route];
  if (!filename) {
    return null;
  }

  const filePath = path.join(CONTENT_DIR, filename);

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const title = extractTitle(raw);
    const subtitle = extractSubtitle(raw);
    const sections = extractSections(raw);
    const ctas = extractCTAs(raw);
    const mainContent = getMainContent(raw);
    const html = await processMarkdown(mainContent);

    return {
      title,
      subtitle,
      html,
      sections,
      ctas,
      raw,
    };
  } catch {
    return null;
  }
}

export async function getHomeContent(): Promise<ParsedContent | null> {
  return getContent("/");
}

export function getAllContentFiles(): string[] {
  try {
    return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}
