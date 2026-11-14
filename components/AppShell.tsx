"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface AppShellProps {
  children: React.ReactNode;
}

/**
 * AppShell dynamically switches navigation chrome:
 * - On ECOLEARN pages: renders global ECOLEARN Navbar, Footer, and ScrollToTop.
 * - On ECOCYCLE (/e-waste) pages: delegates navigation completely to ECOCYCLE's own
 *   dedicated layout and header, preventing duplicate stacked navigation bars.
 */
export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isEwasteRoute = pathname?.startsWith("/e-waste");

  if (isEwasteRoute) {
    return <div className="min-h-screen flex flex-col">{children}</div>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
