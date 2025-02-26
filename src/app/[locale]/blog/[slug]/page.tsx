import type { Metadata } from "next";

import BlogDetailPage from "@/app/ui/blog Detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndexPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogDetailPage slug={slug} />;
}

export const metadata: Metadata = {
  title: "Blog Page",
};
