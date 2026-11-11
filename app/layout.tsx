import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#172D49",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://edu-for-sustain.vercel.app"),
  title: "ECOLEARN — Education for Sustainability (EfS)",
  description:
    "Learn today. Sustain tomorrow. Building a sustainable future through education, awareness and meaningful action. Academic platform integrating the UN SDGs, the three pillars of sustainability, and experiential learning.",
  keywords: [
    "Education for Sustainability",
    "EfS",
    "Sustainable Development Goals",
    "UN SDGs",
    "Three Pillars of Sustainability",
    "Climate Action",
    "Environmental Education",
    "Manav Rachna University",
  ],
  authors: [{ name: "ECOLEARN EfS Research Team" }],
  openGraph: {
    title: "ECOLEARN — Education for Sustainability",
    description: "Building a sustainable future through education, awareness and meaningful action.",
    url: "https://edu-for-sustain.vercel.app",
    siteName: "ECOLEARN",
    images: [
      {
        url: "/images/hero/hero-students.jpg",
        width: 1200,
        height: 630,
        alt: "ECOLEARN - Education for Sustainability",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#172D49] font-sans antialiased selection:bg-[#F47C68] selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
