import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/partner/distributors");
  return {
    title: content?.title || "Distributor Partnerships",
    description: content?.subtitle || "Become a distributor",
  };
}

export default async function DistributorsPage() {
  const content = await getContent("/partner/distributors");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
