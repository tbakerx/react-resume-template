import classNames from 'classnames';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean}> = memo(
  ({children, sectionId, noPadding = false}) => {
    return (
      <section className={classNames({'p-4 md:p-8': !noPadding})} id={sectionId}>
        {children}
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
