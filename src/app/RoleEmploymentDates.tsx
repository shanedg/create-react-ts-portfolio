// tslint:disable-next-line:import-name
import React from 'react';

const RoleEmploymentDates = (props: RoleDatesProps) => {

  /**
   * transform date into short format month and year
   * @param date date to short format
   * @returns short format month and year, e.g. "nov '18"
   */
  const displayShortMonthYear = (date: Date) => {

    /**
     * get short month from date
     */
    const shortMonth = date.toLocaleString('en-us', { month: 'short' });

    /**
     * get year from date
     */
    const shortYear = date.getUTCFullYear().toString().slice(2);

    /**
     * assemble month and year
     */
    const shortMonthYear = `${shortMonth} '${shortYear}`;

    return shortMonthYear;
  }

  /**
   * role start date as js date
   */
  const startDate = props.started
    ? new Date(props.started)
    : null ;

  /**
   * role end date as js date
   */
  const endDate = props.until
    ? props.until === 'present'
      ? 'present'
      : new Date(props.until)
    : null ;

  /**
   * role start date for display
   */
  const started = startDate
    ? displayShortMonthYear(startDate)
    : null ;

  /**
   * role end date for display
   */
  const until = endDate
    ? endDate === 'present'
      ? 'present'
      : displayShortMonthYear(endDate)
    : null ;

  return (
    <div className="role-employment-dates">
      {started &&
        // [todo] semantic date/time attributes on time elements
        <time>
          {started}
        </time>
      }
      {until &&
        ' \u2013 '
      }
      {until &&
        <time>
          {until}
        </time>
      }
    </div>
  );
};

export default RoleEmploymentDates;
