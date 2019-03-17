// tslint:disable-next-line:import-name
import React from 'react';

import RoleDetails from './RoleDetails';

const Role = (props: RoleProps) => {

  /**
   * name of role employer
   */
  const employerName = props.job.employerName;

  /**
   * role start date
   */
  const started = props.job.dates.start
    ? props.job.dates.start.toString()
    : null ;

  /**
   * role end date
   */
  const until = props.job.dates.end
    ? props.job.dates.end.toString()
    : null ;

  /**
   * role title and highlights
   */
  const details: RoleDetailsProps = {
    title: props.job.roleTitle,
    highlights: props.job.highlights,
  };

  return (
    <section className="role">
      <div className="role__heading">
        <h3 className="role__employer">
          {employerName}
        </h3>
        {/* [todo] extract date/range into own component/s */}
        <span className="role__employment-dates">
          <time>
            {started}
          </time> &ndash;{' '}
          <time>
            {until}
          </time>
        </span>
      </div>
      <RoleDetails
        highlights={details.highlights}
        title={details.title}
      />
    </section>
  );
};

export default Role;
