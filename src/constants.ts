import { Experience } from './types';

import logoNext from './img/logo-next.png';
import logoBeeva from './img/logo-beeva.png';
import logoFictizia from './img/logo-fictizia.png';
import logoMetrica from './img/logo-metrica.jpeg';
import logoGobalo from './img/logo-gobalo.png';

export const NAME = 'Jose Luis Represa';

export const BIO = `Fullstack engineer with deep knowledge in Javascript technologies and also Python
Constantly learning while searching for new challenges, tech lover and painter during free time`;

export const EXPERIENCE: Experience[] = [
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
