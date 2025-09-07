
import { footer } from "@/features/service/footer/footer";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ href: string }> }) {
    const { href } = await params;

    const item = footer.flatMap(item => item.links).find(link => link.href === `/footer/${href}`);
   
    return NextResponse.json(item);
}