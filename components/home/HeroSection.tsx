import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-4 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        {/* Left Column: Heading & Calls to Action */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6DED0] border border-[#172D49]/10 text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider text-[#172D49]">
            <Sparkles className="w-3 h-3 text-[#F47C68]" />
            <span>Academic Sustainability Initiative • EfS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#172D49] leading-[1.12] sm:leading-[1.08]">
            Education is where a{" "}
            <span className="text-[#F47C68] relative inline-block">
              sustainable
            </span>{" "}
            future begins.
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#172D49]/80 leading-relaxed max-w-2xl font-sans">
            Discover how knowledge, responsible choices and collective action can reshape our world.
            Learn the principles of sustainability and turn awareness into meaningful change.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <Link
              href="/sdgs"
              className="inline-flex items-center justify-center gap-2 bg-[#F47C68] hover:bg-[#E46A55] text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-display font-bold tracking-wider uppercase shadow-md transition-transform duration-150 hover:-translate-y-0.5 min-h-[44px]"
            >
              <span>Explore the SDGs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#172D49] hover:bg-[#263B52] text-[#F4EBDD] px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-display font-bold tracking-wider uppercase transition-colors min-h-[44px]"
            >
              <span>Discover Our Mission</span>
              <ArrowUpRight className="w-4 h-4 text-[#F47C68]" />
            </Link>
          </div>

          <div className="pt-4 border-t border-[#172D49]/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
            <div>
              <span className="font-display text-xl sm:text-3xl font-bold text-[#172D49] block">
                17
              </span>
              <span className="font-display text-[9px] sm:text-[11px] uppercase tracking-wider text-[#172D49]/70 leading-none block">
                UN Goals Mapped
              </span>
            </div>
            <div>
              <span className="font-display text-xl sm:text-3xl font-bold text-[#5B7866] block">
                3
              </span>
              <span className="font-display text-[9px] sm:text-[11px] uppercase tracking-wider text-[#172D49]/70 leading-none block">
                Core Pillars
              </span>
            </div>
            <div>
              <span className="font-display text-xl sm:text-3xl font-bold text-[#F47C68] block">
                100%
              </span>
              <span className="font-display text-[9px] sm:text-[11px] uppercase tracking-wider text-[#172D49]/70 leading-none block">
                Open Curriculum
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative h-[280px] sm:h-[380px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-lg border-2 sm:border-4 border-white bg-[#E6DED0]">
              <Image
                src="/images/hero/hero-students.jpg"
                alt="Students in ecological workshop learning sustainability"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <p className="font-serif text-base sm:text-lg font-bold">
                  Transformative Ecological Pedagogy
                </p>
                <p className="font-sans text-[11px] sm:text-xs text-[#F4EBDD]/80">
                  Connecting classroom theory to living natural systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-1 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-xs font-display text-[#172D49]/60">
        <span className="uppercase tracking-widest text-[10px]">Scroll to explore</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#F47C68]" />
      </div>
    </section>
  );
}
