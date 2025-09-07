import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";
import { routing } from "./i18n/routing";

const authPages = ["/auth/signin", "/auth/signup"];
const protectedPages = ["/dashboard"];

const intlMiddleware = createIntlMiddleware(routing);

export default async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    
    const pathnameSegments = pathname.split("/").filter(Boolean);
    const locale = pathnameSegments[0];
    
    if (routing.locales.includes(locale as (typeof routing.locales)[number])) {
        const pathWithoutLocale = `/${pathnameSegments.slice(1).join("/")}`;
        const isAuthPage = authPages.some(page => pathWithoutLocale.startsWith(page));
        const isProtectedPage = protectedPages.some(page => pathWithoutLocale.startsWith(page));

        const session = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET,
        });

        if (session?.email && isAuthPage) {
            return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
        }

        if (!session?.email && isProtectedPage) {
            return NextResponse.redirect(new URL(`/${locale}/auth/signin`, req.url));
        }
    }

    return intlMiddleware(req);
}

export const config = {
    matcher: ['/((?!api|_next|public|.*\\..*).*)'],
  };










