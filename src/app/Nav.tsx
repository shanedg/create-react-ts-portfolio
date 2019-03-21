// tslint:disable-next-line:import-name
import React from 'react';

import './Nav.scss';

import { NavLink } from 'react-router-dom';

const Nav = (props: any) => {
  return (
    <nav className="nav">
      <ul className="nav__u-list">
        {/* [todo] loop over these */}
        <li className="nav__u-list-item">
          <NavLink exact activeClassName="nav__link_active" to="/">home</NavLink>
        </li>
        <li className="nav__u-list-item">
          <NavLink exact activeClassName="nav__link_active" to="/work/">work</NavLink>
        </li>
        <li className="nav__u-list-item">
          <NavLink exact activeClassName="nav__link_active" to="/contact/">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
