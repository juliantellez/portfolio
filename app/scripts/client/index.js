import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import routes from 'src/routes'

const App = routes.appRoutes
const Root = () => (
  <Router>
    <App />
  </Router>
)

const DOM_ELEMENT = document.getElementById('main')

ReactDOM.render(<Root />, DOM_ELEMENT)
