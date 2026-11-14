export interface GuideSection {
  id: string;
  title: string;
  badge: string;
  intro: string;
  dangerLevel: "Critical" | "High" | "Moderate" | "Standard";
  toxicSubstances: string[];
  safePreparationSteps: string[];
  prohibitedActions: string[];
  dataSanitizationSteps?: string[];
  legalFrameworkNotice?: string;
}

export const ewasteDisposalGuides: GuideSection[] = [
  {
    id: "lithium-batteries",
    title: "Lithium-Ion & Lead-Acid Battery Safety",
    badge: "Fire & Toxicity Hazard",
    intro:
      "Lithium cells store high electrochemical energy. When punctured, crushed, or exposed to moisture, they can enter catastrophic thermal runaway, generating toxic hydrogen fluoride gas and uncontrollable fires.",
    dangerLevel: "Critical",
    toxicSubstances: ["Lithium Hexafluorophosphate", "Cobalt Oxide", "Lead & Sulfuric Acid (UPS batteries)", "Cadmium"],
    safePreparationSteps: [
      "CRITICAL: Cover both the positive (+) and negative (-) terminals with heavy non-conductive electrical tape.",
      "Store batteries in a cool, dry plastic container away from flammable textiles and metal keys.",
      "If a battery exhibits swelling, hissing, or overheating, place it immediately inside a bucket of dry sand or non-combustible vermiculite outdoors.",
      "Deliver directly to designated battery take-back kiosks with certified fire-suppression chambers.",
    ],
    prohibitedActions: [
      "NEVER throw loose batteries into household trash or municipal garbage chutes.",
      "NEVER puncture, crush, or cut battery casings with knives or tools.",
      "NEVER attempt to solder leads directly onto swollen battery pouches.",
    ],
    legalFrameworkNotice: "Covered under the Battery Waste Management Rules, 2022 (Ministry of Environment, Forest and Climate Change, Govt. of India).",
  },
  {
    id: "data-sanitization",
    title: "Personal Data Sanitization & Drive Wiping",
    badge: "Identity & Privacy Protection",
    intro:
      "Modern smartphones and computers retain cached passwords, biometric identifiers, banking cookies, and private media even after a basic 'Delete' or quick format. Proper data wiping ensures non-recoverable disposal.",
    dangerLevel: "High",
    toxicSubstances: ["Lead soldering alloy", "Barium in older magnetic platters"],
    safePreparationSteps: [
      "Perform a full cloud backup (Google Drive, iCloud, or external storage) before wiping.",
      "Sign out of Apple ID / Google Account / Samsung Knox to disable factory reset protection (FRP) locks.",
      "Smartphones: Perform a factory reset with hardware encryption enabled (default on iOS and Android 10+).",
      "Laptops & PCs: Use multi-pass disk wiping utilities compliant with NIST SP 800-88 Clear/Purge or DoD 5220.22-M before donating or recycling.",
      "Remove all SIM cards, SD cards, and USB dongles from device slots.",
    ],
    prohibitedActions: [
      "DO NOT rely on simply moving files to the Recycle Bin or desktop Trash.",
      "DO NOT physically smash hard drives with a hammer indoors—flying debris and airborne magnetic dust can be hazardous.",
    ],
    dataSanitizationSteps: [
      "Step 1: Backup all essential documents and credentials.",
      "Step 2: Sign out of all account ecosystems and deauthorize DRM licenses.",
      "Step 3: Initiate OS cryptographic erasure or zero-fill formatting.",
      "Step 4: Request a formal Certificate of Destruction (CoD) from the certified recycler if handling corporate drives.",
    ],
  },
  {
    id: "laptops-and-computers",
    title: "Laptops, Desktops & Server Units",
    badge: "Valuable Resource Recovery",
    intro:
      "Computer printed circuit boards (PCBs) contain high concentrations of valuable metals: gold, silver, palladium, and copper. However, their flame-retardant plastics and lead solder require specialized industrial extraction.",
    dangerLevel: "Moderate",
    toxicSubstances: ["Lead-Tin solder", "Mercury in older backlight lamps", "Brominated Flame Retardants (TBBPA)"],
    safePreparationSteps: [
      "Unplug power supplies and detach external peripheral cables (mice, keyboards, monitor cords).",
      "Clean out external dust with a dry cloth.",
      "Package laptop chargers together with the computer unit using twist ties.",
      "If donating for student refurbishment, indicate working condition on an adhesive note.",
    ],
    prohibitedActions: [
      "DO NOT burn plastic casings to extract copper wiring—this releases carcinogenic dioxins and furans.",
      "DO NOT pour acid baths at home to extract gold pins (informal acid leaching causes groundwater contamination).",
    ],
  },
  {
    id: "displays-and-televisions",
    title: "Monitors, Televisions & CRT Screens",
    badge: "Heavy Glass & Chemical Warning",
    intro:
      "Cathode Ray Tube (CRT) monitors contain up to 2-3 kg of hazardous leaded glass to shield X-rays. Flat screens (LCD/LED) contain specialized indium and micro-fluorescent lamps requiring careful containment.",
    dangerLevel: "High",
    toxicSubstances: ["Leaded Glass (CRTs)", "Phosphor Powders", "Mercury Vapor", "Liquid Crystal Compounds"],
    safePreparationSteps: [
      "Transport television panels strictly upright; avoid laying heavy objects on top of flat panels.",
      "If a CRT screen is cracked, wear a protective dust mask and tape over the crack with heavy duct tape to prevent implosion.",
      "Bundle remote controls (with alkaline batteries removed) and power cables separately.",
    ],
    prohibitedActions: [
      "NEVER break open the glass funnel of an old CRT television tube.",
      "NEVER dispose of broken glass screens in open neighborhood garbage bins.",
    ],
  },
  {
    id: "cables-and-small-tech",
    title: "Cables, Chargers, Adapters & Wearables",
    badge: "High Recycling Efficiency",
    intro:
      "Cables and small accessories represent the most frequently discarded e-waste stream in urban Indian households. Their copper purity exceeds 99%, making them ideal candidates for automated mechanical granulation.",
    dangerLevel: "Standard",
    toxicSubstances: ["PVC Plasticizers", "Phthalates", "Lead stabilizers in wire jackets"],
    safePreparationSteps: [
      "Detangle cables and coil them in loops of 15-20 cm diameter.",
      "Secure coils with rubber bands, twist ties, or paper tape.",
      "Group power adapters together in a cardboard shoebox for easy drop-off.",
    ],
    prohibitedActions: [
      "DO NOT strip PVC wire jackets by burning them outdoors.",
      "DO NOT throw tangle-prone cords loosely into collection bins without coiling.",
    ],
  },
];
