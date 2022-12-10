import {
 
  DownloadIcon,

   
  
} from '@heroicons/react/outline';


import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

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
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import FacebookIcon from '../components/Icon/FacebookIcon';
//import { type } from 'os';
//import { text } from 'node:stream/consumers';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: ' France Idéal Formations',

  
  description: "E-learnin language  web site for  ",
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
  name: `France Idéal Formations`,
  description: ( 
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          <strong className="text-stone-100">Vous feriez partie de la communauté France Idéal Formations </strong>, en optant idéalement pour une leçon gratuite en Visio pour mieux découvrir le programme d’anglais qui correspond à vos objectifs. Votre formateur sera prêt à répondre à toutes vos questions durant cette première réunion
      <strong className="text-stone-100"> pour mieux découvrir le programme d’anglais</strong>  qui correspond à vos objectifs. 
        
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Votre formateur  <strong className="text-stone-100">sera prêt à répondre à toutes vos questions durant cette  </strong>
        <strong className="text-stone-100">première</strong>{' '}
        <strong className="text-stone-100">réunion.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Programme-anglais-TOEIC.pdf',
      text: 'Programme',
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
  description: `Formateur et traducteur doté d’une solide expérience professionnelle,
           titulaire d’un Master II en Langues Étrangères Appliquées et un MBA en Marketing Management, Paris Business School.
              Diplômé de l’École Nationale de Aviation Civile de Toulouse. Un parcours diversifié et une expertise vous aidant à maîtriser la langue anglaise
  aussi bien au quotidien que dans un contexte professionnel répondant aux nombreuses situations que vous pourriez être amené(e) à vivre et en fonction de vos besoins : Voyage, Marketing, Management, Commerce, Aéronautique...`,
  aboutItems: [
    
  ],
};

/**
 * Skills section
 */


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
export const education: TimelineItem []= [
  {
    date: '',
    location: 'PROGRAMME',
    title: '',
    content: <p>Programme Anglais Débutant 
    Révisez, renforcez et enrichissez vos connaissances en anglais ! 
    Vous souhaitez vous familiariser avec la langue anglaise, perfectionner vos acquis ou booster votre fluidité à l’oral et à l’écrit,
    découvrez le programme le mieux adapté à vos besoins.</p>,
   
  },
  
  
]


export const experience: TimelineItem [] = [
  {
    date: '',
    location: 'UN PARCOURS ADAPTÉ À VOTRE NIVEAU ',
    title: ' ',
    content: (
      <p>
      La Formation Anglais Débutant, composé de 8 modules principaux ainsi que des séquences bien détaillées outre un atelier de conversation efficace et simple . Le programme vous aidera à maîtriser l’anglais rapidement et de façon assez soutenue. Au terme du programme, vous aurez une connaissance approfondie du vocabulaire et des structures grammaticales essentielles à une conversation courante en anglais.
      </p>
    ),
    
  },
  {
    date: '',
    location: 'INTERACTIONS ET SUIVI TOUT AU LONG DE LA FORMATION',
    title: ' ',
    content: (
      <p>
      Un suivi qui vous permet d'identifier continuellement vos besoins à l’issue de chacune des séances et en matière d'accompagnement pédagogique et ainsi d'instaurer une meilleure relation entre l'apprenant et sa formation. Vous pourrez toujours échanger votre formateur sur le groupe WhatsApp afin de donner du sens aux apprentissages en assurant votre satisfaction. 
      </p>
    ),

  },
  
  {
    date: '',
    location: 'HORAIRES FLEXIBLES',
    title: '',
    content: (
      <p>
       Peu importe votre emploi du temps, votre formateur s’adaptera en fonction de vos disponibilités pour vous simplifier la vie. Cours d’anglais en ligne, offerts le jour, le soir et le week-end.
      </p>
    ),
  },
  {
    date: '',
    location: ' UNE PRIORITE A L’INNOVATION',
    title: ' ',
    content: (
      <p>
     Si France Idéal Formations est un lieu de diffusion de savoir par excellence, elle est aussi celui du développement des compétences et des aptitudes. L’innovation dans les pratiques pédagogiques est au cœur des préoccupations de l’organisme pour répondre à cet enjeu. Cette stratégie brille par l’amélioration de l’offre de formation et des enseignements ainsi que l’innovation en matière d’enseignement et la multiplication des différents dispositifs numériques.
      </p>
    ),

  },


]
  
;



/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Yves CORRADIN',
      text: 'Formation très enrichissante; j’en suis satisfait',
      image: '',
    },
    {
      name: 'Jan-François MORILLE ',
      text: 'Très bonne implication de Nadir, disponible et est patient, un atout indispendable pour moi. Merci à Nadir ',
      image: '',
    },
    {
      name: 'Florence URBAIN',
      text: 'Formateur très pédagogue et encourageant tenant compte des contraintes professionnelles et s’adaptant à mes horaires. Je recommande vivement Nadir',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'NOUS CONTACTER',
  description: '',
  items: [

    {
      type: ContactType.Location,
      text: '8 Bis rue Abel,75012 Paris',
      href: 'https://goo.gl/maps/H5g2CdPz3sfhxBCo7',
    },
    {
      type: ContactType.Email,
      text: 'nad.ben.braham@gmail.com ',
      href: 'mailto:nad.ben.braham@gmail.com ',
    },
    
    {
      type: ContactType.Instagram,
      text: '@Nadir',
      href: 'https://www.instagram.com/',
    },
 
    {
      type: ContactType.Phone,
      text: '07 64 27 05 97',
      href: 'https://www.whatsapp.com/',
    },
   

    
      


    

    
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  
  
  { label:'Facebook',Icon:FacebookIcon  ,href :'/ '},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nadir-ben-braham-445666238/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'}
];
