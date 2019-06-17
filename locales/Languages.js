
import { Localization } from 'expo';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate = {
  en_US: 'en_US',
  en: 'en_US',
  'en-US': 'en_US',
  pt: 'pt_BR',
  pt_BR: 'pt_BR',
  'pt-BR': 'pt_BR',
  pt_US: 'pt_BR',
  'pt-US': 'pt_BR'
};

const getLanguageByDevice = () => Localization.locale;

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

export const setLanguageToI18n = (key) => {
  const language = key || getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = Object.prototype.hasOwnProperty
    .call(I18n.translations, translateNormalize);
  I18n.defaultLocale = 'en_US';
  if (iHaveThisLanguage) {
    I18n.locale = translateNormalize;
  }
};

setLanguageToI18n();

const translate = key => I18n.t(key);

export default translate;
