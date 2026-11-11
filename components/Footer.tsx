"use client";

import React from "react";
import Link from "next/link";
import { Globe, ArrowUp, ExternalLink, Leaf, ShieldCheck, BookOpen } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#172D49] text-[#F4EBDD] border-t border-[#F4EBDD]/15 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#F4EBDD]/15">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F47C68] to-[#E46A55] flex items-center justify-center text-white shadow-sm">
                <Globe className="w-5 h-5 text-[#FAF5EE]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F4EBDD]">
                ECOLEARN
              </span>
            </Link>

            <p className="font-serif italic text-base text-[#F47C68]">
              &ldquo;Learn today. Sustain tomorrow.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#F4EBDD]/80 leading-relaxed max-w-sm">
              Building a sustainable future through education, awareness and meaningful action. An academic frontend initiative translating sustainability research into tangible ecological agency.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-[#DDE8DE]">
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

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#F47C68] font-bold mb-3">
              Platform Routes
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-[#F47C68] transition-colors">Home Overview</Link></li>
              <li><Link href="/about" className="hover:text-[#F47C68] transition-colors">About EfS Framework</Link></li>
              <li><Link href="/sdgs" className="hover:text-[#F47C68] transition-colors">Interactive SDG Explorer</Link></li>
              <li><Link href="/learn" className="hover:text-[#F47C68] transition-colors">Learning Modules & Quiz</Link></li>
              <li><Link href="/take-action" className="hover:text-[#F47C68] transition-colors">Action Checklist & Challenge</Link></li>
              <li><Link href="/research" className="hover:text-[#F47C68] transition-colors">Academic Paper & Citations</Link></li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#F47C68] font-bold mb-3">
              UN & National Missions
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F4EBDD]/80">
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
            </ul>
          </div>

          {/* Research Authors */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#F47C68] font-bold mb-3">
              Research Authors
            </h3>
            <p className="text-xs text-[#DDE8DE] mb-1 font-medium">
              Manav Rachna University, Faridabad
            </p>
            <ul className="space-y-1 text-xs text-[#F4EBDD]/80">
              <li>• Kunal Dagar</li>
              <li>• Manojit Sinha</li>
              <li>• Sanskar Aggarwal</li>
              <li>• Nitish Sharma</li>
              <li>• Dr. Meenakshi Gupta (Mentor)</li>
            </ul>
            <div className="mt-3 pt-2 border-t border-[#F4EBDD]/10">
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

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F4EBDD]/70">
          <p>© {new Date().getFullYear()} ECOLEARN. Developed for Academic College Submission.</p>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-[#DDE8DE]">
              Targeting SDG 4.7 & Sustainable Pedagogy
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#263B52] hover:bg-[#F47C68] text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
