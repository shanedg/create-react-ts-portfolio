// tslint:disable-next-line:import-name
import React from 'react';

const Contact = (props: any) => {

  /**
   * github username
   */
  const github = <p>check out <a href="https://github.com/shanedg" target="_blank" rel="noopener noreferrer">shanedg on github</a></p>;

  /**
   * linkedin profile
   */
  const linkedin = <p>connect on <a href="https://www.linkedin.com/in/shane-garrity-ba915544" target="_blank" rel="noopener noreferrer">linkedin</a></p>;

  /**
   * email address
   */
  const email = <p>send an <a href="mailto:shanedgarrity+ws@gmail.com">email</a></p>;

  return (
    <article className="contact">
      <div className="heading">
        <h2 className="heading__title">contact</h2>
      </div>
      <section className="content">
        {github}
        {linkedin}
        {email}
      </section>
    </article>
  );
};

export default Contact;
