import type { Metadata } from "next";

import BlogPage from "@/app/ui/blog";

export default function IndexPage() {
  return <BlogPage />;
}

export const metadata: Metadata = {
  title: "Blog Page",
};
