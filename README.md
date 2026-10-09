# DeccanIDentity — Demo Websites Showcase

An interactive, high-performance web application showcasing industry-specific website templates purpose-built for Indian businesses and global enterprises.

Developed by **Deccan IDentity Software Pvt. Ltd.**

---

## 🌟 Highlights & Features

- **9+ Industries & 13 Live Interactive Demos**:
  - **Real Estate**: Plotted Developments (PlotMark), Luxury Villas (VillaMark), Premium Apartments (FlatMark), High-Rise Towers (TowerMark), Builder Portfolio (DevMark), Commercial Real Estate Portal (PortalMark)
  - **Healthcare**: Multi-Specialty Hospital & Clinic Platform (HealthMark)
  - **Education**: K-12 School & University Campus Platform (EduMark)
  - **Technology**: SaaS Platform & Enterprise Cloud (TechMark)
  - **Business**: Corporate Advisory & Management Consulting (CorpMark)
  - **Hospitality**: Luxury Hotel, Resort & Fine Dining (HostMark)
  - **Industrial**: Heavy Manufacturing, Infrastructure & EPC Engineering (InduMark)
  - **Professional**: Legal, Accounting, Wealth & Architecture (LegalMark)
  - **Retail & E-Commerce**: Brand Flagship, D2C Catalog & Quick Commerce (StoreMark)
- **Zero-Scroll Panoramic Hero**: Vertical layout designed to showcase all industry choices within the first screen on desktop displays.
- **Dual Theme Support**: System-aware and persistent Light / Dark mode toggle.
- **Global Draggable WhatsApp Widget**: Smooth draggable overlay connected directly to official business WhatsApp desk (+91 81860 35869).
- **Sub-Second Speed**: Built on React 19 with Vite for instant loading and snappy interactive transitions.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with Node 20 / 22 / 24)
- npm 9+

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Starts the Vite dev server with hot module replacement (HMR) at `http://localhost:5174/` (or next open port).

### Production Build
```bash
npm run build
```
Generates an optimized, minified production bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Code Quality & Linting
```bash
npm run lint
```
Fast linting via Oxlint.

---

## 📁 Project Architecture

```
DemoSites/
├── public/                 # Static assets, logos, and favicons
├── src/
│   ├── assets/             # Images and local media
│   ├── components/         # Reusable UI components (Nav, Footer, FloatingWhatsApp, etc.)
│   ├── context/            # Global context providers (ThemeContext)
│   ├── data/               # Centralized configuration, industry lists, packages & templates
│   ├── demos/              # Interactive industry-specific demo implementations
│   ├── pages/              # Primary route pages (Home, Templates, Industries, Pricing, Contact)
│   ├── App.jsx             # Route definitions and layout shell
│   ├── index.css           # Design tokens, variables, typography & utility system
│   └── main.jsx            # React root mount
├── index.html              # HTML5 entry with meta SEO tags
├── package.json
└── vite.config.js
```

---

## 📄 License & Attribution

Copyright © 2026 All Rights Reserved. By [DeccanIDentity](https://deccanidentity.com/)
