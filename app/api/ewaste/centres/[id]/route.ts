import { NextRequest, NextResponse } from "next/server";
import { initialCentres } from "@/data/ewaste/centres";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const centre = initialCentres.find((c) => c.id === id);

  if (!centre) {
    return NextResponse.json(
      { success: false, error: "Collection centre not found in demonstration dataset" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    isDemonstrationData: true,
    data: centre,
  });
}
