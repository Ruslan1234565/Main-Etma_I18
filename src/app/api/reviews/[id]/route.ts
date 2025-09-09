import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  const id = parseInt(idParam);

  if (!id || isNaN(id)) {
    return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
  }

  try {
    const review = await prisma.review.findUnique({ where: { id } });
    
    if (!review) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }

    return NextResponse.json(review);
  } catch (error) {
    console.error("Error fetching review:", error);
    return NextResponse.json({ error: 'Failed to fetch review' }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { content, rating } = await req.json();
  const { id: idParam } = await params;
  const id = parseInt(idParam);

  if (!id || isNaN(id)) {
    return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
  }

  try {
    const review = await prisma.review.update({
      where: { id },
      data: { content, rating: String(rating) },
    });
    return NextResponse.json(review);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to update review' }, { status: 404 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  const id = parseInt(idParam);

  if (!id || isNaN(id)) {
    return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
  }

  try {
    await prisma.review.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 404 });
  }
}
