import { NextResponse } from "next/server";
import { initialAnalyticsData, demoAnalyticsInsights } from "@/data/ewaste/analytics";

export async function GET() {
  return NextResponse.json({
    success: true,
    isDemonstrationData: true,
    disclaimer: "DEMONSTRATION DATA ONLY — Not live operational figures",
    data: initialAnalyticsData,
    insights: demoAnalyticsInsights,
  });
}
