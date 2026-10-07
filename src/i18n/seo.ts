export const SITE_URL = "https://www.figure8dx.com";
export const SITE_URL_AR = `${SITE_URL}/ar`;

/** hreflang alternates for the homepage, the only page with an Arabic version. */
export const HOME_LANGUAGE_ALTERNATES = {
  en: SITE_URL,
  ar: SITE_URL_AR,
  "x-default": SITE_URL,
};
