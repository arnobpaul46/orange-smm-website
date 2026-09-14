# Orange SMM Panel — Landing Page

A modern, pixel-perfect, fully responsive landing page for an SMM (Social Media Marketing) Panel built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

🔗 **Live Demo:** [https://orange-smm-panel.vercel.app/](https://orange-smm-panel.vercel.app/)

---

## 📸 Overview

This project recreates a Figma design for an SMM Panel landing page, featuring:
- Hero section with animated social icons
- Trust badges & statistics
- Interactive services showcase with 12+ platform tabs
- 4-step working process
- Global payment methods visualization
- Growth roadmap & advantages
- Interactive FAQ accordion
- Call-to-action banner
- Footer with contact info

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | React framework, SSR, routing |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations & micro-interactions |
| **Lucide React** | Icon library |
| **Google Fonts** | Inter, Parkinsans, Schibsted Grotesk, Archivo Black,Manrope |

---

## 📦 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js** (v18.17 or higher)
- **npm** / **yarn** / **pnpm** / **bun**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/arnobpaul46/orange-smm-website

# 2. Navigate to project folder
cd orange-smm-panel

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm run start` | Runs the built app in production mode |
| `npm run lint` | Runs ESLint to check code quality |

---

## 📁 Project Structure

```
orange-smm-panel/
├── app/
│   ├── layout.js              # Root layout + fonts + metadata
│   ├── page.js                # Main landing page (imports all sections)
│   └── globals.css            # Global styles + Tailwind directives
│
├── components/
│   ├── Navbar.jsx             # Top navigation
│   ├── Hero.jsx               # Hero section
│   ├── Stats.jsx              # Statistics cards
│   ├── Services.jsx           # Services + tabs
│   ├── ServiceCard.jsx        # Service detail card (Facebook)
│   ├── WorkingProcess.jsx     # 4-step process
│   ├── PaymentMethods.jsx     # Global payment map
│   ├── Growth.jsx             # Growth roadmap section
│   ├── GrowthCard.jsx         # Individual growth card
│   ├── Advantages.jsx         # Why choose us cards
│   ├── FAQ.jsx                # FAQ accordion
│   ├── CTA.jsx                # Call-to-action banner
│   └── Footer.jsx             # Footer
│
├── data/
│   └── servicesData.js        # Service tabs & content data
│
├── public/
│   ├── logo.png               # Site logo
│   ├── HeroImg.png            # Hero image
│   ├── lady.png               # CTA lady image
│   ├── map.png                # Payment map
│   ├── globalMap.png          # CTA background map
│   ├── circleConnect.png      # Working process center circle
│   ├── FbMarketing.png        # Service card illustration
│   ├── 3dFb.png               # Floating 3D Facebook icon
│   ├── wave1.svg              # Advantages wave (top)
│   ├── wave2.svg              # Advantages wave (bottom)
│   ├── traiangle1.svg         # Footer triangle (top)
│   ├── traiangle2.svg         # Footer triangle (bottom)
│   ├── password.png, bot.png, growth.png, record.png
│   ├── mail.png, WhatsApp.png, men.png
│   ├── facebook.png, Instagram.png, Youtube.png, telegram.png, discord.png
│   ├── paypal.png, gpay.png, visa.png, sepa.png, master.png, box.png, apple.png
│   └── [other service tab icons]
│
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md
```

---

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|---|---|---|
| Primary Orange | `#FF6B00` | Main brand color, CTAs, highlights |
| Light Orange | `#FF9243` | Gradients |
| Mid Orange | `#DD6017` | Gradients |
| Dark Orange | `#983200` | Gradients (button ends) |
| Deep Orange | `#A13C0B` | Footer/CTA deep gradient |
| Cream | `#FFF5EC` | Section backgrounds |
| Ink | `#1A1A1A` | Primary text |
| Gray | `#4A4A4A` | Secondary text |
| Green Accent | `#05C191` | "Zero security risk" highlight |

### Fonts

| Font | Weight | Usage |
|---|---|---|
| **Parkinsans** | 700 | Headings |
| **Inter** | 400-600 | Body text |
| **Manrope** | 700 | Numbers in stats/growth cards |
| **Schibsted Grotesk** | 700 | Working process numbers |
| **Archivo Black** | 400 | Big "MULTIPLE PAYMENTS" text |

### Breakpoints

- **Mobile:** `< 640px`
- **Tablet (sm):** `≥ 640px`
- **Tablet (md):** `≥ 768px`
- **Laptop (lg):** `≥ 1024px`
- **Desktop (xl):** `≥ 1280px`

---

## ✨ Features

- ✅ **Fully Responsive** — Mobile, tablet, laptop, desktop
- ✅ **Framer Motion Animations** — Scroll reveals, hover effects, spring physics
- ✅ **Interactive Services Tabs** — Click any platform tab (card remains Facebook)
- ✅ **Functional FAQ Accordion** — Expand/collapse with smooth height animation
- ✅ **Optimized Images** — Next.js `Image` component with lazy loading
- ✅ **SEO Ready** — Metadata configured in `layout.js`
- ✅ **Custom Favicon** — Set via `app/icon.png`
- ✅ **Font Optimization** — `next/font/google` with `display: swap`
- ✅ **Reusable Components** — Clean, modular architecture

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"** — done! 🎉

Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. **New Site from Git** → Connect repo
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click **Deploy**

---

## 🧹 Code Quality

- **Clean component structure** — one section per file
- **Reusable data files** — content separated from UI
- **Consistent naming** — PascalCase for components, camelCase for variables
- **No inline magic numbers** — spacing/sizing via Tailwind utilities
- **Performance-first animations** — only `transform` and `opacity`

---

## 👤 Author

**Your Name**
- GitHub: [@arnobpaul46](https://github.com/arnobpaul46)
- Email: arnobpualbd@gmail.com

---

## 🙏 Acknowledgements

- Design inspiration from Figma community
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com) 

---

⭐ If you like this project, please give it a star!