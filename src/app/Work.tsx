// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import Role from './Role';
import roles from './work.roles';

class Work extends Component<any, {readMore: boolean}> {

  constructor(props: any) {
    super(props);
    this.state = {
      readMore: false,
    };

    this.checkReadMoreOnScroll = this.checkReadMoreOnScroll.bind(this);
  }

  componentDidMount() {
    this.checkReadMoreOnScroll();

    const contentEl = document.querySelector('.work .content');
    if (contentEl) {
      contentEl.addEventListener('scroll', this.checkReadMoreOnScroll);
    }
  }

  checkReadMoreOnScroll() {
    const contentEl = document.querySelector('.work .content');
    if (contentEl) {
      const containerHeight = contentEl.clientHeight;
      const fullScrollHeight = contentEl.scrollHeight;
      const pixelsScrolled = contentEl.scrollTop;

      this.setState({
        readMore: (fullScrollHeight - pixelsScrolled) > containerHeight,
      });
    }
  }

  /**
   * @param job role data
   * @param index role index
   */
  buildRole(job: Role, index: number) {
    return (
      <Role
        key={index}
        role={job}
      />
    )
  };

  scrollLastRoleIntoView() {
    const contentContainerSelector = '.work .content';
    const lastRoleSelector = 'role:last-of-type';

    if (window) {
      const contentContainer = document.querySelector(contentContainerSelector);

      if (contentContainer) {
        const scrollBehaviorOptions: ScrollIntoViewOptions = {
          behavior: 'smooth',
        };

        const lastRole = contentContainer.querySelector(lastRoleSelector);

        (lastRole && contentContainer)
          ? lastRole.scrollIntoView(scrollBehaviorOptions)
          : null;
      }
    }
  };

  public render() {
    const builtRoles = roles.map(this.buildRole);

    return (
      <article className="work">
        <div className="heading">
          <h2 className="heading__title">jobs</h2>
        </div>
        <section className="content">
          {builtRoles}
          {
            this.state.readMore &&
            <button
              className="content__read-more"
              onClick={this.scrollLastRoleIntoView}>
              read more
            </button>
          }
        </section>
      </article>
    );
  }
};

export default Work;
