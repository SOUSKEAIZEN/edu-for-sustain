import {
  CollectionCentre,
  PickupRequest,
  SmartBin,
  DemoAnalyticsData,
  EWasteCategory,
  PredefinedLocation,
} from "@/types/ewaste";
import { ewasteCategories } from "@/data/ewaste/categories";
import { predefinedLocations } from "@/data/ewaste/locations";
import { initialAnalyticsData } from "@/data/ewaste/analytics";
import {
  getStoredCentres,
  saveCentreUpdate,
  addStoredCentre,
  deleteStoredCentre,
  getStoredRequests,
  addStoredRequest,
  updateStoredRequestStatus,
  getStoredSmartBins,
  simulateSmartBinPing,
  resetAllDemoData,
} from "./storage";
import { searchAndRankCentres, SearchFilters, CentreSearchResult } from "./recommendations";

/**
 * Unified Demo Service Layer
 * Interfaces UI components and API handlers with the client demonstration engine.
 * Structured so that methods can seamlessly point to external PostgreSQL REST APIs in the future.
 */
export const EWasteDemoService = {
  // Categories & Predefined Locations
  getCategories(): EWasteCategory[] {
    return ewasteCategories;
  },

  getPredefinedLocations(): PredefinedLocation[] {
    return predefinedLocations;
  },

  // Centres
  getAllCentres(): CollectionCentre[] {
    return getStoredCentres();
  },

  getCentreById(id: string): CollectionCentre | undefined {
    return getStoredCentres().find((c) => c.id === id);
  },

  searchCentres(filters: SearchFilters): CentreSearchResult[] {
    const centres = getStoredCentres();
    return searchAndRankCentres(centres, filters);
  },

  updateCentre(id: string, updates: Partial<CollectionCentre>): CollectionCentre | null {
    return saveCentreUpdate(id, updates);
  },

  createCentre(centre: CollectionCentre): CollectionCentre {
    return addStoredCentre(centre);
  },

  deleteCentre(id: string): boolean {
    return deleteStoredCentre(id);
  },

  // Requests
  getAllRequests(): PickupRequest[] {
    return getStoredRequests();
  },

  getRequestById(id: string): PickupRequest | undefined {
    return getStoredRequests().find((r) => r.id === id);
  },

  createRequest(request: PickupRequest): PickupRequest {
    return addStoredRequest(request);
  },

  updateRequestStatus(
    id: string,
    newStatus: PickupRequest["status"],
    note: string,
    actor?: "User" | "Operator" | "System Admin"
  ): PickupRequest | null {
    return updateStoredRequestStatus(id, newStatus, note, actor);
  },

  // IoT Smart Bins
  getSmartBins(): SmartBin[] {
    return getStoredSmartBins();
  },

  simulateBinUpdate(binId?: string): SmartBin[] {
    return simulateSmartBinPing(binId);
  },

  // Analytics
  getAnalytics(): DemoAnalyticsData {
    return initialAnalyticsData;
  },

  // Reset
  resetDemoData(): void {
    resetAllDemoData();
  },
};
