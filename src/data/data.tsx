import {DownloadIcon} from '@heroicons/react/outline';

import heroImage from '../images/header-background.jpg';
import {ContactItem, Hero, HomepageMeta, PortfolioItem, SkillGroup, Social, Stat, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tim Baker',
  description: ``,
  ogImageUrl: ``,
  twitterCardType: 'summary_large',
  twitterSite: `@timbakerx`,
  twitterCreator: `@timbakerx`,
  twitterDomain: `reactresume.com`,
  twitterUrl: `https://reactresume.com`,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Tim Baker.`,
  description: <></>,
  actions: [
    {
      href: '/assets/resume.pdf',
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
 * Stat section
 */
export const stats: Stat[] = [];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [];

/**
 * Contact section
 */
export const contactItems: ContactItem[] = [];

/**
 * Social items
 */
export const socialLinks: Social[] = [];
