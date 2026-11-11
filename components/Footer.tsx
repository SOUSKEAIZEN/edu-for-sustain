"use client";

import React from "react";
import Link from "next/link";
import { Globe, ArrowUp, Heart, BookOpen, ShieldCheck, ExternalLink, Leaf } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#172D49] text-[#F4EBDD] border-t border-[#F4EBDD]/15 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#263B52]/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F47C68]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F4EBDD]/15">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F47C68] to-[#E46A55] flex items-center justify-center text-white shadow-md">
                <Globe className="w-5 h-5 text-[#FAF5EE]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F4EBDD]">
                ECOLEARN
              </span>
            </Link>

            <p className="font-serif italic text-lg text-[#F47C68]">
              &ldquo;Learn today. Sustain tomorrow.&rdquo;
            </p>

            <p className="text-sm text-[#F4EBDD]/80 leading-relaxed max-w-sm">
              Building a sustainable future through education, awareness and meaningful action. An academic frontend initiative translating sustainability research into tangible ecological agency.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#DDE8DE]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#263B52] border border-[#F4EBDD]/10">
                <Leaf className="w-3.5 h-3.5 text-[#F47C68]" />
                EfS Academic Project
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#263B52] border border-[#F4EBDD]/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DDE8DE]" />
                Manav Rachna University
              </span>
            </div>
          </div>

          {/* Platform Routes */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#F47C68] font-bold mb-4">
              Platform Routes
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#F47C68] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F47C68] transition-colors">
                  About EfS Framework
                </Link>
              </li>
              <li>
                <Link href="/sdgs" className="hover:text-[#F47C68] transition-colors">
                  Interactive SDG Explorer
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-[#F47C68] transition-colors">
                  Learning Modules & Quiz
                </Link>
              </li>
              <li>
                <Link href="/take-action" className="hover:text-[#F47C68] transition-colors">
                  Action Checklist & Challenge
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-[#F47C68] transition-colors">
                  Academic Paper & Citations
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Frameworks */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#F47C68] font-bold mb-4">
              UN & National Missions
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F4EBDD]/80">
              <li>
                <a
                  href="https://sdgs.un.org/goals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>UN 2030 Agenda (SDGs)</span>
                  <ExternalLink className="w-3 h-3 text-[#F47C68]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.niti.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>NITI Aayog SDG Index</span>
                  <ExternalLink className="w-3 h-3 text-[#F47C68]" />
                </a>
              </li>
              <li>
                <a
                  href="https://missionlife-moefcc.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Mission LiFE India</span>
                  <ExternalLink className="w-3 h-3 text-[#F47C68]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.unesco.org/en/education-sustainable-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>UNESCO ESD for 2030</span>
                  <ExternalLink className="w-3 h-3 text-[#F47C68]" />
                </a>
              </li>
              <li>
                <Link href="/research#sdg-table" className="hover:text-[#F47C68] transition-colors">
                  Indian Initiative Mappings
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Attribution */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#F47C68] font-bold mb-4">
              Research Authors
            </h3>
            <p className="text-xs text-[#DDE8DE] mb-2 font-medium">
              Manav Rachna University, Faridabad
            </p>
            <ul className="space-y-1.5 text-xs text-[#F4EBDD]/80">
              <li>• Kunal Dagar</li>
              <li>• Manas Sharma</li>
              <li>• Nitish Sharma</li>
              <li>• Dr. Meenakshi Gupta (Mentor)</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-[#F4EBDD]/10">
              <Link
                href="/research"
                className="text-xs text-[#F47C68] hover:underline inline-flex items-center gap-1 font-display"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Read Full Academic Report
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4EBDD]/70">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} ECOLEARN. Developed for Academic Submission.</span>
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[#DDE8DE]">
              Targeting SDG 4.7 & Sustainable Pedagogy
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#263B52] hover:bg-[#F47C68] text-white transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
