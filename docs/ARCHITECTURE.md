# Architecture Overview

This document provides a technical overview of the React Resume Template. It's meant for developers who want to understand the stack, how the application is structured, and how data flows through the application.

## Core Technologies

The project relies on a modern frontend stack:
- **Next.js (v14)**: The core framework providing routing, React Server Components (where applicable), server-side rendering (SSR), and static site generation (SSG). This allows the resume to be fully indexed by search engines (SEO) and performant.
- **React (v18)**: For rendering the user interface using functional components and hooks.
- **TypeScript**: The entire codebase is typed. This helps catch errors early and provides excellent developer experience (DX) through autocomplete and inline documentation.
- **Tailwind CSS (v3)**: A utility-first CSS framework. Most styling is done via Tailwind utility classes directly in the React components, minimizing the need for custom CSS files.
- **Headless UI & Heroicons**: Used for accessible, unstyled UI components and SVG icons.

---

## Directory Structure

The project follows a standard Next.js directory layout with a dedicated `src/` directory.

```plaintext
react-resume-template/
├── .github/          # GitHub Actions (e.g., CI/CD workflows)
├── public/           # Static assets (favicons, manifest)
├── src/
│   ├── components/   # React components
│   │   ├── Icon/     # Reusable SVG icon components
│   │   ├── Layout/   # Page wrapper/layout component
│   │   └── Sections/ # Major feature components (Hero, About, Resume, etc.)
│   ├── data/         # Configuration data and TypeScript definitions
│   │   ├── data.tsx  # Centralized resume content
│   │   └── dataDef.ts# TypeScript interfaces for the data
│   ├── hooks/        # Custom React hooks (e.g., useWindow, useIntersection)
│   ├── images/       # Static image files imported into data.tsx
│   └── pages/        # Next.js Pages Router
│       ├── api/      # Next.js API Routes (empty by default)
│       ├── _app.tsx  # Custom App component for global styles/layout
│       ├── _document.tsx # Custom Document for HTML/Body tags
│       └── index.tsx # Main entry point (Home page)
├── next.config.js    # Next.js configuration
├── package.json      # Dependencies and scripts
├── tailwind.config.js# Tailwind theme and plugin configuration
└── tsconfig.json     # TypeScript compiler options
```

---

## Data Flow & Architecture

One of the key design patterns in this project is separating the **presentation layer** (React components) from the **data layer** (content). This ensures that non-developers can update the content without fear of breaking the UI.

### 1. `src/data/data.tsx`
This file acts as the "database" for the application. It exports structured objects (typed via `dataDef.ts`) containing personal information, skills, portfolio items, and social links.

### 2. `src/pages/index.tsx`
This is the root page component. It acts as the orchestrator.
- It imports the specific section components from `src/components/Sections/`.
- It renders a `Page` layout component.
- It maps the static data from `data.tsx` and passes it as props (or renders the components that consume the static data directly).

### 3. `src/components/Sections/`
Each section (e.g., `Hero.tsx`, `About.tsx`, `Portfolio.tsx`) is responsible for rendering a distinct part of the single-page layout.
- The sections are typically assigned a unique `id` (e.g., `id="about"`).
- The `Header.tsx` component tracks the active section via the `useIntersection` hook and updates the navigation styling accordingly (e.g., underlining the "About" link when scrolling past the About section).

### 4. Styling (Tailwind CSS)
The vast majority of styling is handled via Tailwind. You'll see classes like `flex flex-col md:flex-row items-center justify-center p-4 bg-stone-900 text-white`.
- The main configuration file `tailwind.config.js` extends the default theme.
- A small `src/globalStyles.scss` file exists for minimal global overrides or specific animations not easily achievable via Tailwind utilities.

---

## Next Steps for Developers
If you are modifying the codebase:
1. **Adding a new section**:
   - Define a new data interface in `src/data/dataDef.ts`.
   - Add the data block in `src/data/data.tsx`.
   - Create a new component in `src/components/Sections/`.
   - Import and render it in `src/pages/index.tsx`.
   - Add the new section to the `SectionId` enum and navigation items in `src/data/data.tsx` to ensure the header links to it.
2. **Contact Form Logic**:
   - The default `ContactForm.tsx` manages state and validates input but does not send emails.
   - You can create an API route in `src/pages/api/contact.ts` to handle the POST request.
   - Use a service like SendGrid, Nodemailer, or a serverless function to dispatch the email.
