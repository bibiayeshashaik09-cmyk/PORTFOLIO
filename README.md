# Personal Portfolio — Sample

A modern, dark-mode, animated developer portfolio built with **React + Vite + Tailwind CSS v4 + Framer Motion + React Icons**.

Everything you see is placeholder/sample content. You only need to edit **one file** to make this yours: `src/data/portfolioData.js`.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## What to edit

| What | Where |
|---|---|
| Name, tagline, email, phone, social links, resume link | `src/data/portfolioData.js` → `personalInfo` |
| Bio, education, strengths, languages | `src/data/portfolioData.js` → `aboutMe` |
| Skills + proficiency % | `src/data/portfolioData.js` → `skills` |
| Projects (title, description, tech, links, images) | `src/data/portfolioData.js` → `projects` |
| Internships / freelance / workshops / hackathons | `src/data/portfolioData.js` → `experience` |
| Certifications | `src/data/portfolioData.js` → `certifications` |
| Achievements | `src/data/portfolioData.js` → `achievements` |

## Adding your photo & resume

1. Drop your photo in `public/` (e.g. `public/profile.jpg`) and set `personalInfo.photo = "/profile.jpg"`.
2. Drop your resume PDF in `public/` as `resume.pdf` (or update `personalInfo.resumeUrl`).
3. Add project screenshots to `public/` and reference them in each project's `image` field.

## Contact form

The contact form in `src/components/Contact.jsx` is front-end only — it doesn't send real emails yet. Wire it up to a form backend such as [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) before you deploy, or replace it with a `mailto:` link if you'd rather keep things simple.

## Deployment

This is a static Vite build — deploy the `dist/` folder to **Vercel**, **Netlify**, or **GitHub Pages** for free. Vercel/Netlify: just connect the repo, they auto-detect Vite.

## Folder structure

```
src/
  components/   # one component per section + shared UI (Reveal, SectionHeading, etc.)
  data/         # portfolioData.js — all your content lives here
  hooks/        # useTheme (dark/light), useScrollProgress
  index.css     # design tokens (colors, fonts) + base styles
  App.jsx       # assembles all sections
  main.jsx      # React entry point
```

## Design notes

- Dark theme by default with an indigo → cyan gradient accent; toggle to light mode from the navbar.
- Typography: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/tags) — a nod to a developer's terminal.
- Motion: scroll-reveal on every section, animated skill bars, hero typing effect, animated gradient mesh background. Respects `prefers-reduced-motion`.
- Accessible: visible focus states, semantic headings, alt text on images, labelled form fields.
