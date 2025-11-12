import type { Metadata } from "next";
import { Caprasimo, JetBrains_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavMenu } from "@/ui/nav-menu";

const caprasimo = Caprasimo({
  weight: "400",
  variable: "--font-caprasimo",
  subsets: ["latin"],
});

const geistSans = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
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
        <header className="flex w-full items-center border-b-2 px-4 py-4 md:justify-between lg:px-12 lg:py-8">
          <NavMenu small />
          <div className="ml-4 font-display text-3xl md:ml-0">
            <Link style={{ textDecoration: "none", fontWeight: 400 }} href="/">
              GIS Day 2025
            </Link>
          </div>
          <div>
            <NavMenu />
          </div>
        </header>
        <main className="container mx-auto max-w-4xl px-4 py-12 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
