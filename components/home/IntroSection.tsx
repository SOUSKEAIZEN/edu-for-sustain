import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntroSection() {
  const highlights = [
    "Holistic Systems Dynamics",
    "Intergenerational Ethics",
    "Experiential Community Action",
    "Active Hope & Agency",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-12 border border-[#172D49]/10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative h-72 sm:h-88 w-full rounded-2xl overflow-hidden shadow-md border border-[#172D49]/10 bg-[#E6DED0]">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                alt="Educators and students collaborating over sustainable environmental model"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-sm font-bold">
                  Beyond Rote Environmental Memorization
                </p>
                <p className="font-display text-[11px] text-[#F4EBDD]/80">
                  Nurturing critical questioning and civic responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49]">
              Foundational Concept
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172D49] leading-tight">
              What is Education for <span className="text-[#F47C68]">Sustainability?</span>
            </h2>

            <p className="text-base text-[#172D49]/85 leading-relaxed font-sans">
              Education for Sustainability (EfS) is an integrated approach that incorporates ecological understanding, systems thinking, and social responsibility into every dimension of education.
            </p>

            <p className="text-sm text-[#172D49]/75 leading-relaxed font-sans">
              Unlike conventional environmental studies—which often treat nature as an isolated subject to be memorized—EfS emphasizes that <strong>sustainability goes far beyond environmental conservation</strong>, incorporating social equity, democratic inclusion, and circular economic resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#172D49]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7866] shrink-0" />
                  <span className="text-xs font-medium text-[#172D49]">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#172D49] hover:text-[#F47C68] transition-colors"
              >
                <span>Read the Complete EfS Framework</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
