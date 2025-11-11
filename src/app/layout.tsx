import type { Metadata } from "next";
import { Caprasimo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const caprasimo = Caprasimo({
  weight: "400",
  variable: "--font-caprasimo",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GIS Day 2025",
  description: "Even details for GIS Day 2025 in Pittsburgh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${caprasimo.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex w-full items-center justify-between border-b-2 px-12 py-8">
          <div className="font-display text-3xl">GIS Day 2025</div>
          <div>
            <nav>
              <ul className="flex space-x-4 font-sans text-xl">
                <li>
                  <Link href="/program">Program</Link>
                </li>
                <li>
                  <Link href="/lightning-talks">Lightning Talks</Link>
                </li>
                <li>
                  <Link href="/short-talks">Short Talks</Link>
                </li>
                <li>
                  <Link href="/map-gallery">Map Gallery</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto max-w-4xl px-4 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
