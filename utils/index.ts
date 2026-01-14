export function generateMetaData({
    title,
    description,
    slug,
    ogimage,
    keywords = [],
    locale = 'en',
    canonical,
    index = true,
    follow = true,
  }: {
    title: string;
    description: string;
    slug: string;
    ogimage?: string;
    keywords?: string[];
    locale?: string;
    canonical?: string;
    index?: boolean;
    follow?: boolean;
  }) {
    const baseUrl = 'https://www.magicslides.app';
  
    // Handle canonical URL for translated pages
    let canonicalUrl: string;
    if (canonical) {
      // Use explicit canonical URL if provided
      canonicalUrl = canonical;
    } else if (locale && locale !== 'en') {
      // For translated pages, canonical should be the language-specific URL
      if (slug === '/') {
        // Home page for translated locale
        canonicalUrl = `${baseUrl}/${locale}`;
      } else {
        // Other pages for translated locale
        canonicalUrl = `${baseUrl}/${locale}${slug}`;
      }
    } else {
      // For English pages, use the original slug
      canonicalUrl = `${baseUrl}${slug}`;
    }
  
    // Create alternates - only include hreflang for pages that actually have translations
    const normalizedSlug = slug === '/' ? '' : slug
  
    // Prefer explicit ogimage; otherwise use dynamic OG image generator
    const ogImageUrl = ogimage || `${baseUrl}/api/og?title=${encodeURIComponent(title)}`
  
    return {
      title,
      description,
      keywords,
      authors: [{ name: 'MagicSlides' }],
      creator: 'MagicSlides',
      publisher: 'MagicSlides',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: 'MagicSlides',
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: `${title} - MagicSlides`,
          },
        ],
        locale: locale,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImageUrl],
        creator: '@magicslides',
        site: '@magicslides',
      },
      robots: {
        index: index,
        follow: follow,
        googleBot: {
          index: index,
          follow: follow,
          'max-video-preview': -1,
          'max-image-preview': 'large' as const,
          'max-snippet': -1,
        },
      },
      icons: {
        icon: '/assets/magicslides_logo_circle.svg',
        shortcut: '/assets/magicslides_logo_circle.svg',
        apple: '/assets/magicslides_logo_circle.svg',
      },
    };
  }