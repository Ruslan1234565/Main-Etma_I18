import { footer } from "@/features/service/footer/footer";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(footer)
}