// tslint:disable-next-line:import-name
import React from 'react';

const RoleDetails = (props: RoleDetailsProps) => {

  /**
   * build role details highlights list item
   * @param highlight list item text
   * @param i list item index
   * @returns list item populated with highlight text
   */
  const buildListItem = (highlight: string, i: number) => {
    return (
      <li className="role-details__list-item" key={i}>
        {highlight}
      </li>
    );
  };

  /**
   * role title
   */
  const title = props.title;

  /**
   * role highlights
   */
  const highlights = props.highlights;

  /**
   * list items populated with role highlights
   */
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
