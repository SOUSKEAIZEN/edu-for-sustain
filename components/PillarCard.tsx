"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TreePine, Users, Coins, ArrowRight, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface PillarData {
  id: "environment" | "society" | "economy";
  title: string;
  tagline: string;
  accentColor: string;
  image: string;
  points: string[];
  description: string;
  principles: string[];
  sdgConnections: string;
}

export const pillarsData: PillarData[] = [
  {
    id: "environment",
    title: "ENVIRONMENT",
    tagline: "Planetary Boundaries & Natural Capital",
    accentColor: "#5B7866",
    image: "https://images.unsplash.com/photo-1511497584788-87676104235f?q=80&w=1000&auto=format&fit=crop",
    points: [
      "Climate action & decarbonization",
      "Biodiversity & wildlife habitats",
      "Water conservation & aquifers",
      "Natural resources stewardship",
      "Renewable energy transition",
    ],
    description:
      "The ecological pillar is the foundational sphere of all life. It encompasses the protection of planetary boundaries—the atmospheric carbon cycle, freshwater cycles, healthy ocean chemistry, and thriving terrestrial biodiversity upon which human life depends.",
    principles: [
      "Precautionary Principle: Avoid irreversible environmental degradation even amidst scientific uncertainty.",
      "Regenerative Capacity: Harvest renewable resources at rates slower than nature can regenerate them.",
      "Waste Absorption: Limit waste discharge to rates that natural sinks can assimilate harmlessly.",
    ],
    sdgConnections: "Directly linked to SDG 6, SDG 12, SDG 13, SDG 14, and SDG 15.",
  },
  {
    id: "society",
    title: "SOCIETY",
    tagline: "Human Well-being & Social Equity",
    accentColor: "#F47C68",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
    points: [
      "Universal quality education (SDG 4)",
      "Gender & socioeconomic equality",
      "Community well-being & healthcare",
      "Inclusion & indigenous dignity",
      "Civic agency & social responsibility",
    ],
    description:
      "The social pillar champions human dignity, universal human rights, and equitable access to essential services. Sustainability cannot be achieved if millions remain trapped in extreme poverty, educational deprivation, or institutional disenfranchisement.",
    principles: [
      "Intergenerational Equity: Ensuring today's choices do not impoverish the opportunities of future generations.",
      "Intragenerational Equity: Eradicating severe inequalities of wealth, healthcare, and educational opportunity today.",
      "Participatory Governance: Empowering communities to co-design the policies that affect their livelihoods.",
    ],
    sdgConnections: "Directly linked to SDG 1, SDG 2, SDG 3, SDG 4, SDG 5, SDG 10, and SDG 16.",
  },
  {
    id: "economy",
    title: "ECONOMY",
    tagline: "Regenerative Prosperity & Circularity",
    accentColor: "#263B52",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    points: [
      "Sustainable & regenerative growth",
      "Responsible production & circularity",
      "Green innovation & clean tech",
      "Fair employment & dignified wages",
      "Resource efficiency & zero-waste",
    ],
    description:
      "The economic pillar redefines prosperity away from infinite, extractive throughput toward circular, resilient value creation. It ensures that businesses thrive by solving ecological and social challenges rather than profiting from their degradation.",
    principles: [
      "Circularity Over Linearity: Replace 'take-make-dispose' with closed industrial nutrient loops.",
      "True Cost Accounting: Internalizing ecological and public health costs into product pricing.",
      "Green Job Creation: Investing in solar installations, soil rejuvenation, retrofitting, and eco-design.",
    ],
    sdgConnections: "Directly linked to SDG 7, SDG 8, SDG 9, SDG 11, and SDG 12.",
  },
];

export default function PillarCard({ pillar }: { pillar: PillarData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getIcon = () => {
    switch (pillar.id) {
      case "environment":
        return <TreePine className="w-6 h-6 text-[#5B7866]" />;
      case "society":
        return <Users className="w-6 h-6 text-[#F47C68]" />;
      case "economy":
        return <Coins className="w-6 h-6 text-[#263B52]" />;
    }
  };

  return (
    <>
      <div className="bg-[#FAF5EE] rounded-3xl overflow-hidden border border-[#172D49]/10 shadow-editorial hover:shadow-float transition-all duration-300 flex flex-col group h-full">
        {/* Card Image */}
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={pillar.image}
            alt={pillar.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
            {getIcon()}
            <span className="font-display text-xs font-bold tracking-wider text-[#172D49]">
              PILLAR
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-serif text-2xl font-bold text-[#F4EBDD]">
              {pillar.title}
            </h3>
            <p className="font-display text-xs text-[#F4EBDD]/90">
              {pillar.tagline}
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-6">
          <ul className="space-y-3">
            {pillar.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#172D49]/85">
                <CheckCircle2
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: pillar.accentColor }}
                />
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#E6DED0] hover:bg-[#F47C68] hover:text-white text-[#172D49] font-display text-xs font-bold uppercase tracking-wider transition-colors duration-200 group-hover:bg-[#172D49] group-hover:text-[#F4EBDD]"
          >
            <span>Explore {pillar.title} Dimension</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Interactive Pillar Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#0F1E31]/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FAF5EE] rounded-3xl shadow-2xl overflow-hidden border border-[#172D49]/15 z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-48 w-full shrink-0">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172D49] via-[#172D49]/60 to-transparent" />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#F47C68] text-white mb-2">
                    Sustainability Pillar
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    {pillar.title} Dimension
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#172D49] mb-2">
                    Core Understanding
                  </h4>
                  <p className="text-sm text-[#172D49]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#172D49] mb-3">
                    Foundational Principles
                  </h4>
                  <div className="space-y-2.5">
                    {pillar.principles.map((principle, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#E6DED0]/60 border border-[#172D49]/10 text-xs text-[#172D49] leading-relaxed"
                      >
                        {principle}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#DDE8DE]/70 border border-[#5B7866]/20">
                  <h5 className="font-display text-xs font-bold uppercase tracking-wider text-[#5B7866] mb-1">
                    UN Sustainable Development Goals Alignment
                  </h5>
                  <p className="text-xs text-[#172D49] font-medium">
                    {pillar.sdgConnections}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-[#172D49] text-white hover:bg-[#F47C68] font-display text-xs font-bold tracking-wider uppercase transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
