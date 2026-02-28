# Getting Started

Welcome to the **Getting Started** guide. This document walks you through setting up the React Resume Template locally, installing dependencies, and customizing the site with your personal information.

---

## 🚀 Prerequisites

Before you start, make sure your machine has the following tools installed:

1. **[Node.js](https://nodejs.org/)**: Recommended to use LTS (18.x or 20.x).
2. **[Yarn](https://yarnpkg.com/)**: The preferred package manager used in this repository (`npm` will also work, but `yarn` is recommended as the project includes a `yarn.lock` file).

---

## 🛠 Installation

Follow these steps to set up the project on your machine:

1. **Clone the Repository**
   If you haven't already, fork the [original repository](https://github.com/tbakerx/react-resume-template) and clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-resume-template.git
   cd react-resume-template
   ```

2. **Install Dependencies**
   Run the following command to download and install all required packages:
   ```bash
   yarn install
   ```

3. **Start the Development Server**
   Start Next.js in development mode. The app will usually run at `http://localhost:3000`.
   ```bash
   yarn dev
   ```

---

## 📝 Customizing Your Resume

The main selling point of this template is that you do not need to touch React code to build your site. All the data that powers the resume sections is stored in one single configuration file.

### 1. The Data File
Navigate to `src/data/data.tsx`. This file contains the entirety of the information displayed on the website.

Inside `data.tsx`, you'll find defined constants that map to different sections of the page, such as:

- `heroData`: Your name, role, a brief description, and main call-to-actions.
- `aboutData`: Detailed text about yourself and profile image.
- `resumeData`: Your work history and education.
- `skills`: A categorized list of your technical skills with percentage values.
- `portfolioItems`: A collection of projects you've worked on, including images and links.
- `testimonialData`: Quotes or testimonials from people you've worked with.
- `contactData`: Information for the contact section (email, location, social links).

### 2. Updating Data
To update the content, simply replace the placeholder strings and arrays in `src/data/data.tsx` with your own details.

For example, to update the Hero section:
```tsx
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm John Doe.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> currently working
        at <strong className="text-stone-100">Acme Corp</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};
```

### 3. Updating Images
The project relies on static images stored in the `src/images/` directory. By default, these images are imported into `data.tsx` at the top of the file:
```tsx
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
```

**How to add your own images:**
1. Place your `.jpg`, `.png`, or `.webp` files in `src/images/` (or a subdirectory like `src/images/portfolio/`).
2. Import the new image into `src/data/data.tsx`.
3. Reference the imported image variable in the appropriate section's data block.

### 4. Updating the Contact Form
By default, the template only manages state and UI for the Contact form. Due to the variety of backend services (Formspree, Netlify Forms, SendGrid, etc.), you are expected to implement the actual submission logic.

If you are a developer, head to `src/components/Sections/Contact/ContactForm.tsx` to handle the `onSubmit` logic and make the API call to your preferred email/form provider.

---

## 🚀 Deployment

The project is built using [Next.js](https://nextjs.org/) and can be easily deployed to [Vercel](https://vercel.com/) (recommended) or any host that supports Node.js apps.

To deploy via Vercel:
1. Create an account on Vercel.
2. Link your GitHub account and import your forked repository.
3. Vercel will automatically detect the Next.js setup. Click "Deploy".
4. Within minutes, your resume website will be live!
