// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import { AnimatedSwitch } from 'react-router-transition';
import { Route } from 'react-router';

import './App.scss';

import About from './About';
import Contact from './Contact';
import Header from './Header';
import Nav from './Nav';
import Work from './Work';

/**
 * Top-level App component.
 */
class App extends Component {

  constructor(props: any) {
    super(props);
  }

  public render() {

    return (
      <div className="App">
        <div className="App__inner">
          <Header />
          <Nav />
          <AnimatedSwitch
            // [todo] interesting transitions
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={About} />
            <Route exact path="/contact/" component={Contact} />
            <Route exact path="/work/" component={Work} />
          </AnimatedSwitch>
        </div>
      </div>
    );
  }
}

export default App;
