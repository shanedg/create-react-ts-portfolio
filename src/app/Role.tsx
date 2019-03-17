// tslint:disable-next-line:import-name
import React from 'react';

import RoleDetails from './RoleDetails';

const Role = (props: RoleProps) => {

  /**
   * name of role employer
   */
  const employer = props.role.employer;

  /**
   * role start date
   */
  const started = props.role.dates.start
    ? props.role.dates.start.toString()
    : null ;

  /**
   * role end date
   */
  const until = props.role.dates.until
    ? props.role.dates.until.toString()
    : null ;

  /**
   * role highlights to include in role details
   */
  const highlights = props.role.highlights;

  /**
   * role title to include in role details
   */
  const title = props.role.title;

  return (
    <section className="role">
      <div className="role__heading">
        <h3 className="role__employer">
          {employer}
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
        highlights={highlights}
        title={title}
      />
    </section>
  );
};

export default Role;
