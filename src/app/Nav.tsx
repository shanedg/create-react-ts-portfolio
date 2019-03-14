// tslint:disable-next-line:import-name
import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = (props: any) => {
  return (
    <nav className="Nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact/">Contact</NavLink>
      </li>
      {/* [todo] work route */}
    </nav>
  );
};

export default Nav;
