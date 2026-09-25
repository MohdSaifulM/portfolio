import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { profile } from "@/data/profile";
import "./globals.css";

/**
 * Type system: one family, three jobs.
 *
 * IBM Plex was designed in-house at IBM for their own engineering and
 * product communication — using it here (rather than the usual
 * Inter + generic-mono pairing) is a deliberate nod to the subject of the
 * site: an engineer's typeface, for an engineer's portfolio.
 *
 *  - Condensed → display face, used sparingly for the hero name & section
 *    titles, set large.
 *  - Sans       → body copy, everywhere text needs to be read comfortably.
 *  - Mono       → the terminal, nav labels, metadata, tech tags.
 */
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-plex-sans-condensed",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://mohammadsaiful.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  keywords: [
    "Mohammad Saiful",
    "Full Stack Developer",
    "AI Engineer",
    "Software Engineer Singapore",
    "React",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: profile.name, url: profile.socials.github }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexSansCondensed.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
