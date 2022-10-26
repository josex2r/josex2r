import React from 'react';

import { ProfileCard } from './components/profile';
import { TimelineCard, TimelineContainer } from './components/timeline';
import { Layout, Header, Footer } from './components/layout';
import { SocialIcons } from './components/social';
import { BIO, EXPERIENCE, NAME } from './constants';

import avatar from './img/josex2r.jpeg';
import light1 from './img/light1.png';
import light2 from './img/light2.png';

const App = () => {
  return (
    <Layout>
      <Header>
        <picture>
          <img
            src={light1}
            alt=""
            className="w-[71.75rem] flex-none max-w-none dark:hidden"
            decoding="async"
          />
        </picture>

        <picture>
          <img
            src={light2}
            alt=""
            className="w-[90rem] flex-none max-w-none hidden dark:block"
            decoding="async"
          />
        </picture>
      </Header>

      <div className="w-full flex flex-colum sm:flex-row flex-grow overflow-hidden">
        <main
          role="main"
          className="w-full h-full flex-grow p-10 overflow-hidden"
        >
          <SocialIcons className="flex flex-wrap justify-end gap-2" />

          <ProfileCard avatar={avatar} name={NAME} bio={BIO} />

          <TimelineContainer>
            {EXPERIENCE.map((data, i) => (
              <TimelineCard key={data.company} left={i % 2 === 0} {...data} />
            ))}
          </TimelineContainer>
        </main>
      </div>
      <Footer />
    </Layout>
  );
};

export default App;
