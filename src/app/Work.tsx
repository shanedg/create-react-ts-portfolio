// tslint:disable-next-line:import-name
import React from 'react';

import Job from './Job';

const Work = (props: any) => {
  /**
   * Simple resumé details.
   */
  const jobs: Job[] = [
    {
      bullets: ['angular', 'reactive forms', 'material ui'],
      dates: {
        end: 'present',
        start: new Date('2018-11-05'),
      },
      employerName: 'zipari',
      roleTitle: 'front end developer',
    },
    {
      bullets: [
        'node, craftcms, wordpress',
        'react and vue js',
        'experimentation & personalization',
        'content migration, re-platforming, site launches',
      ],
      dates: {
        end: new Date('2018-10-26'),
        start: new Date('2017-07-10'),
      },
      employerName: 'braze (formerly appboy)',
      roleTitle: 'web engineer',
    },
    {
      bullets: [
        'conversion optimization, a/b testing',
        'integrating tech in the enterprise',
        'responsive vs adaptive front end development',
      ],
      dates: {
        end: new Date('2017-07-06'),
        start: new Date('2014-06-16'),
      },
      employerName: "dick's sporting goods",
      roleTitle: 'front end web developer',
    },
  ];

  return (
    <article className="article work">
      <h2 className="h2">work</h2>
      {jobs.map((job: Job, index: number) => {

        return (
          <Job
            job={job}
            key={index}
          />
        );
      })}
    </article>
  );
};

export default Work;
