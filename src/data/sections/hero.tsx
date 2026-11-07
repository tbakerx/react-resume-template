import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import heroImage from '../../images/header-background.webp';
import profilepic from '../../images/profilepic.jpg';
import {Hero, SectionId} from '../dataDef';

export const resumeUrl = 'https://drive.google.com/file/d/1yz-W61l0bSd4rI86g3leU2KSpYKWnEur/view?usp=sharing';

export const heroData: Hero = {
  imageSrc: heroImage,
  avatarSrc: profilepic,
  name: 'Amos Khan',
  status: 'PGDE (PE) trainee at NIE · Singapore',
  headline: 'Physical Educator in training. Sports scientist. Builder of AI tools for PE.',
  description: (
    <p>
      I'm a <strong>Sports Science & Management</strong> graduate from NTU, training with the{' '}
      <strong>Ministry of Education (MOE)</strong> to become a <strong>Physical Education teacher</strong>. I bridge
       sports science and technology, and I hope to inspire every student to become the best version of themselves.
    </p>
  ),
  actions: [
    {
      href: resumeUrl,
      text: 'Resume',
      primary: true,
      external: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Portfolio}`,
      text: 'View projects',
    },
  ],
};
