# Oliver Triana — Portfolio

A recruiting-focused software engineering portfolio built with React, Vite, and custom CSS.

## Live site

Hosted at https://ol1v3s.github.io/portfolio/

## Highlights

- Responsive “Precision Engineering” visual system with intentional dark and light themes
- Recruiter-focused hero, about, experience, projects, and contact sections
- Static, data-driven project cards sourced from `src/data/projects.js`
- Accessible mobile navigation, theme toggle, focus states, and reduced-motion support
- GitHub Pages-compatible assets through Vite's `/portfolio/` base path

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Resume

The Resume links resolve to `public/resume.pdf` through `import.meta.env.BASE_URL`.
