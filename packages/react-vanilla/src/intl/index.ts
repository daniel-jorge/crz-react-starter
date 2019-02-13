import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import enMessages from './en.locale';
import frMessages from './fr.locale';

addLocaleData([...fr, ...en]);

interface Messages {
  [key: string]: { [key: string]: string };
}

const messages: Messages = {
  fr: frMessages,
  en: enMessages,
};

export default messages;
export * from './translation.hooks';
