# Shivani Sirisilla — Portfolio

A dark-themed, teal/cyan-accented personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## ✨ Features
- Custom animated cursor
- Typewriter role cycling on hero
- Scroll-triggered reveal animations
- Terminal-style hero card
- Skill progress bars
- Project showcase with hover effects
- Timeline-based experience section
- Smooth vertical navigation

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono
- **Animations**: CSS keyframes + Intersection Observer
- **Deployment**: Vercel (recommended)

## 📦 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure
```
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (assembles sections)
│   └── globals.css      # Global styles + CSS variables
├── components/
│   ├── Cursor.tsx       # Custom cursor
│   ├── Nav.tsx          # Top nav + dot indicators
│   ├── Hero.tsx         # Hero section with typewriter
│   ├── About.tsx        # About + info cards
│   ├── Skills.tsx       # Skill bars + tag cloud
│   ├── Projects.tsx     # Project showcase
│   ├── Experience.tsx   # Work timeline + education
│   └── Footer.tsx       # Contact + footer
└── public/              # Add your photo here as 'avatar.jpg'
```

## 🎨 Customization

All personal data is in the component files — search for any text to update it.
Color variables are in `app/globals.css` under `:root`.

To change accent color:
```css
:root {
  --teal: #2DD4BF;  /* Change this */
  --cyan: #22D3EE;  /* And this */
}
```
