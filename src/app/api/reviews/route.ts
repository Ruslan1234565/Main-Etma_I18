import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import { withRetry, ensureDatabaseConnection } from "../../../lib/db-utils";

export async function POST(req: Request) {
  try {
    await ensureDatabaseConnection();
    
    const { content, rating } = await req.json();

    const review = await withRetry(async () => {
      return await prisma.review.create({
        data: { content, rating: String(rating) },
      });
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ensureDatabaseConnection();
    
    const reviews = await withRetry(async () => {
      return await prisma.review.findMany({
        orderBy: { createdAt: 'desc' }
      });
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}