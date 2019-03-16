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
 * app main
 */
class App extends Component {

  /**
   * map numeric values to non-numeric string styles
   * @param styles numeric style object
   * @returns style object with transformed string style values
   */
  mapStyles = (styles: any) => {
    return {
      left: `${styles.left}vw`,
      opacity: styles.opacity,
    }
  };

  public render() {
    /**
     * entering route style start state
     */
    const routeEnter = {
      left: 200,
      opacity: 0,
    };

    /**
     * exiting route style end state
     */
    const routeLeave = {
      left: -200,
      opacity: 0,
    };

    /**
     * active route styles
     */
    const routeActive = {
      left: 0,
      opacity: 1,
    };

    return (
      <div className="app">
        <Header />
        <Nav />
        <AnimatedSwitch
          atEnter={routeEnter}
          atLeave={routeLeave}
          atActive={routeActive}
          mapStyles={this.mapStyles}
          className="app__switch"
        >
          <Route exact path="/" component={About} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/work/" component={Work} />
        </AnimatedSwitch>
      </div>
    );
  }
}

export default App;
