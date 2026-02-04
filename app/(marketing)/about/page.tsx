import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/about");
  return {
    title: content?.title || "About Us",
    description: content?.subtitle || "Learn more about Kinetic Solar Solutions",
  };
}

export default async function AboutPage() {
  const content = await getContent("/about");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
