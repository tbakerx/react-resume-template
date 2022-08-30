import {useEffect} from 'react';

import {headerID} from '../components/Sections/Header';
import {SectionId} from '../data/data';

export const useNavObserver = (selectors: string, handler: (section: SectionId | null) => void) => {
  useEffect(() => {
    // Get all sections
    const headings = document.querySelectorAll(selectors);
    const headingsArray = Array.from(headings);
    const headerWrapper = document.getElementById(headerID);

    // Create the IntersectionObserver API
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const currentY = entry.boundingClientRect.y;
          const id = entry.target.getAttribute('id');
          if (headerWrapper) {
            // Create a decision object
            const decision = {
              id,
              currentIndex: headingsArray.findIndex(heading => heading.getAttribute('id') === id),
              isIntersecting: entry.isIntersecting,
              currentRatio: entry.intersectionRatio,
              aboveToc: currentY < headerWrapper.getBoundingClientRect().y,
              belowToc: !(currentY < headerWrapper.getBoundingClientRect().y),
            };
            if (decision.isIntersecting) {
              // Header at 30% from the top, update to current header
              handler(decision.id as SectionId);
            } else if (
              !decision.isIntersecting &&
              decision.currentRatio < 1 &&
              decision.currentRatio > 0 &&
              decision.belowToc
            ) {
              const currentVisible = headingsArray[decision.currentIndex - 1]?.getAttribute('id');
              handler(currentVisible as SectionId);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -70% 0px',
      },
    );
    // Observe all the Sections
    headings.forEach(section => {
      observer.observe(section);
    });
    // Cleanup
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependency here is the post content.
};
