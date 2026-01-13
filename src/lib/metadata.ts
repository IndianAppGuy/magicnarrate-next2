import type { Metadata } from "next";

// Slugs that have translated versions (update this if you add translations)
export const TRANSLATED_PAGES: string[] = [];

type GenerateMetadataArgs = {
  title: string;
  description: string;
  slug: string;
  ogimage?: string;
  keywords?: string[];
  locale?: string;
  canonical?: string;
  index?: boolean;
  follow?: boolean;
};

export function generateMetadata({
  title,
  description,
  slug,
  ogimage,
  keywords = [],
  locale = "en",
  canonical,
  index = true,
  follow = true,
}: GenerateMetadataArgs): Metadata {
  const baseUrl = "https://www.magicnarrate.app";

  // Handle canonical URL (with optional locale support)
  let canonicalUrl: string;
  if (canonical) {
    canonicalUrl = canonical;
  } else if (locale && locale !== "en") {
    if (slug === "/") {
      canonicalUrl = `${baseUrl}/${locale}`;
    } else {
      canonicalUrl = `${baseUrl}/${locale}${slug}`;
    }
  } else {
    canonicalUrl = `${baseUrl}${slug}`;
  }

  const normalizedSlug = slug === "/" ? "" : slug;

  const alternates: Metadata["alternates"] = {
    canonical: canonicalUrl,
    ...(TRANSLATED_PAGES.includes(slug)
      ? {
          languages: {
            en: `${baseUrl}${normalizedSlug}`,
            "x-default": `${baseUrl}${normalizedSlug}`,
          },
        }
      : {}),
  };

  // Prefer explicit ogimage; otherwise use dynamic OG image generator
  const ogImageUrl =
    ogimage || `${baseUrl}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "MagicNarrate" }],
    creator: "MagicNarrate",
    publisher: "MagicNarrate",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "MagicNarrate",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - MagicNarrate`,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      // Update if you create a Twitter / X handle
      // creator: "@magicimage",
      // site: "@magicimage",
    },
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/magicnarrate-icon.png",
      shortcut: "/magicnarrate-icon.png",
      apple: "/magicnarrate-icon.png",
    },
  };
}


