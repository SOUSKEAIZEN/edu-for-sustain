import React from "react";
import Image from "next/image";
import { BrainCircuit, Compass, Target } from "lucide-react";

export default function CognitiveCompetencies() {
  const competencies = [
    {
      icon: <BrainCircuit className="w-4 h-4 text-[#F47C68]" />,
      title: "Non-Linear Feedback Loops",
      desc: "Recognizing that actions have compounding or balancing feedback that can take decades to visibly manifest.",
    },
    {
      icon: <Compass className="w-4 h-4 text-[#5B7866]" />,
      title: "Interconnected Causality",
      desc: "Understanding how agricultural trade policies in one region influence groundwater quality and livelihoods globally.",
    },
    {
      icon: <Target className="w-4 h-4 text-[#263B52]" />,
      title: "Futures-Oriented Scenarios",
      desc: "Anticipating multi-decade planetary outcomes rather than optimizing solely for quarterly earnings.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-12 border border-[#172D49]/10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49]">
              Cognitive Competencies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172D49] leading-tight">
              Systems Thinking & <span className="text-[#F47C68]">Critical Inquiry</span>
            </h2>

            <p className="text-base text-[#172D49]/85 leading-relaxed font-sans">
              Sustainability challenges are &ldquo;wicked problems&rdquo;—they possess no simple root cause, no single isolated owner, and every intervention cascades into unintended consequences across ecosystems.
            </p>

            <div className="space-y-3 pt-1">
              {competencies.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#172D49]/10">
                  <h4 className="font-serif text-sm font-bold text-[#172D49] flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#172D49]/75 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-72 sm:h-88 w-full rounded-2xl overflow-hidden shadow-md border border-[#172D49]/10 bg-[#E6DED0]">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                alt="Students engaged in collaborative systems mapping workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-sm font-bold">
                  Participatory Problem Solving
                </p>
                <p className="font-display text-xs text-[#F4EBDD]/80">
                  Transforming theoretical equations into community resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
