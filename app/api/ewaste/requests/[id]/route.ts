import { NextRequest, NextResponse } from "next/server";
import { initialRequests } from "@/data/ewaste/requests";
import { RequestStatus } from "@/types/ewaste";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const newStatus = body.status as RequestStatus;

    const req = initialRequests.find((r) => r.id === id);
    if (!req) {
      return NextResponse.json(
        { success: false, error: "Request not found in demonstration dataset" },
        { status: 404 }
      );
    }

    const updated = {
      ...req,
      status: newStatus,
      updatedAt: new Date().toISOString(),
      timeline: [
        ...req.timeline,
        {
          status: newStatus,
          timestamp: new Date().toISOString(),
          note: body.note || `Status updated to ${newStatus} via simulated API`,
          actor: body.actor || ("Operator" as const),
        },
      ],
    };

    return NextResponse.json({
      success: true,
      message: "Request status updated in demonstration response",
      isDemonstrationData: true,
      data: updated,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Invalid status update payload" },
      { status: 400 }
    );
  }
}
