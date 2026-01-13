import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Support & Help Center | MagicNarrate",
  description:
    "Get help with MagicNarrate AI narration. Find answers to common questions, contact support, and learn how to generate narration and get your video link.",
  slug: "/support",
  keywords: [
    "MagicNarrate support",
    "AI narration help",
    "MagicNarrate contact",
    "customer support",
    "help center",
  ],
});

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

