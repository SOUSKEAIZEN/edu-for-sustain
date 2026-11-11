export interface QuizQuestion {
  id: number;
  question: string;
  category: "Pillars" | "SDGs" | "Climate" | "Economy" | "Initiatives";
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary definition of Sustainable Development as established by the 1987 Brundtland Report?",
    category: "Pillars",
    options: [
      "Economic expansion that maximizes corporate profitability while planting replacement trees.",
      "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.",
      "Halting all industrial manufacturing and technological progress to protect pristine wilderness.",
      "Allocating 50% of national GDP solely to environmental protection agencies.",
    ],
    correctAnswer: 1,
    explanation:
      "The UN Brundtland Commission (Our Common Future, 1987) established this iconic definition, emphasizing intergenerational equity and balanced development across environmental, social, and economic spheres.",
  },
  {
    id: 2,
    question: "Which of the following best describes the Three Interconnected Pillars of Sustainability?",
    category: "Pillars",
    options: [
      "Environment, Society, and Economy",
      "Technology, Politics, and Defense",
      "Agriculture, Mining, and Manufacturing",
      "Curriculum, Examinations, and Grading",
    ],
    correctAnswer: 0,
    explanation:
      "Sustainability rests on three foundational pillars: Environment (ecological integrity), Society (social equity, human rights, and well-being), and Economy (regenerative and equitable prosperity).",
  },
  {
    id: 3,
    question: "Under the United Nations 2030 Agenda, which SDG Target specifically mandates Education for Sustainable Development?",
    category: "SDGs",
    options: [
      "SDG Target 1.1",
      "SDG Target 4.7",
      "SDG Target 9.5",
      "SDG Target 14.2",
    ],
    correctAnswer: 1,
    explanation:
      "SDG Target 4.7 explicitly aims to ensure that by 2030, all learners acquire knowledge and skills needed to promote sustainable development, human rights, gender equality, and global citizenship.",
  },
  {
    id: 4,
    question: "How does the 'Nested Spheres' model characterize the relationship between society and the natural biosphere?",
    category: "Pillars",
    options: [
      "Society exists independently of nature through modern digital technologies.",
      "The economy is the outermost sphere containing society and the environment.",
      "The economy is nested inside human society, which is wholly contained within the Earth's biosphere.",
      "Environment and society compete equally in a zero-sum financial marketplace.",
    ],
    correctAnswer: 2,
    explanation:
      "Ecological economists emphasize that human society is completely nested within planetary ecological boundaries. If the biosphere collapses, human society and its economy cannot survive.",
  },
  {
    id: 5,
    question: "Which Indian Government flagship mission directly addresses SDG 6 (Clean Water and Sanitation) by providing potable tap connections to rural homes?",
    category: "Initiatives",
    options: [
      "PM Ujjwala Yojana",
      "Jal Jeevan Mission (Har Ghar Jal)",
      "Digital India",
      "PM Mudra Yojana",
    ],
    correctAnswer: 1,
    explanation:
      "Jal Jeevan Mission aims to provide safe and adequate drinking water through individual household tap connections to all rural households in India, directly advancing SDG 6.",
  },
  {
    id: 6,
    question: "What core methodology differentiates Education for Sustainability (EfS) from traditional rote environmental education?",
    category: "Climate",
    options: [
      "Memorizing scientific Latin binomial names without community application.",
      "Replacing all field projects with standardized multiple-choice exams.",
      "Systems thinking, interdisciplinary problem-solving, and experiential community action.",
      "Restricting sustainability debates exclusively to tertiary environmental science majors.",
    ],
    correctAnswer: 2,
    explanation:
      "EfS emphasizes systems thinking, participatory inquiry, hands-on experiential projects, and values-driven community action rather than passive knowledge memorization.",
  },
  {
    id: 7,
    question: "In a true Circular Economy model, what is the fate of discarded manufactured materials?",
    category: "Economy",
    options: [
      "They are incinerated to generate short-term heat and landfill ash.",
      "They are perpetually recycled, remanufactured, or repurposed into closed industrial loops.",
      "They are exported to developing nations for indefinite storage.",
      "They are buried in deep geological subterranean caverns.",
    ],
    correctAnswer: 1,
    explanation:
      "A circular economy replaces the linear 'take-make-waste' model by designing out pollution and keeping products, components, and materials circulating at their highest utility and value at all times.",
  },
  {
    id: 8,
    question: "India's global citizen movement 'Mission LiFE' focuses primarily on which critical sustainability catalyst?",
    category: "Initiatives",
    options: [
      "Individual lifestyle choices and conscious micro-actions driving global demand for sustainability.",
      "Building commercial passenger space exploration capsules.",
      "Mandating mandatory crypto transactions for industrial polluters.",
      "Replacing physical universities entirely with metaverse classrooms.",
    ],
    correctAnswer: 0,
    explanation:
      "Mission LiFE (Lifestyle for Environment) mobilizes individuals worldwide to adopt simple, conscious daily habits (reducing food waste, saving water, conserving energy) to create systemic collective impact.",
  },
  {
    id: 9,
    question: "Which of the following is considered an ecological 'Tipping Point' with irreversible global repercussions?",
    category: "Climate",
    options: [
      "A temporary drop in seasonal winter snowfall in a municipal ski resort.",
      "A seasonal spike in domestic solar panel retail prices.",
      "Collapse of the West Antarctic Ice Sheet or widespread dieback of the Amazon Rainforest.",
      "The retirement of legacy coal train transport wagons.",
    ],
    correctAnswer: 2,
    explanation:
      "Climate tipping points are thresholds where a tiny additional increment of heating triggers runaway, non-linear, and potentially irreversible changes across planetary systems.",
  },
  {
    id: 10,
    question: "How does the '15-Minute City' urban planning concept advance sustainable communities (SDG 11)?",
    category: "SDGs",
    options: [
      "By limiting public transport access to 15 minutes per commuter daily.",
      "By ensuring all essential civic needs (groceries, school, healthcare, recreation) are within a 15-minute walk or bike ride.",
      "By restricting city boundaries to an exact radius of 15 kilometers.",
      "By charging highway tolls after 15 minutes of city highway driving.",
    ],
    correctAnswer: 1,
    explanation:
      "The 15-minute city reduces vehicular greenhouse gas emissions, fosters active public health through walking and cycling, and strengthens local neighborhood vitality.",
  },
];
