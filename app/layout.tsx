import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Andrew Alalfy — Senior Software Engineer",
  description:
    "Full-Stack & Mobile Engineer based in Dubai, UAE. Specializing in Next.js, React Native, GraphQL, and enterprise-scale applications.",
  keywords: [
    "Andrew Alalfy",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Dubai",
    "UAE",
  ],
  openGraph: {
    title: "Andrew Alalfy — Senior Software Engineer",
    description:
      "Full-Stack & Mobile Engineer based in Dubai, UAE. Building enterprise applications at scale.",
    url: "https://andrewelalfy.com",
    siteName: "Andrew Alalfy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Alalfy — Senior Software Engineer",
    description: "Full-Stack & Mobile Engineer based in Dubai, UAE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${syne.variable} ${spaceMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-syne)" }}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
