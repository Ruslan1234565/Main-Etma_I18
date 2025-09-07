import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import bcrypt from "bcryptjs";

export async function GET() {

    const users = await prisma.user.findMany();

    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        })



        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashedPassword
            }
        })

        return NextResponse.json(user);

    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Internal server error " + error }, { status: 500 });
    }
}