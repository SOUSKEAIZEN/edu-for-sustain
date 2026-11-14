import { NextRequest, NextResponse } from "next/server";
import { initialCentres } from "@/data/ewaste/centres";
import { searchAndRankCentres, SearchFilters } from "@/lib/ewaste/recommendations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const filters: SearchFilters = {
      userCoordinates: body.userCoordinates,
      selectedCategories: body.selectedCategories || [],
      matchMode: body.matchMode || "any",
      city: body.city,
      maxDistanceKm: body.maxDistanceKm ? Number(body.maxDistanceKm) : undefined,
      openOnly: Boolean(body.openOnly),
      excludeFull: Boolean(body.excludeFull),
      facilityType: body.facilityType,
      sortBy: body.sortBy || "recommended",
    };

    const results = searchAndRankCentres(initialCentres, filters);

    return NextResponse.json({
      success: true,
      count: results.length,
      filtersApplied: filters,
      isDemonstrationData: true,
      results,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Invalid search payload" },
      { status: 400 }
    );
  }
}
