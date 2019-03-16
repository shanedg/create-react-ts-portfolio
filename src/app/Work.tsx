// tslint:disable-next-line:import-name
import React from 'react';

import Job from './Job';

const Work = (props: any) => {
  /**
   * Simple resumé details.
   */
  const jobs: Job[] = [
    {
      bullets: [
        'iterate on core product family of angular (6+) apps, including new feature development and product configurability',
        'legacy client product maintenance across family of angular (5+) apps',
        'build internal tools for product configuration, internal testing, and quality assurance',
      ],
      dates: {
        end: 'present',
        start: new Date('2018-11-05'),
      },
      employerName: 'zipari',
      roleTitle: 'front end developer',
    },
    {
      bullets: [
        'migrated marketing site lead capture and tracking from marketo to eloqua',
        'resolved cms-driven content configuration breaking dynamic components',
        'performed minor cosmetic updates',
        'all work on per project basis',
      ],
      dates: {
        end: new Date('2019-03-31'),
        start: new Date('2018-11-27'),
      },
      employerName: 'workmarket / adp (freelance)',
      roleTitle: 'contract web engineer',
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
      employerName: 'dick\'s sporting goods',
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
