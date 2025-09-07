"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "@/i18n/navigation";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";



export default function SignUp() {
  const router = useRouter();
  const t = useTranslations("auth.signup");

  const {
    register,
    handleSubmit,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpSchema) => {
  

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const user = await response.json();

      if (!response.ok) {
        throw new Error(user.error || "Registration failed");
      }

      

      router.push("/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>
            {t("subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">{t("name")}</Label>
                <Input
                  {...register("name")}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mail@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t("password")}</Label>
                </div>
                <Input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-4">{t("submit")}</Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          >
            {t("github_signup")}
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            {t("google_signup")}
          </Button>
          <div className="text-center text-sm text-gray-600">
            {t("has_account")}{" "}
            <Link
              href="/auth/signin"
              className="text-blue-600 hover:underline"
            >
              {t("signin_link")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
