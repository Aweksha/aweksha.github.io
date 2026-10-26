/**
 * src/data/profile.ts
 *
 * Who the site is about and how to get in touch. Links with an empty href
 * are not rendered, so fill these in as they're ready.
 */

export type ProfileLink = { label: string; href: string };

const email = "awekshaghimire15@gmail.com";

export const profile = {
  name: "Aweksha Ghimire",
  email,
  firstName: "Aweksha",
  status: "Open to full-time roles",
  statusDetail: "Graduating December 2026",
  links: [
    { label: "Email", href: `mailto:${email}` },
    { label: "LinkedIn", href: "" }, // "https://www.linkedin.com/in/…"
    { label: "GitHub", href: "" }, // "https://github.com/…"
    { label: "Résumé", href: "" }, // drop resume.pdf in /public, then "/resume.pdf"
  ] satisfies ProfileLink[],
};

export const contactLinks = profile.links.filter((link) => link.href);

export function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.endsWith(".pdf");
}
