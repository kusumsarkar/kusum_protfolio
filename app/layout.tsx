import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import { passenger, airportName } from "@/lib/data";

const siteUrl = "https://kusum-sarkar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${passenger.fullName} — Portfolio | ${airportName}`,
  description: passenger.summary,
  openGraph: {
    title: `${passenger.fullName} — Portfolio`,
    description: passenger.summary,
    url: siteUrl,
    siteName: airportName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${passenger.fullName} — Portfolio`,
    description: passenger.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: passenger.fullName,
    email: passenger.email,
    telephone: passenger.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: passenger.city,
      addressCountry: passenger.country,
    },
    description: passenger.summary,
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ivory text-text-dark">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-hazel focus:text-ivory focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
