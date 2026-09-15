# Garrett Kadillak — portfolio

Static Astro site. Built on the **Lumen — Electric Editorial** design system: electric blue on warm paper, Bricolage Grotesque display, Average Sans UI, Newsreader for long-form, JetBrains Mono for metadata.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/ (fully static, no JS shipped)
npm run preview
```

## Routes

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` — numbered index of work + writing |
| `/work/[slug]` | `src/pages/work/[slug].astro` — case study |
| `/writing` | `src/pages/writing/index.astro` — essay index |
| `/writing/[slug]` | `src/pages/writing/[slug].astro` — reading view |
| `/rss.xml` | `src/pages/rss.xml.js` |

## Content

Everything editable lives in Markdown under `src/content/`, typed by Zod schemas in `src/content.config.ts`.

- **`src/content/work/*.md`** — one file per project. Frontmatter carries `n` (the index numeral, also the sort key), `accent`, `status`, `stack`, `stats`, `gallery`. The body is the case-study prose; a `>` blockquote renders as the accent-barred pull quote.
- **`src/content/writing/*.md`** — one file per essay. Same idea; the first paragraph gets the drop cap automatically.

Add a project by dropping in a new `.md` and bumping its `n`. Nothing else to touch.

### Images

Covers are optional. Without one, a project renders the Lumen colour-blocked fallback (category gradient + giant initial + spark watermark). To use a real screenshot, put it next to the Markdown file and reference it:

```yaml
cover: ./margin-cover.png
gallery:
  - { label: popup index, src: ./margin-popup.png }
```

These go through `astro:assets`, so they're hashed, resized and served as optimised `srcset`s at build time.

## Design system

- **Tokens** — `public/styles/colors_and_type.css`, linked from `src/layouts/Base.astro`. Don't hard-code colour or type; use `var(--*)`.
- **Accent colours** — one per item (`blue`, `cyan`, `coral`, `ink`), set in frontmatter. `accentVars()` in `src/data/site.ts` pushes it onto the element as `--a`, so scoped CSS reads the category colour without prop-drilling.
- **Global chrome + prose** — `src/styles/global.css`.
- **Site facts** (name, email, links, hero lines) — `src/data/site.ts`.

## Fonts

Bricolage Grotesque, Newsreader and JetBrains Mono come from the Google Fonts CDN via the `@import` at the top of `colors_and_type.css`. Average Sans is self-hosted from `public/fonts/`. For production, self-host the other three too and swap the `@import` for `@font-face`.

## Deploying

`npm run build` emits a static `dist/` — drop it on Netlify, Vercel, Cloudflare Pages or GitHub Pages with no adapter. Set the real domain in `astro.config.mjs` (`site:`) so canonical URLs and the RSS feed resolve.
