import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AcademicVision() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-br from-[#172D49] to-[#0F1E31] text-white p-8 sm:p-12 border border-[#F4EBDD]/15 shadow-xl space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/10">
            Academic Vision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F4EBDD]">
            Transforming Universities into <span className="text-[#F47C68]">Regenerative Ecosystems</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4EBDD]/80 leading-relaxed font-sans">
            Universities must lead by example. Facilities, curricula, and student culture must unite around regenerative ecological agency.
          </p>
        </div>

        <div className="pt-4 border-t border-[#F4EBDD]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <p className="text-xs font-display uppercase tracking-widest text-[#DDE8DE]">
              Academic Research Paper Authors
            </p>
            <p className="text-sm font-medium text-[#F4EBDD]">
              Kunal Dagar • Manojit Sinha • Sanskar Aggarwal • Nitish Sharma • Dr. Meenakshi Gupta (Mentor)
            </p>
            <p className="text-xs text-[#F4EBDD]/60">
              Department of Engineering & Sustainability, Manav Rachna University, Faridabad
            </p>
          </div>

          <Link
            href="/research"
            className="px-6 py-2.5 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shrink-0"
          >
            <span>Read Research Report</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
