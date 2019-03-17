// tslint:disable-next-line:import-name
import React from 'react';

const RoleDetails = (props: RoleDetailsProps) => {

  /**
   * build role details highlight list item
   * @param highlight list item text
   * @param i list item index
   * @returns
   */
  const buildListItem = (highlight: string, i: number) => {
    return (
      <li className="role-details__list-item" key={i}>
        {highlight}
      </li>
    );
  };

  const title = props.title;
  const highlights = props.highlights;
  const highlightsList = highlights.map(buildListItem);

  return (
    <div className="role-details">
      <h4 className="role-details__heading">
        {title}
      </h4>
      <section className="role-details__highlights">
        <ul>
          {highlightsList}
        </ul>
      </section>
    </div>
  );
};

export default RoleDetails;
