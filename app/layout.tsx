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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://kusum-protfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kusum Sarkar | BBA Student | Marketing & Communications | Content Creator",
    template: "%s | Kusum Sarkar",
  },
  description:
    "Kusum Sarkar is a BBA student focused on marketing and communications, and a content creator from Butwal, Nepal, known for content creation, public speaking, event marketing, and media hosting.",
  keywords: [
    "Kusum Sarkar",
    "Kusum Sarkar Nepal",
    "Kusum Sarkar portfolio",
    "BBA student Nepal",
    "social media influencer Nepal",
    "Butwal content creator",
    "Kusum Sarkar influencer",
    "Kusum Sarkar education",
  ],
  authors: [{ name: passenger.fullName }],
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kusum Sarkar | BBA Student | Marketing & Communications | Content Creator",
    description:
      "Explore the portfolio of Kusum Sarkar, a BBA student focused on marketing and communications and content creation from Butwal, Nepal.",
    url: siteUrl,
    siteName: passenger.fullName,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        type: "image/svg+xml",
        alt: `${passenger.fullName} — Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kusum Sarkar | BBA Student | Marketing & Communications | Content Creator",
    description:
      "Explore the portfolio of Kusum Sarkar, a BBA student focused on marketing and communications and content creation from Butwal, Nepal.",
    images: [`${siteUrl}/og-image.svg`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    jobTitle: passenger.title,
    url: siteUrl,
    email: passenger.email,
    telephone: passenger.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: passenger.city,
      addressCountry: passenger.country,
    },
    description: passenger.summary,
    knowsAbout: [
      "Content creation",
      "Social media influencing",
      "Event marketing",
      "Public speaking",
      "Frontend development",
      "Business administration",
    ],
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
