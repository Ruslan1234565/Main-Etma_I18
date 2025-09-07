import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import type { Session } from "next-auth"
import type { JWT } from "next-auth/jwt"
import { prisma } from "../../prisma/prisma-client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { UserProps } from "@/features/interface/user-props"
import { NextAuthOptions } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            name?: string | null
            email?: string | null
            image?: string | null
        }
    }
}

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        return null
                    }

                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email }
                    })

                    if (!user) {
                        return null
                    }

                    const passwordMatch = await bcrypt.compare(credentials.password, user.password)
                    if (!passwordMatch) {
                        return null
                    }

                    return {
                        id: String(user.id),
                        name: user.name,
                        email: user.email
                    }
                } catch (error) {
                    console.error("Authorization error:", error)
                    return null
                }
            }
        })
    ],
    session: {
        strategy: "jwt" as const
    },
    callbacks: {
        async session({ session, token }: { session: Session, token: JWT }) {
            session.user.id = token.sub as string
            return session
        },
        async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },
    pages: {
        signIn: "/auth/signin",
    },
}
