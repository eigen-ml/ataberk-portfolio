import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.site.url),
  title: portfolioData.site.title,
  description: portfolioData.site.description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: portfolioData.person.name, url: "/" }],
  creator: portfolioData.person.name,
  category: "technology",
  openGraph: {
    type: "profile",
    url: "/",
    title: portfolioData.site.title,
    description: portfolioData.site.description,
    siteName: portfolioData.person.name,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Ata Berk Öztürk — Physics Engineer and computational scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.site.title,
    description: portfolioData.site.description,
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
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070b0e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={
        geistSans.variable + " " + geistMono.variable + " antialiased"
      }
    >
      <body>{children}</body>
    </html>
  );
}
