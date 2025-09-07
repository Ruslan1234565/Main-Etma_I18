import { Locale } from "@/i18n/locales";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import LanguageUpdater from "@/components/layout/language-updater";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;
    
    if (!routing.locales.includes(locale as Locale)) {
      notFound();
    }

    const messages = await getMessages();

    return (
      <NextIntlClientProvider messages={messages}>
        <LanguageUpdater />
        {children}
      </NextIntlClientProvider>
    );
}
