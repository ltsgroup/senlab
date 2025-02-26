import ResearchPage from "@/app/ui/research";
import type { Metadata } from "next";

export default function IndexPage() {
  return <ResearchPage />;
}

export const metadata: Metadata = {
  title: "Research Page",
};
