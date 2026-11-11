import React from "react";
import Image from "next/image";
import { Clock, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { LearningModule } from "@/data/learning";

interface ModuleCardProps {
  module: LearningModule;
  isCompleted: boolean;
  onOpen: (mod: LearningModule) => void;
}

export default function ModuleCard({
  module,
  isCompleted,
  onOpen,
}: ModuleCardProps) {
  return (
    <div className="bg-[#FAF5EE] rounded-3xl overflow-hidden border border-[#172D49]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
      <div className="relative h-48 w-full overflow-hidden bg-[#E6DED0]">
        <Image
          src={module.image}
          alt={module.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 bg-white/90 px-2.5 py-0.5 rounded-full text-xs font-display font-bold text-[#172D49] shadow-sm">
          Module {module.number}
        </div>

        {isCompleted && (
          <div className="absolute top-3 right-3 bg-[#5B7866] text-white px-2.5 py-0.5 rounded-full text-xs font-display font-bold shadow-sm flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Completed</span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-[10px] font-display uppercase tracking-wider text-[#DDE8DE] block mb-0.5">
            {module.category}
          </span>
          <h3 className="font-serif text-lg font-bold leading-tight">
            {module.title}
          </h3>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <p className="text-xs text-[#172D49]/80 leading-relaxed">
          {module.description}
        </p>

        <div className="pt-2 border-t border-[#172D49]/10 flex items-center justify-between text-xs font-display text-[#172D49]/70">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#F47C68]" />
            {module.duration}
          </span>
          <span className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-[#5B7866]" />
            {module.difficulty}
          </span>
        </div>

        <button
          onClick={() => onOpen(module)}
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
        >
          <span>{isCompleted ? "Review Module" : "Start Learning"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
