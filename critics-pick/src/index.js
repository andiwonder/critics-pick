import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import './index.css';

import Router from './Router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <Router />
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
