import {
  DownloadIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/website_background.jpg';
import porfolioImage1 from '../images/portfolio/medium_post1.png';
import porfolioImage2 from '../images/portfolio/medium_post2.png';
import porfolioImage3 from '../images/portfolio/medium_post3.png';
import porfolioImage4 from '../images/portfolio/medium_post4.png';
import profilepic from '../images/profilepic_tonytruong.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tony Truong - DevOps Ninja',
  description: "The Personal website of Tony Truong",
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

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Tony Truong.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Vancouver based <strong className="text-stone-100">DevOps Engineer</strong>, currently working
        at <strong className="text-stone-100">Rennie</strong> helping build out our cloud infrastructure, dockerized containers,
	and CI/CD pipelines!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you'll find me writing articles over at <strong className="text-stone-100">kaizendev.medium</strong>,
         hanging out with my beautiful orange tabby <strong className="text-stone-100">Kaido</strong> or exploring beautiful{' '} <strong className="text-stone-100">Vancouver</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '../images/Tony_Truong_Resume_2.PDF',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
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
  description: `DevOps Fanatic with a penchant to automate anything and everything — Terraform Nerd, Docker practitioner and self proclaimed AWS guru.`,
  aboutItems: [
    {label: 'Location', text: 'Vancouver, BC', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Vietnamese', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Anime, food, ', Icon: SparklesIcon},
    {label: 'Employment', text: 'Rennie', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Platform Engineering',
    skills: [
      {
        name: 'Terraform',
        level: 8,
      },
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Kubernetes',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Nextjs',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Ruby',
        level: 6,
      },
      {
        name: 'Python',
        level: 6,
      },
    ],
  },
  {
    name: 'CICD Tooling',
    skills: [
      {
        name: 'Jenkins',
        level: 8,
      },
      {
        name: 'Gitlab',
        level: 8,
      },
      {
        name: 'GitHub Actions',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ReactJS & Nginx in Docker',
    description: '12 Min Read',
    url: 'https://kaizendev.medium.com/devops-docker-series-local-dev-reactjs-nginx-setup-c7b55b8e3c7d',
    image: porfolioImage1,
  },
  {
    title: 'Multiple Running Localhost Apps - A Reverse Proxy Story',
    description: '5 Min Read',
    url: 'https://kaizendev.medium.com/devops-docker-series-local-dev-reactjs-nginx-setup-c7b55b8e3c7d',
    image: porfolioImage2,
  },
  {
    title: 'Jenkins Pipelines — Postgres, NodeJs & ReactJS',
    description: '4 Min Read',
    url: 'https://kaizendev.medium.com/devops-docker-series-local-dev-reactjs-nginx-setup-c7b55b8e3c7d',
    image: porfolioImage3,
  },
  {
    title: 'Terraform - Multiple Application Deployments',
    description: '5 Min Read',
    url: 'https://medium.com/p/a92a7fdba66',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 *
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

*/

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - Present',
    location: 'Rennie',
    title: 'DevOps Engineer',
    content: (
      <p>
        DevOps Engineer focusing on mentoring our development team instilling the devops methodology. Building out our cloud instracture and containerized applications.
      </p>
    ),
  },
  {
    date: 'Aug 2016 - Jan 2021',
    location: 'LaunchCode',
    title: 'DevOps Administrator',
    content: (
      <p>
	Custom Software Solutions company - The origin story you can say, where I was in the trenches of learning many different tech stacks depending on the
	needs of the client. MERN, MEAN, MAVN or even PERL we had to think of how to maintain all of those different application stacks.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Shoot me a message! ',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@tonytruong.me',
      href: 'mailto:contact@tonytruong.me',
    },
    {
      type: ContactType.Location,
      text: 'Vancouver BC, Canada',
      href: 'https://www.google.com/maps/place/Vancouver,+BC/@49.2578263,-123.1939434,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@bakamusic',
      href: 'https://www.instagram.com/bakamusic/',
    },
    {
      type: ContactType.Github,
      text: 'tonytruong101',
      href: 'https://github.com/tonytruong101',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tonytruong101'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'http://localhost:3000'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tonytruong-cgy/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bakamusic/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'http://localhost:3000'},
];
