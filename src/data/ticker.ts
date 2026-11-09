/**
 * src/data/ticker.ts
 *
 * The scrolling strip above the header, styled like a market tape.
 * Keep it to six items or fewer. Swap the "New" and "Shipped" items as you ship things.
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
};

export const tickerItems: TickerItem[] = [
  { tag: "Open to work", value: "Full-time roles from Jan 2027", href: "#contact", live: true },
  { tag: "GPA", value: "4.00", href: "#academic", up: true },
  { tag: "New", value: "bondMIND: bond pricing checked against QuantLib", href: "#projects/bondmind" },
  { tag: "Shipped", value: "Research Migration Lab", href: "#projects/research-migration-lab" },
  { tag: "Now", value: "Instructional Assistant at UTA Bug House", href: "#experience/bug-house" },
  { tag: "Just for fun", value: "Is that compliment backhanded? Ask my detector", href: "#fun/toxic-language-detector" },
];
