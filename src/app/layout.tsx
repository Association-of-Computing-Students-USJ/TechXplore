import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechXplore Edition 2.0 | On Chain Analysis for Beginners",
  description:
    "ACS TechXplore Edition 2.0 – Session 06: On Chain Analysis for Beginners. Hosted by the Association of Computing Students, University of Sri Jayewardenepura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
         * Three Google Fonts:
         * 1. Share Tech Mono – pixelated/tech font for H1 headers  → var(--font-tech)
         * 2. Caveat          – script/cursive for accent words       → var(--font-cursive)
         * 3. Poppins         – clean sans-serif for body text        → var(--font-body)
         */}
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Caveat:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
