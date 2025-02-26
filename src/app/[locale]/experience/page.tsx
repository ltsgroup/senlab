import type { Metadata } from "next";
import ExperiencePage from "@/app/ui/experience";

export default function IndexPage() {
  return <ExperiencePage />;
}

export const metadata: Metadata = {
  title: "Product experiences Page",
};
