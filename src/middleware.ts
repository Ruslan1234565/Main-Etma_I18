import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

import { getToken } from "next-auth/jwt";
import { defaultLocale, Locale, locales } from "./i18n/locales";

const authPages = ["/auth/signin", "/auth/signup"];
const protectedPages = ["/dashboard"];

const intlMiddleWare = createIntlMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localeDetection: true,
    localePrefix: "always",
})

export default async function middleware(req: NextRequest) {
    const pathName = req.nextUrl.pathname;

    const pathnameSeqment = pathName.split("/").filter(Boolean);
    const locale = pathnameSeqment[0];

    const isValidLocale = locales.includes(locale as Locale);

    if (!isValidLocale && pathnameSeqment[0] !== "") {
        return NextResponse.redirect(new URL(`/${defaultLocale}${pathName}`, req.url));
    }

    if (isValidLocale) {
        const pathWithoutLocale = `/${pathnameSeqment.slice(1).join("/")}`;
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


    return intlMiddleWare(req);
}

export const config = {
    matcher: ['/((?!api|_next|public|.*\\..*).*)'],
  };










