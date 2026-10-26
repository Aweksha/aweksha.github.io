import { contactLinks, isExternal } from "../data/profile";

function ContactLinks({ className = "link-row", skipEmail = false }: { className?: string; skipEmail?: boolean }) {
  const links = skipEmail ? contactLinks.filter((link) => !link.href.startsWith("mailto:")) : contactLinks;
  if (links.length === 0) return null;

  return (
    <ul className={className} aria-label="Contact and profiles">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} {...(isExternal(link.href) ? { target: "_blank", rel: "noreferrer" } : {})}>
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ContactLinks;
