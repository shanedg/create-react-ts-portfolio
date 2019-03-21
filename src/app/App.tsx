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
import Footer from './Footer';
import Work from './Work';

/**
 * app main
 */
class App extends Component {

  /**
   * substitute vh units to account for mobile address bar
   *
   * adapted solution from css-tricks:
   * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
   */
  actualViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  componentDidMount() {
    /**
     * check for window context
     */
    if (window) {
      /**
       * recalculate viewport height on init and resize.
       * vh units work fine with mobile address bar hidden.
       * calculation fixes layout when address bar visible.
       */
      this.actualViewportHeight();

      /**
       * [todo] throttle/debounce resize listener
       */
      window.addEventListener('resize', () => {
        this.actualViewportHeight();
      });
    }
  }

  /**
   * map numeric values to non-numeric string styles
   * @param styles numeric style object
   * @returns style object with transformed string style values
   */
  mapStyles = (styles: RouteStylesNumeric): RouteStyles => {
    return {
      transform: `translateX(${styles.left}vw)`,
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
