import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6DED0] border border-[#172D49]/10 text-xs font-display font-bold uppercase tracking-wider text-[#172D49]">
          <Sparkles className="w-3.5 h-3.5 text-[#F47C68]" />
          <span>Educational Philosophy & Research Basis</span>
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#172D49] leading-tight">
          Rethinking Learning for a <span className="text-[#F47C68]">Regenerative</span> World
        </h1>

        <p className="text-base sm:text-lg text-[#172D49]/80 leading-relaxed font-sans">
          Education for Sustainability (EfS) is not an auxiliary subject; it is the fundamental framework required to prepare citizens for the complex socio-ecological challenges of the 21st century.
        </p>
      </div>

      <div className="mt-10 relative h-64 sm:h-80 md:h-[380px] w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-[#E6DED0]">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
          alt="Students and researchers studying outdoor ecological systems"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl">
          <span className="px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase bg-[#F47C68] text-white tracking-widest inline-block mb-2">
            Transformative Pedagogy
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold">
            From Passive Information Consumption to Ecological Stewardship
          </h2>
        </div>
      </div>
    </section>
  );
}
