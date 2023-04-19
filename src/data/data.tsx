import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
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
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/IMG_17002.jpg';
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

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume of Bibin Alias',
  description: "Interactive resume deployed in cloud (github.io)",
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
  name: `I'm Bibin Alias.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      An <strong className="text-stone-100">engineering professional</strong> with strong expertise in creating
and accomplishing solutions for complicated business problems requiring smart logic. Hands-on experience in
designing and developing complex algorithms using <strong className="text-stone-100">Embedded C</strong>.
Experienced in MVC development and automated testing using <strong className="text-stone-100">python</strong>. 
Strong organizational skills along with the ability to accomplish multiple tasks under extreme pressure, and 
meet specific deadlines.
      </p>
    </>
      ),
  actions: [
    {
      //href: 'https://drive.google.com/file/d/1WCUL-6yPTkavEckD3zrple1Fw7o4rVti/view?usp=share_link',
      href: 'https://drive.google.com/u/0/uc?id=1WCUL-6yPTkavEckD3zrple1Fw7o4rVti&export=download',
      text: 'Curriculum Vitae',
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Kochi, Kerala', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Meliponiculture, Driving', Icon: SparklesIcon},
    {label: 'Study', text: 'Mahatma Gandhi University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Gadgeon Systems Inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
 
  {
    name: 'Domains',
    skills: [
      {
        name: 'IoT',
        level: 9,
      },
      {
        name: 'Bare-metal',
        level: 9,
      },
      {
        name: 'Embedded Linux',
        level: 8,
      },
      {
        name: 'RTOS',
        level: 7,
      },
    ],
  },
  {
    name: 'Programing Languages',
    skills: [
      {
        name: 'C',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Assembly Language',
        level: 4,
      },
      {
        name: 'HDL',
        level: 2,
      },
    ],
  },
  {
    name: 'Wired Communication Protocols',
    skills: [
      {
        name: 'SPI',
        level: 9,
      },
      {
        name: 'I2C',
        level: 9,
      },
      {
        name: 'RS-232',
        level: 8,
      },
      {
        name: 'RS-485',
        level: 8,
      },
      {
        name: 'Quad SPI',
        level: 8,
      },
      {
        name: 'CAN',
        level: 8,
      },
    ],
  },
 
  {
    name: 'Wireless Communication protocols',
    skills: [
      {
        name: 'MQTT',
        level: 9,
      },

      {
        name: 'ZigBee',
        level: 7,
      },

      {
        name: 'Z-Wave',
        level: 6,
      },
      {
        name: 'Wi-Fi',
        level: 5,
      },

      {
        name: 'Bluetooth',
        level: 3,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Malayalam',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 4,
      },
      {
        name: 'Sanskrit',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'November 2019',
    location: 'Mar Athanasius College of Engineering - Mahatma Gandhi University, Kerala',
    title: 'Bachelor of Technology Degree in Electronics & Communication Engineering',
    content: <p>As co-founder of the IOT Club, developed projects using 
      Arduino and Raspberry Pi and coordinated the Industrial Entrepreneurship Development Cell, gaining leadership skills
      through various trainings.
</p>,
  },
  {
    date: 'April 2015',
    location: 'Board of Technical Education, Kerala',
    title: 'Diploma in Electronics Engineering',
    content: <p>graduated with First Class Honors with Distinction, specializing in Electronics.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Jesse Wilson',
      text: 'Bibin is a highly skilled engineer with expertise in embedded systems development, firmware development, and software design. Bibin has demonstrated strong problem-solving skills, attention to detail, and a deep understanding of embedded systems. He is a quick learner and is always eager to take on new challenges. His ability to work well in a team and communicate complex technical concepts to non-technical stakeholders makes him an excellent asset.',
      image: "https://www.linkpicture.com/q/jesse_1.jpeg",
    },
    {
      name: 'Vijeesh PM',
      text: 'I highly recommend Bibin as an embedded software engineer. During his time at Transight Systems, He demonstrated exceptional technical skills, dedication, and attention to detail in his work.',
      image: 'https://www.linkpicture.com/q/vijeesh.jpeg',
    },
    {
      name: 'Arun Cheriyan',
      text: 'Bibin is a fast learner, capable of comprehending intricate technical concepts in a fraction of the time it would take most people. He possesses a sharp eye for detail and an insatiable curiosity that motivates him to continuously seek out new challenges and acquire new skills. His ability to learn quickly made him an invaluable member of our team, allowing him to take on complex projects and deliver exceptional results in a short amount of time.',
      image: 'https://www.linkpicture.com/q/arun.jpeg',
    },
    {
      name: 'Nithin Abhimanue',
      text: 'Bibin has a deep understanding of embedded systems, including hardware and software integration. He is adept at working with microcontrollers, sensors, and other embedded devices. He is also proficient in programming languages such as C, Python, and assembly language.',
      image: 'https://www.linkpicture.com/q/nithin.jpeg',
    },
    {
      name: 'Justin Joy',
      text: 'Bibin is a talented firmware engineer with dedication to his designs. He has a good understanding of communication protocols. He is experienced with different controller families. I should recommend him for Programming skills, interpersonal skills and problem solving skills as these are essential for a developer.',
      image: 'https://www.linkpicture.com/q/justin.jpeg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I believe that collaboration is key to success. Let's explore how we can work together to achieve great things.",
  items: [
    {
      type: ContactType.Email,
      text: 'bibinalias1@gmail.com',
      href: 'mailto:bibinalias1@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kochi Kerala, India',
      href: 'https://goo.gl/maps/X9pzUczgqcBDZxuw7',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Bibin Alias',
      href: 'https://www.linkedin.com/in/bibinalias/',
    },
    {
      type: ContactType.Github,
      text: 'bibinalias',
      href: 'https://github.com/bibinalias',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bibinalias'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/21387178/bibin-alias'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bibinalias/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bibin__alias/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/bibin__alias'},
];
