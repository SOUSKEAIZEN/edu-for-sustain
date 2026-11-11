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
    image: "https://images.unsplash.com/photo-1511497584788-87676104235f?q=80&w=700&auto=format&fit=crop",
    points: [
      "Climate action & decarbonization",
      "Biodiversity & wildlife habitats",
      "Water conservation & aquifers",
      "Natural resources stewardship",
      "Renewable energy transition",
    ],
    description:
      "The ecological pillar is the foundational sphere of all life. It encompasses the protection of planetary boundaries—atmospheric carbon, freshwater cycles, and terrestrial biodiversity.",
    principles: [
      "Precautionary Principle: Avoid irreversible environmental degradation even amidst uncertainty.",
      "Regenerative Capacity: Harvest renewable resources at rates slower than nature can regenerate them.",
      "Waste Absorption: Limit waste discharge to rates that natural sinks can assimilate safely.",
    ],
    sdgConnections: "Directly linked to SDG 6, SDG 12, SDG 13, SDG 14, and SDG 15.",
  },
  {
    id: "society",
    title: "SOCIETY",
    tagline: "Human Well-being & Social Equity",
    accentColor: "#F47C68",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=700&auto=format&fit=crop",
    points: [
      "Universal quality education (SDG 4)",
      "Gender & socioeconomic equality",
      "Community well-being & healthcare",
      "Inclusion & indigenous dignity",
      "Civic agency & social responsibility",
    ],
    description:
      "The social pillar champions human dignity, universal human rights, and equitable access to essential services for all communities.",
    principles: [
      "Intergenerational Equity: Ensuring today's choices do not impoverish future generations.",
      "Intragenerational Equity: Eradicating severe inequalities of wealth and opportunity today.",
      "Participatory Governance: Empowering communities to co-design the policies that affect them.",
    ],
    sdgConnections: "Directly linked to SDG 1, SDG 2, SDG 3, SDG 4, SDG 5, SDG 10, and SDG 16.",
  },
  {
    id: "economy",
    title: "ECONOMY",
    tagline: "Regenerative Prosperity & Circularity",
    accentColor: "#263B52",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=700&auto=format&fit=crop",
    points: [
      "Sustainable & regenerative growth",
      "Responsible production & circularity",
      "Green innovation & clean tech",
      "Fair employment & dignified wages",
      "Resource efficiency & zero-waste",
    ],
    description:
      "The economic pillar redefines prosperity away from infinite extractive throughput toward circular, resilient value creation.",
    principles: [
      "Circularity Over Linearity: Replace 'take-make-dispose' with closed industrial nutrient loops.",
      "True Cost Accounting: Internalizing ecological and public health costs into product pricing.",
      "Green Job Creation: Investing in solar installations, soil rejuvenation, and eco-design.",
    ],
    sdgConnections: "Directly linked to SDG 7, SDG 8, SDG 9, SDG 11, and SDG 12.",
  },
];
