// tslint:disable-next-line:import-name
import React from 'react';

const RoleDetails = (props: RoleDetailsProps) => {
  const title = props.title;
  const bullets = props.bullets;

  return (
    <div className="employer__role">
      <h4 className="h4 employer__role-heading">
        {title}
      </h4>
      <section className="section employer__role-details">
        <ul>
          {bullets.map((role: string, i: number) => {
            return (
              <li key={i}>
                {role}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default RoleDetails;
