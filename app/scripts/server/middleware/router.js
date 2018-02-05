import React from 'react'
import {Router} from 'express'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'

import routes from '../../routes'
import AppRoutes from '../../routes/AppRoutes'
import Html from '../../components/markup/Html'
import Route from '../../utils/Route'

const router = Router()

const renderRoutes = (location, routeStore) => {
  const context = {}
  return ReactDOMServer.renderToString(
    <StaticRouter
      location={location}
      context={context}
    >
      <AppRoutes provideStore={routeStore} />
    </StaticRouter>
  )
}

const renderMarkup = (body, routeStore, seoInfo) =>
  ReactDOMServer.renderToStaticMarkup(
    <Html
      routeStore={routeStore}
      {...seoInfo}
    >
      {body}
    </Html>
  )

Object.keys(routes)
.map(route => new Route(routes[route]))
.forEach(route => {
  router.get(route.path, async (req, res) => {
    const routeStore = await route.onEnter(req)
    const seoInfo = await route.constructSeoInfo(req)
    const reactRoutes = renderRoutes(req.url, routeStore)
    const markup = renderMarkup(reactRoutes, routeStore, seoInfo.toJS())
    res.send(markup)
  })
})

export default router
