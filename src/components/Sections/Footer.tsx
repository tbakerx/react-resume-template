import {BoltIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>
      <a
        className="-m-2 flex items-center gap-x-1 rounded-md p-2 ring-yellow focus:outline-none focus:ring-2"
        href="https://reactresume.com">
        <BoltIcon className="h-5 w-5 text-yellow" />
        <span>
          Provided by <span className="text-white">React</span>
          <span className="italic text-yellow">Resume</span>
        </span>
      </a>
      <span className="text-sm text-neutral-700">© Copyright {currentYear} Tim Baker</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
