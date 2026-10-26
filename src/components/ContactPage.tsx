import { useState, type FormEvent } from "react";
import ContactLinks from "./ContactLinks";
import { contactLinks, profile } from "../data/profile";

/** The site has no backend, so "sending" opens the visitor's email app with everything filled in. */
function ContactPage() {
  const [copied, setCopied] = useState(false);
  const hasElsewhere = contactLinks.some((link) => !link.href.startsWith("mailto:"));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const compose = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const replyTo = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const subject = `${topic} — from ${name}`;
    const body = `${message}\n\n— ${name}\nReply to: ${replyTo}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-layout">
      <div className="contact-direct">
        <p className="section-label">Write to me directly</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <button type="button" className="button-secondary" onClick={copyEmail} aria-live="polite">
          {copied ? "Copied to clipboard ✓" : "Copy email address"}
        </button>
        {hasElsewhere && (
          <>
            <p className="section-label contact-elsewhere">Elsewhere</p>
            <ContactLinks skipEmail />
          </>
        )}
      </div>

      <form className="contact-form" onSubmit={compose}>
        <p className="section-label">Or leave a note</p>
        <label>
          <span>Your name</span>
          <input name="name" autoComplete="name" placeholder="Jane Doe" required />
        </label>
        <label>
          <span>Your email</span>
          <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
        </label>
        <label>
          <span>What’s it about?</span>
          <select name="topic" defaultValue="Job opportunity">
            <option>Job opportunity</option>
            <option>Project or collaboration</option>
            <option>Just saying hi</option>
          </select>
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows={6} placeholder="Hi Aweksha, …" required />
        </label>
        <button type="submit" className="button-primary">Write the email <span aria-hidden="true">→</span></button>
        <p className="form-note">This opens your email app with your note ready to send.</p>
      </form>
    </div>
  );
}

export default ContactPage;
