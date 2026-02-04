import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kinetic Solar Solutions | Factory-Direct Solar Equipment",
    template: "%s | Kinetic Solar Solutions",
  },
  description:
    "Premium wholesale solar equipment at competitive prices for businesses, startups, and consumers. Factory-direct pricing for global markets.",
  keywords: [
    "solar panels",
    "wholesale solar",
    "solar equipment",
    "inverters",
    "batteries",
    "solar startup",
    "equatorial solar",
    "Asia solar",
    "Africa solar",
    "Latin America solar",
  ],
  authors: [{ name: "Kinetic Solar Solutions" }],
  creator: "Kinetic Solar Solutions",
  metadataBase: new URL("https://kineticsolar.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kineticsolar.com",
    siteName: "Kinetic Solar Solutions",
    title: "Kinetic Solar Solutions | Factory-Direct Solar Equipment",
    description:
      "Premium wholesale solar equipment at competitive prices for businesses, startups, and consumers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic Solar Solutions | Factory-Direct Solar Equipment",
    description:
      "Premium wholesale solar equipment at competitive prices for businesses, startups, and consumers.",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
