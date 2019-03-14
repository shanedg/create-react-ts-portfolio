// tslint:disable-next-line:import-name
import React from 'react';

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

export default Contact;
