import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from '../routes/appRoutes'

const serializedStores = Object.assign({}, window.SERIALIZED_STORES)

const Root = () => (
  <Router>
    <Routes serializedStores={serializedStores} />
  </Router>
)

const DOM_ELEMENT = document.getElementById('main')

ReactDOM.render(<Root />, DOM_ELEMENT)
