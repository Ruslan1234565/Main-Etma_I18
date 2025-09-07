import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Sidebar } from "../sidebar";
import { useTranslations } from "next-intl";

export default function ProfileButton() {
  const session = useSession();
  const t = useTranslations("navbar");
  return (
    <>
      {session.status === "authenticated" ? (
        <>
          <Link href="/dashboard">
          {session.data?.user?.image ? (
            <Image
              src={session.data?.user?.image || ""}
              alt="avatar"
              width={44}
              height={44}
              className="rounded-full border border-black/10"
            />
          ) : (<span className="rounded-full border w-[44px] h-[44px] border-black/10 flex items-center justify-center text-2xl">{session.data?.user?.name?.charAt(0)}</span>)}
          </Link>
          <Sidebar />
        </>
      ) : (
        <Link href="/auth/signin">
          <Button className="bg-black text-white min-w-[64px] h-[23px] rounded-none cursor-pointer">
            <span className="text-[10px] tracking-[1.68px]">{t("login")}</span>
          </Button>
        </Link>
      )}
    </>
  );
}
