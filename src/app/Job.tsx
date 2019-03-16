// tslint:disable-next-line:import-name
import React from 'react';

import RoleDetails from './RoleDetails';

const Job = (props: JobProps) => {
  const job: Job = props.job;
  const details: RoleDetailsProps = {
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
      <RoleDetails
        bullets={details.bullets}
        title={details.title}
      />
    </section>
  );
};

export default Job;
