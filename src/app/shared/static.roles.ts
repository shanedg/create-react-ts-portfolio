/**
 * simple resumé details
 * [todo] control this outside of code
 */
const roles: Role[] = [
  {
    employer: 'squarespace',
    title: 'software engineer',
    dates: {
      start: '2019-07-16',
      until: 'present',
    },
    highlights: [
      'make the legacy things play nice',
      'miles of Webpack config',
      'front end build tooling',
      'transpilation, compilation, perspiration, polyfills',
    ],
  },
  {
    highlights: [
      'new feature development on core product family of front end angular applications',
      'multi-tenant product configurability',
      'client product maintenance across legacy family front end angular applications',
      'internal tools for product configuration and qa',
    ],
    dates: {
      until: '2019-06-14',
      start: '2018-11-05',
    },
    employer: 'zipari',
    title: 'front end developer',
  },
  {
    highlights: [
      'Jekyll, Node, React, Vue, and WordPress front and back end applications',
      'a/b testing and personalization (Optimizely)',
      'Braze platform-driven, behavior-triggered messaging, including web push',
      'self-serve email and web push subscription management in marketing communications preference center',
      're-launch and re-brand of Braze (formerly Appboy) in November \'17',
      'seamless back end system migrations; simultaneous micro-site launches',
    ],
    dates: {
      until: '2018-10-26',
      start: '2017-07-10',
    },
    employer: 'braze (formerly appboy)',
    title: 'web engineer',
  },
  {
    highlights: [
      'AngularJS web application for ecommerce product selection',
      'ensured high availability of deals data under peak holiday traffic',
      'a/b testing and personalization (Adobe Target)',
      're-platform project user acceptance testing; management and migration of legacy content between platforms',
      'adaptive and responsive, cross-browser landing pages and other site content for promotional compaigns',
    ],
    dates: {
      until: '2017-07-06',
      start: '2014-06-16',
    },
    employer: 'dick\'s sporting goods',
    title: 'front end web developer',
  },
];

export default roles;
