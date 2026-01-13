import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/lib/metadata";
import { Toaster } from "@/components/ui/sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata({
  title: "AI Narration Add-on for Presentations | MagicNarrate",
  description:
    "MagicNarrate turns any presentation into a narrated video. Open your deck, click “Generate Narration”, and get a shareable video link in minutes.",
  slug: "/",
  keywords: [
    "AI narration",
    "presentation narration",
    "AI voiceover",
    "slide narration",
    "presentation add-on",
    "MagicNarrate",
    "generate narration",
    "presentation video link",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
