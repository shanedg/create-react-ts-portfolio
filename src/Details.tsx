// tslint:disable-next-line:import-name
import React from 'react';

// [todo] strong type for DetailsProps
const Details = (props: any) => {
  const details = props.details;

  return (
    <div className="employer__role">
      <h4 className="h4 employer__role-heading">{details.title}</h4>
      <section className="section employer__role-details">
        <ul>
          {/* [todo] strong type for role */}
          {details.bullets.map((role: any, i: number) => {
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

export default Details;
