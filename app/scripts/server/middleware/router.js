import React from 'react'
import {Router} from 'express'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'

import routes from '../../routes'
import AppRoutes from '../../routes/AppRoutes'
import Html from '../../components/markup/Html'
import Route from '../../utils/Route'

const router = Router()

const renderRoutes = (location, routeStores) => {
  const context = {}
  return ReactDOMServer.renderToString(
    <StaticRouter
      location={location}
      context={context}
    >
      <AppRoutes serializedStores={routeStores} />
    </StaticRouter>
  )
}

const renderMarkup = (body, routeStores, seoInfo) =>
  ReactDOMServer.renderToStaticMarkup(
    <Html
      routeStores={routeStores}
      {...seoInfo}
    >
      {body}
    </Html>
  )

Object.keys(routes)
.map(route => new Route(routes[route]))
.forEach(route => {
  router.get(route.path, async (req, res) => {
    const routeStores = await route.onEnter(req)
    const seoInfo = await route.constructSeoInfo(req)
    const reactRoutes = renderRoutes(req.url, routeStores)
    const markup = renderMarkup(reactRoutes, routeStores, seoInfo.toJS())
    res.send(markup)
  })
})

export default router
