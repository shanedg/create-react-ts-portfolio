// tslint:disable-next-line:import-name
import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = (props: any) => {
  return (
    // [todo] active nav styles
    <nav className="nav">
      <ul className="nav__u-list">
        <li className="nav__u-list-item">
          <NavLink to="/">home</NavLink>
        </li>
        <li className="nav__u-list-item">
          <NavLink to="/contact/">contact</NavLink>
        </li>
        <li className="nav__u-list-item">
          <NavLink to="/work/">work</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
