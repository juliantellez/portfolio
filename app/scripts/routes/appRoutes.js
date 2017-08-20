import _ from 'lodash'
import React from 'react'
import {Route} from 'react-router'

import serverRoutes from './serverRoutes'
import Root from 'src/components/Root'

const appRoutes = _.keys(serverRoutes).map(path => {
  const {name, className, handler} = serverRoutes[path]
  const onEnter = (nextState, replace, next) => {
    console.log('onEnter') // TODO check clientside
    next()
  }
  const onChange = (prevState, nextState, replace, next) => {
    next()
  }
  return (
    <Route
      exact
      key={name}
      name={name}
      path={path}
      className={className}
      onChange={onChange}
      onEnter={onEnter}
      component={handler.component}
    />
  )
})

const App = (
  <Root>
    {appRoutes}
  </Root>
)

export default () => App
