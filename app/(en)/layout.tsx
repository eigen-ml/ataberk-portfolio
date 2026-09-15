import type { Metadata, Viewport } from "next";
import { fontClassName } from "@/lib/fonts";
import { getContent, site } from "@/data/content";
import "../globals.css";

const copy = getContent("en");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: copy.meta.title,
  description: copy.meta.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      tr: "/tr",
    },
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: copy.meta.title,
    description: copy.meta.description,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: site.name + " — physics engineer and computational scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.title,
    description: copy.meta.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05070c",
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClassName}>
      <body>{children}</body>
    </html>
  );
}
