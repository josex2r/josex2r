export type Job = {
  date: string;
  title: string;
  description: string;
};

export type Experience = {
  image: string;
  company: string;
  jobs: Job[];
};
