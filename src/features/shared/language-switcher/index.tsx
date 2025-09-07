"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { defaultLocale, Locale } from "@/i18n/locales";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useCallback } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale() as Locale;

  const handleLanguageChange = useCallback(
    (value: Locale) => {
      router.push(pathname, { locale: value });
    },
    [pathname, router]
  );

  return (
    <Select
      value={currentLocale}
      onValueChange={handleLanguageChange}
      defaultValue={defaultLocale}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a language" className="text-black/30">
          <Globe className="w-4 h-4" />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ru">Russian</SelectItem>
      </SelectContent>
    </Select>
  );
}
