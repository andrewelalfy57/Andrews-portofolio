import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    "Senior Software Engineer at Emaar, Dubai. 4+ years building enterprise web and mobile apps across real-estate, life-sciences, and SaaS — Next.js, React Native, GraphQL.",
  keywords: [
    "Andrew Alalfy",
    "Andrew Ayman Alfy",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Native",
    "Next.js",
    "GraphQL",
    "Dubai",
    "Emaar",
    "Veeva",
  ],
  openGraph: {
    title: "Andrew Alalfy — Senior Software Engineer",
    description:
      "Senior Software Engineer at Emaar, Dubai. Building enterprise systems serving 10,000+ users.",
    url: "https://andrewelalfy.com",
    siteName: "Andrew Alalfy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Alalfy — Senior Software Engineer",
    description: "Building enterprise systems serving 10,000+ users from Dubai.",
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
      <body className={`${syne.variable} ${spaceMono.variable} antialiased`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main>{children}</main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
