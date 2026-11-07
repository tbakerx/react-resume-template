import {ArrowUpRightIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import GithubIcon from '../Icon/GithubIcon';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-50 dark:bg-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-12">
        <SectionHeading
          description="From classroom apps for PE and Outdoor Education, to exercise physiology research and life outside the lab."
          eyebrow="Projects"
          title="Things I've built & researched"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map(item => (
            <ProjectCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ProjectCard: FC<{item: PortfolioItem}> = memo(
  ({item: {title, description, url, linkLabel = 'View', sourceUrl, extraLinks, tags, featured, image}}) => (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-neutral-800 dark:bg-neutral-950">
      <a
        aria-hidden="true"
        className="relative block aspect-[16/10] overflow-hidden bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 dark:bg-neutral-800"
        href={url}
        rel="noopener noreferrer"
        tabIndex={-1}
        target="_blank">
        <Image
          alt=""
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw"
          src={image}
        />
        {featured && (
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow">
            Featured
          </span>
        )}
      </a>
      <div className="flex flex-1 flex-col gap-y-3 p-5">
        {tags && tags.length > 0 && (
          <ul aria-label="Tags" className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <li
                className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
          <a
            className="inline-flex items-center gap-x-1 rounded-md text-sm font-semibold text-blue-600 hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            href={url}
            rel="noopener noreferrer"
            target="_blank">
            {linkLabel}
            <span className="sr-only"> for {title}</span>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          {sourceUrl && (
            <a
              className="inline-flex items-center gap-x-1.5 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-neutral-400 dark:hover:text-white"
              href={sourceUrl}
              rel="noopener noreferrer"
              target="_blank">
              <GithubIcon aria-hidden="true" className="h-4 w-4" />
              Source<span className="sr-only"> code for {title}</span>
            </a>
          )}
          {extraLinks?.map(link => (
            <a
              className="inline-flex items-center gap-x-1 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-neutral-400 dark:hover:text-white"
              href={link.url}
              key={link.url}
              rel="noopener noreferrer"
              target="_blank">
              {link.label}
              <ArrowUpRightIcon aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  ),
);

ProjectCard.displayName = 'ProjectCard';
