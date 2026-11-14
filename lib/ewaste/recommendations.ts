import { CollectionCentre, EWasteCategoryType, GeoCoordinates } from "@/types/ewaste";
import { calculateHaversineDistance, formatDistance } from "./distance";
import { ewasteCategories } from "@/data/ewaste/categories";

export interface SearchFilters {
  userCoordinates?: GeoCoordinates;
  selectedCategories?: EWasteCategoryType[];
  matchMode?: "any" | "all"; // Default "any"
  city?: string;
  maxDistanceKm?: number;
  openOnly?: boolean;
  excludeFull?: boolean;
  facilityType?: string;
  sortBy?: "recommended" | "nearest" | "capacity" | "rating" | "name";
}

export interface CentreSearchResult {
  centre: CollectionCentre;
  distanceKm: number;
  formattedDistance: string;
  matchedCategoriesCount: number;
  matchedCategoryNames: string[];
  isCategoryCompatible: boolean;
  recommendationScore: number;
  recommendationReason: string;
}

const CATEGORY_NAME_MAP = new Map(ewasteCategories.map((c) => [c.id, c.name]));

/**
 * Intelligent recommendation and filtering engine for e-waste collection centres.
 */
export function searchAndRankCentres(
  centres: CollectionCentre[],
  filters: SearchFilters
): CentreSearchResult[] {
  const {
    userCoordinates,
    selectedCategories = [],
    matchMode = "any",
    city,
    maxDistanceKm,
    openOnly = false,
    excludeFull = false,
    facilityType,
    sortBy = "recommended",
  } = filters;

  const results: CentreSearchResult[] = [];

  for (const centre of centres) {
    // 1. City Filter
    if (city && city !== "All" && centre.city !== city) {
      continue;
    }

    // 2. Operational Filter
    if (openOnly && (!centre.isOpenNow || centre.status !== "operational")) {
      continue;
    }

    // 3. Exclude Full Filter
    if (excludeFull && (centre.capacityStatus === "full" || (centre.capacityPercentage !== null && centre.capacityPercentage >= 95))) {
      continue;
    }

    // 4. Facility Type Filter
    if (facilityType && facilityType !== "All" && centre.facilityType !== facilityType) {
      continue;
    }

    // 5. Category Compatibility Check
    const matchedCategoryIds = selectedCategories.filter((catId) =>
      centre.acceptedCategories.includes(catId)
    );
    const matchedCategoryNames = matchedCategoryIds.map(
      (id) => CATEGORY_NAME_MAP.get(id) || id
    );

    let isCompatible = true;
    if (selectedCategories.length > 0) {
      if (matchMode === "all") {
        isCompatible = matchedCategoryIds.length === selectedCategories.length;
      } else {
        isCompatible = matchedCategoryIds.length > 0;
      }
    }

    // If user has chosen categories and centre is completely incompatible, skip
    if (selectedCategories.length > 0 && !isCompatible) {
      continue;
    }

    // 6. Distance Calculation
    let distanceKm = Infinity;
    let formattedDistance = "Distance unavailable";
    if (userCoordinates) {
      distanceKm = calculateHaversineDistance(userCoordinates, centre.coordinates);
      formattedDistance = formatDistance(distanceKm);
    }

    // 7. Max Distance Radius Filter
    if (maxDistanceKm && maxDistanceKm > 0 && distanceKm > maxDistanceKm) {
      continue;
    }

    // 8. Recommendation Score Computation
    let score = 100;

    // Proximity factor (closer gives up to +50 points)
    if (distanceKm !== Infinity) {
      const distanceBonus = Math.max(0, 50 - distanceKm * 2);
      score += distanceBonus;
    }

    // Category match factor (+15 per matched category)
    score += matchedCategoryIds.length * 15;

    // Operational bonus
    if (centre.isOpenNow && centre.status === "operational") {
      score += 30;
    } else if (centre.status === "maintenance" || centre.status === "temporarily_closed") {
      score -= 80;
    }

    // Capacity availability factor
    if (centre.capacityStatus === "available") {
      score += 25;
    } else if (centre.capacityStatus === "moderate") {
      score += 10;
    } else if (centre.capacityStatus === "nearly_full") {
      score -= 15;
    } else if (centre.capacityStatus === "full") {
      score -= 50;
    }

    // Rating factor
    score += (centre.illustrativeRating - 4.0) * 15;

    // 9. Generate Human-Readable Recommendation Reason
    const categoryText =
      matchedCategoryNames.length > 0
        ? `accepts ${matchedCategoryNames.slice(0, 2).join(" & ")}${matchedCategoryNames.length > 2 ? ` (+${matchedCategoryNames.length - 2} more)` : ""}`
        : "is an authorised electronics drop point";

    const operationalText =
      centre.status === "operational" && centre.isOpenNow
        ? "is currently open"
        : centre.status === "maintenance"
        ? "is temporarily under maintenance"
        : "is currently closed";

    const capacityText =
      centre.capacityPercentage !== null
        ? `${100 - centre.capacityPercentage}% capacity buffer`
        : "standard capacity";

    const distanceText =
      distanceKm !== Infinity ? `approx. ${formattedDistance} away` : `located in ${centre.area}, ${centre.city}`;

    const recommendationReason = `Recommended because this centre ${categoryText}, ${operationalText} with ${capacityText}, and is ${distanceText}.`;

    results.push({
      centre,
      distanceKm,
      formattedDistance,
      matchedCategoriesCount: matchedCategoryIds.length,
      matchedCategoryNames,
      isCategoryCompatible: isCompatible,
      recommendationScore: Math.round(score),
      recommendationReason,
    });
  }

  // 10. Sorting
  return results.sort((a, b) => {
    if (sortBy === "nearest") {
      return a.distanceKm - b.distanceKm;
    }
    if (sortBy === "capacity") {
      const capA = a.centre.capacityPercentage ?? 100;
      const capB = b.centre.capacityPercentage ?? 100;
      return capA - capB; // lowest utilization has highest free space
    }
    if (sortBy === "rating") {
      return b.centre.illustrativeRating - a.centre.illustrativeRating;
    }
    if (sortBy === "name") {
      return a.centre.name.localeCompare(b.centre.name);
    }
    // Default: "recommended"
    return b.recommendationScore - a.recommendationScore;
  });
}
