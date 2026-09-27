import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOHAMMAD RIHAN MR — AI/ML & Creative Technology",
  description:
    "Portfolio of Mohammad Rihan MR — an AI/ML engineering student building intelligent products, modern web experiences and experimental digital projects.",
  keywords: [
    "Mohammad Rihan MR",
    "Rihan MR",
    "AI/ML Engineer",
    "Machine Learning",
    "Creative Technologist",
    "Web Developer",
    "Next.js",
    "PyTorch",
    "Computer Vision",
    "Portfolio",
  ],
  authors: [{ name: "Mohammad Rihan MR" }],
  creator: "Mohammad Rihan MR",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rihanmr.dev",
    title: "MOHAMMAD RIHAN MR — AI/ML & Creative Technology",
    description:
      "Portfolio of Mohammad Rihan MR — an AI/ML engineering student building intelligent products, modern web experiences and experimental digital projects.",
    siteName: "MOHAMMAD RIHAN MR",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOHAMMAD RIHAN MR — AI/ML & Creative Technology",
    description:
      "Portfolio of Mohammad Rihan MR — an AI/ML engineering student building intelligent products, modern web experiences and experimental digital projects.",
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#101010] text-[#F4F4F4]">
        <Navbar />
        <div className="flex-1 w-full flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
