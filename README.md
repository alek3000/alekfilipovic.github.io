# Alek Filipovic - Portfolio Website

A modern, scalable personal portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library (ready for implementation)
- **Lucide React** - Icon library
- **clsx & tailwind-merge** - Dynamic class management

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── MotionWrapper.jsx
├── pages/         # Page components
│   └── Home.jsx
├── hooks/         # Custom React hooks
├── assets/        # Images, fonts, etc.
├── styles/        # Global styles
│   └── index.css
└── utils/         # Utility functions
    └── cn.js
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### GitHub Pages (Manual)

1. Update the `base` property in `vite.config.js` to match your repository name:
   ```js
   base: '/your-repo-name/',
   ```

2. Deploy using the npm script:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

### GitHub Pages (Automated)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the `main` branch.

**Important:** 
- Make sure to update the `base` property in `vite.config.js` to match your repository name before deploying.
- Enable GitHub Pages in your repository settings and set the source to `gh-pages` branch.

## 🎨 Design System

The project uses a semantic color system that's ready for dark mode implementation:

- **Primary**: Blue tones for main actions and highlights
- **Secondary**: Violet tones for accents
- **Background**: White and light gray variants
- **Text**: Gray scale for typography

All colors are defined in `tailwind.config.js` and can be easily extended or modified.

## 📱 Responsive Design

The layout is mobile-responsive by default, using Tailwind's responsive breakpoints:
- Mobile: Default (no prefix)
- Tablet: `sm:` (640px+)
- Desktop: `md:` (768px+)
- Large Desktop: `lg:` (1024px+)

## 🔮 Future Enhancements

- Dark mode implementation
- Complex animations with Framer Motion
- Dynamic data integration
- Additional pages and sections
- Blog or project showcase

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using modern web technologies.

