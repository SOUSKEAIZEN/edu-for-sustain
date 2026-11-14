import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const updates = await request.json();
    return NextResponse.json({
      success: true,
      message: `Simulated update acknowledged for centre ${id}`,
      updatedId: id,
      updates,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Invalid update payload" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({
    success: true,
    message: `Simulated deletion acknowledged for centre ${id}`,
    deletedId: id,
  });
}
