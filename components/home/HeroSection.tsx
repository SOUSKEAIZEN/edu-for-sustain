import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Heading & Calls to Action */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6DED0] border border-[#172D49]/10 text-xs font-display font-bold uppercase tracking-wider text-[#172D49]">
            <Sparkles className="w-3.5 h-3.5 text-[#F47C68]" />
            <span>Academic Sustainability Initiative • EfS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#172D49] leading-[1.08]">
            Education is where a{" "}
            <span className="text-[#F47C68] relative inline-block">
              sustainable
            </span>{" "}
            future begins.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#172D49]/80 leading-relaxed max-w-2xl font-sans">
            Discover how knowledge, responsible choices and collective action can reshape our world.
            Learn the principles of sustainability and turn awareness into meaningful change.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/sdgs"
              className="inline-flex items-center justify-center gap-2 bg-[#F47C68] hover:bg-[#E46A55] text-white px-7 py-4 rounded-full text-sm font-display font-bold tracking-wider uppercase shadow-md transition-transform duration-150 hover:-translate-y-0.5"
            >
              <span>Explore the SDGs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#172D49] hover:bg-[#263B52] text-[#F4EBDD] px-7 py-4 rounded-full text-sm font-display font-bold tracking-wider uppercase transition-colors"
            >
              <span>Discover Our Mission</span>
              <ArrowUpRight className="w-4 h-4 text-[#F47C68]" />
            </Link>
          </div>

          <div className="pt-6 border-t border-[#172D49]/10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#172D49] block">
                17
              </span>
              <span className="font-display text-[11px] uppercase tracking-wider text-[#172D49]/70">
                UN Goals Mapped
              </span>
            </div>
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#5B7866] block">
                3
              </span>
              <span className="font-display text-[11px] uppercase tracking-wider text-[#172D49]/70">
                Core Pillars
              </span>
            </div>
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#F47C68] block">
                100%
              </span>
              <span className="font-display text-[11px] uppercase tracking-wider text-[#172D49]/70">
                Open Curriculum
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image Composition */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#E6DED0]">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=900&auto=format&fit=crop"
                alt="Students in ecological workshop learning sustainability"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-lg font-bold">
                  Transformative Ecological Pedagogy
                </p>
                <p className="font-sans text-xs text-[#F4EBDD]/80">
                  Connecting classroom theory to living natural systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs font-display text-[#172D49]/60">
        <span className="uppercase tracking-widest text-[10px]">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#F47C68]" />
      </div>
    </section>
  );
}
