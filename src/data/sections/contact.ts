import GithubIcon from '../../components/Icon/GithubIcon';
import InstagramIcon from '../../components/Icon/InstagramIcon';
import LinkedInIcon from '../../components/Icon/LinkedInIcon';
import {ContactSection, ContactType, Social} from '../dataDef';

export const contact: ContactSection = {
  headerText: "Let's connect.",
  description:
    "Whether it's PE, sports science research, badminton coaching or building tools for educators, I'd love to hear from you. Send me a message and I'll get back to you soon.",
  items: [
    {
      type: ContactType.Email,
      text: 'khanamos1@gmail.com',
      href: 'mailto:khanamos1@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'in/amoskhan',
      href: 'https://www.linkedin.com/in/amoskhan',
    },
    {
      type: ContactType.Github,
      text: 'amoskhan',
      href: 'https://github.com/amoskhan',
    },
    {
      type: ContactType.Instagram,
      text: '@afro_jacko',
      href: 'https://www.instagram.com/afro_jacko/',
    },
    {
      type: ContactType.Location,
      text: 'Singapore',
      href: 'https://www.google.com/maps/place/Singapore',
    },
  ],
};

export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/amoskhan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/amoskhan'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/afro_jacko/'},
];
