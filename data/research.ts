export interface Author {
  name: string;
  role: string;
  institution: string;
  location: string;
}

export interface ResearchData {
  paperTitle: string;
  subtitle: string;
  institution: string;
  location: string;
  authors: Author[];
  abstract: string;
  objectives: string[];
  sustainabilityParadigm: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  literatureReview: {
    heading: string;
    body: string;
    keyTheses: {
      author: string;
      year: string;
      contribution: string;
    }[];
  };
  comparativeAnalysis: {
    dimension: string;
    traditionalEducation: string;
    educationForSustainability: string;
  }[];
  sdgMapping: {
    sdgNumber: string;
    sdgName: string;
    indianInitiative: string;
    ministry: string;
    focusArea: string;
  }[];
  challenges: {
    title: string;
    category: string;
    description: string;
    impact: string;
  }[];
  opportunities: {
    pillar: string;
    strategicAction: string;
    expectedOutcome: string;
  }[];
  conclusion: string;
  references: {
    citation: string;
    year: string;
    source: string;
  }[];
}

export const researchPaperData: ResearchData = {
  paperTitle: "Education for Sustainability: Integrating Ecological Integrity, Social Equity, and Economic Resilience into Higher Pedagogy",
  subtitle: "An Analytical Study on Curriculum Integration, Systemic Institutional Challenges, and UN SDG Alignment within the Indian Higher Education Landscape",
  institution: "Manav Rachna University",
  location: "Faridabad, Haryana, India",
  authors: [
    {
      name: "Kunal Dagar",
      role: "Student Researcher",
      institution: "Manav Rachna University",
      location: "Faridabad, India",
    },
    {
      name: "Manojit Sinha",
      role: "Student Researcher",
      institution: "Manav Rachna University",
      location: "Faridabad, India",
    },
    {
      name: "Sanskar Aggarwal",
      role: "Student Researcher",
      institution: "Manav Rachna University",
      location: "Faridabad, India",
    },
    {
      name: "Nitish Sharma",
      role: "Student Researcher",
      institution: "Manav Rachna University",
      location: "Faridabad, India",
    },
    {
      name: "Dr. Meenakshi Gupta",
      role: "Faculty Advisor & Mentor",
      institution: "Manav Rachna University",
      location: "Faridabad, India",
    },
  ],
  abstract:
    "Education for Sustainability (EfS) represents an urgent paradigm shift away from fragmented, rote environmental instruction toward an integrative, transdisciplinary educational model. As humanity confronts compounding planetary boundaries—accelerating climate instability, biodiversity collapse, resource exhaustion, and socioeconomic disparity—conventional higher education frameworks frequently perpetuate reductionist mindsets disconnected from living ecological systems. This research paper critically examines the pedagogical architecture of EfS, evaluates its integration across tertiary curricula, maps the 17 United Nations Sustainable Development Goals against active Indian governmental policy instruments, analyzes the structural bottlenecks inhibiting widespread institutional adoption, and delineates actionable experiential frameworks for transforming university campuses into regenerative educational ecosystems.",
  objectives: [
    "Conceptualize the fundamental paradigm shift from traditional environmental studies (EVS) to transformative Education for Sustainability (EfS).",
    "Analyze the structural interdependence of the three core pillars: Environmental Integrity, Social Equity, and Economic Viability.",
    "Formulate an analytical mapping linking the United Nations Sustainable Development Goals (SDGs) with key Indian governmental development missions.",
    "Identify and evaluate institutional, curricular, pedagogical, and socio-cultural barriers confronting sustainability education in India.",
    "Propose a systemic roadmap incorporating experiential learning, campus sustainability living labs, and multidisciplinary assessment criteria.",
  ],
  sustainabilityParadigm: {
    title: "The Paradigm Shift: From Passive Awareness to Transformative Literacy",
    description:
      "For decades, environmental education remained relegated to an isolated elective course focused on memorizing natural resources, statutory acts, and pollution classifications without challenging root economic models or consumer culture. EfS radically reconceptualizes education as an agent of societal transformation. Grounded in systems thinking, EfS posits that human societies and economic systems are wholly nested within the planetary biosphere. The paradigm reorients learning around three interconnected spheres: ecological boundaries, social justice, and regenerative economics.",
    keyPoints: [
      "Transdisciplinarity: Dissolving disciplinary silos to examine complex socio-ecological challenges holistically.",
      "Systems Thinking: Recognizing non-linear feedback loops, delay effects, and emergent properties across natural and human structures.",
      "Values-Driven Pedagogy: Cultivating ecological empathy, intergenerational responsibility, and ethical agency alongside technical expertise.",
      "Action Competence: Transitioning from passive theoretical apprehension to experiential, participatory problem-solving.",
    ],
  },
  literatureReview: {
    heading: "Theoretical Foundations and Literature Synthesis",
    body:
      "The theoretical lineage of EfS emerges at the confluence of critical pedagogy (Freire), ecological literacy (Orr), transformative educational theory (Sterling), and global multilateral policy directives (UNESCO). The 1987 Brundtland Report ('Our Common Future') established the baseline premise of intergenerational equity. Subsequent scholarship has progressively recognized that education must not merely prepare individuals to sustain existing economic systems, but must fundamentally interrogate whether those systems are worth sustaining.",
    keyTheses: [
      {
        author: "Sterling, Stephen",
        year: "2001",
        contribution:
          "Formulated the seminal concept of 'Sustainable Education'—distinguishing between first-order learning (doing things better), second-order learning (doing better things), and third-order transformative learning (seeing things differently through an ecological worldview).",
      },
      {
        author: "Orr, David W.",
        year: "2004",
        contribution:
          "Articulated that 'all education is environmental education'—by what it includes or omits, education teaches students that they are either part of or apart from the natural living world.",
      },
      {
        author: "UNESCO",
        year: "2020",
        contribution:
          "Published 'Education for Sustainable Development: A Roadmap' (ESD for 2030), emphasizing the transformative role of Target 4.7 in mobilizing climate action, social equity, and green skills across tertiary schooling.",
      },
      {
        author: "National Education Policy (NEP)",
        year: "2020",
        contribution:
          "Mandated multidisciplinary education, environmental consciousness, ethical reasoning, and community engagement as central tenets of higher education reform in India.",
      },
    ],
  },
  comparativeAnalysis: [
    {
      dimension: "Pedagogical Philosophy",
      traditionalEducation: "Reductionist, linear, discipline-siloed, knowledge-transmission centered.",
      educationForSustainability: "Holistic, systems-oriented, transdisciplinary, transformative and action-centered.",
    },
    {
      dimension: "Role of the Learner",
      traditionalEducation: "Passive recipient of codified domain knowledge; individual competitor for grades.",
      educationForSustainability: "Active investigator, collaborative problem-solver, civic changemaker, and co-creator of solutions.",
    },
    {
      dimension: "Curricular Scope",
      traditionalEducation: "Narrow technical specialization divorced from broader ecological and social ramifications.",
      educationForSustainability: "Integrative synthesis linking ecological limits, social justice, ethics, and economic circularity.",
    },
    {
      dimension: "Methodology",
      traditionalEducation: "Classroom lectures, textbook memorization, standardized summative assessments.",
      educationForSustainability: "Experiential living labs, field audits, community participatory research, and real-world projects.",
    },
    {
      dimension: "Orientation to the Future",
      traditionalEducation: "Accepts status quo market imperatives and prepares workforce for linear extractive growth.",
      educationForSustainability: "Critically interrogates systemic trajectories; prepares stewards for regenerative, resilient futures.",
    },
  ],
  sdgMapping: [
    {
      sdgNumber: "SDG 1",
      sdgName: "No Poverty",
      indianInitiative: "Aspirational Districts Programme / PM Jan Dhan Yojana (PMJDY)",
      ministry: "NITI Aayog / Ministry of Finance",
      focusArea: "Universal financial inclusion, localized target transformation in 112 underdeveloped districts.",
    },
    {
      sdgNumber: "SDG 2",
      sdgName: "Zero Hunger",
      indianInitiative: "National Food Security Act (NFSA) / PM POSHAN",
      ministry: "Ministry of Consumer Affairs, Food & Public Distribution",
      focusArea: "Subsidized food grain distribution to 800M+ citizens and nutritional mid-day meals in schools.",
    },
    {
      sdgNumber: "SDG 3",
      sdgName: "Good Health & Well-being",
      indianInitiative: "Ayushman Bharat (PM-JAY) & Health and Wellness Centres",
      ministry: "Ministry of Health and Family Welfare",
      focusArea: "Comprehensive primary healthcare networks and universal health insurance for vulnerable populations.",
    },
    {
      sdgNumber: "SDG 4",
      sdgName: "Quality Education",
      indianInitiative: "National Education Policy (NEP) 2020 / Samagra Shiksha",
      ministry: "Ministry of Education",
      focusArea: "Transdisciplinary curricula, environmental awareness, experiential learning, and Target 4.7 alignment.",
    },
    {
      sdgNumber: "SDG 6",
      sdgName: "Clean Water & Sanitation",
      indianInitiative: "Jal Jeevan Mission (Har Ghar Jal) / Swachh Bharat Mission",
      ministry: "Ministry of Jal Shakti / Ministry of Housing and Urban Affairs",
      focusArea: "Potable tap water connection to every rural household and nationwide solid/liquid waste management.",
    },
    {
      sdgNumber: "SDG 7",
      sdgName: "Affordable & Clean Energy",
      indianInitiative: "PM-KUSUM / Saubhagya / National Solar Mission",
      ministry: "Ministry of New and Renewable Energy / Ministry of Power",
      focusArea: "500 GW non-fossil capacity by 2030, universal domestic electrification, and solar agriculture pumps.",
    },
    {
      sdgNumber: "SDG 8",
      sdgName: "Decent Work & Economic Growth",
      indianInitiative: "Skill India Mission / PM Mudra Yojana",
      ministry: "Ministry of Skill Development & Entrepreneurship / Ministry of Finance",
      focusArea: "Green skill certification, collateral-free microenterprise lending, and youth employability.",
    },
    {
      sdgNumber: "SDG 11",
      sdgName: "Sustainable Cities & Communities",
      indianInitiative: "Smart Cities Mission / AMRUT / FAME India",
      ministry: "Ministry of Housing and Urban Affairs / Ministry of Heavy Industries",
      focusArea: "Multi-modal electric transit, urban wastewater reclamation, green public open spaces, and smart grids.",
    },
    {
      sdgNumber: "SDG 12",
      sdgName: "Responsible Consumption & Production",
      indianInitiative: "Mission LiFE (Lifestyle for Environment) / EPR Plastic Regulations",
      ministry: "Ministry of Environment, Forest and Climate Change (MoEFCC)",
      focusArea: "Citizen behavioral transformation toward zero-waste living and Extended Producer Responsibility mandates.",
    },
    {
      sdgNumber: "SDG 13",
      sdgName: "Climate Action",
      indianInitiative: "National Action Plan on Climate Change (NAPCC) / Panchamrit Pledges",
      ministry: "Prime Minister's Council on Climate Change / MoEFCC",
      focusArea: "Eight dedicated sectoral climate missions, 2070 Net-Zero emissions target, and carbon intensity cuts.",
    },
    {
      sdgNumber: "SDG 15",
      sdgName: "Life on Land",
      indianInitiative: "Green India Mission / National Afforestation Programme / CAMPA",
      ministry: "Ministry of Environment, Forest and Climate Change",
      focusArea: "Restoration of 5M hectares degraded forests, wildlife corridor protection, and biodiversity conservation.",
    },
  ],
  challenges: [
    {
      title: "Curricular Rigidity & Disciplinary Silos",
      category: "Curricular",
      description:
        "University curricula are structurally organized around isolated departments (Computer Science, Mechanical Engineering, Economics, Humanities). Sustainability is frequently relegated to a generic, uncredited 1st-year EVS course with zero integration into capstone engineering or management coursework.",
      impact: "Students graduate viewing environmental constraints as external compliance hurdles rather than design parameters.",
    },
    {
      title: "Deficit of Faculty Capacity & Pedagogy Training",
      category: "Pedagogical",
      description:
        "Instructors across STEM and commerce disciplines possess high domain specialization but lack training in systems dynamics, life-cycle analysis, socio-ecological ethics, or experiential facilitation.",
      impact: "Classroom delivery collapses into passive slides and rote memorization of statutory environmental acts.",
    },
    {
      title: "Decoupling of Campus Operations from Teaching",
      category: "Institutional",
      description:
        "Higher education campuses consume massive megawatts of grid power, generate immense cafeteria food waste, and discard high volumes of obsolete IT equipment without utilizing these operational streams as living educational data.",
      impact: "Institutional hypocrisy diminishes student morale and prevents hands-on campus sustainability auditing.",
    },
    {
      title: "Examination and Assessment Incongruence",
      category: "Structural",
      description:
        "Standardized summative university examinations evaluate memorization of definitions and formulas rather than student capacity to formulate solutions, facilitate community consensus, or execute ecological projects.",
      impact: "Disincentivizes student and instructor investment in experiential community-based sustainability work.",
    },
    {
      title: "Socioeconomic and Digital Educational Inequity",
      category: "Socioeconomic",
      description:
        "Access to advanced green technology labs, simulation software, and international sustainability networks is concentrated in elite private and premier national institutes, leaving tier-2 and tier-3 colleges under-resourced.",
      impact: "Exacerbates regional skill disparities and limits grassroots community sustainability innovation.",
    },
  ],
  opportunities: [
    {
      pillar: "Curricular Reform",
      strategicAction:
        "Embed transdisciplinary sustainability learning outcomes (SLOs) into all undergraduate degree charters, mandated under NEP 2020 multidisciplinary mandates.",
      expectedOutcome:
        "100% of engineering, management, and arts graduates demonstrate validated competence in systems thinking and carbon accounting.",
    },
    {
      pillar: "Campus Living Laboratories",
      strategicAction:
        "Transform campus facilities (solar rooftops, rainwater harvesting systems, sewage treatment plants, dining halls) into active, instrumented student research stations.",
      expectedOutcome:
        "Empirical project work replacing theoretical assignments, generating real institutional cost savings and emissions cuts.",
    },
    {
      pillar: "Faculty Development Fellowships",
      strategicAction:
        "Establish interdisciplinary faculty development programs (FDPs) co-designed with sustainability practitioners, focusing on case-method teaching and field pedagogy.",
      expectedOutcome:
        "Educators across all disciplines equipped to weave environmental and social justice dimensions into core subject matter.",
    },
    {
      pillar: "Community Action Partnerships",
      strategicAction:
        "Formalize institutional partnerships with municipal corporations, rural panchayats, and grassroots NGOs for mandatory semester credit internships.",
      expectedOutcome:
        "Students apply academic knowledge to solve real regional challenges (groundwater depletion, municipal solid waste, rural clean energy).",
    },
  ],
  conclusion:
    "Education for Sustainability is not an ornamental addition to the modern university curriculum; it is the fundamental foundation upon which the future of tertiary education must be reconstructed. As this study demonstrates, aligning academic pedagogy with the UN Sustainable Development Goals and active Indian national missions requires dismantling structural silos, investing heavily in faculty capability, transforming campuses into experiential living laboratories, and re-anchoring student evaluation around real community impact. When higher education institutions embrace their moral mission as incubators of regenerative ecological agency, they empower an entire generation of graduates not merely to survive the 21st century's planetary challenges, but to actively build a just, thriving, and sustainable world.",
  references: [
    {
      citation: "Brundtland, G. H. (1987). Our Common Future: Report of the World Commission on Environment and Development. Oxford: Oxford University Press.",
      year: "1987",
      source: "United Nations General Assembly Document A/42/427",
    },
    {
      citation: "Sterling, S. (2001). Sustainable Education: Re-visioning Learning and Change. Schumacher Briefings No. 6. Green Books, Dartington.",
      year: "2001",
      source: "Schumacher Society / Green Books",
    },
    {
      citation: "Orr, D. W. (2004). Earth in Mind: On Education, Environment, and the Human Prospect. Washington, D.C.: Island Press.",
      year: "2004",
      source: "Island Press Academic",
    },
    {
      citation: "Tilbury, D. (2011). Education for Sustainable Development: An Expert Review of Processes and Learning. Paris: UNESCO.",
      year: "2011",
      source: "United Nations Educational, Scientific and Cultural Organization",
    },
    {
      citation: "Ministry of Education, Government of India. (2020). National Education Policy 2020. New Delhi.",
      year: "2020",
      source: "Government of India Official Gazette",
    },
    {
      citation: "NITI Aayog. (2023). SDG India Index & Dashboard: Baseline & Progress Assessment across States and Union Territories. New Delhi.",
      year: "2023",
      source: "NITI Aayog, Government of India",
    },
    {
      citation: "UNESCO. (2020). Education for Sustainable Development: A Roadmap (#ESDfor2030). Paris: UNESCO Publishing.",
      year: "2020",
      source: "UNESCO Digital Library",
    },
    {
      citation: "Raworth, K. (2017). Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist. London: Random House Business Books.",
      year: "2017",
      source: "Chelsea Green Publishing",
    },
  ],
};
