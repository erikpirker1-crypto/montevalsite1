# Monteval – Möbel & Holzkunst

A modern, performant Next.js website for Monteval, featuring elegant design, smooth animations, and optimal user experience.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Cinzel, Playfair Display, Manrope)
- **Image Optimization**: Next.js Image component with AVIF/WebP support

## Features

- Responsive design with mobile-first approach
- Elegant intro animation with accessibility support
- SEO-optimized with proper metadata
- Legal pages (Impressum, Datenschutz)
- Social media integration (Instagram, TikTok, YouTube)
- Performance optimized with static generation
- TypeScript for type safety
- Tailwind CSS for utility-first styling

## Getting Started

### Development

```bash
npm run dev
```

The development server will start at [http://localhost:3000](http://localhost:3000) with Turbopack for faster builds.

### Production Build

```bash
npm run build
npm run start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── datenschutz/      # Privacy policy page
│   ├── impressum/        # Legal notice page
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Home page
├── components/
│   ├── IntroAnimation.tsx    # Intro animation component
│   ├── Footer.tsx            # Footer component
│   ├── LegalLayout.tsx       # Legal pages layout
│   └── LegalSection.tsx      # Legal section component
├── public/
│   ├── monte.png
│   ├── montevallogo.jpeg
│   └── montevallogoround.png
└── next.config.ts        # Next.js configuration
```

## Design Features

- Custom color palette with gold accents
- Smooth transitions and animations
- Glassmorphism effects
- Radial gradient backgrounds
- Responsive typography with clamp()
- Accessibility-first approach
- Reduced motion support

## Deployment

The project is optimized for deployment on Vercel with automatic static optimization.

## License

© Monteval. All rights reserved.
