import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import CTASection from "./cta/page";
import Footer from "./footer/page";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gunal M | UI/UX Designer | Portfolio",
  description: "Professional UI/UX Designer specializing in intuitive digital experiences. View my portfolio of innovative designs, user interfaces, and creative solutions for web and mobile applications.",
  keywords: [
    "UI Designer",
    "UX Designer", 
    "User Interface Design",
    "User Experience Design",
    "Web Design",
    "Mobile App Design",
    "Digital Design",
    "Portfolio",
    "Designer",
    "Creative",
    "Figma",
    "Adobe Creative Suite",
    "Prototyping",
    "Wireframing",
    "Design System"
  ],
  authors: [{ name: "Gunal M" }],
  creator: "Gunal M",
  publisher: "Gunal M",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gunalm.in',
    siteName: 'Gunal M Portfolio',
    title: 'Gunal M | UI/UX Designer | Portfolio',
    description: 'Professional UI/UX Designer specializing in intuitive digital experiences. View my portfolio of innovative designs and creative solutions.',
    images: [
      {
        url: 'https://gunalm.in/images/gunal-photo.png',
        width: 1200,
        height: 630,
        alt: 'Gunal M - UI/UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gunal M | UI/UX Designer | Portfolio',
    description: 'Professional UI/UX Designer specializing in intuitive digital experiences.',
    images: ['https://gunalm.in/images/gunal-photo.png'],
    creator: '@gunal.uiux',
  },
  alternates: {
    canonical: 'https://gunalm.in',
  },
  category: 'Design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gunal M",
    "jobTitle": "UI/UX Designer",
    "description": "Professional UI/UX Designer specializing in intuitive digital experiences and creative solutions for web and mobile applications.",
    "url": "https://gunalm.in",
    "image": "https://gunalm.in/images/gunal-photo.png",
    "sameAs": [
      "https://www.linkedin.com/in/gunal-m-a35458241/",
      "https://www.youtube.com/@GunalDesigns",
      "https://www.instagram.com/gunal.uiux/",
      "https://dribbble.com/gunaldesigns01"
    ],
    "knowsAbout": [
      "User Interface Design",
      "User Experience Design", 
      "Web Design",
      "Mobile App Design",
      "Prototyping",
      "Wireframing",
      "Design Systems",
      "Figma",
      "Adobe Creative Suite"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "FSS"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "UI/UX Design Education"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Gunal M Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/gunal-photo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-custom mx-auto py-6">
          <Navbar />
          {children}
          <CTASection />
        </div>
        
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
