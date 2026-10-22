# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.8.0] - 2026-10-22

### Added

- The footer of the homepage, sales and terms pages shows the team email `hostera.grafoverde@gmail.com`.

## [0.7.0] - 2026-10-22

### Added

- The Contact section adds the team email `hostera.grafoverde@gmail.com`, in English and Spanish.

## [0.6.1] - 2026-10-22

### Fixed

- The canonical, Open Graph and Twitter URLs of the homepage point to the renamed `hostera-landing-page` GitHub Pages site.

## [0.6.0] - 2026-10-22

### Added

- A product tour in the Product section with screenshots of the bookings, rooms, inventory and access control screens of the deployed application, in place of the empty video card.
- A link to try the live demo of the application.
- A Contact section with the contact form and the Grafo Verde GitHub organization, linked from the header and footer navigation of every page.

### Changed

- The terms and conditions add a privacy and personal data section and an ethics and professional responsibility section, in English and Spanish.

## [0.5.0] - 2026-10-06

### Added

- Keywords and author metadata on the homepage, sales and terms pages, with the keywords translated to Spanish.

### Changed

- The Starter and Professional plan buttons and the closing action open the Hostera web application.
- The Spanish variant is declared as Latin American Spanish (`es_419`).
- The shared plans stylesheet is renamed from `plan-free.css` to `plans.css`.
- The README and the user stories describe the current plans and match the project report.

## [0.4.0] - 2026-10-06

### Added

- English and Spanish sign-in link to the Hostera application in the homepage, sales, and terms headers, including the mobile menu.

### Changed

- Adjusted header spacing and the mobile-menu breakpoint to accommodate the sign-in link.

## [0.3.0] - 2026-10-03

### Added

- Dedicated English and Spanish sales contact page for Enterprise inquiries.
- Homepage canonical and social-preview metadata, including an RFID guest-access image.

### Changed

- Clarified Starter and Professional plan pricing and comparison.

## [0.2.1] - 2026-09-16

### Changed

- README now describes this repository as the Hostera landing page, what the site includes, and how to serve it locally.

## [0.2.0] - 2026-09-16

### Added

- English and Spanish Terms and Conditions, with EN/ES switching on that page.

### Changed

- Terms header and language control now match the landing-page header.

### Fixed

- In-page section links work on GitHub Pages without a second click.

## [0.1.0] - 2026-09-16

### Added

- English landing page for Hostera with the hotel-operations proposition, dashboard preview, and problem-and-solution story.
- Primary navigation, footer, Terms and Conditions page, and a mobile menu.
- Independent-hotel, small-chain, and hotel-group pathways with Free, Professional, and Enterprise plans.
- Sales contact step for the Enterprise path, plus closing Start for free and Talk to sales actions.
- Connected-operations benefits, four-step operating flow, product and team sections, and an expandable FAQ.
- In-place English and Spanish copy switching, including return from the terms page.
- Page motion with GSAP: hero dashboard reveal, scroll-driven section lists, and in-page scroll under the sticky header.

### Fixed

- Language switch no longer blanks the page.
- Responsive layout for hero, pathways, plans, media, and the header.
- Dashboard preview keeps full width and clips only at the bottom.
- Team portraits use compact cards on small screens and stay aligned when the photo sits on the right.
- Discover Hostera and Meet the team remain static placeholders without playable clips.
- EN/ES control stays in a fixed slot with designed spacing, and primary nav is centered between the logo and that cluster.
