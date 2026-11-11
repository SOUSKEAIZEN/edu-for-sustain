import React from "react";
import { TreePine, Users, Coins, CheckCircle2 } from "lucide-react";

export default function DimensionCards() {
  const dimensions = [
    {
      icon: <TreePine className="w-5 h-5 text-[#5B7866]" />,
      bg: "bg-[#DDE8DE]",
      title: "Environment",
      accent: "#5B7866",
      items: [
        "Save electricity & eliminate phantom loads",
        "Conserve water with 5-minute showers",
        "Eliminate single-use plastic bottles & cutlery",
        "Plant, adopt and nurture native trees",
        "Utilize bicycles or electrified mass transit",
      ],
    },
    {
      icon: <Users className="w-5 h-5 text-[#F47C68]" />,
      bg: "bg-[#FCD8D2]",
      title: "Society",
      accent: "#F47C68",
      items: [
        "Share open educational sustainability guides",
        "Support inclusive education & donate study devices",
        "Volunteer in local cleanup drives & gardens",
        "Promote gender equality & environmental justice",
        "Amplify vulnerable frontline climate voices",
      ],
    },
    {
      icon: <Coins className="w-5 h-5 text-[#172D49]" />,
      bg: "bg-[#E6DED0]",
      title: "Economy",
      accent: "#172D49",
      items: [
        "Avoid food waste & compost kitchen scraps",
        "Buy responsibly with a 48-hour purchase pause",
        "Repair, sew, and mend instead of discarding",
        "Support local circular businesses & B-corps",
        "Properly segregate electronic and toxic waste",
      ],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {dimensions.map((dim, idx) => (
        <div
          key={idx}
          className="p-6 rounded-3xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-sm space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className={`w-10 h-10 rounded-xl ${dim.bg} flex items-center justify-center`}>
              {dim.icon}
            </div>

            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#172D49]/60 block">
              Dimension 0{idx + 1}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#172D49]">
              {dim.title}
            </h3>

            <ul className="space-y-2 text-xs text-[#172D49]/85">
              {dim.items.map((it, iIdx) => (
                <li key={iIdx} className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: dim.accent }}
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
