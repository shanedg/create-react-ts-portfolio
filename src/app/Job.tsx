// tslint:disable-next-line:import-name
import React from 'react';

import Details from './Details';

// [todo] strong type for JobProps
const Job = (props: any) => {
  // [todo] Job
  const job = props.job;
  // [todo] DetailsProps
  const details = {
    title: job.roleTitle,
    bullets: job.bullets,
  };

  return (
    <section className="employer">
      <div className="employer__heading">
        <h3 className="h3 employer__heading-name">
          {job.employerName}
        </h3>
        <span className="employer__heading-dates">
          <time>{job.dates.start.toString()}</time> &ndash;{' '}
          <time>{job.dates.end.toString()}</time>
        </span>
      </div>
      <Details details={details} />
    </section>
  );
};

export default Job;
