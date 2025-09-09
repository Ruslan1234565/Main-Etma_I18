import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import bcrypt from "bcryptjs";
import { signUpSchema } from "../../[locale]/(withoutnav)/auth/schema";
import { withRetry, ensureDatabaseConnection } from "../../../lib/db-utils";

export async function GET() {
    try {
        await ensureDatabaseConnection();
        
        const users = await withRetry(async () => {
            return await prisma.user.findMany();
        });

        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await ensureDatabaseConnection();
        
        const body = await request.json();
        
        // Validate input using Zod schema
        const validationResult = signUpSchema.safeParse(body);
        
        if (!validationResult.success) {
            return NextResponse.json({ 
                error: "Validation failed", 
                details: validationResult.error.issues 
            }, { status: 400 });
        }

        const { name, email, password } = validationResult.data;

        const existingUser = await withRetry(async () => {
            return await prisma.user.findUnique({
                where: { email }
            });
        });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await withRetry(async () => {
            return await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    password: hashedPassword
                }
            });
        });

        // Return user without password
        const { password: _, ...userWithoutPassword } = user;
        return NextResponse.json(userWithoutPassword, { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}