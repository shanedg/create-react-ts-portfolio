// tslint:disable-next-line:import-name
import React from 'react';

import Role from './Role';
import roles from './work.roles';

const Work = (props: any) => {

  /**
   * build role component
   * @param job role data
   * @param index role index
   * @returns role component populated with role data
   */
  const buildRole = (job: Role, index: number) => {
    return (
      <Role
        key={index}
        role={job}
      />
    )
  };

  /**
   * role components populated with role data
   */
  const builtRoles = roles.map(buildRole);

  return (
    <article className="work">
      <div className="heading">
        <h2 className="heading__title">work</h2>
      </div>
      <section className="content">
        {builtRoles}
      </section>
    </article>
  );
};

export default Work;
