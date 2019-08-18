import React from 'react';
import { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './index.scss';

import App from './app';

require('dotenv').config();

render(<App />, document.getElementById('root'));
serviceWorker.unregister();
