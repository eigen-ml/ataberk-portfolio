import type { Metadata, Viewport } from "next";
import { fontClassName } from "@/lib/fonts";
import { getContent, site } from "@/data/content";
import "../globals.css";

const copy = getContent("tr");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: copy.meta.title,
  description: copy.meta.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "technology",
  alternates: {
    canonical: "/tr",
    languages: {
      en: "/",
      tr: "/tr",
    },
  },
  openGraph: {
    type: "profile",
    url: "/tr",
    title: copy.meta.title,
    description: copy.meta.description,
    siteName: site.name,
    locale: "tr_TR",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: site.name + " — fizik mühendisi",
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
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05070c",
};

export default function TurkishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={fontClassName}>
      <body>{children}</body>
    </html>
  );
}
