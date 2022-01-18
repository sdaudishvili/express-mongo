import { removeProperty } from '@/utils/base';
import deepClone from './deepClone';

const KA = 'ka';
const EN = 'en';

const defaultValueByType = (value, key) => {
  if (!value) {
    return value;
  }

  if (value instanceof Array) {
    return [];
  }

  if (key === 'target') {
    return '_blank';
  }

  if (typeof value === 'string') {
    return '';
  }

  if (typeof value === 'number') {
    return 0;
  }

  if (typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'object') {
    return {};
  }

  return null;
};

const locales = new Map();
locales.set(0, { code: KA, iso: 'ka-GE', name: 'Georgian' });
locales.set(1, { code: EN, iso: 'en-US', name: 'English' });

const findByLocaleCode = (xs, code) => (xs ? xs.find((x) => x.languageCode && x.languageCode === code) || {} : {});

const reBuildObjectByLocaleCode = (code) => (xs) => ({
  ...findByLocaleCode(xs.translations, code),
  ...removeProperty(xs)('translations')
});

const addMissedLocaleObject = (xss) => {
  if (
    Object.keys(findByLocaleCode(xss.translations, KA)).length &&
    Object.keys(findByLocaleCode(xss.translations, EN)).length
  ) {
    return xss;
  }

  let objKA = xss.translations.find((x) => x.languageCode === KA);
  let objEN = xss.translations.find((x) => x.languageCode === EN);

  if (objKA) {
    objEN = deepClone(objKA);
    Object.keys(objEN).map((key) => {
      return (objEN[key] = defaultValueByType(objEN[key]));
    });
    objEN.languageCode = EN;
    xss.translations.push(objEN);
  } else {
    objKA = deepClone(objEN);
    Object.keys(objKA).map((key) => (objKA[key] = defaultValueByType(objKA[key], key)));
    objKA.languageCode = KA;
    xss.translations.push(objKA);
  }

  return xss;
};

const mapByLocaleCode = (xss, code) =>
  (xss
    ? // eslint-disable-next-line
      xss.map((file) => {
        if (file) {
          return reBuildObjectByLocaleCode(code)(file);
        }
      })
    : []
  ).filter((x) => x && Object.keys(x).length > 0);

export { KA, EN, locales, findByLocaleCode, reBuildObjectByLocaleCode, mapByLocaleCode, addMissedLocaleObject };
