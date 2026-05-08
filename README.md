# Personal Portfolio

A portfolio built with React and Vite. The site features a custom dark/light theme, animations, project cards, and UI inspired by terminal/dev environments.

# Host
Hosted at https://ol1v3s.github.io/portfolio/

## Tech Stack

- React
- Vite
- JavaScript
- Custom CSS
- HTML
- SVG icons

## Features

- Responsive layout for desktop and mobile
- Dark and light mode toggle
- Interactive hero section with profile image
- About section with tech stack icons
- Dynamic projects rendered from `projects.json`
- Project cards with GitHub and live site links
- Terminal-style boot screen animation

## Project Structure

```txt
portfolio/
├── public/
│   ├── icons/
│   ├── data/
│   │   └── projects.json
│   └── resume.pdf
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BootScreen.jsx
│   │
│   ├── hooks/
│   │   ├── useAnimations.js
│   │   └── useScrollSpy.js
│   │
│   ├── styles/
│   │   ├── main.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── boot.css
│   │   └── responsive.css
│   │
│   ├── App.jsx
│   └── main.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Projects

Projects are stored in:

```txt
public/data/projects.json
```

Each project includes:

- Title
- Type
- Description
- Tech stack
- GitHub link
- Live site link

## Author

Oliver Triana
