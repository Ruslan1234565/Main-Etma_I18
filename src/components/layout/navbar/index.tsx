"use client";

import logo from "@/assets/images/logo.png";
import { Link } from "@/i18n/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ProfileButton from "@/features/shared/profile-button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import LanguageSwitcher from "@/features/shared/language-switcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const session = useSession();
  const t = useTranslations("navbar");

  console.log(session);

  return (
    <div className="container">
      <NavigationMenu viewport={false} className="min-w-full py-5">
        <ul className="flex justify-between items-center w-full">
          <div className="flex gap-[31px]">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/supplement"
                  className="text-[10px] tracking-[1.68px] text-black/30"
                >
                  {t("suplement")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/laser"
                  className="text-[10px] tracking-[1.68px] text-black/30"
                >
                  {t("laser")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/reviews"
                  className="text-[10px] tracking-[1.68px] text-black/30"
                >
                  {t("reviews")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/journal"
                  className="text-[10px] tracking-[1.68px] text-black/30"
                >
                  {t("journal")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/about"
                  className="text-[10px] tracking-[1.68px] text-black/30"
                >
                  {t("about")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <div className="flex gap-[31px] items-center">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/support"
                  className="text-[10px] tracking-[1.68px] text-black/30"
                >
                  {t("help_support")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/activate"
                  className="text-[10px] tracking-[1.68px] text-black/30"
                >
                  {t("activate")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/account"
                  className="text-[10px] tracking-[1.68px] text-black/30"
                >
                  {t("account")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <ProfileButton />
            <LanguageSwitcher />
          </div>
        </ul>
      </NavigationMenu>
    </div>
  );
}
