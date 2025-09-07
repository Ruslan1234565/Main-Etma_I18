import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import enMessages from '@/messages/en.json';
import ruMessages from '@/messages/ru.json';
 
const messages = {
  en: enMessages,
  ru: ruMessages
};

export default getRequestConfig(async ({requestLocale}) => {

  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    messages: messages[locale as keyof typeof messages]
  };
});