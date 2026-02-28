# Components Guide

This guide details the primary React components that structure the application, focusing on the ones found in `src/components/Sections`. Each major part of the resume page is broken into its own component for maintainability and modularity.

---

## 🏗 Directory: `src/components/Sections`

This folder contains the core visual blocks that make up the single-page application. Most of these components receive their data directly from `src/data/data.tsx` by importing the variables.

### 1. `Header.tsx`
This component is fixed to the top of the viewport on desktop or serves as a mobile menu toggle on smaller screens.
- **Navigation:** Dynamically generates links based on `SectionId` enum values in `src/data/data.tsx`.
- **Scroll Tracking:** Utilizes a custom hook (`useIntersection`) to determine which section is currently visible in the viewport and highlights the corresponding navigation item.

### 2. `Hero.tsx`
The first section users see when landing on the site.
- **Content:** Displays the background image (`heroImage`), the user's name (`heroData.name`), a short bio (`heroData.description`), and primary call-to-action buttons (e.g., Download Resume, Contact).
- **Styling:** Typically uses a full-screen height layout with overlaid text and buttons. The background image uses Next.js Image component for optimization.

### 3. `About.tsx`
Provides detailed information about the individual.
- **Profile Image:** Displays a circular avatar (`profilepic`).
- **Text Block:** Renders the descriptive paragraph (`aboutData.description`).
- **List Items:** A responsive grid showing `aboutItems` (e.g., Location, Age, Email, Employment Status).

### 4. `Resume.tsx`
This is arguably the most complex component, as it breaks down work experience, education, and skills.
- **Timeline Items (Education & Work):** Renders vertical chronological lists based on the `education` and `experience` arrays from the data file. It extracts dates, titles, and descriptive content.
- **Skills (Progress Bars):** Iterates over `skills` groupings (e.g., Frontend, Backend, Spoken languages) and renders individual progress bars based on the numeric value out of a maximum (usually 10).

### 5. `Portfolio.tsx`
A visual showcase of projects.
- **Grid Layout:** Displays `portfolioItems` in a responsive grid.
- **Images:** Uses the Next.js `<Image>` component to render optimized thumbnails.
- **Hover Effects:** Includes overlay effects that reveal the project title, description, and an external link icon when hovered over.

### 6. `Testimonials.tsx`
Displays quotes from colleagues or clients.
- **Background:** Features an overlaid background image (`testimonialImage`).
- **Carousel / List:** Iterates over the `testimonialData` array to display the quotes and the authors.

### 7. `Contact.tsx`
The section for getting in touch.
- **Contact Info Grid:** Displays methods of contact (e.g., Email, Phone, LinkedIn) based on the `contactData` array.
- **ContactForm:** A sub-component (`ContactForm.tsx`) that renders the input fields (Name, Email, Message) and handles local state and basic validation.
  - *Note:* Out of the box, the form does not send emails. A backend service (e.g., an API route or a third-party form handler) must be implemented.

### 8. `Footer.tsx`
The bottom bar of the website.
- **Social Links:** Displays icons linked to the user's social profiles based on the `socialLinks` array.
- **Copyright:** Displays the current year and the user's name.

---

## 🛠 Shared Components

### `Layout / Page.tsx`
This component acts as a wrapper for the entire application. It accepts metadata props (Title, Description) and configures the HTML `<head>` using Next.js `<Head>`. It sets up the main semantic HTML structure.

### `Icon / Icon.tsx`
A versatile, customizable SVG wrapper used throughout the application to render vector icons consistently. It often interfaces with the imported SVGs or Heroicons.

---

## 💡 Best Practices

- When creating a new component or section, try to follow the established pattern:
  1. Create a TypeScript interface for the data in `src/data/dataDef.ts`.
  2. Instantiate that data in `src/data/data.tsx`.
  3. Import the data into the component and map over it to render the UI.
- Keep Tailwind classes inline where possible. If a set of classes is repeated frequently, consider abstracting it into a smaller React component rather than creating custom CSS classes.
