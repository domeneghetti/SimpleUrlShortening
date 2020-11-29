import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

library.add(faExclamationTriangle)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

