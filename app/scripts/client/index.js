import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from '../routes/appRoutes'

const Root = () => (
  <Router>
    <Routes />
  </Router>
)

const DOM_ELEMENT = document.getElementById('main')

ReactDOM.render(<Root />, DOM_ELEMENT)
