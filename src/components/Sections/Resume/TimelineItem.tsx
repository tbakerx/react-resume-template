import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-bold italic sm:flex-none" ><h2>{location}</h2></span>
          <span></span>
          <span className="flex-2 text-sm sm:flex-none ">{date}</span>
           </div>
      </div>
     {content}
     <a href="/assets/Programme-anglais-TOEIC.pdf" download="Pdf">
<button type="button" name='btn' ></button>
</a>
     </div>
     );
 
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
