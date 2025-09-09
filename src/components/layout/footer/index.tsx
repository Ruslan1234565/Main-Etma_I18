"use client";

import Link from "next/link";
import { FooterProps } from "./types/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { PiPinterestLogo } from "react-icons/pi";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Footer() {
  const t = useTranslations("footer");
  const [footer, setFooter] = useState<FooterProps[]>([]);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await fetch("/api/footer");
        const data = await response.json();
        setFooter(data);
      } catch (error) {
        console.error("Error fetching footer:", error);
      }
    };
    fetchFooter();
  }, []);

  const getTranslatedTitle = (title: string) => {
    switch (title) {
      case "SUPPLEMENT":
        return t("sections.supplement");
      case "LYMA LASER":
        return t("sections.lymaLaser");
      case "ABOUT":
        return t("sections.about");
      case "ACCOUNT":
        return t("sections.account");
      default:
        return title;
    }
  };

  const getTranslatedLink = (title: string, linkTitle: string) => {
    const linkKeyMap: { [key: string]: { [key: string]: string } } = {
      "SUPPLEMENT": {
        "Benefits": "supplement.benefits",
        "Formula": "supplement.formula",
        "Immunity": "supplement.immunity",
        "Journal": "supplement.journal",
        "Reviews": "supplement.reviews",
        "Buy": "supplement.buy"
      },
      "LYMA LASER": {
        "LYMA Laser": "laser.lymaLaser",
        "Active Mist": "laser.activeMist",
        "Priming Serum": "laser.primingSerum",
        "Technology": "laser.technology",
        "Results": "laser.results",
        "Journal": "laser.journal",
        "Reviews": "laser.reviews",
        "Buy": "laser.buy"
      },
      "ABOUT": {
        "About": "about.about",
        "Journal": "about.journal",
        "FAQs": "about.faqs",
        "Contact": "about.contact",
        "Terms": "about.terms",
        "Privacy": "about.privacy",
        "Warranty": "about.warranty"
      },
      "ACCOUNT": {
        "Activate": "account.activate",
        "My subscription": "account.mySubscription",
        "Add extras": "account.addExtras",
        "My orders": "account.myOrders",
        "Account details": "account.accountDetails",
        "Payment method": "account.paymentMethod",
        "Login details": "account.loginDetails"
      }
    };

    const sectionMap = linkKeyMap[title];
    if (sectionMap && sectionMap[linkTitle]) {
      return t(sectionMap[linkTitle] as any);
    }
    return linkTitle;
  };

  return (
    <footer className="bg-black text-white py-[96px] mt-[20px]">
      <div className="container">
        <div className="flex justify-between max-w-[1015px] mx-auto">
          {footer.map((items: FooterProps) => (
            <ul key={items.title} className="flex flex-col gap-[8px]">
              <li className="text-white text-[13px]">{getTranslatedTitle(items.title)}</li>
              {items.links.map((link) => (
                <Link href={link.href} key={link.title}>
                  <li className="text-[#7e7e7e] text-[12px]">{getTranslatedLink(items.title, link.title)}</li>
                </Link>
              ))}
            </ul>
          ))}
          <div className="flex flex-col gap-[42px] text-end">
            <p className="text-white text-[13px]">{t("newsletter.title")}</p>
            <div className="flex flex-col gap-[8px]">
              <span className="text-[#7e7e7e] text-[12px]">
                {t("newsletter.description")}
              </span>
              <div className="flex">
                <Input
                  placeholder={t("newsletter.placeholder")}
                  className="border border-white bg-transparent rounded-none text-[12px] py-12px] min-w-[231px]"
                />
                <Button className="rounded-none bg-white text-[#7e7e7e] hover:bg-white hover:shadow-md hover:shadow-white/50 cursor-pointer">
                  {t("newsletter.signUp")}
                </Button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-end gap-[24px]">
                <Link href="https://www.youtube.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <Youtube size={16} />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <Linkedin size={16} />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <Instagram size={16} />
                  </div>
                </Link>
                <Link href="https://www.facebook.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <Facebook size={16} />
                  </div>
                </Link>
                <Link href="https://www.pinterest.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <PiPinterestLogo size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
