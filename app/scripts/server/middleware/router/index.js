import React from 'react'
import {Router} from 'express'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'

import {createStore} from 'src/state/store'
import routes from '../../../routes'
import AppRoutes from '../../../routes/AppRoutes'
import Html from '../../../components/markup/Html'
import { Route } from '../../../utils/routes'

const router = Router()
const store = createStore()

const matchReactRouter = ({contentInfo, req, res}) => {
  const context = {}
  const root = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <AppRoutes />
    </StaticRouter>
  )

  const html = body => (
    <Html
      state={store.getState()}
      {...contentInfo}
    >
      {body}
    </Html>
  )

  const response = ReactDOMServer.renderToStaticMarkup(html(root))
  res.send(response)
}

Object.keys(routes)
.forEach(route => {
  const routeProps = new Route(routes[route])
  const {path} = routeProps
  router.get(path, (req, res, next) => {
    Promise
    .resolve(routeProps.onEnter({store, req}))
    .then(contentInfo => matchReactRouter({contentInfo, req, res, next}))
    .catch(err => next(new Error(err)))
  })
})

export default router
