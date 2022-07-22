import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Hero from '../components/Sections/Hero';

const Home: FC = memo(() => {
  const title = 'React Resume Template';
  const description = "Example site built with Tim Baker's react resume template";

  return (
    <Page description={description} title={title}>
      <Hero />
    </Page>
  );
});

export default Home;
