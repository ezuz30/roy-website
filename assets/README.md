# 📸 ROY EZUZ — Fine Art Street Photography Portfolio

A personal fine art street photography portfolio website built with HTML, CSS, and JavaScript. Features a dark cinematic aesthetic with a custom red-accent design system, a shared component architecture via Web Components, and rich interactive galleries.

## 🚧 Project Status
**In Progress**

---

## 📁 Project Structure

```
photography-portfolio/
│
├── index.html              # Home — split-screen layout with image carousel & manifesto quote
├── selected-work.html      # Gallery Hub — 3D coverflow carousel linking to all series
├── projects.html           # Projects Timeline — WebGL/Three.js scroll experience
├── profile.html            # Profile — tabbed page (Biography / Philosophy / Gear)
│
├── portraits.html          # Gallery Series — Portraits
├── moments.html            # Gallery Series — Moments
├── animals.html            # Gallery Series — Animals
├── light-and-shadow.html   # Gallery Series — Light & Shadow
├── urban-life.html         # Gallery Series — Urban Life
│
└── layout.js               # Shared components: <site-nav>, <site-footer>, global cursor
```

---

## 📄 Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Animated manifesto quote + rotating portrait carousel with Ken Burns effect & splash screen logo |
| Selected Work | `selected-work.html` | 3D coverflow carousel (scroll/keyboard) navigating between 5 photo series; includes day/night mode toggle |
| Projects | `projects.html` | WebGL scroll experience (Three.js + custom GLSL shaders) with parallax mouse tracking and timeline sidebar |
| Profile | `profile.html` | Three-tab editorial layout: Biography, Photography Philosophy, and Gear (Leica M11 Monochrom, Q3, Summilux lenses…) |
| Portraits | `portraits.html` | Masonry gallery with story modal: fullscreen image viewer + D3.js animated globe pinning the shoot location |
| Moments | `moments.html` | Same masonry + modal pattern; fleeting street encounters across Europe & USA |
| Animals | `animals.html` | Same masonry + modal; urban animals across Barcelona, Tel Aviv, Venice, Lisbon, and more |
| Light & Shadow | `light-and-shadow.html` | Same masonry + modal; architectural light studies across 20+ cities |
| Urban Life | `urban-life.html` | Same masonry + modal; cityscape and street life from NYC, Venice, Paris, Berlin, and more |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5, Web Components (Custom Elements API) |
| Styling | CSS3 — CSS Variables, Grid, Flexbox, Keyframe Animations |
| Interactivity | Vanilla JavaScript (ES6+) |
| 3D / WebGL | Three.js (r128) with custom GLSL vertex & fragment shaders |
| Data Viz | D3.js v7 + TopoJSON — animated globe on photo story cards |
| Typography | Google Fonts — Cormorant Garamond, Barlow, Barlow Condensed, Raleway, Lora |

---

## 🧩 Shared Architecture (`layout.js`)

`layout.js` is loaded via `<script src="layout.js" defer>` on every page and provides three global features:

- **`<site-nav>`** — Fixed top navigation bar with logo, links (Selected Work, Projects, Profile, Collaborate), responsive on mobile
- **`<site-footer>`** — Bottom footer with copyright and social links (Instagram, Email)
- **Custom cursor** — Red dot + trailing ring that reacts to hoverable elements; automatically disabled on touch devices

---

## 🖼️ Gallery Series

Each gallery page follows the same pattern:

- 3-column responsive masonry grid with staggered scroll-reveal animation
- Click any image → fullscreen story modal with Ken Burns zoom effect
- Modal includes: D3.js globe that rotates to highlight the shoot country, photo title, location pin, story text, and EXIF data placeholder
- Navigation: keyboard `← → ESC ↓` + on-screen arrows + scroll snap

**Countries photographed:** USA · France · Spain · Italy · Portugal · Germany · Israel

---

## ✅ To-Do

- [ ] Replace all `[Update EXIF Later]` placeholders with real camera data
- [ ] Add real project entries to `projects.html` (currently using Unsplash placeholder images)
- [ ] Build out the Collaborate/Contact experience (currently a dead `#` link in nav)
- [ ] Persist day/night mode preference across pages via `localStorage`
- [ ] Optimize images for web (compression, convert to WebP)
- [ ] Add SEO meta tags and Open Graph / Twitter Card support
- [ ] Full cross-browser testing (Chrome, Firefox, Safari)
- [ ] Verify mobile responsiveness across all pages
- [ ] Deploy the website

---

## 🚀 How to Run Locally

1. Clone or download the project files
2. Open `index.html` in your browser
3. No build tools or installations required — all dependencies load via CDN

> **Note:** Three.js, D3 globe, and Google Fonts require an active internet connection.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0a` | Page background |
| `--text-primary` | `#f0f0f2` | Main text |
| `--text-secondary` | `#b0b0b8` | Subtext |
| `--accent-red` | `#E32119` | Highlights, active states, cursor dot |
| `--serif` | Cormorant Garamond | Quotes, editorial headlines |
| `--condensed` | Barlow Condensed | Page titles, labels, UI elements |
| `--sans` | Barlow | Body text, navigation |

---

## 📬 Contact

Portfolio by **Roy Ezuz** — Fine Art Street Photography
