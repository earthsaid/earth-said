# Said Hadji — Portfolio

Personal portfolio website, built with React, Vite and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: production build into `dist/`
- `npm run preview`: preview the production build
- `npm run lint`: run ESLint

## Structure

```
src/
  App.jsx              page shell (background, centered column)
  Pages/Portfolio.jsx  the page: Hero, projects, contact, footer
  components/          shared components (Footer)
  portfolio/
    components/        Hero, ProjectsCarousel, ProjectCard, ContactForm, Section, Typography, ThemeToggle
    data/data.js       projects, status messages and links
  index.css            theme tokens (light/dark) and base styles
```

## Content

Edit `src/portfolio/data/data.js` to add or change projects. Screenshots live in `public/screenShots/`.
