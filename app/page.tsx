"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  TreePine,
  Users,
  Coins,
  Globe,
  Compass,
  Award,
  ChevronDown,
  Layers,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import PillarCard, { pillarsData } from "@/components/PillarCard";
import SdgCard from "@/components/SdgCard";
import SdgModal from "@/components/SdgModal";
import { sdgsData, SDG } from "@/data/sdgs";

export default function HomePage() {
  const [activeModalSdg, setActiveModalSdg] = useState<SDG | null>(null);

  // Selected featured SDGs: 4, 6, 7, 11, 12, 13, 15
  const featuredSdgIds = [4, 6, 7, 11, 12, 13, 15];
  const featuredSdgs = sdgsData.filter((s) => featuredSdgIds.includes(s.id));

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* =========================================================================
          HERO SECTION: Sophisticated Editorial Asymmetrical Layout
      ========================================================================= */}
      <section className="relative min-h-[88vh] flex items-center pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background ambient organic gradient blobs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#DDE8DE]/60 rounded-full blur-3xl -z-10 pointer-events-none blob-shape-1" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FCD8D2]/50 rounded-full blur-3xl -z-10 pointer-events-none blob-shape-2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6DED0] border border-[#172D49]/10 text-xs font-display font-bold uppercase tracking-wider text-[#172D49]">
              <Sparkles className="w-3.5 h-3.5 text-[#F47C68]" />
              <span>Academic Sustainability Initiative • EfS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#172D49] leading-[1.08]">
              Education is where a{" "}
              <span className="text-[#F47C68] relative inline-block">
                sustainable
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#F47C68]/30"
                  viewBox="0 0 250 12"
                  fill="none"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              future begins.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#172D49]/80 leading-relaxed max-w-2xl font-sans">
              Discover how knowledge, responsible choices and collective action can reshape our world.
              Learn the principles of sustainability and turn awareness into meaningful change.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/sdgs"
                className="inline-flex items-center justify-center gap-2 bg-[#F47C68] hover:bg-[#E46A55] text-white px-7 py-4 rounded-full text-sm font-display font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore the SDGs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#172D49] hover:bg-[#263B52] text-[#F4EBDD] px-7 py-4 rounded-full text-sm font-display font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Discover Our Mission</span>
                <ArrowUpRight className="w-4 h-4 text-[#F47C68]" />
              </Link>
            </div>

            {/* Micro stats banner */}
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
                  Open Learning
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Main Photographic Focal Point */}
              <div className="relative h-[430px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
                  alt="Young diverse students in natural open-air ecological workshop learning sustainability"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-black/10" />

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-lg font-bold">
                    Transformative Ecological Pedagogy
                  </p>
                  <p className="font-sans text-xs text-[#F4EBDD]/80">
                    Connecting classroom theory to living natural systems.
                  </p>
                </div>
              </div>

              {/* Floating Information Card 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#172D49]/10 max-w-[210px] hidden sm:block"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#DDE8DE] flex items-center justify-center text-[#5B7866]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display text-[10px] font-bold text-[#5B7866] uppercase tracking-wider">
                      Target 4.7
                    </span>
                    <p className="font-serif text-xs font-bold text-[#172D49]">
                      ESD Mandate
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#172D49]/70 leading-snug">
                  Universal sustainable literacy by 2030 across all learners.
                </p>
              </motion.div>

              {/* Floating Information Card 2: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#172D49]/95 text-[#F4EBDD] backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 max-w-[220px]"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F47C68] flex items-center justify-center text-white">
                    <TreePine className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display text-[10px] font-bold text-[#F47C68] uppercase tracking-wider">
                      Planetary Health
                    </span>
                    <p className="font-serif text-xs font-bold text-[#F4EBDD]">
                      Systems Thinking
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#F4EBDD]/70 leading-snug">
                  Interconnecting climate, equity and circular economics.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs font-display text-[#172D49]/60">
          <span className="uppercase tracking-widest text-[10px]">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#F47C68]" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT IS EDUCATION FOR SUSTAINABILITY? (Introduction)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#172D49]/10 shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-[#172D49]/10">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                  alt="Educator and diverse university students collaborating over sustainable environmental model"
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

            {/* Editorial Content Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49]">
                Foundational Concept
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172D49] leading-tight">
                What is Education for{" "}
                <span className="text-[#F47C68]">Sustainability?</span>
              </h2>

              <p className="text-base sm:text-lg text-[#172D49]/85 leading-relaxed font-sans">
                Education for Sustainability (EfS) is an integrated, transdisciplinary learning approach that incorporates ecological understanding, systems thinking, and social responsibility into every dimension of education.
              </p>

              <p className="text-sm sm:text-base text-[#172D49]/75 leading-relaxed font-sans">
                Unlike conventional environmental studies—which often treat nature as an isolated subject to be memorized—EfS emphasizes that <strong>sustainability goes far beyond environmental conservation</strong>. It recognizes that true long-term balance depends fundamentally upon social equity, participatory democracy, and regenerative economic models.
              </p>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#172D49]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7866] mt-0.5 shrink-0" />
                  <span className="text-xs font-medium text-[#172D49]">
                    Holistic Systems Dynamics
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#172D49]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#F47C68] mt-0.5 shrink-0" />
                  <span className="text-xs font-medium text-[#172D49]">
                    Intergenerational Ethics
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#172D49]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#263B52] mt-0.5 shrink-0" />
                  <span className="text-xs font-medium text-[#172D49]">
                    Experiential Community Action
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#172D49]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FCC30B] mt-0.5 shrink-0" />
                  <span className="text-xs font-medium text-[#172D49]">
                    Active Hope & Agency
                  </span>
                </div>
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

      {/* =========================================================================
          SECTION 3: THREE PILLARS OF SUSTAINABILITY
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Tripartite Foundation"
          title="The Three Interconnected"
          highlight="Pillars"
          description="Sustainability is not a single issue. It is a harmonious equilibrium between ecological health, human dignity, and regenerative economic prosperity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarsData.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY EfS MATTERS (Challenges Visual Storytelling)
      ========================================================================= */}
      <section className="bg-[#172D49] text-[#F4EBDD] py-20 sm:py-24 relative overflow-hidden">
        {/* Background decorative styling */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#263B52]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F47C68]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="Systemic Educational Crisis"
            title="Why Education for Sustainability"
            highlight="Matters Now"
            description="Our planet faces accelerating crises, yet mainstream curricula remain largely rooted in 20th-century extractive paradigms. Here are the core challenges EfS solves:"
            dark
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Challenge 1 */}
            <div className="p-6 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 hover:border-[#F47C68]/50 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F47C68]/20 text-[#F47C68] flex items-center justify-center font-display font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Climate Breakdown & Depletion
              </h3>
              <p className="text-xs text-[#F4EBDD]/75 leading-relaxed">
                Planetary heating, extreme droughts, and species extinction demand systemic interventions, not peripheral awareness flyers.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="p-6 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 hover:border-[#F47C68]/50 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#5B7866]/30 text-[#DDE8DE] flex items-center justify-center font-display font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Siloed Curricula
              </h3>
              <p className="text-xs text-[#F4EBDD]/75 leading-relaxed">
                Fragmented subjects fail to show how industrial economics directly drives habitat fragmentation and health vulnerabilities.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="p-6 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 hover:border-[#F47C68]/50 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FCC30B]/20 text-[#FCC30B] flex items-center justify-center font-display font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Deficit in Teacher Training
              </h3>
              <p className="text-xs text-[#F4EBDD]/75 leading-relaxed">
                Educators frequently lack institutional training in systems dynamics, life-cycle assessments, and participatory facilitation.
              </p>
            </div>

            {/* Challenge 4 */}
            <div className="p-6 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 hover:border-[#F47C68]/50 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F47C68]/20 text-[#F47C68] flex items-center justify-center font-display font-bold text-sm">
                04
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Unequal Resource Access
              </h3>
              <p className="text-xs text-[#F4EBDD]/75 leading-relaxed">
                Quality sustainability labs and environmental data are concentrated in elite universities, leaving regional institutions behind.
              </p>
            </div>

            {/* Challenge 5 */}
            <div className="p-6 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 hover:border-[#F47C68]/50 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#5B7866]/30 text-[#DDE8DE] flex items-center justify-center font-display font-bold text-sm">
                05
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                The Digital Divide
              </h3>
              <p className="text-xs text-[#F4EBDD]/75 leading-relaxed">
                Rural and marginalized communities face barriers in accessing open-source environmental tools and green technology skills.
              </p>
            </div>

            {/* Challenge 6 */}
            <div className="p-6 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 hover:border-[#F47C68]/50 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FCC30B]/20 text-[#FCC30B] flex items-center justify-center font-display font-bold text-sm">
                06
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Theoretical Without Action
              </h3>
              <p className="text-xs text-[#F4EBDD]/75 leading-relaxed">
                Students graduate having memorized environmental statutory acts without ever executing a real-world community audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURED SUSTAINABLE DEVELOPMENT GOALS
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase mb-3 bg-[#E6DED0] text-[#172D49] border border-[#172D49]/10">
              UN 2030 Global Agenda
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172D49]">
              Featured Sustainable{" "}
              <span className="text-[#F47C68]">Development Goals</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#172D49]/80 max-w-xl">
              Explore key targets mapped to Indian national missions, educational imperatives, and localized environmental solutions.
            </p>
          </div>

          <Link
            href="/sdgs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm self-start md:self-auto"
          >
            <span>Explore All 17 Goals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured SDGs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredSdgs.map((sdg) => (
            <SdgCard
              key={sdg.id}
              sdg={sdg}
              onSelect={(item) => setActiveModalSdg(item)}
            />
          ))}

          {/* 17th Goal Card Banner CTA */}
          <div className="bg-gradient-to-br from-[#172D49] to-[#263B52] rounded-2xl p-6 text-white flex flex-col justify-between shadow-editorial sm:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F47C68] text-white text-[10px] font-display font-bold uppercase tracking-wider">
                Interactive Catalog
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F4EBDD]">
                See the full 17-Goal Framework
              </h3>
              <p className="text-xs text-[#F4EBDD]/80 leading-relaxed">
                Filter by People, Planet, Prosperity, Peace and Partnership. Access detailed Indian initiative alignments.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/sdgs"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white text-[#172D49] font-display text-xs font-bold uppercase tracking-wider hover:bg-[#F47C68] hover:text-white transition-colors"
              >
                <span>Open SDG Explorer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: LEARNING EXPERIENCE SECTION
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FAF5EE] to-[#E6DED0] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#172D49]/10 shadow-editorial">
          <SectionHeading
            label="Holistic Curriculum"
            title="Move beyond awareness."
            highlight="Start making a difference."
            description="ECOLEARN equips learners with structured modules, critical thinking checkpoints, interactive daily challenges, and actionable campus research tools."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="p-6 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#DDE8DE] text-[#5B7866] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#172D49]">
                Structured Modules
              </h4>
              <p className="text-xs text-[#172D49]/75 leading-relaxed">
                7 deep-dive lessons spanning foundations, circular economy, climate mechanics, and urban living.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FCD8D2] text-[#F47C68] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#172D49]">
                Knowledge Checks
              </h4>
              <p className="text-xs text-[#172D49]/75 leading-relaxed">
                Interactive 10-question evaluation with instant pedagogical explanations and mastery scoring.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E6DED0] text-[#172D49] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#172D49]">
                Daily Action Checklist
              </h4>
              <p className="text-xs text-[#172D49]/75 leading-relaxed">
                Practical, point-based daily tasks stored in your browser to transform conscious habits into routine.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#263B52] text-[#F4EBDD] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#172D49]">
                Community Mobilization
              </h4>
              <p className="text-xs text-[#172D49]/75 leading-relaxed">
                7-day collective sustainability challenge to inspire friends, classmates, and municipal networks.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md"
            >
              <span>Explore Learning Modules & Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING CALL TO ACTION
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#172D49] text-white p-8 sm:p-14 lg:p-20 overflow-hidden text-center shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F47C68]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#5B7866]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/15">
              Empowerment Through Knowledge
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F4EBDD] leading-tight">
              &ldquo;The future is not something we wait for. It&apos;s something we{" "}
              <span className="text-[#F47C68]">create.&rdquo;</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#F4EBDD]/80 leading-relaxed max-w-xl mx-auto font-sans">
              Join thousands of students and educators transforming sustainability from an abstract concept into everyday transformative action.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/learn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/take-action"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#263B52] hover:bg-[#3A516B] text-[#F4EBDD] font-display text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Take Action Today</span>
                <ArrowUpRight className="w-4 h-4 text-[#F47C68]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Sdg Detail Modal */}
      <SdgModal
        sdg={activeModalSdg}
        onClose={() => setActiveModalSdg(null)}
      />
    </div>
  );
}
