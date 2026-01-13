// app/components/Analytics.tsx
'use client';

import Script from 'next/script';

export default function DataFastAnalytics() {
  return (
    <>
      {/* DataFast Queue Script - Ensures events are captured even when triggered before main script loads */}
      <Script
        id="datafast-queue"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.datafast = window.datafast || function() {
              window.datafast.q = window.datafast.q || [];
              window.datafast.q.push(arguments);
            };
          `
        }}
      />
      <Script
        data-website-id="dfid_Bh8CZv6vtXO2FjPNkznnS"
        data-domain="magicnarrate.app"
        src="https://datafa.st/js/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}