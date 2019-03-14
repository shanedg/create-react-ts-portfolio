// tslint:disable-next-line:import-name
import React from 'react';
// tslint:disable-next-line:import-name
import ReactDom from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});
