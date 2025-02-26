import AboutPage from "@/app/ui/about";
import type { Metadata } from "next";

export default function IndexPage() {
  return <AboutPage />;
}

export const metadata: Metadata = {
  title: "About us",
};
