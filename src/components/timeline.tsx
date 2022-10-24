import React, { FC, PropsWithChildren } from 'react';
import { Experience, Job } from '../types';

export const TimelineJob: FC<Job> = ({ date, title, description }) => (
  <>
    <h2 className="text-md font-bold pt-1 text-gray-700">{title}</h2>
    <small className="font-bold text-gray-500 tracking-wide">{date}</small>
    <p className="pt-1">{description}</p>
  </>
);

export const TimelineCard: FC<
  Experience & {
    left: boolean;
  }
> = ({ image, company, jobs = [], left = false }) => (
  <div className="relative z-10">
    <img src={image} alt="" className="timeline-img" />
    <div className={`timeline-container ${left && 'timeline-container-left'}`}>
      <div
        className={`timeline-pointer ${left && 'timeline-pointer-left'}`}
        aria-hidden="true"
      ></div>
      <div className="bg-white p-6 rounded-md shadow-md">
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
  </div>
);

export const TimelineContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative container mx-auto px-6 flex flex-col space-y-8 pt-50">
    <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
    {children}
  </div>
);
