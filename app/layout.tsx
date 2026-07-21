import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "700"],
});

const siteUrl = "https://pratyushpangotra.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pratyush Pangotra — Embedded Systems & AI Product Engineer",
  description:
    "Portfolio of Pratyush Pangotra, an Electronics & Communication Engineering undergraduate building embedded systems, developer tools, and AI-powered products.",
  keywords: [
    "Pratyush Pangotra",
    "Embedded Systems Engineer",
    "ESP32 Developer",
    "IoT Engineer",
    "AI Product Engineer",
    "Electronics Engineering Portfolio",
  ],
  authors: [{ name: "Pratyush Pangotra" }],
  creator: "Pratyush Pangotra",
  openGraph: {
    title: "Pratyush Pangotra — Embedded Systems & AI Product Engineer",
    description:
      "Building embedded systems, developer tools, and AI-powered products.",
    url: siteUrl,
    siteName: "Pratyush Pangotra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratyush Pangotra — Embedded Systems & AI Product Engineer",
    description:
      "Building embedded systems, developer tools, and AI-powered products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg font-sans antialiased selection:bg-copper selection:text-bg">
        {children}
      </body>
    </html>
  );
}
