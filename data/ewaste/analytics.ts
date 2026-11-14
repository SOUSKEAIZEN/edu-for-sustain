import { DemoAnalyticsData } from "@/types/ewaste";

export const initialAnalyticsData: DemoAnalyticsData = {
  categoryDistribution: [
    { category: "Smartphones", categoryId: "smartphones", percentage: 28, volumeKg: 3420, color: "#F47C68" },
    { category: "Laptops & Notebooks", categoryId: "laptops", percentage: 22, volumeKg: 2680, color: "#172D49" },
    { category: "Batteries & Power Cells", categoryId: "batteries", percentage: 16, volumeKg: 1950, color: "#5B7866" },
    { category: "Cables & Adapters", categoryId: "cables_wires", percentage: 14, volumeKg: 1710, color: "#D97706" },
    { category: "Desktops & Towers", categoryId: "desktops", percentage: 11, volumeKg: 1340, color: "#263B52" },
    { category: "Televisions & Displays", categoryId: "televisions", percentage: 5, volumeKg: 610, color: "#8B5CF6" },
    { category: "Other Small Appliances", categoryId: "small_appliances", percentage: 4, volumeKg: 490, color: "#64748B" },
  ],

  monthlyVolumes: [
    { month: "Jan 2026", volumeTonnes: 4.8, requestsCount: 42, avgCapacityPct: 52 },
    { month: "Feb 2026", volumeTonnes: 5.6, requestsCount: 51, avgCapacityPct: 56 },
    { month: "Mar 2026", volumeTonnes: 6.9, requestsCount: 68, avgCapacityPct: 61 },
    { month: "Apr 2026", volumeTonnes: 7.4, requestsCount: 74, avgCapacityPct: 64 },
    { month: "May 2026", volumeTonnes: 8.1, requestsCount: 82, avgCapacityPct: 69 },
    { month: "Jun 2026", volumeTonnes: 7.8, requestsCount: 79, avgCapacityPct: 67 },
    { month: "Jul 2026", volumeTonnes: 8.9, requestsCount: 91, avgCapacityPct: 71 },
    { month: "Aug 2026", volumeTonnes: 9.6, requestsCount: 98, avgCapacityPct: 74 },
    { month: "Sep 2026", volumeTonnes: 10.4, requestsCount: 106, avgCapacityPct: 72 },
    { month: "Oct 2026", volumeTonnes: 11.2, requestsCount: 119, avgCapacityPct: 76 },
    { month: "Nov 2026", volumeTonnes: 12.1, requestsCount: 128, avgCapacityPct: 78 },
  ],

  collectionTrends: [
    { month: "Jun 2026", formalDiverted: 7.8, targetTonnes: 7.0 },
    { month: "Jul 2026", formalDiverted: 8.9, targetTonnes: 8.0 },
    { month: "Aug 2026", formalDiverted: 9.6, targetTonnes: 8.5 },
    { month: "Sep 2026", formalDiverted: 10.4, targetTonnes: 9.0 },
    { month: "Oct 2026", formalDiverted: 11.2, targetTonnes: 10.0 },
    { month: "Nov 2026", formalDiverted: 12.1, targetTonnes: 10.5 },
  ],

  cityDistribution: [
    { city: "New Delhi", centresCount: 7, volumeTonnes: 34.6, avgCapacityPct: 58 },
    { city: "Delhi", centresCount: 2, volumeTonnes: 11.4, avgCapacityPct: 42 },
    { city: "Faridabad", centresCount: 3, volumeTonnes: 18.2, avgCapacityPct: 41 },
    { city: "Gurugram", centresCount: 2, volumeTonnes: 16.9, avgCapacityPct: 54 },
    { city: "Manesar", centresCount: 1, volumeTonnes: 7.5, avgCapacityPct: 22 },
    { city: "Sonipat", centresCount: 1, volumeTonnes: 5.8, avgCapacityPct: 54 },
    { city: "Bahadurgarh", centresCount: 1, volumeTonnes: 4.1, avgCapacityPct: 72 },
    { city: "Panipat", centresCount: 1, volumeTonnes: 5.2, avgCapacityPct: 38 },
    { city: "Rohtak", centresCount: 1, volumeTonnes: 3.9, avgCapacityPct: 48 },
    { city: "Palwal", centresCount: 1, volumeTonnes: 3.1, avgCapacityPct: 64 },
  ],

  capacityRanking: [
    { centreName: "Nehru Place IT Recovery Pavilion", city: "New Delhi", capacityPct: 94, status: "full" },
    { centreName: "North Delhi Urban Tech Point", city: "Delhi", capacityPct: 92, status: "nearly_full" },
    { centreName: "Saket Tech Dismantling & Transfer Yard", city: "New Delhi", capacityPct: 88, status: "nearly_full" },
    { centreName: "Dwarka Green Recovery Depot", city: "New Delhi", capacityPct: 78, status: "nearly_full" },
    { centreName: "Bahadurgarh Eco-Collection Post", city: "Bahadurgarh", capacityPct: 72, status: "moderate" },
    { centreName: "Sector 29 Eco-Drop Kiosk", city: "Gurugram", capacityPct: 68, status: "moderate" },
    { centreName: "Palwal Southern Corridor Depot", city: "Palwal", capacityPct: 64, status: "moderate" },
    { centreName: "Faridabad Industrial Material Recovery", city: "Faridabad", capacityPct: 62, status: "moderate" },
    { centreName: "Lajpat Nagar Consumer Tech Station", city: "New Delhi", capacityPct: 58, status: "moderate" },
    { centreName: "Sonipat GreenTech Circular Base", city: "Sonipat", capacityPct: 54, status: "moderate" },
    { centreName: "EcoCycle Central Hub — Connaught Place", city: "New Delhi", capacityPct: 42, status: "available" },
    { centreName: "Cyber City Corporate Hub", city: "Gurugram", capacityPct: 40, status: "available" },
    { centreName: "Panipat Material Recovery Center", city: "Panipat", capacityPct: 38, status: "available" },
    { centreName: "Okhla Clean-Loop Recycling Facility", city: "New Delhi", capacityPct: 35, status: "available" },
    { centreName: "Surajkund Campus E-Waste Station", city: "Faridabad", capacityPct: 35, status: "available" },
    { centreName: "Faridabad Green Circle Eco-Depot", city: "Faridabad", capacityPct: 30, status: "available" },
    { centreName: "Rohini Municipal E-Waste Kiosk", city: "Delhi", capacityPct: 25, status: "available" },
    { centreName: "IMT Manesar Heavy Salvage Works", city: "Manesar", capacityPct: 22, status: "available" },
  ],

  requestStatusBreakdown: [
    { status: "Completed", count: 184, color: "#5B7866" },
    { status: "Collected", count: 48, color: "#172D49" },
    { status: "Pickup Scheduled", count: 32, color: "#F47C68" },
    { status: "Accepted", count: 28, color: "#D97706" },
    { status: "Under Review", count: 19, color: "#6366F1" },
    { status: "Submitted", count: 14, color: "#94A3B8" },
    { status: "Cancelled", count: 9, color: "#EF4444" },
  ],

  topAreas: [
    { area: "Nehru Place", city: "New Delhi", activeCentres: 1, volumeKg: 2840, turnaroundDays: 1.2 },
    { area: "Cyber City", city: "Gurugram", activeCentres: 1, volumeKg: 2420, turnaroundDays: 1.0 },
    { area: "Okhla Industrial Area", city: "New Delhi", activeCentres: 1, volumeKg: 2190, turnaroundDays: 1.5 },
    { area: "NIT / Sector 16", city: "Faridabad", activeCentres: 1, volumeKg: 1980, turnaroundDays: 1.4 },
    { area: "Dwarka Sector 10", city: "New Delhi", activeCentres: 1, volumeKg: 1750, turnaroundDays: 1.8 },
    { area: "Connaught Place", city: "New Delhi", activeCentres: 1, volumeKg: 1540, turnaroundDays: 1.1 },
    { area: "IMT Manesar", city: "Manesar", activeCentres: 1, volumeKg: 1220, turnaroundDays: 2.1 },
    { area: "Sector 29", city: "Gurugram", activeCentres: 1, volumeKg: 980, turnaroundDays: 1.6 },
  ],

  summary: {
    totalCentres: 22,
    operationalCentres: 20,
    totalDemoRequests: 334,
    completedRequests: 184,
    totalCollectedKg: 12200,
    averageCapacityPct: 53.4,
  },
};

export const demoAnalyticsInsights = [
  "Smartphones and portable IT laptops comprise over 50% of total reported demonstration collection weight across Delhi NCR.",
  "New Delhi and Gurugram exhibit the shortest average turnaround time (1.0 - 1.2 days) for verified mobile collection dispatches.",
  "Nehru Place and North Delhi Urban Tech Point are currently operating near maximum capacity (>90% threshold), indicating heavy commercial turn-in pressure.",
  "Faridabad and IMT Manesar provide the largest buffer capacity (22% - 35% utilization) for bulky consumer appliances and commercial dismantling.",
];
