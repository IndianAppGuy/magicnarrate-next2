import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy | MagicNarrate",
  description:
    "Privacy Policy for MagicNarrate. Learn how we collect, use, and protect your personal information and generated narration/video outputs.",
  slug: "/privacy-policy",
  keywords: [
    "privacy policy",
    "data protection",
    "MagicNarrate privacy",
    "AI narration privacy",
  ],
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

