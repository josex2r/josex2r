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
import { SocialIcons } from './components/social';

const experience: Experience[] = [
  {
    image: logoNext,
    company: 'BBVA Next Technologies',
    jobs: [
      {
        date: 'Apr. 2022 - Today',
        title: 'Senior Fullstack Engineer',
        description:
          'Internal AI projects using Python technologies to develop microservices and React as frontend framework',
      },
      {
        date: 'Mar. 2018 - Apr. 2022',
        title: 'Frontend Technical Architect',
        description: "Frontend tech lead at BBVA's Mobile Banking App",
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
        description: "Frontend tech lead at BBVA's Mobile Banking App",
      },
      {
        date: 'Apr. 2016 - Jan. 2017',
        title: 'Frontend Engineer',
        description: "BBVA's Mobile Banking App core-team frontend engineer",
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
        description: "BBVA's Mobile Banking App core-team frontend engineer",
      },
      {
        date: 'Nov. 2014 - Oct. 2015',
        title: 'Fullstack Developer',
        description:
          "BBVA's internal managment projects using Sprint (Java) as backend framework and raw Javascript on the clien't side",
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
        description: 'Javascript + Python junior engineer',
      },
    ],
  },
];

const App = () => {
  return (
    <div className="mx-auto w-screen">
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

      <div className="w-full flex flex-colum sm:flex-row flex-grow overflow-hidden">
        <main
          role="main"
          className="w-full h-full flex-grow p-10 overflow-hidden"
        >
          <SocialIcons className="flex flex-wrap justify-end gap-2" />

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
