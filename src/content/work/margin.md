---
n: "04"
title: Margin
year: "2026"
accent: blue
category: Browser extension
status: In progress
tagline: Annotate anything you read on the web — keep only the notes that matter.
tags: [TypeScript, React, Browser ext]
role: Solo — design & engineering
stack: [TypeScript, React, IndexedDB, WXT, esbuild]
timeline: 2025 — present
links:
  - { label: Live site, href: "#" }
  - { label: Source, href: "#" }
  - { label: Changelog, href: "#" }
summary: Margin is a browser extension for people who read to think. Highlight a passage on any page and it's saved — clean, searchable, and yours — without a heavyweight read-it-later account behind it.
stats:
  - { value: 12k, label: highlights saved }
  - { value: "0", label: accounts required }
  - { value: 38ms, label: median anchor time }
gallery:
  - { label: popup index }
  - { label: in-page highlighter }
  - { label: search & tags }
---

I read a lot on the web and kept losing the good parts. The bookmarks pile up, the read-later queue becomes a graveyard, and the one sentence I actually wanted is gone. Margin started as a weekend tool to fix exactly that for myself.

The whole thing runs locally. Highlights live in IndexedDB, sync is opt-in, and the popup is a fast index you can search by word, domain, or date. No feed, no streaks, no nudges to come back. The goal is to help you finish reading, not to keep you reading.

> The goal is to help you finish reading, not to keep you reading.

The hardest part was making highlight anchoring survive the messy reality of the web — pages that re-render, lazy-load, and rewrite their own DOM. I landed on a layered approach: a precise text-quote anchor first, a structural fallback second, and a graceful "orphaned note" state when a page changes out from under you.
