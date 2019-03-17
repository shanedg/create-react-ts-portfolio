// tslint:disable-next-line:import-name
import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = (props: any) => {
  return (
    <nav className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact/">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/work/">Work</NavLink>
      </li>
    </nav>
  );
};

export default Nav;
