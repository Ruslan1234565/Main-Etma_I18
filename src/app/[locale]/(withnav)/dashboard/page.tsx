"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations("dashboard");
  
  return (
    <div className="container">
      <div className="flex flex-col gap-4 cursor-pointer justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p>{t("welcome")}</p>
        <Button onClick={() => signOut()} className="bg-black text-white px-4 py-2 rounded-md">Logout</Button>
      </div>
    </div>
  );
}