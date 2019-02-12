// tslint:disable:max-classes-per-file

// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import './App.scss';

const Header = (props: any) => {
  return (
    <header className="header">
      <h1 className="h1">shane garrity</h1>
    </header>
  );
};

const Nav = (props: any) => {
  return (
    <nav className="Nav">
      <ul>
        {/* <li><NavLink>home</NavLink></li> */}
      </ul>
    </nav>
  );
};

const About = (props: any) => {
  return (
    <section className="about">
      <h2>about</h2>
      <p>
        shane is an experienced developer with a background in front end and
        generalist work. he lives and works in nyc.
      </p>
    </section>
  );
};

const Contact = (props: any) => {
  return (
    <section className="contact">
      <h2>talk to me</h2>
      <p>
        check out my{' '}
        <a
          href="https://github.com/shanedg"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        or connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/shane-garrity-ba915544"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{' '}
        or shoot me an <a href="mailto:shanedgarrity+ws@gmail.com">email</a>
      </p>
    </section>
  );
};

const Details = (props: any) => {
  const details = props.details;

  return (
    <div className="employer__role">
      <h4 className="h4 employer__role-heading">{details.title}</h4>
      <section className="section employer__role-details">
        <ul>
          {details.bullets.map((role: any, i: number) => {
            return (
              <li key={i}>
                {role}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

const Job = (props: any) => {
  const job = props.job;
  const details = {
    title: job.roleTitle,
    bullets: job.bullets,
  };

  return (
    <section className="employer">
      <div className="employer__heading">
        <h3 className="h3 employer__heading-name">
          {job.employerName}
        </h3>
        <span className="employer__heading-dates">
          <time>{job.dates.start.toString()}</time> &ndash;{' '}
          <time>{job.dates.end.toString()}</time>
        </span>
      </div>
      <Details details={details} />
    </section>
  );
};

const Work = (props: any) => {
  return (
    <article className="article work">
      <h2 className="h2">work</h2>
      {props.jobs.map((job: any, index: number) => {

        return (
          <Job
            job={job}
            key={index}
          />
        );
      })}
    </article>
  );
};

/**
 * Top-level App component.
 */
class App extends Component {

  public render() {
    /**
     * Simple resumé details.
     */
    const jobs = [
      {
        bullets: ['angular', 'reactive forms', 'material ui'],
        dates: {
          end: 'present',
          start: new Date('2018-11-05'),
        },
        employerName: 'zipari',
        roleTitle: 'front end developer',
      },
      {
        bullets: [
          'node, craftcms, wordpress',
          'react and vue js',
          'experimentation & personalization',
          'content migration, re-platforming, site launches',
        ],
        dates: {
          end: new Date('2018-10-26'),
          start: new Date('2017-07-10'),
        },
        employerName: 'braze (formerly appboy)',
        roleTitle: 'web engineer',
      },
      {
        bullets: [
          'conversion optimization, a/b testing',
          'integrating tech in the enterprise',
          'responsive vs adaptive front end development',
        ],
        dates: {
          end: new Date('2017-07-06'),
          start: new Date('2014-06-16'),
        },
        employerName: "dick's sporting goods",
        roleTitle: 'front end web developer',
      },
    ];

    return (
      <div className="App">
        <div className="App__inner">
          <Header />
          <Nav />
          <About />
          <Contact />
          <Work jobs={jobs} />
        </div>
      </div>
    );
  }
}

export default App;
