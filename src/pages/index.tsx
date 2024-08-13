import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Hero />
      <Resume />
      <Portfolio />
      <Contact />
    </Page>
  );
});

export default Home;
