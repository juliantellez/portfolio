import React from 'react'
import {Route, Switch} from 'react-router'

import routes from '../routes'
import Root from 'src/components/Root'

const appRoutes = Object.keys(routes)
.map(route => {
  const props = routes[route]
  return (
    <Route
      exact
      key={props.name}
      {...props}
    />
  )
})

const AppRoutes = () => (
  <Root>
    <Switch>
      {appRoutes}
    </Switch>
  </Root>
)

export default AppRoutes
