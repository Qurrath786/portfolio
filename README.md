# Qurrath Ul Aain — Portfolio

Personal portfolio built with Next.js, React Three Fiber, and Tailwind CSS.

## Features
- Full-screen 3D animated background (react-three-fiber + three)
- Hero section with gradient / glow title and CTA
- Componentized UI (separate files per section for easy maintenance)
- Tailwind CSS powered utilities
- TypeScript for type safety

## Local development

1. Install dependencies:
```bash
npm install
npm run dev
# then open http://localhost:3000
npm run build
npm start
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    HeroTitle.tsx
    HeroCTA.tsx
    Hero.tsx
    ThreeScene.tsx
    AboutSection.tsx
    ProjectsSection.tsx
    ContactSection.tsx
    Navbar.tsx
  utils/
    animations.ts
tailwind.config.cjs
postcss.config.cjs
