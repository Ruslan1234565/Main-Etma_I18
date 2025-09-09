import Hero from "@/components/layout/hero";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("pages.about");
  
  return (
    <div className="container">
      <Hero>{t("content")}</Hero>
      <h1>{t("title")}</h1>
    </div>
    
  )
}
