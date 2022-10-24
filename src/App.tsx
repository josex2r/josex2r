import React from 'react';

import { ProfileCard } from './components/profile';
import { TimelineCard, TimelineContainer } from './components/timeline';
import { Experience } from './types';

import logoNext from './img/logo-next.png';
import logoBeeva from './img/logo-beeva.png';
import logoFictizia from './img/logo-fictizia.png';
import logoMetrica from './img/logo-metrica.jpeg';
import logoGobalo from './img/logo-gobalo.png';
import avatar from './img/josex2r.jpeg';
import light1 from './img/light1.png';
import light2 from './img/light2.png';

const experience: Experience[] = [
  {
    image: logoNext,
    company: 'BBVA Next Technologies',
    jobs: [
      {
        date: 'Apr. 2022 - Today',
        title: 'Senior Fullstack Engineer',
        description: 'Python backend ',
      },
      {
        date: 'Mar. 2018 - Apr. 2022',
        title: 'Frontend Technical Architect',
        description: "BBVA's mobile application Frontend tech lead",
      },
    ],
  },
  {
    image: logoFictizia,
    company: 'Fictizia',
    jobs: [
      {
        date: 'Feb. 2018 - Apr. 2020',
        title: 'Node.js Instructor',
        description:
          'Node.js in-house & customized training for particulars and teams.',
      },
    ],
    parallel: true,
  },
  {
    image: logoBeeva,
    company: 'BEEVA',
    jobs: [
      {
        date: 'Ene. 2017 - Mar. 2018',
        title: 'Frontend Technical Architect',
        description: "BBVA's mobile application core team developer",
      },
      {
        date: 'Apr. 2016 - Jan. 2017',
        title: 'Frontend Engineer',
        description: "BBVA's mobile application core team developer",
      },
    ],
  },
  {
    image: logoMetrica,
    company: 'Metrica Consulting, S.L',
    jobs: [
      {
        date: 'Oct. 2015 - Apr. 2016',
        title: 'Senior Frontend Developer',
        description: "BBVA's mobile web application developer.",
      },
      {
        date: 'Oct. 2014 - Oct. 2015',
        title: 'Fullstack Developer',
        description: 'Frontend JavaScript + Backend Java engineer',
      },
    ],
  },
  {
    image: logoGobalo,
    company: 'Gobalo',
    jobs: [
      {
        date: 'Apr. 2013 - Nov. 2014',
        title: 'Fullstack Web Developer',
        description:
          "As a web developer my daily work was to create and maintain tons of web applications including shops, blogs, management apps, games and other stuff... While working as a developer, I've also had to maintain the local servers and config the company's hardware. I've worked for small clients like local shops and also for big techs or universities like Google or Nebrija University between others.",
      },
    ],
  },
];

const App = () => {
  return (
    <div className="mx-auto bg-cyan-900 w-screen">
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
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
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
        {/*
<div class="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
Sidebar

</div>
      */}
        <main
          role="main"
          className="w-full h-full flex-grow p-10 overflow-auto"
        >
          <ProfileCard
            avatar={avatar}
            name="Jose Luis Represa"
            bio="Constantly learning while searching for new challenges, tech lover and painter during free time"
          />

          <TimelineContainer>
            {experience.map((data, i) => (
              <TimelineCard key={data.company} left={i % 2 === 0} {...data} />
            ))}
          </TimelineContainer>
        </main>
      </div>
      <footer className="mt-auto">...</footer>
    </div>
  );
};

export default App;
