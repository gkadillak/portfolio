---
n: "02"
title: Field Notes
year: "2024"
accent: coral
category: Open source
status: Live
tagline: A tiny static-site generator for people who think in folders.
tags: [Go, Open source, CLI]
role: Maintainer
stack: [Go, Goldmark, html/template]
timeline: 2023 — present
links:
  - { label: GitHub, href: "#" }
  - { label: Docs, href: "#" }
summary: Field Notes turns a folder of Markdown into a fast, linkable site with zero config. No front-matter rituals, no build pipeline to babysit — your directory structure is the site map.
stats:
  - { value: 2.1k, label: GitHub stars }
  - { value: "1", label: "binary, zero deps" }
  - { value: "<1s", label: typical build }
gallery:
  - { label: the CLI }
  - { label: generated site }
  - { label: config (there isn't one) }
---

Most static-site generators ask you to learn their world before you can publish a paragraph. Field Notes flips that: point it at a folder, and the folder is the site. Sub-directories become sections, file names become URLs, and back-links are discovered automatically.

It's a single Go binary with no dependencies to install and no JavaScript shipped by default. Builds of a few hundred pages finish in well under a second, which keeps the write-save-refresh loop feeling instant.

> Your directory structure is the site map.

Keeping the surface area small is the entire design philosophy. Every feature request gets weighed against the question: does this earn its place, or does it just make the tool harder to hold in your head?
