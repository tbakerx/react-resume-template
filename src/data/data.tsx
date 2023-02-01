import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
import React from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ahmet Gundogdu WebPage',
  description: "my personal webpage",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
    About: 'about',
  Resume: "resume",
  Contact: 'contact',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Ahmet Gundogdu.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">Machine Learning Engineer</strong> at Spotify working on AI-powered music recommendations.
        I received my master degree in Computer & Information Science from Northeastern University. 
        During my studies, my focus was machine learning and natural language process.
        Specifically, I am interested in <strong className="text-stone-100">NLP</strong> techniques at Scale (i.e. language models, machine translation). In Spotify, I worked on different teams doing content description and <strong className="text-stone-100">user/track representation</strong> which powered most of the personalization tasks.
          </p>

          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I co-host a podcast on artificial intelligence and machine learning called Veri Tezgahi.
          </p>
    </>
  ),
  actions: [
    {
      href: 'https://open.spotify.com/show/6xh1JvolfduK8j5sb1WnoC',
      text: 'Podcast [TR]',
      primary: true,
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
  description: `I am an machine learning enthuisast who love to build stuff, learning about new things and hike`,
  aboutItems: [
    {label: 'Location', text: 'Boston, MA', Icon: MapIcon},
    {label: 'Study', text: 'Northeastern University', Icon: AcademicCapIcon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const experience: TimelineItem[] = [
  {
    date: 'March 2019 - Present',
    location: 'Spotify',
    title: 'Machine Learning Engineer. Boston, MA',
    content: (
      <p>
           Worked on representation learning for Spotify users and tracks using large scale deep neural networks and music description platform using Kubeflow ML infrastructure to automatically describe and tag content for retrieval by multiple teams within the company.
        </p>
    ),
  },
  {
    date: 'January 2018 - August 2018',
    location: 'WarnerMedia Applied Analytics Solutions. Boston, MA',
    title: 'Data Science (Co-op)',
    content: (
      <p>
            Carried out research and development of a tool that recognizes film entities in podcast audio via fuzzy matching and supervised learning, resulting in publication at KDD 2018.
      </p>
    ),
  },
  {
    date: 'April 2015 - July 2016',
    location: 'STM Defense Technologies and Engineering Inc. Ankara, Turkey',
    title: 'Data Scientist',
    content: (
        <p>
            Designed an RNN-based anomaly detection system to capture car accidents by using time series data taken from the city sensors with 95% accuracy, overperforming the heuristic baseline.
        </p>
    ),
  },
];

export const education: TimelineItem[] = [
    {
        date: 'December 2018',
        location: 'Northeastern University. Boston, MA',
        title: 'Masters in Data Science',
        content: <p> Research Areas: NLP, Recommendation Systems, Information Retrieval, Distributed Systems.</p>,
    },
    {
        date: 'January 2015',
        location: 'Sabanci University. Istanbul, Turkey',
        title: 'Mechatronics Engineering',
        content: <p>Thesis: Inverted Pendulum System Using Reinforcement Learning</p>,
    },
];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'gundogduasalih@gmail.com',
      href: 'mailto:gundogduasalih@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Boston MA, US',
       href: 'https://www.google.com/maps/d/u/0/embed?mid=12Z7rpnUEmOMT5EUAt7HDPxL1Xq4&ie=UTF8&hl=en&msa=0&ll=42.368691%2C-70.977173&spn=0.405848%2C0.549316&z=9&output=embed',
    },
      {
      type: ContactType.Twitter,
      text: '@asalihgundogdu',
      href: 'https://www.twitter.com/asalihgundogdu/',
    },
    {
      type: ContactType.Github,
      text: 'asgundogdu',
      href: 'https://github.com/asgundogdu',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/asgundogdu'},
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/4980699/ahmet-salih-gundogdu'},
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ahmet-salih-gundogdu/'},
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/asalihgundogdu'},
];
