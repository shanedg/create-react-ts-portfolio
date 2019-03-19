// tslint:disable-next-line:import-name
import React from 'react';

const Contact = (props: any) => {

  /**
   * dev.to profile
   */
  const devTo = <p className="content__text"><a href="https://dev.to/shanedg" target="_blank" rel="noopner noreferrer" className="content__link">shanedg on dev.to</a></p>;

  /**
   * github username
   */
  const github = <p className="content__text">check out <a href="https://github.com/shanedg" target="_blank" rel="noopener noreferrer" className="content__link">shanedg on github</a></p>;

  /**
   * linkedin profile
   */
  const linkedin = <p className="content__text">connect on <a href="https://www.linkedin.com/in/shane-garrity-ba915544" target="_blank" rel="noopener noreferrer" className="content__link">linkedin</a></p>;

  /**
   * email address
   */
  const email = <p className="content__text">send an <a href="mailto:shanedgarrity+ws@gmail.com" className="content__link">email</a></p>;

  return (
    <article className="contact">
      <div className="heading">
        <h2 className="heading__title">howdy</h2>
      </div>
      <section className="content">
        {github}
        {linkedin}
        {devTo}
        {email}
      </section>
    </article>
  );
};

export default Contact;
