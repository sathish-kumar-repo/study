// src/utils/domains.ts

export const DOMAINS = {
  a: "https://sathish-kumar-repo.github.io/study-img/",
};

export type DomainKey = keyof typeof DOMAINS;

export const getDomainUrl = (
  domainKey?: DomainKey,
  customDomain?: string
): string => {
  if (customDomain) return customDomain;

  if (!domainKey) return DOMAINS.a; // default domain

  if (!DOMAINS[domainKey]) {
    console.warn(
      `Invalid domainKey "${domainKey}" provided. Falling back to default domain.`
    );
    return DOMAINS.a;
  }

  return DOMAINS[domainKey];
};

export const normalizeUrl = (url: string, baseDomain: string) => {
  if (/^(http|https|\/)/.test(url)) {
    return url;
  }
  return `${baseDomain}${url}`;
};
