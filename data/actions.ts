export interface ActionItem {
  id: string;
  category: "Environment" | "Society" | "Economy";
  title: string;
  description: string;
  impactScore: number; // e.g., 10 to 25 points
  estimatedTime: string;
  practicalTip: string;
}

export interface ChallengeDay {
  day: number;
  title: string;
  theme: "Environment" | "Society" | "Economy";
  summary: string;
  task: string;
  impactNote: string;
  badge: string;
}

export const dailyActionsData: ActionItem[] = [
  // Environment
  {
    id: "env-1",
    category: "Environment",
    title: "Vampire Power Elimination",
    description: "Switch off power strips and unplug idle chargers, monitors, and countertop appliances.",
    impactScore: 10,
    estimatedTime: "5 mins",
    practicalTip: "Idle phantom energy accounts for up to 10% of residential electric consumption.",
  },
  {
    id: "env-2",
    category: "Environment",
    title: "Zero Single-Use Plastic Day",
    description: "Carry a stainless steel water bottle, reusable canvas bag, and decline single-use cutlery.",
    impactScore: 15,
    estimatedTime: "All day",
    practicalTip: "Prevent an average of 4-6 plastic wrappers and containers from entering landfills daily.",
  },
  {
    id: "env-3",
    category: "Environment",
    title: "Active Low-Carbon Commute",
    description: "Walk, bicycle, or utilize mass electric transit instead of hailing a solo combustion cab.",
    impactScore: 20,
    estimatedTime: "Commute",
    practicalTip: "A 5 km cycling commute avoids approximately 1.2 kg of CO2 equivalent emissions.",
  },
  {
    id: "env-4",
    category: "Environment",
    title: "Cold Water Laundry & Air Dry",
    description: "Wash clothing in cold cycles and hang dry on an indoor or outdoor clothesline.",
    impactScore: 15,
    estimatedTime: "15 mins",
    practicalTip: "Up to 90% of washing machine energy is consumed solely heating water.",
  },
  {
    id: "env-5",
    category: "Environment",
    title: "5-Minute Shower Challenge",
    description: "Cap shower duration at 5 minutes to conserve hot treated municipal water.",
    impactScore: 15,
    estimatedTime: "5 mins",
    practicalTip: "Saves up to 45 liters of water and cuts heating utility fuel per shower.",
  },

  // Society
  {
    id: "soc-1",
    category: "Society",
    title: "Share Sustainability Resources",
    description: "Forward an evidence-based article, documentary, or EfS guide to friends or class group.",
    impactScore: 10,
    estimatedTime: "10 mins",
    practicalTip: "Peer-to-peer influence is statistically the strongest driver of pro-environmental norms.",
  },
  {
    id: "soc-2",
    category: "Society",
    title: "Support Inclusive Educational Access",
    description: "Donate or lend academic textbooks, digital devices, or tutoring hours to underprivileged youth.",
    impactScore: 20,
    estimatedTime: "30 mins",
    practicalTip: "Directly fosters SDG 4 (Quality Education) and SDG 10 (Reduced Inequalities).",
  },
  {
    id: "soc-3",
    category: "Society",
    title: "Community Civic Clean-Up or Garden Volunteering",
    description: "Spend 30 minutes tending a community garden, campus tree patch, or local park.",
    impactScore: 25,
    estimatedTime: "30 mins",
    practicalTip: "Restores local green spaces while cultivating neighborhood social cohesion.",
  },
  {
    id: "soc-4",
    category: "Society",
    title: "Amplify Grassroots Environmental Voices",
    description: "Read and share perspectives from indigenous environmental stewards and frontline climate advocates.",
    impactScore: 15,
    estimatedTime: "15 mins",
    practicalTip: "Ensures climate justice and diverse community wisdom guide environmental discussions.",
  },

  // Economy
  {
    id: "eco-1",
    category: "Economy",
    title: "Perform a Zero-Food-Waste Plate Audit",
    description: "Plan meals carefully, store perishables properly, and compost organic scraps.",
    impactScore: 20,
    estimatedTime: "20 mins",
    practicalTip: "Food waste decomposing in landfills is responsible for 8-10% of global greenhouse emissions.",
  },
  {
    id: "eco-2",
    category: "Economy",
    title: "The 48-Hour Impulsive Purchase Pause",
    description: "Enforce a mandatory 48-hour delay before buying any non-essential product online.",
    impactScore: 15,
    estimatedTime: "Mindset",
    practicalTip: "Halts retail micro-consumerism and curbs delivery freight packaging waste.",
  },
  {
    id: "eco-3",
    category: "Economy",
    title: "Repair Over Replace (Right to Repair)",
    description: "Mend a torn garment, re-glue a shoe sole, or replace a phone battery instead of discarding.",
    impactScore: 25,
    estimatedTime: "40 mins",
    practicalTip: "Extending a product's lifecycle by just one year shrinks its carbon footprint by 25%.",
  },
  {
    id: "eco-4",
    category: "Economy",
    title: "Patronize Local & Regenerative Businesses",
    description: "Source groceries and goods from local farmers, repair cafes, or certified B-corps.",
    impactScore: 20,
    estimatedTime: "20 mins",
    practicalTip: "Keeps capital circulating within local regenerative community economies.",
  },
];

export const sevenDayChallenge: ChallengeDay[] = [
  {
    day: 1,
    title: "The Plastic Detox",
    theme: "Environment",
    summary: "Eliminate all single-use plastics from your routine today.",
    task: "Carry reusable bags, water bottle, and metal straw. Say an absolute 'no' to disposable packaging.",
    impactNote: "Prevents petrochemical plastics from polluting waterways and choking marine life.",
    badge: "Eco Pioneer",
  },
  {
    day: 2,
    title: "Energy Vampire Hunt",
    theme: "Environment",
    summary: "Identify and conquer phantom electric loads across your residence.",
    task: "Audit every wall socket. Disconnect television standby plugs, laptop chargers, and microwave displays when not in use.",
    impactNote: "Cuts immediate household kilowatt-hour draw and reduces grid peaking emissions.",
    badge: "Kilowatt Guardian",
  },
  {
    day: 3,
    title: "Planetary Plate Day",
    theme: "Economy",
    summary: "Adopt a plant-forward, zero-waste dining routine for the day.",
    task: "Enjoy nutrient-dense legumes, grains, and seasonal vegetables. Ensure absolutely zero edible food is trashed.",
    impactNote: "Saves up to 1,500 liters of virtual water and significantly cuts agricultural greenhouse footprint.",
    badge: "Mindful Diner",
  },
  {
    day: 4,
    title: "Water Stewardship Audit",
    theme: "Environment",
    summary: "Calculate and shrink your direct and indirect water footprint.",
    task: "Take a 4-minute shower, fix leaky faucets with washers, and capture vegetable rinsing water for indoor potted plants.",
    impactNote: "Protects depleting regional aquifers and honors SDG 6 (Clean Water and Sanitation).",
    badge: "Hydro Steward",
  },
  {
    day: 5,
    title: "Zero-Carbon In Motion",
    theme: "Environment",
    summary: "Choose human-powered or collective public transit for all daily travels.",
    task: "Walk, ride a bicycle, or catch the metro/electric bus. Track your active kilometers logged.",
    impactNote: "Directly combats urban smog, tailpipe NOx emissions, and boosts cardiovascular stamina.",
    badge: "Clean Commuter",
  },
  {
    day: 6,
    title: "Revive & Mend (Circular Economy)",
    theme: "Economy",
    summary: "Celebrate longevity by repairing, cleaning, or repurposing existing gear.",
    task: "Sew a missing button, clean sneaker outsoles, update software rather than discarding old devices, or donate books.",
    impactNote: "Decouples personal happiness from resource extraction and planned obsolescence.",
    badge: "Circularity Champion",
  },
  {
    day: 7,
    title: "Pass The Torch: Community Impact",
    theme: "Society",
    summary: "Turn personal awareness into collective, systemic community change.",
    task: "Invite two friends to take this 7-day challenge, submit an eco-suggestion to your campus admin, or plant a native seedling.",
    impactNote: "Ignites exponential peer networks that transform isolated actions into enduring societal norms.",
    badge: "EfS Ambassador",
  },
];
