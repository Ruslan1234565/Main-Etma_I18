import { Link } from "@/i18n/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { PiPinterestLogo } from "react-icons/pi";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const footerData = [
    {
      title: t("products"),
      links: [
        { title: t("supplement"), href: "/supplement" },
        { title: t("laser"), href: "/laser" },
      ]
    },
    {
      title: t("company"),
      links: [
        { title: t("about"), href: "/about" },
        { title: t("reviews"), href: "/reviews" },
        { title: t("journal"), href: "/journal" },
      ]
    },
    {
      title: t("support"),
      links: [
        { title: t("help_support"), href: "/support" },
        { title: t("activate"), href: "/activate" },
      ]
    }
  ];
  return (
    <footer className="bg-black text-white py-[96px] mt-[20px]">
      <div className="container">
        <div className="flex justify-between max-w-[1015px] mx-auto">
          {footerData.map((items) => (
            <ul key={items.title} className="flex flex-col gap-[8px]">
              <li className="text-white text-[13px]">{items.title}</li>
              {items.links.map((link) => (
                <Link href={link.href} key={link.title}>
                  <li className="text-[#7e7e7e] text-[12px] hover:text-white transition-colors">
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>
          ))}
          <div className="flex flex-col gap-[42px] text-end">
            <p className="text-white text-[13px]">{t("newsletter")}</p>
            <div className="flex flex-col gap-[8px]">
              <span className="text-[#7e7e7e] text-[12px]">
                {t("newsletter_description")}
              </span>
              <div className="flex">
                <Input
                  placeholder={t("newsletter_placeholder")}
                  className="border border-white bg-transparent rounded-none text-[12px] py-[12px] min-w-[231px]"
                />
                <Button className="rounded-none bg-white text-[#7e7e7e] hover:bg-white hover:shadow-md hover:shadow-white/50 cursor-pointer">
                  {t("sign_up")}
                </Button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-end gap-[24px]">
                <Link href="https://www.youtube.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white hover:bg-white hover:text-black transition-colors">
                    <Youtube size={16} />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white hover:bg-white hover:text-black transition-colors">
                    <Linkedin size={16} />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white hover:bg-white hover:text-black transition-colors">
                    <Instagram size={16} />
                  </div>
                </Link>
                <Link href="https://www.facebook.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white hover:bg-white hover:text-black transition-colors">
                    <Facebook size={16} />
                  </div>
                </Link>
                <Link href="https://www.pinterest.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white hover:bg-white hover:text-black transition-colors">
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
