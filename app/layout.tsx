import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import CTASection from "./cta/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gunal M | UI/UX Designer",
  description: "Portfolio of Gunal M, a passionate UI/UX designer crafting intuitive and engaging digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-custom mx-auto py-6">
          <Navbar />
          {children}
          <CTASection />
        </div>
      </body>
    </html>
  );
}
