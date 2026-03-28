// src/data/data.tsx

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';

import portfolioVso from '../images/portfolio/portfolio-vso.jpg';
import portfolioDashboard from '../images/portfolio/portfolio-dashboard.jpg';
import portfolioIot from '../images/portfolio/portfolio-iot.jpg';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

// Używamy nazwy pliku z CV
const RESUME_DOWNLOAD_URL = '/CV_IT_Delivery_Transformation_Lead.pdf';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Przemyslaw Raczka | Senior Innovation Consultant & AI Strategy Expert',
  description: "Professional portfolio of Przemyslaw Raczka, Operational Architect, AI Strategy & Enterprise Delivery Expert bridging enterprise discipline with startup velocity.",
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
  name: `Przemyslaw Raczka`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Senior Innovation Consultant</strong> | AI Strategy & Enterprise Delivery Expert.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        An <strong className="text-stone-100">Operational Architect</strong> bridging enterprise discipline with startup velocity. I orchestrate delivery for large organizations while building AI-driven SaaS products from the ground up, combining high empathy with a "Builder’s Mindset".
      </p>
    </>
  ),
  actions: [
    {
      href: RESUME_DOWNLOAD_URL,
      text: 'Download CV',
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

/**
  * About section
  */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Senior Innovation Consultant and IT Delivery Lead with 20+ years of experience driving digital transformation across the Nordic financial sector. I offer a direct, analytical perspective that helps organizations transition from legacy mindsets to AI-augmented workflows. I don't just advise on strategy; I build the automation tools (AI agents, Low-Code, Python) that make innovation tangible. My leadership style empowers cross-border teams to deliver measurable value through collaboration rather than control.`,
  aboutItems: [
    {label: 'Location', text: 'Copenhagen, Denmark / Warsaw, Poland', Icon: MapIcon}, // Dodano lokalizację
    {label: 'Languages', text: 'Polish (Native), English (Full), Danish (Full)', Icon: FlagIcon},
    {label: 'Education', text: 'M.Eng., Warsaw University of Technology', Icon: AcademicCapIcon},
    {label: 'Core Focus', text: 'AI Strategy, Autonomous Agents & Enterprise Delivery', Icon: BuildingOffice2Icon},
    {label: 'Personal Interests', text: 'Scuba Diving, Downhill Skiing, Go-Karting, Chess', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'AI & Automation',
    skills: [
      {name: 'Autonomous AI Agents', level: 9, max: 10},
      {name: 'LLM Workflows & Prompt Eng.', level: 8, max: 10},
      {name: 'Python & Low-Code', level: 8, max: 10},
    ],
  },
  {
    name: 'Delivery & Program Mgmt',
    skills: [
      {name: 'Program Management', level: 10, max: 10},
      {name: 'Vendor & Risk Management', level: 9, max: 10},
      {name: 'Operational Stability & Governance', level: 9, max: 10},
    ],
  },
  {
    name: 'BizDevOps & Strategy',
    skills: [
      {name: 'Value Stream Mapping & Flow Metrics', level: 10, max: 10},
      {name: 'Legacy Modernization Strategy', level: 8, max: 10},
      {name: 'Gap Analysis & Roadmap Execution', level: 9, max: 10},
    ],
  },
  {
    name: 'Technical Oversight & Data',
    skills: [
      {name: 'Jira (Admin) & Confluence', level: 10, max: 10},
      {name: 'Test Automation Strategy (CI/CD)', level: 8, max: 10},
      {name: 'Power BI (Data Modeling)', level: 8, max: 10},
    ],
  },
  {
    name: 'Leadership & Organization',
    skills: [
      {name: 'Stakeholder Mgmt (C-Level)', level: 9, max: 10},
      {name: 'Cross-Border Team Mgmt (DK/PL)', level: 9, max: 10},
      {name: 'Organizational Design & Change Mgmt', level: 8, max: 10},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'PropFolio (Stealth PropTech)',
    description: 'Founder & Product Lead. Architecting an AI-first SaaS platform for real estate portfolio management. Built a production-grade MVP using autonomous AI agents, reducing development time by ~70%.',
    url: '#',
    image: '',
    video: '/videos/portfolio-propfolio.mp4',
  },
  {
    title: 'Value Stream Optimization (VSO)',
    description: 'Mapped end-to-end Value Streams across IT and Business to identify systemic bottlenecks, directly contributing to faster time-to-market for banking products.',
    url: '#',
    image: portfolioVso,
  },
  {
    title: 'Flow Metrics & Governance Dashboard',
    description: 'Architected a flow-metrics dashboard (Power BI/Power Platform) to enable real-time delivery performance monitoring, replacing manual reporting for leadership.',
    url: '#',
    image: portfolioDashboard,
  },
  {
    title: 'IoT & Cost Optimization (R&D)',
    description: 'Engineered a Home Assistant ecosystem to automate energy management, successfully reducing utility costs through data-driven automation.',
    url: '#',
    image: portfolioIot,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '1996 – 2002',
    location: 'Warsaw University of Technology',
    title: 'M.Eng., Computer-Aided Design (CAD)',
    content: <p>Completed Master of Engineering studies.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2026 – Present',
    location: 'PropFolio (Stealth PropTech), Copenhagen',
    title: 'Founder & Product Lead',
    content: (
      <ul className="list-disc pl-5">
        <li>Architecting an AI-first SaaS platform for real estate portfolio management, focusing on automated financial reporting and asset optimization.</li>
        <li>Built a production-grade MVP in 3 months by leveraging autonomous AI agents, reducing traditional development time by ~70%.</li>
        <li>Integrated LLM workflows to automate lease agreement analysis, increasing data extraction accuracy compared to manual entry.</li>
      </ul>
    ),
  },
  {
    date: 'Ongoing',
    location: 'Personal Lab',
    title: 'Innovation Lead | Home Assistant Ecosystem',
    content: (
      <ul className="list-disc pl-5">
        <li>Engineering a private IoT infrastructure (Python, YAML) for advanced energy management and hardware integration.</li>
        <li>Automated energy consumption patterns, resulting in a 15% reduction in utility costs.</li>
        <li>Serves as a sandbox for testing real-time data processing and hardware-software integration protocols.</li>
      </ul>
    ),
  },
  {
    date: 'Oct 2014 – Dec 2025',
    location: 'Nordea, Copenhagen / Warsaw',
    title: 'Senior IT Delivery Lead',
    content: (
      <ul className="list-disc pl-5">
        <li>Led the structural Agile restructuring of 2,700+ IT employees, organizing siloed departments into Agile Release Trains (ARTs) to improve predictability.</li>
        <li>Architected an internal "Agile Academy" that upskilled 1,600+ colleagues within 12 months (Satisfaction Score: 4.7/5).</li>
        <li>Deployed Power BI flow-metrics dashboards that replaced manual reporting, cutting administrative effort by 40%.</li>
        <li>Identified and removed systemic bottlenecks in the SDLC, reducing average feature lead time by 25% for key business units.</li>
        <li>Established a QA automation framework that reduced manual certification efforts by 90% for critical financial systems.</li>
      </ul>
    ),
  },
  {
    date: '2008 – 2016',
    location: 'Nordea, Copenhagen',
    title: 'IT Senior Test Manager (Program Level)',
    content: (
      <ul className="list-disc pl-5">
        <li>Managed QA and Testing for 2 large-scale transformation programs, coordinating distributed teams.</li>
        <li>Successfully reduced critical post-release defects by 50% by implementing a risk-based testing strategy.</li>
        <li>Accountable for QA budget, resource forecasting, and risk mitigation strategy.</li>
      </ul>
    ),
  },
  {
    date: '2003 – 2007',
    location: 'Agricultural Market Agency, Warsaw',
    title: 'Head of Test & Release Department',
    content: <p>Managed a team of 17 and ensured EU accreditation of IT systems.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // REFERENCJA 1: BIZDEVOPS & STRATEGIA (NOWY PRIORYTET)
    {
      name: 'Strategic Deployment Leader',
      text: "Przemyslaw is a Nordic-fluent leader who is an expert in translating complex strategic roadmaps into actionable technical backlogs. His work on data-driven governance enabled real-time decision-making for leadership.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    // REFERENCJA 2: DELIVERY & METRYKI (TEST MANAGER/EKSPERT)
    {
      name: 'Senior Program Stakeholder',
      text: "Through optimizing our defect management process and enhancing collaboration between Development and Operations, Przemyslaw reduced our critical bug-fix turnaround time by 40%.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/73.jpg',
    },
    // REFERENCJA 3: AGILE COACH & NAUCZANIE (SKALOWANIE)
    {
      name: 'Capability Builder (L&D)',
      text: "Przemyslaw's leadership in designing and scaling the internal Agile Academy resulted in the upskilling of over 1,600 colleagues across Nordics and Poland.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/55.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaboration opportunities, consulting, or questions regarding BizDevOps Strategy and Value Stream Optimization.',
  items: [
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/praczka',
      href: 'https://linkedin.com/in/praczka',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/praczka'},
];