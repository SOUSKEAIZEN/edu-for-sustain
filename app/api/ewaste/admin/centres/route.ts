import { NextRequest, NextResponse } from "next/server";
import { CollectionCentre } from "@/types/ewaste";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.address || !body.city || !body.coordinates) {
      return NextResponse.json(
        { success: false, error: "Missing required center fields: name, address, city, and coordinates." },
        { status: 400 }
      );
    }

    const uniqueId = `demo-ctr-${Date.now().toString().slice(-5)}`;
    const newCentre: CollectionCentre = {
      id: uniqueId,
      name: body.name,
      shortDescription: body.shortDescription || "Sample registered collection point.",
      facilityType: body.facilityType || "Municipal Drop-off Centre",
      address: body.address,
      area: body.area || body.city,
      city: body.city,
      state: body.state || "Delhi",
      postalCode: body.postalCode || "110001",
      coordinates: body.coordinates,
      acceptedCategories: body.acceptedCategories || ["smartphones", "laptops"],
      operatingHours: body.operatingHours || {
        weekdays: "09:00 - 18:00",
        saturday: "09:00 - 14:00",
        sunday: "Closed",
      },
      isOpenNow: true,
      status: "operational",
      capacityPercentage: body.capacityPercentage ?? 30,
      capacityStatus: "available",
      capacityDescription: "Registered via simulated Admin route handler.",
      contactPhone: body.contactPhone || "+91 11 XXXX-XXXX (Demo)",
      contactEmail: body.contactEmail || "centre-demo@ecocycle.org",
      illustrativeRating: 4.5,
      reviewCount: 1,
      verificationBadge: "Sample Facility",
      isDemoRecord: true,
      lastUpdated: new Date().toISOString(),
      facilitatesPickup: Boolean(body.facilitatesPickup),
      imageUrl: "/images/research/academic-study.jpg",
      handlingInstructions: "Follow standard safety segregation protocols.",
    };

    return NextResponse.json({
      success: true,
      message: "Centre created in simulated response (Persisted via client localStorage)",
      data: newCentre,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Invalid centre payload" },
      { status: 400 }
    );
  }
}
