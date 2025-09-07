"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthProps } from "@/features/interface/auth-props";
import { signIn, useSession } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../schema";
import { useTranslations } from "next-intl";

export default function SignIn() {
  const session = useSession();
  const router = useRouter();
  const t = useTranslations("auth.signin");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthProps>({
    resolver: zodResolver(signInSchema),
  });

  console.log(session);

  const onSubmit = async (data: AuthProps) => {
    try {
      const response = await fetch("/api/users");
      const users = await response.json();

      if (!response.ok) {
        throw new Error(users.error || "Login failed");
      }

      const signInResult = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResult?.error) {
        throw new Error(
          "Registration successful but login failed. Please try signing in."
        );
      }
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
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
          <CardAction>
            <Link href="/auth/signup">
              <Button variant="link">{t("signup_link")}</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t("password")}</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    {t("forgot_password")}
                  </a>
                </div>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </div>
            </div>
            <Button type="submit" className="w-full mt-4 cursor-pointer">
              {t("submit")}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            {t("github_login")}
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            {t("google_login")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
