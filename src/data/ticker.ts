/**
 * src/data/ticker.ts
 *
 * The scrolling strip above the header, styled like a market tape.
 * The mix is deliberate: alternate building things (software engineering) with leading,
 * coordinating, and presenting (project management). Keep it to eight items or fewer.
 * `href` can point to a tab ("#academic"), an experience ("#experience/bug-house"),
 * or a single project card ("#projects/bondmind"); a test checks that each one exists.
 */

export type TickerItem = {
  /** The short label in front, shown in small caps, e.g. "New". */
  tag: string;
  value: string;
  href: string;
  /** Adds a pulsing green dot in front of the tag. */
  live?: boolean;
  /** Adds a green ▲ after the value, like a stock that's up. */
  up?: boolean;
  /** Extra detail after the value (and the ▲), in a softer color. */
  note?: string;
};

export const tickerItems: TickerItem[] = [
  { tag: "Open to work", value: "Software engineering & project management roles · Jan 2027", href: "#contact", live: true },
  { tag: "GPA", value: "4.00", up: true, note: "President’s List ×2", href: "#academic" },
  { tag: "Internship", value: "Fixed Income Technology · Janus Henderson", href: "#experience/janus-henderson" },
  { tag: "Shipped", value: "PREDIXA: senior design capstone, demoed Apr 2026", href: "#projects/predixa" },
  { tag: "Led", value: "Git & code review for every student team in CSE 3310", href: "#experience/cse-3310-ta" },
  { tag: "New", value: "bondMIND: bond pricing checked against QuantLib", href: "#projects/bondmind" },
  { tag: "Presented", value: "My migration tool design to Janus Henderson’s tech org", href: "#experience/janus-henderson" },
  { tag: "Just for fun", value: "Is that compliment backhanded? Ask my detector", href: "#fun/toxic-language-detector" },
];
