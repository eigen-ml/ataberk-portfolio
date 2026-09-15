import { IBM_Plex_Mono, Sora } from "next/font/google";

export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontClassName = sora.variable + " " + plexMono.variable;
