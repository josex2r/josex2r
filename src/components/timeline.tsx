import React, { FC, PropsWithChildren } from 'react';
import { Experience, Job } from '../types';

const TimelineVerticalLine = () => (
  <div className="absolute z-0 w-3 h-full bg-timeline shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0 rounded-md"></div>
);

const TimelineParallelLine = () => {
  return (
    <>
      <TimelineCurvedLine />
      <TimelineCurvedLine top={false} />
    </>
  );
};

const TimelineCurvedLine: FC<{
  top?: boolean;
}> = ({ top = true }) => {
  const alignementClass = top ? 'git-parallel__top' : 'git-parallel__bottom';

  return (
    <div className={`git-parallel ${alignementClass}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <g>
          <path
            d="m5, 0c3,60 80,50 80,100"
            opacity="NaN"
            stroke="var(--timeline-color)"
            strokeWidth="0.5rem"
            fill="transparent"
          />
        </g>
      </svg>
    </div>
  );
};

const ArrowPointer: FC<{
  align: 'left' | 'right' | 'top' | 'bottom';
}> = ({ align }) => {
  const alignementPointerClass =
    align === 'left' ? 'timeline-pointer__left' : 'timeline-pointer__right';

  return (
    <div
      className={`timeline-pointer ${alignementPointerClass}`}
      aria-hidden="true"
    ></div>
  );
};

const TimelineJob: FC<Job> = ({ date, title, description }) => (
  <div className="pt-3">
    <h2 className="text-md font-bold pt-1 text-gray-700">{title}</h2>
    <small className="font-bold text-gray-500 tracking-wide">{date}</small>
    <p className="pt-1">{description}</p>
  </div>
);

const TimelineImage: FC<{
  src: string;
  name: string;
}> = ({ src, name }) => (
  <img src={src} alt={`${name} logo`} className="timeline-img" />
);

export const TimelineCard: FC<
  Experience & {
    left?: boolean;
    parallel?: boolean;
  }
> = ({ image, company, jobs = [], left = false, parallel = false }) => {
  const alignementContainerClass = left
    ? 'timeline-container__left'
    : 'timeline-container__right';

  return (
    <div className={`relative z-10 pt-10 ${parallel && 'timeline-parallel'}`}>
      {parallel && <TimelineParallelLine />}

      <TimelineImage src={image} name={company} />

      <div className={`timeline-container ${alignementContainerClass}`}>
        <ArrowPointer align={left ? 'left' : 'right'} />

        <div className="p-6 rounded-md shadow-md">
          <h1 className="text-xl font-bold pt-1 text-indigo-600">{company}</h1>

          {jobs.map((job) => (
            <TimelineJob key={job.date} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const TimelineContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative container mx-auto px-6 flex flex-col space-y-8 pt-50">
    <TimelineVerticalLine />

    {children}
  </div>
);
