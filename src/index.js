import React from 'react'
import { render } from 'react-dom'

import * as serviceWorker from './serviceWorker'

import './index.css'

import App from './sites/App/'

require('dotenv').config()

render(<App />, document.getElementById('root'))
serviceWorker.unregister()
