import Image from "next/image";
import products from "@/assets/images/products.png";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("main.banner");
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center pt-[66px] pb-[83px] my-[20px]">
      <h2 className="text-white text-[38px]/[42px]">{t("title")}</h2>
      <Image src={products} alt="banner" className="my-[35px]" />
      <p className="text-white text-[16px]/[25px] max-w-[532px] text-center">
        {t("description")}
      </p>
    </div>
  );
}
