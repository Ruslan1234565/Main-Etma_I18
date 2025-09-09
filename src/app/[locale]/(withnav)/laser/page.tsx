import Hero from "@/components/layout/hero";
import { useTranslations } from "next-intl";

export default function Laser() {
  const t = useTranslations("pages.laser");
  
  return <Hero>{t("content")}</Hero>;
}