export const site = {
  name: 'Garrett Kadillak',
  role: 'Frontend engineer',
  location: 'Copenhagen',
  email: 'hey@garrettkadillak.com',
  hero: ['I build', 'the front of', 'the web.'],
  sub: "A running index of the interfaces I've shipped and the ideas I'm still figuring out. Numbered, dated, and occasionally finished.",
  elsewhere: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Bluesky', href: 'https://bsky.app/' },
    { label: 'Email', href: 'mailto:hey@garrettkadillak.com' },
  ],
} as const;

export type AccentKey = 'blue' | 'cyan' | 'coral' | 'ink';

/** One category colour per item — never mix two accents in one component. */
export const accents: Record<AccentKey, { solid: string; ink: string; grad: string }> = {
  blue: { solid: 'var(--primary)', ink: '#fff', grad: 'linear-gradient(135deg,#245BFF,#102E9B)' },
  cyan: { solid: 'var(--cyan)', ink: '#06283D', grad: 'linear-gradient(135deg,#00C2FF,#1A4BF5)' },
  coral: { solid: 'var(--coral)', ink: '#fff', grad: 'linear-gradient(135deg,#FF7A5A,#D43320)' },
  ink: { solid: 'var(--ink-800)', ink: '#fff', grad: 'linear-gradient(135deg,#2B3242,#0A0D16)' },
};

/** Inline custom-property payload so scoped CSS can read the accent. */
export const accentVars = (key: AccentKey) =>
  `--a:${accents[key].solid};--a-ink:${accents[key].ink};--a-grad:${accents[key].grad};`;
