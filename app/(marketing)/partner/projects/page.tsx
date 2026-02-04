import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/partner/projects");
  return {
    title: content?.title || "Project Partnerships",
    description: content?.subtitle || "Project collaboration",
  };
}

export default async function ProjectsPage() {
  const content = await getContent("/partner/projects");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
