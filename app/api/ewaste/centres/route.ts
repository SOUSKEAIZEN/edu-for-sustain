import { NextRequest, NextResponse } from "next/server";
import { initialCentres } from "@/data/ewaste/centres";
import { EWasteCategoryType } from "@/types/ewaste";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const category = searchParams.get("category") as EWasteCategoryType | null;
  const status = searchParams.get("status");

  let filtered = [...initialCentres];

  if (city && city !== "All") {
    filtered = filtered.filter((c) => c.city.toLowerCase() === city.toLowerCase());
  }

  if (category) {
    filtered = filtered.filter((c) => c.acceptedCategories.includes(category));
  }

  if (status) {
    filtered = filtered.filter((c) => c.status === status);
  }

  return NextResponse.json({
    success: true,
    count: filtered.length,
    geographicalScope: "Delhi NCR and Haryana",
    isDemonstrationData: true,
    data: filtered,
  });
}
