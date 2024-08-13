import {NextPage} from 'next';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children}) => {
  return (
    <>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
