# Breathe Better, Live Better — Indoor Air Quality Toolkit

An educational website about indoor air quality (IAQ) built for the Future Problem Solvers Community Project. Designed to be replicable by other FPS teams, schools, and communities.

**Live site:** [your-deploy-url-here]  
**Topic:** Indoor Air Quality  
**Target audience:** Middle schoolers through adults (ages 11–70+)

---

## What's in This Toolkit

- Plain-language explainers on 8 common IAQ pollutants
- Health impact scenarios and short- vs. long-term effects
- Tiered solutions (free → professional)
- Filterable photo gallery
- Downloadable resources (Quick Reference, Classroom Guide, Home Checklist, Poster Template)
- Full APA-formatted bibliography, filterable by topic
- Responsive on mobile, tablet, and desktop
- WCAG AA accessibility

---

## Tech Stack

- **React 18** + **Vite 8**
- **Tailwind CSS 3** (utility-first styling)
- **Lucide React** (icons)
- Google Fonts: Playfair Display, Source Serif 4, DM Sans

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## How to Adapt This Site for Your Topic

This project is designed to be a template. Here's how to swap in your own content:

1. **Fork or download** this repository.

2. **Update the data files** in `src/data/`:
   - `problems.js` — your topic's key issues (8 cards)
   - `solutions.js` — tiered solutions (free, low-cost, bigger steps)
   - `sources.js` — your APA-formatted citations

3. **Edit the text** in each section component (`src/components/`) — headlines, body copy, stats.

4. **Replace placeholder images** in the Photo Gallery with properly licensed photos relevant to your topic. All photos must be credited.

5. **Update the footer** with your name, school, and year.

6. **Deploy for free** to [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [GitHub Pages](https://pages.github.com).

---

## Project Structure

```
src/
├── components/      ← One file per page section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── WhatIsIAQ.jsx
│   ├── ProblemsSection.jsx
│   ├── ProblemCard.jsx
│   ├── WhyItMatters.jsx
│   ├── SolutionsSection.jsx
│   ├── PhotoGallery.jsx
│   ├── Toolkit.jsx
│   ├── Sources.jsx
│   └── Footer.jsx
├── data/            ← All content lives here — easy to swap out
│   ├── problems.js
│   ├── solutions.js
│   └── sources.js
├── hooks/           ← Scroll reveal + animated counter
│   ├── useScrollReveal.js
│   └── useCounter.js
├── App.jsx
└── index.css        ← Tailwind + custom utilities
```

---

## License

MIT — free to use, adapt, and share with attribution.

---

*Created for the Future Problem Solvers Community Project.*  
*All factual claims are cited. Always consult a professional for health concerns related to indoor air quality.*
