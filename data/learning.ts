export interface LessonSection {
  subtitle: string;
  content: string[];
  keyHighlight?: string;
}

export interface LearningModule {
  id: string;
  number: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  category: "Foundations" | "Ecological" | "Circularity" | "Action" | "Society";
  image: string;
  overview: string;
  keyTakeaways: string[];
  sections: LessonSection[];
  reflectionPrompt: string;
}

export const learningModules: LearningModule[] = [
  {
    id: "intro-sustainability",
    number: "01",
    title: "Introduction to Sustainability",
    description: "Unpack the core definitions, history, and paradigm shift of Education for Sustainability (EfS).",
    difficulty: "Beginner",
    duration: "15 mins",
    category: "Foundations",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Sustainability is not simply environmental protection; it is a holistic philosophy of intergenerational stewardship. Learn how the Brundtland Commission defined sustainability in 1987 and why modern EfS transcends traditional environmental studies.",
    keyTakeaways: [
      "Brundtland definition: meeting the needs of the present without compromising future generations.",
      "Shift from passive environmental awareness to active transformative agency.",
      "The planetary boundary framework: staying within safe operating zones for humanity.",
    ],
    sections: [
      {
        subtitle: "The Evolution of Sustainability",
        content: [
          "In 1987, the UN World Commission on Environment and Development (Brundtland Commission) defined sustainable development as 'development that meets the needs of the present without compromising the ability of future generations to meet their own needs.'",
          "Over subsequent decades, this foundational concept has expanded into Education for Sustainability (EfS)—an educational philosophy that prepares students with critical thinking, ethical reasoning, and actionable skills to solve complex socio-ecological challenges.",
        ],
        keyHighlight: "True sustainability balances ecological health, social justice, and economic resilience simultaneously.",
      },
      {
        subtitle: "Why Traditional Education Falls Short",
        content: [
          "Traditional schooling often isolates subjects into rigid silos: biology, economics, history, and civics are taught independently.",
          "EfS dismantles these silos through systems thinking. A single cotton T-shirt, for example, connects hydrological cycles, pesticide run-off, fair wages in developing nations, and global consumer psychology.",
        ],
      },
    ],
    reflectionPrompt: "What is one routine decision you made today that connects to ecosystems or people miles away?",
  },
  {
    id: "three-pillars",
    number: "02",
    title: "Understanding the Three Pillars",
    description: "Explore the deep interconnections among the Environmental, Social, and Economic dimensions.",
    difficulty: "Beginner",
    duration: "20 mins",
    category: "Foundations",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop",
    overview:
      "The classic 'triple bottom line' or 'nested circles' model demonstrates that the economy is a wholly owned subsidiary of society, and society is completely enclosed within the natural environment.",
    keyTakeaways: [
      "The 3 Pillars: Environment (natural capital), Society (equity & well-being), and Economy (prosperity & resource flows).",
      "The 'Nested Spheres' model shows that human society cannot survive without a functioning biosphere.",
      "Trade-offs vs. synergies: creating solutions that deliver multi-pillar benefits.",
    ],
    sections: [
      {
        subtitle: "Pillar 1: Environment (Planetary Boundaries)",
        content: [
          "The environmental pillar concerns safeguarding biodiversity, stabilizing the atmosphere, replenishing freshwater tables, and preserving soil microbiomes.",
          "Without healthy ecosystems, clean air, and drinkable water, human societies face systemic breakdown. Ecological health is the bedrock of all human endeavor.",
        ],
        keyHighlight: "Nature does not need people, but people cannot survive without nature.",
      },
      {
        subtitle: "Pillar 2: Society (Equity and Human Rights)",
        content: [
          "The social pillar focuses on human dignity, universal quality education, healthcare, gender equality, and participatory democracy.",
          "Environmental damage disproportionately affects vulnerable and low-income populations. True sustainability cannot exist alongside rampant inequality.",
        ],
      },
      {
        subtitle: "Pillar 3: Economy (Circular & Regenerative)",
        content: [
          "The economic pillar redefines growth away from endless resource extraction toward regenerative value creation and circular resource flows.",
          "It prioritizes employment dignity, green innovation, and fair economic distribution over short-term quarterly profit.",
        ],
      },
    ],
    reflectionPrompt: "If a development project creates 500 jobs but destroys a mangrove wetland, how would a three-pillar analysis evaluate it?",
  },
  {
    id: "intro-sdgs",
    number: "03",
    title: "Introduction to the UN SDGs",
    description: "Understand the universal 2030 Agenda, its 17 interconnected goals, and the 5 Ps framework.",
    difficulty: "Intermediate",
    duration: "25 mins",
    category: "Foundations",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Adopted by all 193 United Nations Member States in 2015, the 17 Sustainable Development Goals provide a shared blueprint for peace and prosperity for people and the planet, now and into the future.",
    keyTakeaways: [
      "The 5 Ps: People, Planet, Prosperity, Peace, and Partnership.",
      "Indivisibility: Progress on one SDG accelerates progress on others (and vice versa).",
      "Localization: Translating high-level UN targets into municipal, campus, and personal actions.",
    ],
    sections: [
      {
        subtitle: "The 2030 Agenda Architecture",
        content: [
          "The 17 SDGs are built on 169 specific targets and 231 unique indicators measured globally. They replaced the Millennium Development Goals (MDGs) with a universal mandate applying to both developing and developed nations alike.",
          "The goals are organized around five critical dimensions: People, Planet, Prosperity, Peace, and Partnership (the 5 Ps).",
        ],
        keyHighlight: "No goal stands alone. Advancing clean energy (SDG 7) fuels climate mitigation (SDG 13) and health (SDG 3).",
      },
      {
        subtitle: "SDG 4.7: The Engine of All 17 Goals",
        content: [
          "Target 4.7 of SDG 4 explicitly calls on all nations to ensure that by 2030, all learners acquire the knowledge and skills needed to promote sustainable development.",
          "Without Education for Sustainability, citizens and leaders lack the cognitive frameworks and moral commitment needed to realize the remaining 16 goals.",
        ],
      },
    ],
    reflectionPrompt: "Which of the 17 SDGs is most urgent in your immediate city or local community today?",
  },
  {
    id: "climate-change",
    number: "04",
    title: "Climate Change and Environmental Protection",
    description: "Deep dive into greenhouse gas mechanics, tipping points, biodiversity preservation, and adaptive resilience.",
    difficulty: "Intermediate",
    duration: "25 mins",
    category: "Ecological",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Examine the physical science basis of climate change, the distinction between mitigation and adaptation, and practical ecological conservation methods that draw down carbon while rejuvenating habitat.",
    keyTakeaways: [
      "The Greenhouse Effect: Anthropogenic CO2, methane, and nitrous oxide altering Earth's radiative balance.",
      "Difference between mitigation (stopping emissions at source) and adaptation (building resilience to inevitable impacts).",
      "Nature-based solutions: wetland restoration, agroforestry, and coral reef conservation.",
    ],
    sections: [
      {
        subtitle: "Planetary Heating and Tipping Points",
        content: [
          "Global atmospheric carbon dioxide has surpassed 420 ppm, higher than any point in the past 2 million years. The resulting global average surface temperature anomaly is approaching 1.5°C above pre-industrial levels.",
          "Climate tipping elements—such as West Antarctic ice sheet instability, Amazon rainforest dieback, and permafrost thaw—present non-linear risks that must be averted through urgent, coordinated action.",
        ],
        keyHighlight: "Every tenth of a degree of warming avoided preserves millions of lives and thousands of species.",
      },
      {
        subtitle: "Mitigation vs Adaptation in Practice",
        content: [
          "Mitigation targets the causes: replacing fossil fuels with renewables, boosting building energy efficiency, and electrifying transit.",
          "Adaptation addresses the consequences: constructing flood barriers, planting drought-resistant crops, and creating urban cool-roof corridors.",
        ],
      },
    ],
    reflectionPrompt: "How can educational institutions turn their own campuses into living test-beds for climate mitigation?",
  },
  {
    id: "responsible-consumption",
    number: "05",
    title: "Responsible Consumption and Production",
    description: "Master the transition from linear 'take-make-waste' to circular economy principles and mindful lifestyles.",
    difficulty: "Intermediate",
    duration: "20 mins",
    category: "Circularity",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Global resource extraction has tripled since 1970. Explore how industrial ecology, cradle-to-cradle product design, and conscious consumer choices can decouple economic welfare from resource depletion.",
    keyTakeaways: [
      "The Linear Economy: Take, Make, Dispose -> The Circular Economy: Reduce, Reuse, Remanufacture, Regenerate.",
      "Life Cycle Assessment (LCA): Quantifying ecological impacts from raw extraction to end-of-life.",
      "Mission LiFE (Lifestyle for Environment): Individual demand driving systemic industrial supply reform.",
    ],
    sections: [
      {
        subtitle: "The Anatomy of Circularity",
        content: [
          "In a true circular economy, waste is designed out of the system from the beginning. Biological nutrients are safely returned to the soil, while technical nutrients (metals, plastics, silicon) circulate endlessly in closed loops.",
          "Strategies include product-as-a-service (leasing lighting rather than buying bulbs), modular repairability, and upcycling industrial waste streams.",
        ],
        keyHighlight: "The greenest product is the one that has already been manufactured and kept in active use.",
      },
      {
        subtitle: "Conscious Consumerism and E-Waste",
        content: [
          "Over 50 million metric tons of electronic waste are generated globally every year, containing precious metals alongside toxic heavy metals like lead and mercury.",
          "By resisting planned obsolescence, demanding the 'Right to Repair', and patronizing certified e-waste recyclers, consumers shift market incentives.",
        ],
      },
    ],
    reflectionPrompt: "What electronic device in your home could you repair, upgrade, or donate rather than replace?",
  },
  {
    id: "sustainable-communities",
    number: "06",
    title: "Sustainable Communities and Urban Living",
    description: "Explore green architecture, 15-minute cities, public transit networks, and inclusive neighborhood design.",
    difficulty: "Intermediate",
    duration: "25 mins",
    category: "Society",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1000&auto=format&fit=crop",
    overview:
      "More than 55% of the human population lives in urban areas, a figure set to reach 68% by 2050. Discover how sustainable urban planning creates walkable, resilient, and socially vibrant cities.",
    keyTakeaways: [
      "The 15-Minute City concept: essential daily needs within a 15-minute walk or bike ride.",
      "Urban heat island effect and biophilic architecture: integrating green roofs, pocket parks, and permeable pavements.",
      "Decentralized urban water management and municipal waste segregation at source.",
    ],
    sections: [
      {
        subtitle: "Rethinking Urban Density and Transit",
        content: [
          "Car-centric sprawling cities consume vast land, multiply greenhouse emissions, and generate toxic particulate pollution.",
          "Sustainable cities prioritize high-capacity electric transit, segregated cycleways, pedestrian boulevards, and mixed-use zoning that integrates residential, commercial, and civic spaces.",
        ],
        keyHighlight: "An advanced city is not where the poor have cars, but where the rich use public transportation.",
      },
      {
        subtitle: "Community Resilience and Social Cohesion",
        content: [
          "Sustainable neighborhoods cultivate social infrastructure: community gardens, repair cafes, tool libraries, and local emergency volunteer teams.",
          "When extreme weather events occur, communities with high social trust and decentralized resources recover significantly faster.",
        ],
      },
    ],
    reflectionPrompt: "How walkable and transit-friendly is your current neighborhood, and what one civic change would improve it most?",
  },
  {
    id: "community-action",
    number: "07",
    title: "Practical Community Action & Grassroots Leadership",
    description: "Translate EfS knowledge into measurable campus campaigns, local policies, and collective impact.",
    difficulty: "Advanced",
    duration: "30 mins",
    category: "Action",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Knowledge without action breeds eco-anxiety; action without knowledge breeds wasted effort. Learn step-by-step methodologies to conduct campus waste audits, mobilize student coalitions, and implement tangible sustainability projects.",
    keyTakeaways: [
      "The Action-Research methodology: Assess -> Plan -> Implement -> Audit -> Iterate.",
      "How to run a campus or workplace sustainability audit (energy, water, waste).",
      "Overcoming stakeholder inertia through collaborative value framing.",
    ],
    sections: [
      {
        subtitle: "The Five Stages of Student-Led Impact",
        content: [
          "1. Baseline Assessment: Measure the actual metric (e.g., kilograms of food waste discarded daily in the cafeteria or kilowatt-hours consumed per classroom).",
          "2. Coalitional Mobilization: Form an interdisciplinary club involving engineering, business, and arts students to bring diverse skills.",
          "3. Pilot Intervention: Implement a low-friction 14-day experiment (e.g., composting bins, LED retrofit, reusable container discounts).",
          "4. Data-Backed Advocacy: Present verified before/after metrics to institutional administrators.",
          "5. Policy Institutionalization: Embed the change into the official student handbook or institutional procurement charter.",
        ],
        keyHighlight: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
      },
      {
        subtitle: "Building Emotional Resilience Against Eco-Anxiety",
        content: [
          "Facing climate data can induce feelings of helplessness. EfS counters this through active hope—grounded optimism derived from collective agency.",
          "Celebrating localized wins and building deep community ties transforms passive worry into sustained, purposeful action.",
        ],
      },
    ],
    reflectionPrompt: "What is one tangible project you could launch on your campus or in your neighborhood this month?",
  },
];
