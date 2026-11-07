import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  FlagIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import profilepic from '../../images/profilepic.jpg';
import {About} from '../dataDef';

export const aboutData: About = {
  profileImageSrc: profilepic,
  title: 'A healthy body leads to a healthy mind.',
  paragraphs: [
    "Fitness and sport have always been at the heart of my life, and I truly believe that a healthy body leads to a healthy mind. That belief led me to study Sports Science at NTU, and now to teaching: I'm training with the Ministry of Education to become a Physical Education teacher.",
    'Alongside sport, I love data and research. My final-year project in exercise physiology and my thermal physiology internship at HTX taught me how to turn raw measurements into meaningful insights. Years of coaching badminton have built my confidence and people skills, and shown me how sport can instil life values in children.',
    "Beyond this website, I've built Kampung Pals, a field-mapping app for Outdoor Education (with Akid), along with the SG PE Syllabus Bot and Kinetix Lab, which use AI and computer vision to give pupils feedback on their movement skills and make the PE syllabus more accessible to teachers.",
  ],
  aboutItems: [
    {label: 'Currently', text: 'PGDE (PE) trainee, NIE / MOE', Icon: BriefcaseIcon},
    {label: 'Education', text: 'BSc Sports Science & Management, NTU', Icon: AcademicCapIcon},
    {label: 'Location', text: 'Singapore', Icon: MapPinIcon},
    {label: 'Nationality', text: 'Singaporean', Icon: FlagIcon},
    {label: 'Languages', text: 'English, Chinese', Icon: ChatBubbleLeftRightIcon},
    {
      label: 'Interests',
      text: 'Badminton, fitness, photography, data & research, building with AI',
      Icon: SparklesIcon,
    },
  ],
};
