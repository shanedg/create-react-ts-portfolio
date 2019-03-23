import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { BrowserRouter } from 'react-router-dom';

import About from '../src/app/About';
import Contact from '../src/app/Contact';
import Footer from '../src/app/Footer';
import Header from '../src/app/Header';
import Nav from '../src/app/Nav';
import Role from '../src/app/Role';
import RoleDetails from '../src/app/RoleDetails';
import RoleEmploymentDates from '../src/app/RoleEmploymentDates';
import Work from '../src/app/Work';

import roles from '../src/app/work.roles';

/**
 * [todo] how to restructure/import styles such that components
 * in isolation are styled correctly?
 */

storiesOf('Header', module)
  .add('all header', () => <BrowserRouter><Header /></BrowserRouter>)
  .add('nav only', () => <BrowserRouter><Nav /></BrowserRouter>);

// storiesOf('Nav', module).add('to Storybook', () => <BrowserRouter><Nav /></BrowserRouter>);

storiesOf('About', module).add('to Storybook', () => <About />);

storiesOf('Contact', module).add('to Storybook', () => <Contact />);

storiesOf('Work', module).add('jobs', () => <Work />);

storiesOf('Role', module)
  .add('single role', () => <Role role={roles[0]} />)
  .add('multiple roles', () => roles.map((role, i) => <Role key={i} role={role} />));

  const presentStarted = roles[0].dates.start;
  const presentUntil = roles[0].dates.until;
  const priorStarted = roles[1].dates.start;
  const priorUntil = roles[1].dates.until;
  storiesOf('RoleEmploymentDates', module)
    .add('a current role', () => <RoleEmploymentDates started={presentStarted} until={presentUntil} />)
    .add('a prior role', () => <RoleEmploymentDates started={priorStarted} until={priorUntil} />);

const highlights = roles[0].highlights;
const title = roles[0].title;
storiesOf('RoleDetails', module).add('single detail', () => <RoleDetails highlights={highlights} title={title} />);

storiesOf('Footer', module).add('to Storybook', () => <Footer />);
