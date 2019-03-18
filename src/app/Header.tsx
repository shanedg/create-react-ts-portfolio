// tslint:disable-next-line:import-name
import React from 'react';

import './Header.scss';

import Nav from './Nav';

const Header = (props: any) => {
  return (
    <header className="header">
      <h1 className="header__name">shane garrity</h1>
      <p className="header__title">web developer</p>
      <Nav />
    </header>
  );
};

export default Header;
