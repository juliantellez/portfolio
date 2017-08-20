import I from 'immutable'

class Route extends I.Record({
  path: '',
  params: new I.Record({})(),
  query: new I.Record({})(),
}) {
  static setParams (params = {}) {
    return new I.Record(params)()
  }
  static setQuery (query = {}) {
    return new I.Record(query)()
  }
}

const onSetRoute = ({content}) => {
  const {path, params, query} = content.route
  const currentPath = path || location.pathname
  const currentQuery = query || location.query
  return new Route({
    path: currentPath,
    query: Route.setParams(currentQuery),
    params: Route.setQuery(params),
  })
}

const router = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ROUTE': return onSetRoute(action)
    default: return new Route()
  }
}

export default router
