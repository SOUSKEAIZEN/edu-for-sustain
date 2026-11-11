# ECOLEARN — Education for Sustainability (EfS)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: Academic](https://img.shields.io/badge/License-Academic_Submission-green?style=flat-square)](#)

> **"Learn today. Sustain tomorrow."**  
> *Building a sustainable future through education, awareness and meaningful action.*

---

## 🌍 Overview

**ECOLEARN** is an academic frontend web platform designed and engineered for a college submission project titled **"Education for Sustainability (EfS): Integrating Ecological Integrity, Social Equity, and Economic Resilience into Higher Pedagogy"**.

Rather than treating sustainability as a detached environmental elective or generic awareness page, ECOLEARN delivers a modern, editorial educational experience linking the **United Nations 2030 Agenda (17 SDGs)**, the **Three Interconnected Pillars of Sustainability**, and active **Indian Governmental Development Missions** (such as *Jal Jeevan Mission*, *Mission LiFE*, *PM-KUSUM*, *Ayushman Bharat*, *NEP 2020*, etc.).

---

## 👥 Research & Academic Attribution

This platform is based on the academic research report submitted by:

- **Kunal Dagar** — Student Researcher
- **Manas Sharma** — Student Researcher
- **Nitish Sharma** — Student Researcher
- **Dr. Meenakshi Gupta** — Faculty Advisor & Mentor

**Institution:**  
*Department of Engineering & Sustainability, Manav Rachna University, Faridabad, Haryana, India.*

---

## ✨ Key Features & Information Architecture

### 1. Editorial Home (`/`)
- Asymmetrical editorial hero section with floating information badges.
- Introduction to Education for Sustainability (EfS) beyond rote memorization.
- **The Three Pillars of Sustainability**: Interactive modal exploration for Environment, Society, and Economy.
- **Why EfS Matters**: Visual storytelling addressing curricular silos, teacher training deficits, and the digital divide.
- **Featured UN SDGs**: Curated selection linked to Indian policy instruments.
- Clear closing call-to-action and comprehensive footer.

### 2. About EfS (`/about`)
- In-depth theoretical exploration of the EfS paradigm shift.
- Comparative analysis between traditional rote instruction and sustainability pedagogy.
- Systems thinking, non-linear feedback dynamics, and futures-oriented scenarios.
- The 5-stage student learning journey (*Awakening → Inquiry → Systems Mapping → Living Lab Action → Civic Leadership*).

### 3. Interactive SDG Explorer (`/sdgs`)
- All **17 United Nations Sustainable Development Goals** with official numbers, titles, and descriptions.
- **Filterable by the 5 Ps Architecture**: *People, Planet, Prosperity, Peace, and Partnership*.
- **Real-time search bar**: Search across goal names, keywords, targets, and Indian government missions.
- **Detailed Goal Modal**: UN targets, curriculum integration focus, and mapped Indian flagship missions.

### 4. Educational Learning Dashboard & Quiz (`/learn`)
- **7 Structured Learning Modules**:
  1. *Introduction to Sustainability*
  2. *Understanding the Three Pillars*
  3. *Introduction to the UN SDGs*
  4. *Climate Change and Environmental Protection*
  5. *Responsible Consumption and Production*
  6. *Sustainable Communities and Urban Living*
  7. *Practical Community Action & Grassroots Leadership*
- Interactive modal lesson reader with takeaways, sections, and a **Critical Thinking Reflection prompt** with local retention.
- **Interactive Sustainability Quiz**: 10 multiple-choice questions with instant pedagogical explanations, question-by-question progression, scoring summary, and celebration confetti.

### 5. Take Action Dashboard (`/take-action`)
- Practical, tangible actions across **Environment**, **Society**, and **Economy**.
- **Interactive Daily Sustainability Tracker**: Check off habits, track progress bar & impact points, with browser `localStorage` persistence.
- **The 7-Day Sustainability Challenge**: Day-by-day guided missions (*Plastic Detox, Energy Vampire Hunt, Planetary Plate, Water Stewardship, Low-Carbon Commute, Revive & Mend, Community Pass-The-Torch*).

### 6. Academic Research Presentation (`/research`)
- Full academic paper breakdown: Abstract, Objectives, Theoretical Paradigm, Literature Review summary (*Sterling, Orr, UNESCO, NEP 2020*).
- **Comprehensive SDG-to-Indian-Policy Mapping Table** with nodal ministries and operational focus.
- Systemic institutional challenges and proposed strategic opportunities.
- Authentic scholarly citations and references.

---

## 🎨 Design System & Visual Identity

The design system strictly adheres to the custom ECOLEARN brand specification:

| Role | Color | Hex Code | Purpose |
|---|---|---|---|
| **Navy (Primary)** | Navy Deep | `#172D49` | Main navigation, dark hero panels, editorial titles, footer |
| **Cream (Primary)** | Warm Cream | `#F4EBDD` | Primary page backgrounds, content sections, alternating contrast |
| **Coral (Accent)** | Radiant Coral | `#F47C68` | Primary CTA buttons, key word highlights, hover states, badges |
| **Supporting** | Slate Navy | `#263B52` | Secondary cards, pill containers, dark panel borders |
| **Supporting** | Sand Cream | `#E6DED0` | Filter chips, subtle dividers, pill backgrounds |
| **Supporting** | Sage Tint | `#DDE8DE` | Environmental badges, positive metric indicators |
| **Supporting** | Forest Sage | `#5B7866` | Environmental pillar accent, completion checkmarks |

### Typography
- **Headings & Editorial Quotes:** *Playfair Display*
- **Interface & Body Text:** *DM Sans*
- **Metrics, Section Labels & Buttons:** *Space Grotesk*

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Typography:** `next/font/google` (*Playfair Display, DM Sans, Space Grotesk*)
- **Icons:** [Lucide React](https://lucide.react)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Celebration Effects:** [canvas-confetti](https://github.com/catdad/canvas-confetti)
- **Language:** TypeScript with strict type checking

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `v18.18+` or `v20+` (tested on Node `v24.15.0`)
- npm `v9+` or `v10+` (or yarn / pnpm)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SOUSKEAIZEN/edu-for-sustain.git
   cd edu-for-sustain
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🧪 Verification & Build Commands

Run the comprehensive validation checks:

```bash
# TypeScript verification (Zero errors)
npx tsc --noEmit

# ESLint code standards check
npm run lint

# Production build optimization (Static Site Generation for all 7 routes)
npm run build
```

---

## ☁️ Deployment Guide (Vercel)

ECOLEARN is 100% frontend and fully optimized for zero-config deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete ECOLEARN Education for Sustainability platform"
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `edu-for-sustain` repository.
4. Next.js App Router defaults will automatically be detected:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Click **"Deploy"**. The site will be live on a global CDN in under a minute!

---

## 📄 Academic License & Disclaimer

Developed solely for educational, academic, and non-commercial research purposes for college submission at **Manav Rachna University**. All United Nations SDG trademarks and icons belong to the United Nations. Mapped government schemes belong to their respective Union Ministries of the Government of India.
