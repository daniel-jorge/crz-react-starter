const getDefaultLocale = (fallbackLocale: string = 'en') => {
  const language = (navigator.languages && navigator.languages[0]) || navigator.language || fallbackLocale;
  return language.split('-')[0];
};

export { getDefaultLocale };
