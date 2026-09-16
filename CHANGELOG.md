# Changelog

## [Unreleased]

### Changed

- Remove Movie Recap source-minute caps and daily generation limits from `/pricing`, `/credit`, and related plan copy.

## [0.0.3] - 2026-09-13

### Added

- Add a dedicated `/pricing` page that compares live VIP and VVIP monthly plans.

### Changed

- Point header and footer Pricing links to `/pricing`, and remove the homepage pricing cards.
- Show included and excluded plan features with check and X icons.
- Keep the pricing comparison as a table on small screens and let it scroll horizontally and vertically.
- Move Source Finder and Voice Cloning into Features; move Hook Maker, Football Content Maker, One Click Shorts, and Dhamma Content into Extra features.
- Improve VVIP column header contrast in dark mode.
- Send plan and buy CTAs to the One Click AI app (`https://app.oneclickai.studio`) instead of Messenger.

## [0.0.2] - 2026-09-12

### Added

- Load Google Analytics (`G-R75SP95XBT`) on every page with Next.js `@next/third-parties`.
