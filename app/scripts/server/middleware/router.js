import React from 'react'
import {Router} from 'express'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'

import routes from '../../routes'
import AppRoutes from '../../routes/AppRoutes'
import Html from '../../components/markup/Html'
import Route from '../../utils/Route'

const router = Router()

const renderRoutes = location => {
  const context = {}
  return ReactDOMServer.renderToString(
    <StaticRouter
      location={location}
      context={context}
    >
      <AppRoutes />
    </StaticRouter>
  )
}

const renderMarkup = (body, state, seoInfo) =>
  ReactDOMServer.renderToStaticMarkup(
    <Html
      state={state}
      {...seoInfo}
    >
      {body}
    </Html>
  )

Object.keys(routes)
.map(route => new Route(routes[route]))
.forEach(route => {
  router.get(route.path, async (req, res) => {
    const routeState = await route.onEnter(req)
    const seoInfo = await route.constructSeoInfo(req)
    const reactRoutes = renderRoutes(req.url)
    const markup = renderMarkup(reactRoutes, routeState, seoInfo.toJS())
    res.send(markup)
  })
})

export default router
