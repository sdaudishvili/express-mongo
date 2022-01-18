import { findByLocaleCode } from '@/utils/locales';

export const updateByLocaleCode = (selectedLocaleCode, values) => (field, value, multiLanguage) => {
  const obj = { ...values };

  if (multiLanguage) {
    const selectedByLocale = findByLocaleCode(obj.translations, selectedLocaleCode);
    if (selectedByLocale && Object.keys(selectedByLocale)) {
      selectedByLocale[field] = value;
    } else {
      obj.translations = [...(obj.translations || []), { languageCode: selectedLocaleCode, [field]: value }];
    }
  } else obj[field] = value;

  return obj;
};
