import { useTranslations } from "next-intl";

export default function Supplement() {
  const t = useTranslations("pages.supplement");
  
  return <div>{t("content")}</div>;
}