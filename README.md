# Brody Nelson — Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![CI](https://github.com/brodynelly/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/brodynelly/portfolio/actions/workflows/ci.yml) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

Source code for [brodynelly.com](https://www.brodynelly.com) — my personal developer portfolio. Built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript** — UI and type safety
- **Vite** — fast dev server and build tooling
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible component library (Radix UI under the hood)
- **Framer Motion** — page and component animations
- **React Router** — client-side navigation
- **Recharts** — skills/stats visualizations

## Getting Started

**Prerequisites:** Node.js 18+, npm

```bash
git clone https://github.com/brodynelly/portfolio
cd portfolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

**Build for production:**

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # Shared UI components
├── pages/          # Route-level views (About, Projects, Contact)
├── data/           # Static project/skills data
└── main.tsx        # App entry point
public/             # Static assets
```

## License

MIT
