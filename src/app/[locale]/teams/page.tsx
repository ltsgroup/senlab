import TeamPage from "@/app/ui/team";
import type { Metadata } from "next";

export default function IndexPage() {
  return <TeamPage />;
}

export const metadata: Metadata = {
  title: "Teams Page",
};
