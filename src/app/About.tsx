// tslint:disable-next-line:import-name
import React from 'react';

const About = (props: any) => {
  return (
    <article className="about">
      <div className="heading">
        <h2 className="heading__title">about</h2>
      </div>
      <section className="content">
        <p>
          shane is a professional web developer with a background in:
        </p>
        <ul>
          <li>front end dev</li>
          <li>generalist work</li>
        </ul>
        <p>
          as well as experience in both enterprise and startup
          environments. he is currently based in nyc.
        </p>
      </section>
    </article>
  );
};

export default About;
