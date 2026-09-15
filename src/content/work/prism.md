---
n: "01"
title: Prism
year: "2023"
accent: ink
category: macOS app
status: Archived
tagline: A colour-contrast checker that lives in your menu bar.
tags: [Swift, macOS, Accessibility]
role: Solo
stack: [Swift, AppKit, Core Graphics]
timeline: 2022 — 2023
links:
  - { label: Download, href: "#" }
  - { label: Source, href: "#" }
summary: Prism is a menu-bar pipette that samples any two pixels on screen and tells you, instantly, whether the contrast passes WCAG. Built for designers who check ratios a hundred times a day.
stats:
  - { value: 1 px, label: sampling precision }
  - { value: AA / AAA, label: verdicts at a glance }
  - { value: "⌥⌘P", label: global shortcut }
gallery:
  - { label: menu-bar popover }
  - { label: live sampling }
  - { label: verdict detail }
---

Checking contrast meant leaving my design tool, pasting hex codes into a website, and squinting at a pass/fail badge. Prism collapses that into a keystroke: pick two colours anywhere on screen and read the ratio in the menu bar.

It samples real screen pixels with Core Graphics, so it works against anything — a live website, a mockup, a photo. The whole UI is one popover: two swatches, the ratio, and the AA/AAA verdicts for normal and large text.

> A focused tool, retired the moment the platform made it redundant.

Prism is archived now — the system colour-picker caught up and I'd rather point people there than maintain a tool the OS made redundant. I'm leaving it up because the source is a tidy little example of a focused AppKit utility.
