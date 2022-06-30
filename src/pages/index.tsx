import {FC, memo} from 'react';

import Page from '../components/Layout/Page';

const Home: FC = memo(() => {
  const title = 'React Resume Template';
  const description = "Example site built with Tim Baker's react resume template";

  return (
    <Page description={description} title={title}>
      <div className="flex h-screen w-full items-center justify-center">
        <h1 className="w-full text-center text-5xl text-white">Coming Soon!</h1>
      </div>
    </Page>
  );
});

export default Home;
