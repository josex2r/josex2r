import React, { FC, PropsWithChildren } from 'react';
import { Experience, Job } from '../types';

const ParallelTimeline = () => (
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
);

export const TimelineJob: FC<Job> = ({ date, title, description }) => (
  <>
    <h2 className="text-md font-bold pt-1 text-gray-700">{title}</h2>
    <small className="font-bold text-gray-500 tracking-wide">{date}</small>
    <p className="pt-1">{description}</p>
  </>
);
// className="absolute mx-auto left-0 right-0 object-cover bg-white h-full w-2"
export const TimelineCard: FC<
  Experience & {
    left?: boolean;
    parallel?: boolean;
  }
> = ({ image, company, jobs = [], left = false, parallel = false }) => (
  <div className={`relative z-10 ${parallel && 'left-20'}`}>
    {parallel && (
      <div className="git-parallel top">
        <ParallelTimeline />
      </div>
    )}
    <img src={image} alt="" className="timeline-img" />
    <div className={`timeline-container ${left && 'timeline-container-left'}`}>
      <div
        className={`timeline-pointer ${left ? 'left' : 'right'}`}
        aria-hidden="true"
      ></div>
      <div className="p-6 rounded-md shadow-md">
        {company && (
          <h1 className="text-xl font-bold pt-1 text-indigo-600">{company}</h1>
        )}
        {jobs.map((job) => (
          <div key={job.date} className="pt-3">
            <TimelineJob {...job} />
          </div>
        ))}
      </div>
    </div>
    {parallel && (
      <div className="git-parallel bottom">
        <ParallelTimeline />
      </div>
    )}
  </div>
);

export const TimelineContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative container mx-auto px-6 flex flex-col space-y-8 pt-50">
    <div className="absolute z-0 w-3 h-full bg-timeline shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
    {children}
  </div>
);
