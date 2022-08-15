import {ExternalLinkIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  // Array of test items, replace this with 'portfolioItems' from data/data.ts
  const testPortfolioItems: PortfolioItem[] = [
    ...Array(10).fill({
      ...portfolioItems[0],
    }),
  ].map((item, idx) => {
    const {imageUrl, ...rest} = item;
    // Simply a seed value for unsplash random image
    return {imageUrl: `${imageUrl}${idx}`, ...rest};
  });

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {testPortfolioItems.map((item, index) => {
            const {title, imageUrl} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <img alt={title} src={imageUrl} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 flex h-full w-full flex-col gap-y-4 overflow-y-scroll bg-gray-900 p-4 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
      <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
      <ExternalLinkIcon className="absolute bottom-2 right-2 h-4 w-4 text-white" />
    </a>
  );
});
