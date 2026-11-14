export type EWasteCategoryType =
  | "smartphones"
  | "laptops"
  | "desktops"
  | "tablets"
  | "batteries"
  | "chargers_adapters"
  | "cables_wires"
  | "televisions"
  | "printers"
  | "keyboards_mice"
  | "audio_accessories"
  | "small_appliances";

export interface EWasteCategory {
  id: EWasteCategoryType;
  name: string;
  iconName: string;
  shortDescription: string;
  hazardousComponents: string[];
  prepGuidance: string;
  commonExamples: string[];
  recyclabilityRate: string;
  averageWeightKg: number;
}

export type CentreStatus = "operational" | "temporarily_closed" | "maintenance";
export type CapacityStatus = "available" | "moderate" | "nearly_full" | "full" | "unknown";
export type FacilityType =
  | "Formal Authorised Recycler"
  | "Municipal Drop-off Centre"
  | "E-Waste Dismantling Facility"
  | "Refurbishment & Repair Hub"
  | "Take-Back Collection Point";

export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface CollectionCentre {
  id: string;
  name: string;
  shortDescription: string;
  facilityType: FacilityType;
  address: string;
  area: string;
  city: "Delhi" | "New Delhi" | "Faridabad" | "Gurugram" | "Manesar" | "Sonipat" | "Bahadurgarh" | "Panipat" | "Rohtak" | "Palwal";
  state: "Delhi" | "Haryana";
  postalCode: string;
  coordinates: GeoCoordinates;
  acceptedCategories: EWasteCategoryType[];
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  isOpenNow: boolean;
  status: CentreStatus;
  capacityPercentage: number | null;
  capacityStatus: CapacityStatus;
  capacityDescription: string;
  contactPhone: string;
  contactEmail: string;
  illustrativeRating: number;
  reviewCount: number;
  verificationBadge: "Demo Verified" | "Sample Facility" | "Community Partner";
  isDemoRecord: true;
  lastUpdated: string;
  facilitatesPickup: boolean;
  imageUrl: string;
  handlingInstructions: string;
}

export type RequestStatus =
  | "Submitted"
  | "Under Review"
  | "Accepted"
  | "Pickup Scheduled"
  | "Collected"
  | "Completed"
  | "Rejected"
  | "Cancelled";

export interface PickupItem {
  categoryId: EWasteCategoryType;
  categoryName: string;
  quantity: number;
  estimatedWeightKg: number;
  conditionNotes?: string;
}

export interface RequestTimelineEvent {
  status: RequestStatus;
  timestamp: string;
  note: string;
  actor: "User" | "Operator" | "System Admin";
}

export interface PickupRequest {
  id: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  address: string;
  area: string;
  city: string;
  postalCode: string;
  coordinates?: GeoCoordinates;
  items: PickupItem[];
  totalQuantity: number;
  totalEstimatedWeightKg: number;
  preferredDate: string;
  preferredTimeSlot: "Morning (09:00 - 12:00)" | "Afternoon (12:00 - 15:00)" | "Evening (15:00 - 18:00)";
  additionalNotes?: string;
  assignedCentreId?: string;
  assignedCentreName?: string;
  status: RequestStatus;
  createdAt: string;
  updatedAt: string;
  timeline: RequestTimelineEvent[];
  isDemoRecord: true;
}

export interface SmartBin {
  id: string;
  binCode: string;
  centreId: string;
  centreName: string;
  area: string;
  city: string;
  coordinates: GeoCoordinates;
  categoryId: EWasteCategoryType;
  categoryName: string;
  fillPercentage: number;
  batteryLevel: number;
  sensorStatus: "online" | "warning" | "offline";
  capacityCondition: "Normal" | "Moderate" | "Nearly Full" | "Full" | "Sensor Offline";
  lastPing: string;
  temperatureCelsius: number;
  isDemoRecord: true;
}

export interface DemoAnalyticsData {
  categoryDistribution: {
    category: string;
    categoryId: EWasteCategoryType;
    percentage: number;
    volumeKg: number;
    color: string;
  }[];
  monthlyVolumes: {
    month: string;
    volumeTonnes: number;
    requestsCount: number;
    avgCapacityPct: number;
  }[];
  collectionTrends: {
    month: string;
    formalDiverted: number;
    targetTonnes: number;
  }[];
  cityDistribution: {
    city: string;
    centresCount: number;
    volumeTonnes: number;
    avgCapacityPct: number;
  }[];
  capacityRanking: {
    centreName: string;
    city: string;
    capacityPct: number;
    status: CapacityStatus;
  }[];
  requestStatusBreakdown: {
    status: RequestStatus;
    count: number;
    color: string;
  }[];
  topAreas: {
    area: string;
    city: string;
    activeCentres: number;
    volumeKg: number;
    turnaroundDays: number;
  }[];
  summary: {
    totalCentres: number;
    operationalCentres: number;
    totalDemoRequests: number;
    completedRequests: number;
    totalCollectedKg: number;
    averageCapacityPct: number;
  };
}

export interface PredefinedLocation {
  id: string;
  name: string;
  area: string;
  city: string;
  state: "Delhi" | "Haryana";
  coordinates: GeoCoordinates;
}
