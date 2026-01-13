import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Use | MagicNarrate",
  description:
    "Read the Terms of Use for MagicNarrate, including conditions of service, acceptable use, billing, refunds, and legal notices.",
  slug: "/terms-of-use",
  keywords: [
    "MagicNarrate terms of use",
    "MagicNarrate terms and conditions",
    "MagicNarrate legal",
  ],
});

export default function TermsOfUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


