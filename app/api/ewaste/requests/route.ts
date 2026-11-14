import { NextRequest, NextResponse } from "next/server";
import { initialRequests } from "@/data/ewaste/requests";
import { PickupRequest } from "@/types/ewaste";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: initialRequests.length,
    isDemonstrationData: true,
    data: initialRequests,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.userName || !body.address || !body.items || body.items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: userName, address, and items are mandatory." },
        { status: 400 }
      );
    }

    const uniqueId = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date().toISOString();

    const newRequest: PickupRequest = {
      id: uniqueId,
      userName: String(body.userName).trim(),
      userPhone: String(body.userPhone || "+91 98XXX-XXXXX (Demo)"),
      userEmail: String(body.userEmail || "user.demo@example.com"),
      address: String(body.address).trim(),
      area: String(body.area || "Delhi NCR"),
      city: String(body.city || "New Delhi"),
      postalCode: String(body.postalCode || "110001"),
      items: body.items,
      totalQuantity: body.items.reduce((acc: number, item: { quantity: number }) => acc + (item.quantity || 1), 0),
      totalEstimatedWeightKg: body.items.reduce(
        (acc: number, item: { estimatedWeightKg?: number }) => acc + (item.estimatedWeightKg || 1),
        0
      ),
      preferredDate: String(body.preferredDate || new Date().toISOString().split("T")[0]),
      preferredTimeSlot: body.preferredTimeSlot || "Morning (09:00 - 12:00)",
      additionalNotes: body.additionalNotes ? String(body.additionalNotes) : undefined,
      assignedCentreId: body.assignedCentreId,
      assignedCentreName: body.assignedCentreName,
      status: "Submitted",
      createdAt: now,
      updatedAt: now,
      timeline: [
        {
          status: "Submitted",
          timestamp: now,
          note: "Request logged via Next.js demonstration route handler.",
          actor: "User",
        },
      ],
      isDemoRecord: true,
    };

    return NextResponse.json({
      success: true,
      message: "Demonstration request validated and generated successfully.",
      isDemonstrationData: true,
      data: newRequest,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Malformed JSON payload" },
      { status: 400 }
    );
  }
}
