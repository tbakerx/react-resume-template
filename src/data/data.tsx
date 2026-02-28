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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
  title: 'Przemyslaw Raczka | IT Delivery & Transformation Lead',
  description: "Professional portfolio of Przemyslaw Raczka, IT Delivery & Transformation Lead and BizDevOps Strategist.",
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
        <strong className="text-stone-100">IT Delivery & Transformation Lead</strong> | Senior Program Manager.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A <strong className="text-stone-100">Nordic-fluent leader</strong> who translates complex strategic roadmaps into actionable technical backlogs, combining transparent communication with a focus on psychological safety.
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
  description: `Senior IT Delivery Lead & BizDevOps Strategist with 20+ years of experience. My leadership style, rooted in Scandinavian trust, empowers cross-border teams to deliver measurable value through collaboration rather than control. I excel at combining direct, transparent communication with a focus on psychological safety. My technical understanding bridges the gap with engineering teams by focusing on Developer Experience (DevEx) pain points.`,
  aboutItems: [
    {label: 'Location', text: 'Copenhagen, Denmark / Warsaw, Poland', Icon: MapIcon}, // Dodano lokalizację
    {label: 'Languages', text: 'Polish (Native), English (Full), Danish (Full)', Icon: FlagIcon},
    {label: 'Education', text: 'M.Eng., Warsaw University of Technology', Icon: AcademicCapIcon},
    {label: 'Core Focus', text: 'BizDevOps Strategy & Value Stream Optimization', Icon: BuildingOffice2Icon},
    {label: 'Personal Interests', text: 'Scuba Diving, Downhill Skiing, Go-Karting, Chess', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
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
    title: 'Value Stream Optimization (VSO)',
    description: 'Mapped end-to-end Value Streams across IT and Business to identify systemic bottlenecks, directly contributing to faster time-to-market for banking products.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Flow Metrics & Governance Dashboard',
    description: 'Architected a flow-metrics dashboard (Power BI/Power Platform) to enable real-time delivery performance monitoring, replacing manual reporting for leadership.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'IoT & Cost Optimization (R&D)',
    description: 'Engineered a Home Assistant ecosystem to automate energy management, successfully reducing utility costs through data-driven automation.',
    url: '#',
    image: porfolioImage3,
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
    date: '2018 – Present',
    location: 'Nordea, Copenhagen',
    title: 'BizDevOps Transformation Lead & Delivery Manager',
    content: (
      <ul className="list-disc pl-5">
        <li>Leading the implementation of the Nordea Technology Strategy, aligning 10+ tech areas with modern BizDevOps practices.</li>
        <li>Architected a flow-metrics dashboard (Power BI/Power Platform) for real-time delivery performance monitoring.</li>
        <li>Successfully integrated ITIL-based Operations teams with SAFe-based Development trains (ARTs).</li>
        <li>Designed and scaled the internal Agile Academy, training 1,600+ colleagues across Nordics and Poland.</li>
      </ul>
    ),
  },
  {
    date: '2017 – 2018',
    location: 'Nordea, Copenhagen',
    title: 'Senior Project Methods Expert & Scrum Master',
    content: (
      <ul className="list-disc pl-5">
        <li>Increased team velocity by 35% within 6 months through targeted process improvements.</li>
        <li>Reduced critical bug-fix turnaround time by 40% by optimizing the defect management process.</li>
        <li>Ensured technology compliance by aligning project and maintenance teams with Nordea Software Process standards.</li>
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