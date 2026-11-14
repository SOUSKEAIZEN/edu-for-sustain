import { CollectionCentre, PickupRequest, SmartBin } from "@/types/ewaste";
import { initialCentres } from "@/data/ewaste/centres";
import { initialRequests } from "@/data/ewaste/requests";
import { initialSmartBins } from "@/data/ewaste/smart-bins";

const STORAGE_KEYS = {
  CENTRES: "ecocycle_demo_centres_v1",
  REQUESTS: "ecocycle_demo_requests_v1",
  SMART_BINS: "ecocycle_demo_smart_bins_v1",
  USER_LOCATION: "ecocycle_demo_user_location_v1",
};

export const ECOCLE_EVENT_NAME = "ecocycle_storage_update";

function notifyStorageChange(key: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(ECOCLE_EVENT_NAME, { detail: { key } }));
  }
}

/**
 * Returns collection centres from localStorage with default static fallback.
 */
export function getStoredCentres(): CollectionCentre[] {
  if (typeof window === "undefined") return initialCentres;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CENTRES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.CENTRES, JSON.stringify(initialCentres));
      return initialCentres;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialCentres;
  } catch (err) {
    console.error("Error reading stored centres:", err);
    return initialCentres;
  }
}

/**
 * Updates a centre in localStorage and dispatches a notification.
 */
export function saveCentreUpdate(id: string, updates: Partial<CollectionCentre>): CollectionCentre | null {
  if (typeof window === "undefined") return null;
  const centres = getStoredCentres();
  const index = centres.findIndex((c) => c.id === id);
  if (index === -1) return null;

  const updated: CollectionCentre = {
    ...centres[index],
    ...updates,
    lastUpdated: new Date().toISOString(),
  };

  centres[index] = updated;
  localStorage.setItem(STORAGE_KEYS.CENTRES, JSON.stringify(centres));
  notifyStorageChange(STORAGE_KEYS.CENTRES);
  return updated;
}

/**
 * Adds a new centre to localStorage.
 */
export function addStoredCentre(centre: CollectionCentre): CollectionCentre {
  if (typeof window === "undefined") return centre;
  const centres = getStoredCentres();
  const updated = [centre, ...centres];
  localStorage.setItem(STORAGE_KEYS.CENTRES, JSON.stringify(updated));
  notifyStorageChange(STORAGE_KEYS.CENTRES);
  return centre;
}

/**
 * Deactivates or removes a centre from localStorage.
 */
export function deleteStoredCentre(id: string): boolean {
  if (typeof window === "undefined") return false;
  const centres = getStoredCentres();
  const filtered = centres.filter((c) => c.id !== id);
  localStorage.setItem(STORAGE_KEYS.CENTRES, JSON.stringify(filtered));
  notifyStorageChange(STORAGE_KEYS.CENTRES);
  return true;
}

/**
 * Returns pickup requests from localStorage with default static fallback.
 */
export function getStoredRequests(): PickupRequest[] {
  if (typeof window === "undefined") return initialRequests;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REQUESTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(initialRequests));
      return initialRequests;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : initialRequests;
  } catch (err) {
    console.error("Error reading stored requests:", err);
    return initialRequests;
  }
}

/**
 * Adds a new pickup request to localStorage.
 */
export function addStoredRequest(request: PickupRequest): PickupRequest {
  if (typeof window === "undefined") return request;
  const requests = getStoredRequests();
  const updated = [request, ...requests];
  localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(updated));
  notifyStorageChange(STORAGE_KEYS.REQUESTS);
  return request;
}

/**
 * Updates a pickup request status and appends to its timeline.
 */
export function updateStoredRequestStatus(
  id: string,
  newStatus: PickupRequest["status"],
  note: string,
  actor: "User" | "Operator" | "System Admin" = "Operator"
): PickupRequest | null {
  if (typeof window === "undefined") return null;
  const requests = getStoredRequests();
  const index = requests.findIndex((r) => r.id === id);
  if (index === -1) return null;

  const current = requests[index];
  const now = new Date().toISOString();

  const updated: PickupRequest = {
    ...current,
    status: newStatus,
    updatedAt: now,
    timeline: [
      ...current.timeline,
      {
        status: newStatus,
        timestamp: now,
        note,
        actor,
      },
    ],
  };

  requests[index] = updated;
  localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(requests));
  notifyStorageChange(STORAGE_KEYS.REQUESTS);
  return updated;
}

/**
 * Returns simulated smart bins.
 */
export function getStoredSmartBins(): SmartBin[] {
  if (typeof window === "undefined") return initialSmartBins;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SMART_BINS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.SMART_BINS, JSON.stringify(initialSmartBins));
      return initialSmartBins;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : initialSmartBins;
  } catch (err) {
    console.error("Error reading smart bins:", err);
    return initialSmartBins;
  }
}

/**
 * Simulates a sensor ping on a smart bin or randomly updates one bin for demo purposes.
 */
export function simulateSmartBinPing(binId?: string): SmartBin[] {
  if (typeof window === "undefined") return initialSmartBins;
  const bins = getStoredSmartBins();
  const targetId = binId || bins[Math.floor(Math.random() * bins.length)].id;

  const updated = bins.map((bin) => {
    if (bin.id === targetId) {
      // Simulate random change (+/- 5-10%)
      const delta = (Math.random() > 0.4 ? 1 : -1) * Math.floor(Math.random() * 8 + 3);
      const newFill = Math.min(100, Math.max(10, bin.fillPercentage + delta));
      let condition: SmartBin["capacityCondition"] = "Normal";
      if (newFill >= 90) condition = "Full";
      else if (newFill >= 75) condition = "Nearly Full";
      else if (newFill >= 50) condition = "Moderate";

      return {
        ...bin,
        fillPercentage: newFill,
        capacityCondition: condition,
        lastPing: new Date().toISOString(),
        temperatureCelsius: Math.round((22 + Math.random() * 6) * 10) / 10,
      };
    }
    return bin;
  });

  localStorage.setItem(STORAGE_KEYS.SMART_BINS, JSON.stringify(updated));
  notifyStorageChange(STORAGE_KEYS.SMART_BINS);
  return updated;
}

/**
 * Completely resets all local demo data back to the default initial datasets.
 */
export function resetAllDemoData(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.CENTRES, JSON.stringify(initialCentres));
  localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(initialRequests));
  localStorage.setItem(STORAGE_KEYS.SMART_BINS, JSON.stringify(initialSmartBins));
  notifyStorageChange("all_reset");
}
