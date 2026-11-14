import { NextResponse } from "next/server";
import { ewasteCategories } from "@/data/ewaste/categories";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: ewasteCategories.length,
    data: ewasteCategories,
  });
}
