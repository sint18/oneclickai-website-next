# Changelog

## [Unreleased]

### Added

- Add a compact homepage hero with a 9:16 Movie Recap sample that plays with audio after a click.
- Add a skip-to-content link and keyboard-accessible mobile navigation.
- Add homepage How to buy steps for opening the app, paying with KBZPay, and sending a screenshot.

### Changed

- Point the homepage primary CTA to `/pricing`.
- Keep both VIP and VVIP columns visible on small screens without horizontal scroll.
- Mark Knowledge Video as coming soon across tools, plans, and FAQs.
- Use VIP- and VVIP-specific labels on app purchase CTAs.
- Restore Messenger and Telegram support links in the header, footer, and mobile menu.
- Tighten homepage hero copy and remove the output-includes list.
- Replace the boxed mobile Menu control with an icon-only menu and grouped glass panel.
- Replace the homepage credit examples with the How to buy flow.
- Remove the 5-minute credit calculator from `/pricing`.
- Fix the homepage How to buy step grid so desktop cells align evenly.
- Show KBZPay as the only payment method on the homepage.
- Present Movie Recap output as ready to post and clarify the AI copyright disclaimer.

### Fixed

- Round the `/pricing` comparison table corners without breaking sticky plan headers.
- Darken the primary action color so small button text meets contrast.
- Enlarge homepage proof screenshots so they stay readable beside the trust metrics.

## [0.0.5] - 2026-09-19

### Added

- Track marketing CTA and outbound clicks in Google Analytics (`cta_clicked`, `outbound_click`) and disclose Analytics on `/privacy`.

## [0.0.4] - 2026-09-16

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
