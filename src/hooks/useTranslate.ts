import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const useTranslate = () => {
  const { language } = useLanguage();

  const t = (path: string, variables?: Record<string, string | number>): string => {
    const keys = path.split('.');
    let value: any = translations[language];

    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        return path;
      }
    }

    if (typeof value !== 'string') {
      return path;
    }

    // Replace variables in the translated string
    if (variables) {
      let result = value;
      Object.entries(variables).forEach(([key, val]) => {
        result = result.replace(`{${key}}`, String(val));
      });
      return result;
    }

    return value;
  };

  return { t, language };
};
