import Image from "next/image";
import supplement from "@/assets/images/supplement.jpg";
import laser from "@/assets/images/laser.jpg";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Discover() {
  const t = useTranslations("main.discover");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[16px]">
      <div className="flex relative w-full h-[500px] flex items-end justify-center text-white py-[30px] text-center">
        <Image
          src={supplement}
          alt="supplement"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="z-1">
          <h2 className="text-white text-[32px] mb-[13px]">{t("supplement.title")}</h2>
          <div className="flex flex-col gap-[9px] mb-[25px]">
            <p className="text-[16px]">{t("supplement.subtitle1")}</p>
            <p className="text-[16px]">{t("supplement.subtitle2")}</p>
          </div>
          <div className="flex gap-[125px]">
            <Link href="/supplement" className="text-[14px] tracking-[2px] hover:font-bold uppercase">{t("supplement.discover")}</Link>
            <Link href="/" className="text-[14px] tracking-[2px] hover:font-bold uppercase">{t("supplement.buy")}</Link>
          </div>
        </div>
      </div>
      <div className="flex relative w-full h-[500px] flex items-end justify-center text-white py-[30px] text-center">
        <Image
          src={laser}
          alt="supplement"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="z-1">
          <h2 className="text-[32px] mb-[13px]">{t("laser.title")}</h2>
          <div className="flex flex-col gap-[9px] mb-[25px]">
            <p className="text-[16px]">{t("laser.subtitle1")}</p>
            <p className="text-[16px]">{t("laser.subtitle2")}</p>
          </div>
          <div className="flex gap-[125px]">
            <Link href="/laser" className="text-[14px] tracking-[2px] hover:font-bold uppercase">{t("laser.discover")}</Link>
            <Link href="/" className="text-[14px] tracking-[2px] hover:font-bold uppercase">{t("laser.buy")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
