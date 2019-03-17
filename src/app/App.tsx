// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  spring,
  AnimatedSwitch,
} from 'react-router-transition';
import { Route } from 'react-router';

import './App.scss';

import About from './About';
import Contact from './Contact';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
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
  mapStyles = (styles: RouteStylesNumeric): RouteStyles => {
    return {
      left: `${styles.left}vw`,
      opacity: styles.opacity,
    }
  };

  /**
   * @param val animation value to apply spring to
   * @returns animation spring helper
   */
  bounce = (val: number) => {
    return spring(val, {
      stiffness: this.springStiffness,
      damping: this.springDamping,
    });
  }

  /**
   * route transition bounce stiffness
   */
  springStiffness = 200;

  /**
   * route transition bounce damping
   */
  springDamping = 22;

  public render() {
    /**
     * entering route style start state
     */
    const routeEnter: RouteStylesNumeric = {
      left: 200,
      opacity: 0,
    };

    /**
     * exiting route style end state
     */
    const routeLeave: RouteStylesNumeric = {
      left: this.bounce(-200),
      opacity: 0,
    };

    /**
     * active route styles
     */
    const routeActive: RouteStylesNumeric = {
      left: this.bounce(0),
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
        <Footer />
      </div>
    );
  }
}

export default App;
