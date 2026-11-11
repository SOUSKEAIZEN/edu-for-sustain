"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  TreePine,
  Users,
  Coins,
  BrainCircuit,
  Compass,
  Lightbulb,
  Layers,
  GraduationCap,
  ShieldCheck,
  Target,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PillarCard, { pillarsData } from "@/components/PillarCard";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"traditional" | "efs">("efs");

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* =========================================================================
          HERO / HEADER
      ========================================================================= */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6DED0] border border-[#172D49]/10 text-xs font-display font-bold uppercase tracking-wider text-[#172D49]">
            <Sparkles className="w-3.5 h-3.5 text-[#F47C68]" />
            Educational Philosophy & Research Basis
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#172D49] leading-tight">
            Rethinking Learning for a{" "}
            <span className="text-[#F47C68]">Regenerative</span> World
          </h1>

          <p className="text-base sm:text-lg text-[#172D49]/80 leading-relaxed font-sans">
            Education for Sustainability (EfS) is not an auxiliary subject; it is the fundamental framework required to prepare citizens for the complex socio-ecological challenges of the 21st century.
          </p>
        </div>

        {/* Hero Image Showcase */}
        <div className="mt-12 relative h-72 sm:h-96 md:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop"
            alt="University students and researchers studying outdoor ecological systems"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl">
            <span className="px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase bg-[#F47C68] text-white tracking-widest inline-block mb-2">
              Transformative Pedagogy
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold">
              From Passive Information Consumption to Ecological Stewardship
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: WHAT IS EfS & WHY DOES IT BELONG IN EDUCATION?
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49]">
              The Core Thesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172D49] leading-tight">
              Why Does Sustainability Belong in the{" "}
              <span className="text-[#F47C68]">Core Curriculum?</span>
            </h2>

            <p className="text-base text-[#172D49]/80 leading-relaxed">
              Traditional education arose during the industrial revolution to prepare individuals for linear, assembly-line tasks and resource extraction. In doing so, it created deep disciplinary silos that divorced economic ambition from ecological limits.
            </p>

            <p className="text-sm text-[#172D49]/75 leading-relaxed">
              Education for Sustainability (EfS) addresses this mismatch. By infusing ecological literacy, ethical decision-making, and critical inquiry into all disciplines—from computer science and civil engineering to management and arts—EfS empowers learners to construct circular, resilient solutions.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAF5EE] border-l-4 border-[#F47C68] space-y-1">
              <p className="font-serif text-base font-bold text-[#172D49] italic">
                &ldquo;All education is environmental education. By what is included or omitted, students learn that they are either part of or apart from the natural world.&rdquo;
              </p>
              <p className="text-xs font-display text-[#172D49]/60 font-semibold">
                — Prof. David W. Orr, Ecological Literacy Pioneer
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#FAF5EE] rounded-3xl p-8 border border-[#172D49]/10 shadow-editorial space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#172D49]">
                Core Pillars of EfS Learning
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#172D49]/10">
                  <div className="w-10 h-10 rounded-xl bg-[#DDE8DE] text-[#5B7866] flex items-center justify-center shrink-0">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#172D49]">
                      1. Ecological Integrity
                    </h4>
                    <p className="text-xs text-[#172D49]/75 leading-relaxed mt-1">
                      Respecting thermodynamic limits, biogeochemical cycles, and biodiversity preservation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#172D49]/10">
                  <div className="w-10 h-10 rounded-xl bg-[#FCD8D2] text-[#F47C68] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#172D49]">
                      2. Social Equity & Dignity
                    </h4>
                    <p className="text-xs text-[#172D49]/75 leading-relaxed mt-1">
                      Universal human rights, environmental justice, gender parity, and inclusive community participation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#172D49]/10">
                  <div className="w-10 h-10 rounded-xl bg-[#E6DED0] text-[#172D49] flex items-center justify-center shrink-0">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#172D49]">
                      3. Regenerative Economics
                    </h4>
                    <p className="text-xs text-[#172D49]/75 leading-relaxed mt-1">
                      Closed industrial nutrient cycles, cradle-to-cradle manufacturing, and decoupling welfare from resource waste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRADITIONAL VS EfS COMPARATIVE ANALYSIS (Interactive Tab)
      ========================================================================= */}
      <section className="bg-[#172D49] text-[#F4EBDD] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Comparative Pedagogy"
            title="Traditional Education vs."
            highlight="Education for Sustainability"
            description="Examine how the underlying assumptions, methodology, and aims of higher education transform under an EfS paradigm."
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Card */}
            <div className="p-8 rounded-3xl bg-[#263B52]/50 border border-[#F4EBDD]/15 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F4EBDD]/15">
                <span className="px-3.5 py-1 rounded-full text-xs font-display uppercase tracking-wider bg-white/10 text-[#F4EBDD]">
                  Conventional Model
                </span>
                <span className="text-xs font-display text-[#F47C68]">Linear & Siloed</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Traditional Rote Education
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-[#F4EBDD]/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F47C68] mt-2 shrink-0" />
                  <span>
                    <strong>Isolated Disciplines:</strong> Engineering, economics, and biology taught independently with zero systems cohesion.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F47C68] mt-2 shrink-0" />
                  <span>
                    <strong>Passive Transmission:</strong> Instructor lectures; students memorize statutory acts for end-of-term written exams.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F47C68] mt-2 shrink-0" />
                  <span>
                    <strong>Linear Economic Bias:</strong> Assumes nature is an infinite raw material source and limitless waste landfill.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F47C68] mt-2 shrink-0" />
                  <span>
                    <strong>Individual Competition:</strong> Evaluates rank and individual exam scoring rather than collaborative societal problem-solving.
                  </span>
                </li>
              </ul>
            </div>

            {/* EfS Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#263B52] to-[#172D49] border-2 border-[#F47C68] shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F47C68]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#F4EBDD]/20">
                <span className="px-3.5 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#F47C68] text-white">
                  Modern Paradigm
                </span>
                <span className="text-xs font-display text-[#DDE8DE] font-semibold">
                  Holistic & Action-Centered
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Education for Sustainability (EfS)
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-[#F4EBDD]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B7866] shrink-0 mt-0.5" />
                  <span>
                    <strong>Transdisciplinary Systems Thinking:</strong> Examines feedback loops, unintended delays, and complex ecological-social interactions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B7866] shrink-0 mt-0.5" />
                  <span>
                    <strong>Experiential Living Labs:</strong> Campus solar arrays, cafeteria waste, and regional wetlands utilized as direct educational research sites.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B7866] shrink-0 mt-0.5" />
                  <span>
                    <strong>Regenerative Economics:</strong> Designs cradle-to-cradle products and values circular resource flows over short-term extraction.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B7866] shrink-0 mt-0.5" />
                  <span>
                    <strong>Collaborative Civic Agency:</strong> Equips graduates with negotiation, ethical empathy, and collective impact capabilities.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CRITICAL THINKING & SYSTEMS THINKING
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#172D49]/10 shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49]">
                Cognitive Competencies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172D49] leading-tight">
                Systems Thinking & <span className="text-[#F47C68]">Critical Inquiry</span>
              </h2>

              <p className="text-base text-[#172D49]/85 leading-relaxed font-sans">
                Sustainability challenges are &ldquo;wicked problems&rdquo;—they possess no simple root cause, no single isolated owner, and every intervention cascades into unintended consequences across ecosystems.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#172D49]/10">
                  <h4 className="font-serif text-base font-bold text-[#172D49] flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-[#F47C68]" />
                    Non-Linear Feedback Loops
                  </h4>
                  <p className="text-xs text-[#172D49]/75 mt-1 leading-relaxed">
                    Recognizing that actions have compounding or balancing feedback that can take decades to visibly manifest.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#172D49]/10">
                  <h4 className="font-serif text-base font-bold text-[#172D49] flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#5B7866]" />
                    Interconnected Causality
                  </h4>
                  <p className="text-xs text-[#172D49]/75 mt-1 leading-relaxed">
                    Understanding how agricultural trade policies in one continent influence groundwater quality and smallholder livelihoods thousands of miles away.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#172D49]/10">
                  <h4 className="font-serif text-base font-bold text-[#172D49] flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#263B52]" />
                    Futures-Oriented Scenarios
                  </h4>
                  <p className="text-xs text-[#172D49]/75 mt-1 leading-relaxed">
                    Anticipating multi-decade planetary outcomes rather than optimizing solely for quarterly earnings or annual budget cycles.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-2 border-[#172D49]/10">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                  alt="Students engaged in collaborative systems mapping workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif text-base font-bold">
                    Participatory Problem Solving
                  </p>
                  <p className="font-display text-xs text-[#F4EBDD]/80">
                    Transforming theoretical equations into tangible community resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE 5-STAGE EfS LEARNING JOURNEY (Timeline)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Pedagogical Architecture"
          title="The 5-Stage EfS"
          highlight="Learning Journey"
          description="How students progress from basic environmental curiosity to strategic, sustained ecological leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: "01",
              title: "Awakening",
              desc: "Deconstruct linear worldview. Discover planetary boundaries and the 17 SDGs.",
              accent: "#172D49",
            },
            {
              step: "02",
              title: "Inquiry",
              desc: "Trace supply chains, life cycle impacts, and evaluate socioeconomic inequities.",
              accent: "#263B52",
            },
            {
              step: "03",
              title: "Systems Mapping",
              desc: "Model dynamic feedback loops between environment, society, and municipal policies.",
              accent: "#5B7866",
            },
            {
              step: "04",
              title: "Living Lab Action",
              desc: "Implement hands-on campus audits (energy, food waste, water) with empirical data.",
              accent: "#F47C68",
            },
            {
              step: "05",
              title: "Civic Leadership",
              desc: "Institutionalize long-term policy reform and mobilize community networks.",
              accent: "#E46A55",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-sm flex flex-col justify-between hover:shadow-editorial transition-all group"
            >
              <div>
                <span
                  className="font-display text-3xl font-bold block mb-3 group-hover:scale-105 transition-transform"
                  style={{ color: item.accent }}
                >
                  {item.step}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#172D49] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#172D49]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#172D49]/10 flex items-center text-[10px] font-display font-semibold uppercase tracking-wider text-[#172D49]/60">
                Phase {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: VISION FOR HIGHER EDUCATION & RESEARCH ATTRIBUTION
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#172D49] to-[#0F1E31] text-white p-8 sm:p-12 lg:p-16 border border-[#F4EBDD]/15 shadow-2xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/10">
              Academic Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EBDD]">
              Transforming Universities into{" "}
              <span className="text-[#F47C68]">Regenerative Ecosystems</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F4EBDD]/80 leading-relaxed font-sans">
              Universities must lead by example. A campus cannot preach decarbonization while burning coal-heavy grid electricity, or teach social equity while ignoring frontline workers. EfS demands institutional coherence—where facilities, curricula, and student culture unite around regenerative values.
            </p>
          </div>

          <div className="pt-4 border-t border-[#F4EBDD]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-xs font-display uppercase tracking-widest text-[#DDE8DE]">
                Academic Research Paper Authors
              </p>
              <p className="text-sm font-medium text-[#F4EBDD]">
                Kunal Dagar • Manas Sharma • Nitish Sharma • Dr. Meenakshi Gupta (Mentor)
              </p>
              <p className="text-xs text-[#F4EBDD]/60">
                Department of Engineering & Sustainability, Manav Rachna University, Faridabad
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/research"
                className="px-6 py-3 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Read Full Research Paper</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
