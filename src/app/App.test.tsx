// tslint:disable-next-line:import-name
import React from 'react';
// tslint:disable-next-line:import-name
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

it('[smoke] app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
