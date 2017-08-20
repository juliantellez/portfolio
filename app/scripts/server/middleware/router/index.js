import _ from 'lodash'
import React from 'react'
import {Router} from 'express'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import {createStore} from 'src/state/store'
import Html from 'src/components/markup/Html'

import routes from 'src/routes'

const router = Router()
const store = createStore()

const setRouteState = ({routes, path, req}) => {
  const {handler} = routes.serverRoutes[path]
  return Promise.resolve(handler.onEnter({store, req}))
}

const matchReactRouter = ({contentInfo, routes, path, req, res, next}) => {
  const context = {}
  const App = routes.appRoutes
  const root = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  )
  const html = body => <Html state={store.getState()} {...contentInfo}>{body}</Html>
  const response = ReactDOMServer.renderToStaticMarkup(html(root))
  res.send(response)
}

_.keys(routes.serverRoutes).forEach(path => {
  router.get(path, (req, res, next) => {
    Promise
    .resolve(setRouteState({routes, path, req}))
    .then(contentInfo => matchReactRouter({contentInfo, routes, path, req, res, next}))
    .catch(err => next(new Error(err)))
  })
})

export default router
