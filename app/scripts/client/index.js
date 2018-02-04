import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from '../routes/appRoutes'

const store = Object.assign({}, window.STATE)

const Root = () => (
  <Router>
    <Routes provideStore={store} />
  </Router>
)

const DOM_ELEMENT = document.getElementById('main')

ReactDOM.render(<Root />, DOM_ELEMENT)
