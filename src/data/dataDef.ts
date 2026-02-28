// src/data/dataDef.ts

import {FC, ForwardRefExoticComponent, SVGProps} from 'react';
import {StaticImageData} from 'next/image';
import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
}

export interface Hero {
  imageSrc: string | StaticImageData;
  name: string;
  description: JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

export interface About {
  profileImageSrc?: string | StaticImageData;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];

}

export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

export interface TimelineItem {
  date: string;
  location?: string;
  title: string;
  content: JSX.Element;
}

export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  name: string;
  text: string;
}

export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}