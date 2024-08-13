import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/melatonin-rocket-background.webp';
import porfolioImage0 from '../images/portfolio/sydekick-ai.webp';
import porfolioImage1 from '../images/portfolio/nutrillent.webp';
import porfolioImage2 from '../images/portfolio/aqua-aid.webp';
import porfolioImage3 from '../images/portfolio/notable.webp';
import {
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Leo Zhang',
  description: "Personal portfolio website.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hey! I'm Leo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a computer science student at the <strong className="text-stone-100">University of Waterloo</strong>, currently
        working as a software developer at <strong className="text-stone-100">Equitable</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me bouldering, baking bread, or watching sports with my friends.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: false,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SydeKick AI',
    description: 'AI model that provides live hit-detection feedback for MMA (Mixed Martial Arts) footage.',
    url: 'https://github.com/leozhang14/SydeKick-AI',
    image: porfolioImage0,
  },
  {
    title: 'Nutrillent',
    description: 'USDA nutrient calculator for users with deficiencies.',
    url: 'https://zealous-coast-053a22410.4.azurestaticapps.net/',
    image: porfolioImage1,
  },
  {
    title: 'AquaAid',
    description: `Python application that tracks a user's hydration levels using facial detection (OpenCV pre-trained HaarCascades)
      from a live video capture (webcam). Originally started as a personal playground for learning about computer vision and basic machine
      learning algorithms (ensemble).`,
    url: 'https://github.com/leozhang14/AquaAid',
    image: porfolioImage2,
  },
  {
    title: 'Notable',
    description: `Have you ever missed a class and never been able to catch up with the lesson? Have you ever forgotten to
      write down a vital part of your notes and failed your test? Have you ever felt compelled to share your notes and support
      other students? Notable is for you! Our tool helps students like yourself study harder and earn better marks. With thousands of note 
      packages in our database, you can find notes for anything you need to succeed, all shared by real students! 
      Filter by subject, unit, grade level, and format to fidn the perfect set of notes for you.`,
    url: 'https://github.com/leozhang14/notable',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - Present',
    location: 'Equitable',
    title: 'Software Developer',
    content: (
      <p>
        Developed Python and shell scripts to streamline ticketing system, reducing client response time by <strong>~40%</strong>.
        Optimized cash value projections for legacy life insurance policies with a custom gradient descent algorithm,
        saving <strong>~65 engineer hours</strong> per year. 
      </p>
    ),
  },
  {
    date: 'April 2024 - Present',
    location: 'UW Blueprint',
    title: 'Full Stack Developer',
    content: (
      <p>
        Developed and maintained data migration scripts with Prisma ORM and <strong>PostgreSQL</strong>, ensuring accurate data transfers
        and database consistency. Built <strong>TypeScript</strong> interfaces and service layers for consistent backend-database communication. 
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me in any of these ways!',
  items: [
    {
      type: ContactType.Email,
      text: 'leo.zhang2@uwaterloo.ca',
      href: 'mailto:leo.zhang2@uwaterloo.ca',
    },
    {
      type: ContactType.Location,
      text: 'Waterloo, Canada',
      href: 'https://www.google.com/maps/place/Waterloo,+ON/',
    },
    {
      type: ContactType.Instagram,
      text: '@leozhang_14',
      href: 'https://www.instagram.com/leozhang_14/',
    },
    {
      type: ContactType.Github,
      text: 'leozhang14',
      href: 'https://github.com/leozhang14',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/leozhang14'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/leozhang14/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/leozhang_14/'},
];
