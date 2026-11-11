export interface SDG {
  id: number;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "People" | "Planet" | "Prosperity" | "Peace" | "Partnership";
  color: string;
  targets: string[];
  indianInitiatives: {
    name: string;
    description: string;
  }[];
  educationFocus: string;
  image: string;
}

export const sdgsData: SDG[] = [
  {
    id: 1,
    number: "01",
    title: "No Poverty",
    shortDescription: "End poverty in all its forms everywhere by ensuring social protection and equal economic access.",
    fullDescription:
      "Eradicating poverty in all its forms remains one of humanity's greatest challenges. While extreme poverty rates have been cut by more than half since 1990, millions still struggle for the most basic human needs. EfS fosters financial literacy, empathy, and sustainable livelihoods.",
    category: "People",
    color: "#E5243B",
    targets: [
      "Eradicate extreme poverty for all people everywhere",
      "Implement nationally appropriate social protection systems",
      "Ensure equal rights to economic resources and basic services",
      "Build resilience of the poor to climate-related extreme events",
    ],
    indianInitiatives: [
      {
        name: "PM Jan Dhan Yojana (PMJDY)",
        description: "National mission for comprehensive financial inclusion ensuring universal access to banking facilities.",
      },
      {
        name: "Aspirational Districts Programme",
        description: "Targeted transformation of 112 underdeveloped districts across India with focus on health, nutrition, and education.",
      },
      {
        name: "MGNREGA",
        description: "Guarantees 100 days of wage employment per financial year to rural households to enhance livelihood security.",
      },
    ],
    educationFocus: "Understanding systemic poverty, social equity, circular local economies, and financial empowerment.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    number: "02",
    title: "Zero Hunger",
    shortDescription: "End hunger, achieve food security, improve nutrition and promote sustainable agriculture.",
    fullDescription:
      "A profound change of the global food and agriculture system is needed to nourish today's 800 million hungry people and the additional 2 billion expected by 2050. EfS connects agro-ecology, food waste awareness, and regenerative farming practices.",
    category: "People",
    color: "#DDA63A",
    targets: [
      "End hunger and ensure access by all people to safe, nutritious food",
      "End all forms of malnutrition",
      "Double agricultural productivity through sustainable practices",
      "Maintain genetic diversity of seeds, cultivated plants, and farmed animals",
    ],
    indianInitiatives: [
      {
        name: "National Food Security Act (NFSA)",
        description: "Provides subsidized food grains to approximately two-thirds of India's population through the Targeted Public Distribution System.",
      },
      {
        name: "PM Poshan (Mid-Day Meal)",
        description: "Provides hot cooked meals to school children, improving nutritional status and school enrollment.",
      },
      {
        name: "Paramparagat Krishi Vikas Yojana",
        description: "Promoting organic farming and chemical-free soil health rejuvenation across agricultural clusters.",
      },
    ],
    educationFocus: "Regenerative agriculture, minimizing kitchen and supply-chain food waste, and food system sovereignty.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    number: "03",
    title: "Good Health and Well-being",
    shortDescription: "Ensure healthy lives and promote well-being for all at all ages through accessible care.",
    fullDescription:
      "Ensuring healthy lives and promoting well-being at all ages is essential to sustainable development. EfS bridges planetary health with human health, exploring how clean air, water, and mental resilience interact.",
    category: "People",
    color: "#4C9F38",
    targets: [
      "Reduce global maternal mortality and end preventable newborn deaths",
      "End epidemics of AIDS, tuberculosis, malaria, and water-borne diseases",
      "Achieve universal health coverage including financial risk protection",
      "Substantially reduce deaths from hazardous chemicals and pollution",
    ],
    indianInitiatives: [
      {
        name: "Ayushman Bharat (PM-JAY)",
        description: "The world's largest government-funded healthcare assurance scheme offering ₹5 lakh per family per year for secondary and tertiary care.",
      },
      {
        name: "National Health Mission (NHM)",
        description: "Strengthening rural and urban public healthcare systems, maternal health, and disease control.",
      },
    ],
    educationFocus: "One Health framework, environmental toxicology, holistic wellness, and community sanitation.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    number: "04",
    title: "Quality Education",
    shortDescription: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities.",
    fullDescription:
      "Education enables upward socioeconomic mobility and is a key to escaping poverty. EfS sits at the core of SDG 4 (specifically Target 4.7), integrating ecological literacy, critical inquiry, and values-based pedagogy into every level of schooling.",
    category: "People",
    color: "#C5192D",
    targets: [
      "Ensure free, equitable, and quality primary and secondary education for all",
      "Ensure equal access to affordable vocational and tertiary education",
      "Target 4.7: Ensure all learners acquire knowledge and skills for sustainable development",
      "Substantially expand scholarships and qualified teacher training globally",
    ],
    indianInitiatives: [
      {
        name: "National Education Policy (NEP) 2020",
        description: "Emphasizes multidisciplinary education, environmental awareness, experiential learning, and holistic pedagogy.",
      },
      {
        name: "Samagra Shiksha Abhiyan",
        description: "An overarching program for the school education sector extending from pre-school to class 12.",
      },
      {
        name: "DIKSHA & SWAYAM",
        description: "Digital infrastructure initiatives democratizing quality learning resources nationwide.",
      },
    ],
    educationFocus: "Transformative pedagogy, experiential learning, systems thinking, and environmental stewardship.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    number: "05",
    title: "Gender Equality",
    shortDescription: "Achieve gender equality and empower all women and girls across social, economic, and civic spheres.",
    fullDescription:
      "Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous, and sustainable world. Women are disproportionately impacted by climate disasters yet lead environmental conservation worldwide.",
    category: "People",
    color: "#FF3A21",
    targets: [
      "End all forms of discrimination against women and girls everywhere",
      "Eliminate violence against women and girls in public and private spheres",
      "Recognize and value unpaid care and domestic work",
      "Ensure full and effective participation and equal leadership opportunities",
    ],
    indianInitiatives: [
      {
        name: "Beti Bachao Beti Padhao",
        description: "National initiative ensuring protection, survival, and higher education for the girl child.",
      },
      {
        name: "PM Ujjwala Yojana",
        description: "Providing clean cooking LPG connections to women in low-income households, improving indoor air quality and dignity.",
      },
    ],
    educationFocus: "Ecofeminism, gender equity in resource stewardship, and inclusive leadership development.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    number: "06",
    title: "Clean Water and Sanitation",
    shortDescription: "Ensure availability and sustainable management of water and sanitation for all communities.",
    fullDescription:
      "Water scarcity affects more than 40 percent of people around the world, an alarming figure that is projected to rise with climate change. EfS inspires watershed conservation, rainwater harvesting, and groundwater replenishment.",
    category: "Planet",
    color: "#26BDE2",
    targets: [
      "Achieve universal and equitable access to safe and affordable drinking water",
      "Achieve access to adequate sanitation and hygiene for all, ending open defecation",
      "Improve water quality by reducing pollution, eliminating dumping, and minimizing release of hazardous chemicals",
      "Substantially increase water-use efficiency and protect water-related ecosystems",
    ],
    indianInitiatives: [
      {
        name: "Jal Jeevan Mission (Har Ghar Jal)",
        description: "Providing functional household tap connections to every rural household across India with potable water.",
      },
      {
        name: "Swachh Bharat Mission (Clean India)",
        description: "Nationwide movement achieving open defecation-free status and decentralized solid/liquid waste management.",
      },
      {
        name: "Namami Gange Mission",
        description: "Integrated conservation mission for effective abatement of pollution, conservation, and rejuvenation of the National River Ganga.",
      },
    ],
    educationFocus: "Hydrological literacy, community water auditing, rainwater harvesting design, and aquatic ecosystem protection.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    number: "07",
    title: "Affordable and Clean Energy",
    shortDescription: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
    fullDescription:
      "Energy is central to nearly every major challenge and opportunity the world faces today. Transitioning to renewable energy sources—solar, wind, and hydro—is vital for mitigating climate disruptions.",
    category: "Prosperity",
    color: "#FCC30B",
    targets: [
      "Ensure universal access to affordable, reliable, and modern energy services",
      "Increase substantially the share of renewable energy in the global energy mix",
      "Double the global rate of improvement in energy efficiency",
      "Expand infrastructure and upgrade technology for supplying modern and sustainable energy",
    ],
    indianInitiatives: [
      {
        name: "PM-KUSUM & National Solar Mission",
        description: "Massive scale-up of grid-connected solar power plants and solar agriculture pumps targeting 500 GW non-fossil capacity by 2030.",
      },
      {
        name: "Saubhagya Scheme",
        description: "Pradhan Mantri Sahaj Bijli Har Ghar Yojana achieving universal household electrification across rural and remote areas.",
      },
      {
        name: "UJALA Scheme",
        description: "World's largest LED bulb distribution program drastically cutting residential energy consumption.",
      },
    ],
    educationFocus: "Renewable energy thermodynamics, community microgrids, energy conservation behavior, and decarbonization paths.",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 8,
    number: "08",
    title: "Decent Work and Economic Growth",
    shortDescription: "Promote sustained, inclusive and sustainable economic growth, full and productive employment.",
    fullDescription:
      "Sustainable economic growth will require societies to create conditions that allow people to have quality jobs that stimulate the economy without harming the environment. EfS prepares learners for green jobs and circular enterprises.",
    category: "Prosperity",
    color: "#A21942",
    targets: [
      "Sustain per capita economic growth in accordance with national circumstances",
      "Achieve higher levels of economic productivity through diversification and innovation",
      "Promote development-oriented policies that support productive activities and entrepreneurship",
      "Progressively improve global resource efficiency in consumption and production",
    ],
    indianInitiatives: [
      {
        name: "Skill India Mission",
        description: "Empowering youth with certified industry-ready skills, including green technology vocations and solar technician roles.",
      },
      {
        name: "PM Mudra Yojana",
        description: "Providing collateral-free loans up to ₹10 lakh to micro and small enterprises to ignite grassroots entrepreneurship.",
      },
      {
        name: "Make in India & Startup India",
        description: "Fostering domestic innovation, manufacturing competitiveness, and sustainable cleantech incubators.",
      },
    ],
    educationFocus: "Green economy vocations, fair trade ethics, circular venture creation, and sustainable supply-chain modeling.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 9,
    number: "09",
    title: "Industry, Innovation and Infrastructure",
    shortDescription: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
    fullDescription:
      "Investments in infrastructure—transport, irrigation, energy and information technology—are crucial to achieving sustainable development and empowering communities. EfS drives eco-design and low-carbon industrial processes.",
    category: "Prosperity",
    color: "#FD6925",
    targets: [
      "Develop quality, reliable, sustainable, and resilient infrastructure",
      "Promote inclusive and sustainable industrialization",
      "Increase access of small-scale enterprises to financial services and value chains",
      "Upgrade infrastructure and retrofit industries to make them sustainable",
    ],
    indianInitiatives: [
      {
        name: "PM Gati Shakti",
        description: "National master plan for multi-modal connectivity infrastructure improving logistic efficiency and low-carbon freight.",
      },
      {
        name: "Atal Innovation Mission (AIM)",
        description: "Establishing tinkering labs in schools and incubation hubs across universities to spur sustainable tech solutions.",
      },
      {
        name: "National Green Hydrogen Mission",
        description: "Strategic program to position India as a global hub for production, usage, and export of green hydrogen.",
      },
    ],
    educationFocus: "Biomimicry, cradle-to-cradle product design, resilient materials, and low-carbon technological systems.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 10,
    number: "10",
    title: "Reduced Inequalities",
    shortDescription: "Reduce inequality within and among countries by ensuring equitable social and economic opportunities.",
    fullDescription:
      "Inequalities based on income, sex, age, disability, sexual orientation, race, class, and religion persist across the world. EfS emphasizes inclusive social contracts and environmental justice.",
    category: "Prosperity",
    color: "#DD1367",
    targets: [
      "Progressively achieve and sustain income growth of the bottom 40 percent of the population",
      "Empower and promote the social, economic, and political inclusion of all",
      "Ensure equal opportunity and reduce inequalities of outcome",
      "Adopt policies, especially fiscal, wage, and social protection policies",
    ],
    indianInitiatives: [
      {
        name: "Stand Up India Scheme",
        description: "Facilitating bank loans between ₹10 lakh and ₹1 crore to at least one SC/ST and one woman borrower per bank branch.",
      },
      {
        name: "Accessible India Campaign (Sugamya Bharat)",
        description: "Universal accessibility for persons with disabilities in built environment, transport, and ICT ecosystems.",
      },
    ],
    educationFocus: "Environmental justice, equitable resource distribution, human rights, and social inclusion frameworks.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 11,
    number: "11",
    title: "Sustainable Cities and Communities",
    shortDescription: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    fullDescription:
      "Cities are hubs for ideas, commerce, culture, and science. However, rapid urbanization challenges public transit, waste disposal, and clean air. EfS educates on urban ecology, walkability, and green building architecture.",
    category: "Prosperity",
    color: "#FD9D24",
    targets: [
      "Ensure access for all to adequate, safe, and affordable housing and basic services",
      "Provide access to safe, affordable, accessible, and sustainable transport systems",
      "Enhance inclusive and sustainable urbanization and participatory planning",
      "Strengthen efforts to protect and safeguard the world's cultural and natural heritage",
    ],
    indianInitiatives: [
      {
        name: "Smart Cities Mission",
        description: "Promoting cities that provide core infrastructure, clean and sustainable environment, and application of 'Smart' Solutions.",
      },
      {
        name: "AMRUT Mission",
        description: "Atal Mission for Rejuvenation and Urban Transformation ensuring universal sewage treatment and green spaces.",
      },
      {
        name: "FAME India Scheme",
        description: "Faster Adoption and Manufacturing of Hybrid and Electric Vehicles in public transit fleets and private commuting.",
      },
    ],
    educationFocus: "Urban permaculture, sustainable transport networks, passive solar architecture, and disaster-resilient zoning.",
    image: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 12,
    number: "12",
    title: "Responsible Consumption and Production",
    shortDescription: "Ensure sustainable consumption and production patterns to decouple growth from ecological destruction.",
    fullDescription:
      "Sustainable consumption and production is about doing more and better with less. It is about decoupling economic growth from environmental degradation, increasing resource efficiency, and promoting sustainable lifestyles.",
    category: "Planet",
    color: "#BF8B2E",
    targets: [
      "Implement the 10-Year Framework of Programmes on Sustainable Consumption and Production",
      "Achieve the sustainable management and efficient use of natural resources",
      "Halve per capita global food waste at retail and consumer levels",
      "Substantially reduce waste generation through prevention, reduction, recycling, and reuse",
    ],
    indianInitiatives: [
      {
        name: "Mission LiFE (Lifestyle for Environment)",
        description: "Global mass movement led by India mobilizing individuals to adopt simple, environment-friendly actions in daily life.",
      },
      {
        name: "Plastic Waste Management Rules",
        description: "Enforcing phased bans on single-use plastics and mandated Extended Producer Responsibility (EPR) for packaging.",
      },
      {
        name: "E-Waste Management Rules 2022",
        description: "Stringent recycling targets and lifecycle tracking for electronics manufacturers and certified recyclers.",
      },
    ],
    educationFocus: "Zero-waste lifestyles, life cycle assessments (LCA), mindful consumerism, and upcycling craftsmanship.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 13,
    number: "13",
    title: "Climate Action",
    shortDescription: "Take urgent action to combat climate change and its impacts through education and decisive mitigation.",
    fullDescription:
      "Climate change is affecting every country on every continent. It disrupts national economies and affects lives. EfS is the primary catalyst for climate literacy, empowering youth to innovate clean solutions and advocate for systemic policies.",
    category: "Planet",
    color: "#3F7E44",
    targets: [
      "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters",
      "Integrate climate change measures into national policies, strategies, and planning",
      "Improve education, awareness-raising, and human and institutional capacity on climate mitigation and adaptation",
      "Implement the commitment undertaken by developed-country parties to mobilize climate finance",
    ],
    indianInitiatives: [
      {
        name: "National Action Plan on Climate Change (NAPCC)",
        description: "Eight national missions encompassing solar, energy efficiency, sustainable habitat, water, agriculture, and forestry.",
      },
      {
        name: "Panchamrit Climate Commitments",
        description: "Five-fold pledge including reaching 500 GW non-fossil energy, 50% renewable power, and Net-Zero carbon emissions by 2070.",
      },
      {
        name: "International Solar Alliance (ISA)",
        description: "Global coalition headquartered in Gurugram, India, unlocking over $1,000 billion in solar energy investment.",
      },
    ],
    educationFocus: "Carbon footprint auditing, climate science mechanics, adaptation tactics, and youth climate diplomacy.",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 14,
    number: "14",
    title: "Life Below Water",
    shortDescription: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
    fullDescription:
      "The ocean drives global systems that make the Earth habitable for humankind. Rainwater, drinking water, weather, climate, and coastlines are all managed and provided by the sea. EfS teaches marine biology, plastic pollution reduction, and coral reef rehabilitation.",
    category: "Planet",
    color: "#0A97D9",
    targets: [
      "Prevent and significantly reduce marine pollution of all kinds, particularly from land-based activities",
      "Sustainably manage and protect marine and coastal ecosystems",
      "Minimize and address the impacts of ocean acidification",
      "Effectively regulate harvesting and end overfishing, illegal, and destructive fishing",
    ],
    indianInitiatives: [
      {
        name: "Deep Ocean Mission",
        description: "Exploration of deep-sea biodiversity, sustainable ocean energy, and marine ecological impact assessments.",
      },
      {
        name: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
        description: "Sustainable management of fisheries and modernization of coastal community infrastructure.",
      },
      {
        name: "Swachh Sagar, Surakshit Sagar",
        description: "75-day citizen-led coastal cleanup campaign collecting thousands of tonnes of marine debris across India's coastline.",
      },
    ],
    educationFocus: "Ocean acidification chemistry, microplastics in food webs, coastal mangrove protection, and sustainable aquaculture.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 15,
    number: "15",
    title: "Life on Land",
    shortDescription: "Protect, restore and promote sustainable use of terrestrial ecosystems, forests and halt biodiversity loss.",
    fullDescription:
      "Forests cover 31 percent of our planet's land area and sustain human life. They are home to more than 80 percent of all terrestrial species of animals, plants, and insects. EfS instills deep respect for indigenous forests, native wildlife corridors, and soil microbiomes.",
    category: "Planet",
    color: "#56C02B",
    targets: [
      "Ensure conservation, restoration, and sustainable use of terrestrial and inland freshwater ecosystems",
      "Promote the implementation of sustainable management of all types of forests and halt deforestation",
      "Combat desertification, restore degraded land and soil",
      "Take urgent and significant action to reduce degradation of natural habitats and halt biodiversity loss",
    ],
    indianInitiatives: [
      {
        name: "National Afforestation Programme & Green India Mission",
        description: "Enhancing carbon sinks by increasing forest/tree cover by 5 million hectares and improving quality of forest cover.",
      },
      {
        name: "Project Tiger & Project Elephant",
        description: "Flagship species conservation programs establishing designated ecological corridors and habitat sanctuaries.",
      },
      {
        name: "Compensatory Afforestation Fund (CAMPA)",
        description: "Statutory fund dedicated to compensatory afforestation and assisted natural regeneration across states.",
      },
    ],
    educationFocus: "Native botany, rewilding methodologies, biodiversity indices, and community-managed forestry conservation.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 16,
    number: "16",
    title: "Peace, Justice and Strong Institutions",
    shortDescription: "Promote peaceful and inclusive societies, provide access to justice and build effective institutions.",
    fullDescription:
      "Peace, stability, human rights and effective governance based on the rule of law are important conduits for sustainable development. EfS builds democratic agency, transparent civic involvement, and conflict resolution skills.",
    category: "Peace",
    color: "#00689D",
    targets: [
      "Significantly reduce all forms of violence and related death rates everywhere",
      "End abuse, exploitation, trafficking, and all forms of violence against and torture of children",
      "Promote the rule of law at national and international levels and ensure equal access to justice",
      "Develop effective, accountable, and transparent institutions at all levels",
    ],
    indianInitiatives: [
      {
        name: "Right to Information (RTI) Act",
        description: "Statutory framework empowering citizens to question government authorities and inspect public documents.",
      },
      {
        name: "e-Courts Integrated Mission Mode Project",
        description: "Digitizing judiciary services for transparent, speedy, and affordable grievance redressal for all citizens.",
      },
      {
        name: "Lokpal and Lokayuktas",
        description: "Independent anti-corruption ombudsman bodies ensuring integrity in public administration.",
      },
    ],
    educationFocus: "Civic ethics, constitutional rights, peacebuilding dialogue, institutional transparency, and restorative justice.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 17,
    number: "17",
    title: "Partnerships for the Goals",
    shortDescription: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
    fullDescription:
      "A successful sustainable development agenda requires partnerships between governments, the private sector, and civil society. EfS connects academia with grassroots NGOs, interdisciplinary researchers, and youth movements across boundaries.",
    category: "Partnership",
    color: "#19486A",
    targets: [
      "Strengthen domestic resource mobilization to improve domestic capacity for tax collection",
      "Mobilize additional financial resources for developing countries from multiple sources",
      "Enhance North-South, South-South, and triangular regional and international cooperation",
      "Encourage and promote effective public, public-private, and civil society partnerships",
    ],
    indianInitiatives: [
      {
        name: "NITI Aayog SDG India Index",
        description: "Pioneering state-level ranking framework fostering competitive and cooperative federalism for SDG achievement.",
      },
      {
        name: "Voice of the Global South Summit",
        description: "Diplomatic platform uniting developing nations to share sustainable tech, digital public goods, and climate equity.",
      },
      {
        name: "Corporate Social Responsibility (CSR) Mandate",
        description: "Under Section 135 of the Companies Act 2013, mandating 2% corporate profit investment into social and environmental SDGs.",
      },
    ],
    educationFocus: "Cross-sector collaboration, multi-stakeholder governance, open-access knowledge transfer, and collective impact metrics.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
  },
];
